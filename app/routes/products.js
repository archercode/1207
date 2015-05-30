import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
    	loading: function(transition, originRoute) {
      //displayLoadingSpinner();

      // Return true to bubble this event to `FooRoute`
      // or `ApplicationRoute`.
      	return true;
    	},
  	},
	beforeModel: function(){
		// return new Ember.RSVP.Promise(function (resolve, reject) {
  //   	  setTimeout(function () {resolve({});}, 5000);
  //   });
	},
	model: function(){
		return	this.store.find('product');
	},
	afterModel: function(){}
});

