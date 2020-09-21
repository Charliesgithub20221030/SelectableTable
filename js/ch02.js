
function showform() {
    var forms = document.forms;
    for (var f of forms) {
        document.write(f.data);
    }
}


function showlink() {
    var links = document.links;
    for (var f of links) {
        document.write(f);
    }
}

function showimage() {
    var images = document.images;
    for (var f of images) {
        document.write(f);
    }
}


function appendNodeText() {
    var parent = document.getElementById('myul');
    var node = document.createElement('li');
    node.innerHTML = 'this is new node';

    var text = document.createTextNode('this is text node');
    parent.appendChild(node);
    parent.appendChild(text);
    console.log('hello i m called');

}

function onload() {

    // get and set attribute

    var li = document.getElementById('li1');
    li.setAttribute('style', 'color:red');
    // li.removeAttribute('style');

    for (let i = 0; i < 30; i++) {
        var tn = document.createTextNode('hello ' + i);
        li.appendChild(tn);

    }

    var li2 = document.getElementById('li2');
    li2.setAttribute('style', 'color:cyan');

    for (let i = 0; i < 10; i++) {
        var ce = document.createElement('li');
        ce.innerHTML = 'i m child';
        li2.appendChild(ce);

    }

    var parent = document.getElementById('myul');

    for (let i = 0; i < 3; i++) {
        var newnode = document.createElement('li');
        newnode.innerHTML = 'new node li';
        newnode.setAttribute('style', 'color:blue');
        parent.insertBefore(newnode, li2);
        // parent.appendChild(newnode);
    }






}

