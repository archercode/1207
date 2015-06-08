import Ember from 'ember';

export default Ember.Route.extend({
	actions:{
		loading: function() {
        	//var view = this.container.lookup('view:loading').append();
     	//		 this.router.one('didTransition', view, 'destroy');
        	return true;
      },
	},
	beforeModel: function(){
    //  	 return new Ember.RSVP.Promise(function (resolve, reject) {
    //  	   setTimeout(function () {resolve({});}, 3000);
    // });
  
	},

	model: function(){
		return	this.store.find('item');
	},
    
});