import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		var products = this.modelFor('products');
    	return products.findBy('slug', params.product_slug);	
	},

  	serialize: function(model){
    	return {product_slug: model.get('slug')};
 	},
});