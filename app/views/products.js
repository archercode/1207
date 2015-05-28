import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {},

  actions:{
    itemAnimation: function(product){
     
      // animate product to cart here
      //






      //
      // 

      this.get('controller').send('saveToStorage', product);
    },
  },
});