import Ember from 'ember';
export default Ember.Route.extend({
	model:function(){
		return this.modelFor('products');
	},
	actions:{
		loading: function(transition, originRoute) {
        	return true;
      },
	},
});