from flask import Flask, url_for, render_template, request, jsonify
from markupsafe import escape

app = Flask(__name__)


@app.route("/")
@app.route("/<username>")
def index(username=None):
    return render_template("index.html", username=username)


@app.route("/login")
def login():
    return "welcome login"


@app.route("/user/<username>")
def profile(username):
    return "%s's profile" % (escape(username))


@app.route("/404")
def error():
    return render_template("error.html")


@app.route("/data")
def data_api():

    response = jsonify({"firstdata": "i am the first data"})
    return response


with app.test_request_context():
    print(url_for("index"))
    print(url_for("login"))
    print(url_for("login", next="/"))
    print(url_for("profile", username="charlie"))
