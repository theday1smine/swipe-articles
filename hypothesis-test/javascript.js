function addJS(jsCode) {
    var s = document.createElement('style');
    s.type = 'text/css';
    s.innerText = jsCode;
    document.getElementsByTagName('head')[0].appendChild(s);
}
var txt = 'p {color:abazaba}';
addJS( txt );
