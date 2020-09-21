function showmsg() {

    alert('head has been loaded');
    var li1 = document.getElementById('li1');
    li1.data = 'hello i m data';
    // li1.innerHTML = 'hello i m inner'
    alert(li1.data);
}

document.write('<h2>variable</h2></hr>');

var strName, intBalance;
strName = "charlie li";
intBalance = 1000;
strNo = '1324';
intBalance = '10006';



document.write('account name: ' + strName + '<br/>');
document.write('account id: ' + strNo + '<br/>');
document.write('balance: ' + intBalance + '<br/>');

document.write('<h2>parse data</h2></hr>');

document.write('parseInt(\'10\'): ' +
    parseInt('10') + '<br/>parseFloat(\'1.3\'):' +
    parseFloat('1.3') + '<br/>eval(\'20+4*5\')' +
    eval('20+4*5') + '<br/>typeof(\'hello\'):' + typeof ('hello'))
    ;
document.write('<h2>for loop</h2></hr>');
let l = [1, 2, 3, 4, 5, 6, 7];
for (i in l) {
    document.write('<br/> this is the output of for loop ' + i);
}
document.write('<h2>encode</h2></hr>');
encoded = escape('haha 你好啊！我是查理啊。');
decoded = unescape(encoded);

document.write('escape/unescape: URL encoding for non-English character<br/>' +
    'escape(\'haha 你好啊！我是查理啊。\'): ' + encoded +
    '<br/>unescape(\'haha 你好啊！我是查理啊。\'): ' + decoded);

document.write('<h2>call by address/ reference</h2></hr>');

var a = "hello"; var ob = new String(a); var oc = new String(a);

document.write('<br/>' +
    'var a = \'hello\';var ob = new String(a);var oc = new String(a);<br/>' +
    'a == ob ' + (a == ob) + '<br/>' +
    'a == oc ' + (a == oc) + '<br/>' +
    'ob==oc ' + (ob == oc));

document.write('<h2>object and prototype attribute</h2></hr>');


function writeInfo() {
    document.write('r: ' + this.r + '<br/>' +
        'color: ' + this.color + '<br/>' +
        'pi: ' + this.pi + '<br/>');
}

function circle(r, color) {
    this.r = r;
    this.color = color;
    this.writeInfo = writeInfo;

}

circle.prototype.pi = 3.14;
c1 = new circle(10, 'red');
c2 = new circle(30, 'blue');
c1.writeInfo()
c2.writeInfo()



document.write('<h2>html string format method</h2></hr>');


document.write("'hello'.anchor(): " + 'hello'.anchor() + "<br/>" +
    "'hello'.big(): " + 'hello'.big() + "<br/>" +
    "'hello'.blink(): " + 'hello'.blink() + "<br/>" +
    "'hello'.bold(): " + 'hello'.bold() + "<br/>" +
    "'hello'.fixed(): " + 'hello'.fixed() + "<br/>" +
    "'hello'.fontcolor('red'): " + 'hello'.fontcolor('red') + "<br/>" +
    "'hello'.fontsize(30): " + 'hello'.fontsize(30) + "<br/>" +
    "'hello'.italics(): " + 'hello'.italics() + "<br/>" +
    "'hello'.link('www.google.com'): " + 'hello'.link('www.google.com') + "<br/>" +
    "'hello'.small(): " + 'hello'.small() + "<br/>" +
    "'hello'.strike(): " + 'hello'.strike() + "<br/>" +
    "'hello'.sub(): " + 'hello'.sub() + "<br/>" +
    "'hello'.sup(): " + 'hello'.sup() + "<br/>" +
    "'hello'.charAt(3): " + 'hello'.charAt(3) + "<br/>" +
    "'hello'.charCodeAt(3): " + 'hello'.charCodeAt(3) + "<br/>" +
    "'hello'.indexOf(\'l\'): " + 'hello'.indexOf('l') + "<br/>" +
    "'hello'.lastIndexOf(\'l\'): " + 'hello'.lastIndexOf('l') + "<br/>" +
    "'hello'.substr(\'e\',2): " + 'hello'.substr('e', 2) + "<br/>" +
    "'hello'.substring(\'e\',\'o\'): " + 'hello'.substring('e', 'o') + "<br/>")

document.write('<h2>Array</h2></hr>');

var ids = new Array(5);

ids[0] = 'hello';
ids[1] = 34;

for (var i = 0; i < ids.length; i++) {
    document.write(ids[i]);
}
document.write('<br/>');
var uids = new Array('charlie', 'molly', 'raymond', 'chu');
for (var i in uids) {
    document.write(i + '<br/>');
    document.write(uids[i]);
}

document.write('<h2>Date</h2></hr>');

var dt = new Date();

var systemDate = dt.getFullYear() + ':' + (dt.getMonth() + 1) + ':' + (dt.getDate() + 1);
document.write('system date ' + systemDate);
