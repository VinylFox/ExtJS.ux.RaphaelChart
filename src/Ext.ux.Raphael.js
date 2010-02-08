/**
 * @author Nigel White
 */
Ext.ux.Raphael = Ext.extend(Ext.BoxComponent, {
    onRender: function(ct) {
        var p = this.paper = Raphael(ct.dom), v;
        this.el = Ext.get(p.canvas);

        /**
         * Export all methods from this paper object which will not override our native
         * methods like setSize etc.
         */
        for (var prop in p) {
            v = p[prop];
            if (!this[prop] && Object.prototype.hasOwnProperty.call(p, prop) && Ext.isFunction(v)) {
                this[prop] = v.createDelegate(p);
            }
        }

        // We always cache our size
        this.cacheSizes = true;
    },

    getWidth: function() {
        return this.lastSize.width;
    },

    getHeight: function() {
        return this.lastSize.height;
    },

    onResize: function(w, h) {
        this.paper.setSize(w, h);
    }
});