import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
  	console.log("checkout_summary didInsertElement");
    this.$('.checkout_summary').hide();
  }
});