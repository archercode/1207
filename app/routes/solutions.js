import Ember from 'ember';
export default Ember.Route.extend({
	actions:{
		loading: function() {
        	return true;
      },
	},
});