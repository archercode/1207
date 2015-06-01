import Ember from 'ember';
export default Ember.Route.extend({
	beforeModel: function(){
		 // return new Ember.RSVP.Promise(function (resolve, reject) {
   //   	  setTimeout(function () {resolve({});}, 5000);
   //   });
	},
	model:function(){
		return this.modelFor('products');
	},
	actions:{
		loading: function() {
        	return true;
      },
	},

});