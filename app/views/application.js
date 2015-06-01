import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    var view = $('.checkout_summary');
    view.hide();
  },
  actions:{
	},
});