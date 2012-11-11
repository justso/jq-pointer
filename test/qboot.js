/* -VERSION-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- *
 *  :qunit/qboot.js  ^  dvdrtrgn  ^  2012-02
* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
function clog() {
    if (window.dbug === 0) return;
    if (!arguments.length) return !tryConsole.dumb;
    var args = Array.prototype.slice.call(arguments);
    tryConsole.log.apply(tryConsole, args);
    if (window.dbug === 9) document.write(args.join('<br>'));
};
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
function tryConsole(){
    if ($.browser.msie || !window.console){
        return {
            log:$.noop,info:$.noop,error:$.noop,warn:$.noop,dumb:true
        };
    } else return console;
}
(function(x){tryConsole=tryConsole();clog('BOOT',x)})([123]);
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
jQuery(function(){
    jQuery('body').append('<h1 id="qunit-header">'+document.title+'</h1>'   +
        '<h2 id="qunit-banner"></h2><div id="qunit-testrunner-toolbar">'    +
        '<a target="_blank" href="http://docs.jquery.com/QUnit">Docs</a>'   +
        ' </div><h2 id="qunit-userAgent"></h2><ol id="qunit-tests"></ol>'   +
        '<div id="qunit-fixture"></div>');
});
module("BOOT");test('empty',function(){equal(2+2,4,'duh 2+2')});
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
