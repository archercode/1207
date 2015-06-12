import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return	this.store.find('item');
	},
	actions:{
		loading: function() {
	        return true;
	    },
     	error: function() {
      		this.transitionTo('catchall', 'application-error');
    	},
	},
    
});