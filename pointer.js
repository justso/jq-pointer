/*
 *  List the pivotal choices for debugging
 *  Show the depth stack @ fixed position in upper right
 *
 *  global namespace -- declare nothing out here
 *
 *  dependancies:
 *      jq.drt-extend.js
 */

var Pointer = {
    divs : [],
    init : function(){
        var me = Pointer;
        $.loadCssFor('pointer');
        me.div = $('<div id="Pointer">').appendTo('body');
    },
    /**
     * Add placard to floating list
     * @param idx {number} position in list
     * @param str {string} milestone text
     */
    add : function(idx, str){
        var newDiv = $('<div class="Pointer">').text(str)
        ,   num = this.divs.length
        ,   i = num;
        if (idx >= num) // not created yet
            for (; i <= idx; i++) // make enough up to including idx
                this.divs[i] = $('<div>').appendTo(this.div);
        this.divs[idx].replaceWith(newDiv);
        this.divs[idx] = newDiv;
    }
}
$(Pointer.init);
