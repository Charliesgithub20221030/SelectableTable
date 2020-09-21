# Selectable Table server

## Usage

#### set the global variable
```
# linux/ mac
export FLASK_APP=app.py

# windows
## cmd
set FLASK_APP=app.py
## ps
$env:FLASK_APP = "app.py"
```

#### run it using **flask** command or **python -m flask**
```
# flask command
flask run
# python
python -m flask run
```

##### for public use
```
flask run --host=0.0.0.0
```

### Development 

Variable rule
```python=

@app.route('/user/<username>')
def show_user_profile(username):
    # show the user profile for that user
    return 'User %s' % escape(username)

@app.route('/post/<int:post_id>')
def show_post(post_id):
    # show the post with the given id, the id is an integer
    return 'Post %d' % post_id
```
- string
(default) accepts any text without a slash
- int
accepts positive integers
- float
accepts positive floating point values
- path
like string but also accepts slashes
- uuid
accepts UUID strings