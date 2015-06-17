import Ember from 'ember';

export default Ember.Component.extend({
	layoutName: 'components/image_preview',
  classNames: ['image-preview-component'],
  height: 305,
  width: 480,

  mouseMove: function(e) {
    var offset = Ember.$(e.currentTarget).offset();
    var mouseX = e.clientX-offset.left;
    var mouseY = e.clientY-offset.top;
    if (mouseX > 0 && mouseX < this.get('width') &&
        mouseY > 0 && mouseY < this.get('height')){
      this.setProperties({ mouseX: mouseX, mouseY: mouseY});
    }
    else{
      this.setProperties({ mouseX: null, mouseY: null});
    }
  },
  mouseEnter:function(){
     console.log('mouseEnter');
  },
   mouseLeave: function(){
    console.log('mouseLeave');
  },
});
