import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
  	console.log("checkout_summary didInsertElement");
    $('.checkout_summary').hide();
  }
});