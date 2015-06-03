import Ember from 'ember';
export default Ember.Route.extend({
	model:function(){
		this.transitionTo('contact.hire-us');
	},
	actions:{
		loading: function() {
        	return true;
      	},
	},

});