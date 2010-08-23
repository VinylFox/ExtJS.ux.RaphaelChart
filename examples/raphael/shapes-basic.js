/**
 * @author Shea
 */

Ext.onReady(function(){

    Ext.QuickTips.init();

    var pnl = new Ext.Panel({
        title       : 'Raphael Shapes',
        renderTo    : 'test',
        width       : 640,
        height      : 480,
        border      : false,
        frame       : true,
        items       : [new Ext.ux.Raphael({id:'shape'})],
        buttons     : [{
            text    : 'Square',
            handler : function(){
                Ext.getCmp('shape').createShape({shape:'square', x:290, y:80, w:60, h:60, r:2});
            }
        },{
            text    : 'Circle',
            handler : function(){
                Ext.getCmp('shape').createShape({shape:'circle', x:290, y:150, r:30});
            }
        },{
            text    : 'Ellipse',
            handler : function(){
                Ext.getCmp('shape').createShape({shape:'ellipse', x:290, y:210, w:30, h: 20});
            }
        }]
    });
    
 });