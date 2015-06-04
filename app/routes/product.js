import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		console.log('product model');
		
		var products = this.modelFor('products');
    	return products.findBy('slug', params.product_slug);	
	},

  	serialize: function(model){
    	return {product_slug: model.get('slug')};
 	},

 	renderTemplate: function(){
	    this.render();
        var modalController = this.controllerFor('related');
	    this.render('related',{
	      into: 'product',
	      outlet: 'sidebar',
          model: this.modelFor('products'),
          //controller: 'related',
          controller: modalController 

	  });
  	},
 	

});