import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {},

  mouseX: 0, 
  mouseY: 0,
  click: function(e){},

  mouseEnter: function(e){
    var obj = this;
    console.log(e);
      // $(document).mousemove(function(event) {
      //   obj.set('mouseY', event.pageX);
      //   obj.set('mouseX', event.pageY);
      // });
  },

  actions:{
    itemAnimation: function(product){
      var object = this;
    

      var cart = $('.shopping-cart');
        // var imgtodrag = arguments[0].target.parentElement.parentElement.parentElement.children[0].children[1];
       var imgtodrag = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))
      imgtodrag.attr('src', product.get('image'));
    
      imgtodrag = $(imgtodrag);
      if (imgtodrag) {
          var imgclone = imgtodrag.clone()
              .offset({
              top: this.get('mouseX') - 75,
              left: this.get('mouseY') - 75
          });
          imgclone.css({
              'opacity': '0.5',
                  'position': 'absolute',
                  'height': '150px',
                  'width': '150px',
                  'z-index': '1050'
          });
          imgclone.appendTo($('body'));
          imgclone.animate({
              'top': cart.offset().top - 30,
                  'left': cart.offset().left,
                  'width': 75,
                  'height': 75
          }, 1000, 'easeInOutExpo');
          
          var object = this;
          setTimeout(function () {
            var intShakes = 2, intDuration = 200, intDistance = 30;
            cart.css("position","relative"); 
            for (var x=1; x<=intShakes; x++) {
                cart.animate({left:(intDistance*-1)}, (((intDuration/intShakes)/4)))
                .animate({left:intDistance}, ((intDuration/intShakes)/2))
                .animate({left:0}, (((intDuration/intShakes)/4)));
            }
            object.get('controller').send('saveToStorage', product);
          }, 1000);

          imgclone.animate({
              'width': 10,
              'height': 10
          }, function () {
              $(this).detach();
          });
      }




      //
      // 

     // this.get('controller').send('saveToStorage', product);
    },
  },
});