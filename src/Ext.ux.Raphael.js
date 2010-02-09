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
    },
    
    getPaper: function(){
    	return this.paper;
    },
    
    createShape: function(shape, x, y, w, h, r, d){
    
    	if (Ext.isObject(shape)){
    		// cmp.createShape({shape:'square', x:290, y:80, w:60, h:40, r:10});
    		var s = shape;
    		this['create'+s.shape.substr(0,1).toUpperCase()+s.shape.substr(1,s.shape.length)]({x:s.x, y:s.y, w:s.w, h:s.h, r:s.r, params:s.params});
    	} else if (Ext.isArray(shape)){
    		Ext.each(shape, function(s){
    			this['create'+s.shape.substr(0,1).toUpperCase()+s.shape.substr(1,s.shape.length)]({x:s.x, y:s.y, w:s.w, h:s.h, r:s.r, params:s.params});
    		}, this);
    	} else {
    		// cmp.createShape('square', 300, 90, 70, 50, 10);
    		this['create'+shape.substr(0,1).toUpperCase()+shape.substr(1,shape.length)]({x:x, y:y, w:w, h:h, r:r, params:d});
    	}
    	
    },
    
    createSquare: function(c){
    	this.getPaper().rect(c.x, c.y, c.w, c.h, c.r);
    },
    
    createEllipse: function(c){
    	this.getPaper().ellipse(c.x+c.w, c.y+c.w, c.w, c.h);
    },
    
    createCircle: function(c){
    	this.getPaper().ellipse(c.x+c.r, c.y+c.r, c.r, c.r);
    }
    
});