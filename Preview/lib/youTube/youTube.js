if (!window['YT']) {
var YT = {};
}
if (!YT.Player) {
(function(){
var s = 'lib/youTube/playerapi.js';
var a = document.createElement('script');
a.src = s;
a.async = true;
var b = document.getElementsByTagName('script')[0];
b.parentNode.insertBefore(a, b);
})();
}