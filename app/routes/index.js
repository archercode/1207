import Ember from 'ember';

export default Ember.Route.extend({
	actions:{
		loading: function(transition, originRoute) {
        	//var view = this.container.lookup('view:loading').append();
     		//this.router.one('didTransition', view, 'destroy');
        	return true;
      },
	},

	model: function(){
		// return new Ember.RSVP.Promise(function (resolve, reject) {
  //   	  setTimeout(function () {resolve({});}, 3000);
  //   	});
	},
    
});