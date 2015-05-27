import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    var view = this;
    console.log('products elements'); 
  },

  actions:{
    click: function(){
    console.log('products click'); 
    }
  },

 click: function(event) {
    console.log(event);
    return false;
  },
});