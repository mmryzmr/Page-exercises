
/*(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        clientWidth = '',
        recalc = function() {
            clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            console.log("ddd",clientWidth);
            docEl.style.fontSize = (clientWidth / 7.5) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);*/
/*$(function () {
    var html=document.querySelector('html');
    var rem=html.offsetWidth/7.5;
    html.style.fontSize=rem+"px";
});*/
;(function(win,doc){
    var html = document.querySelector('html');
    var rem = html.offsetWidth / 7.5; //设计稿多大，写多大，获得的html的字体大小是100px
    html.style.fontSize = rem + "px";
    win.addEventListener('resize',function(){
        var html = document.querySelector('html');
        var rem = html.offsetWidth / 7.5;
        html.style.fontSize = rem + "px";
    },false);
})(window,document);
