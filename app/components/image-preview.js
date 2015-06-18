import Ember from 'ember';

export default Ember.Component.extend({
	layoutName: 'components/image_preview',
  classNames: ['image-preview-component'],
  height: 305,
  width: 480,

  mouseMove: function(e) { 
    var offset = Ember.$(e.currentTarget.children[0]).offset();
    var mouseX = e.clientX-offset.left;
    var mouseY = e.clientY-offset.top;

    var width = e.currentTarget.children[0].scrollWidth;
    var height = e.currentTarget.children[0].scrollHeight;

    if (mouseX > 0 && mouseX < width &&
        mouseY > 0 && mouseY < height){
      this.setProperties({ mouseX: mouseX, mouseY: mouseY});
    }
    else{
      this.setProperties({ mouseX: null, mouseY: null});
    }
  },
  mouseEnter:function(){
     console.log('mouseEnter');
    var view = Ember.$('#zoomed_img ');
        //if(view.get(''))  
        view.toggle();
  },
   mouseLeave: function(){
    console.log('mouseLeave');
    var view = Ember.$('#zoomed_img');
        //if(view.get(''))  
        view.toggle();
  },
});
