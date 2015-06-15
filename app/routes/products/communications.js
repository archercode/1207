import Ember from 'ember';
export default Ember.Route.extend({
	model:function(){
		return this.modelFor('products').filterProperty('type', 'communications');
	},
	
	renderTemplate: function(controller){
		this.render('products/index', {controller: controller});
	}
	
});