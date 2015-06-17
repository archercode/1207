import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {},
  getParent: 0,
  mouseX: 0, 
  mouseY: 0,

  actions:{
    itemAnimation: function(product){

      var object = this;
      var cart = Ember.$('.shopping-cart');
      var imgtodrag = this.$('<img id="dynamic">'); 
      imgtodrag.attr('src', product.get('image'));
    
      imgtodrag = this.$(imgtodrag);
      if (imgtodrag) {
          var imgclone = imgtodrag.clone()
              .offset({
              top: event.pageY,//screenY,//offsetTop,
              left: event.pageX//screenX//offsetLeft
          });
          imgclone.css({
              'opacity': '0.5',
                  'position': 'absolute',
                  'height': '150px',
                  'width': '150px',
                  'z-index': '1050'
          });
          imgclone.appendTo(Ember.$('body'));
          imgclone.animate({
              'top': cart.offset().top + 20,
                  'left': cart.offset().left,
                  'width': 75,
                  'height': 75
          }, 1000, 'easeInOutExpo');
          
          object = this;
          
          setTimeout(function () {
            var intShakes = 2, intDuration = 200, intDistance = 30;
            cart.css("position","relative"); 
            for (var x=1; x<=intShakes; x++) {
                cart.animate({left:(intDistance*-1)}, (((intDuration/intShakes)/4)))
                .animate({left:intDistance}, ((intDuration/intShakes)/2))
                .animate({left:0}, (((intDuration/intShakes)/4)));
            }
            object.get('controller').send('saveToStorage', product);
            var view = Ember.$('.checkout_summary');
            if (!view.is(':visible')){
              view.toggle();
            }
          }, 1300);

          imgclone.animate({
              'width': 10,
              'height': 10
          }, function () {
              Ember.$(this).detach();
          });
      }
    },
  },
});