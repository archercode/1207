import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function(){},
	model: function(){
		return	this.store.find('product');
	},
	afterModel: function(){}
});

