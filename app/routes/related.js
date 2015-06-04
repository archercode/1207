import Ember from 'ember';
export default Ember.Route.extend({
  
	model:function(){
		console.log('related model');
		return this.modelFor('products').filterProperty('type', 'boards');
	},
  /*
 	renderTemplate: function(){
        this.render('name', {
        into: 'product',
        outlet: 'sidebar',
        
        //controller: modalController 
      });
	},
	*/
	actions:{
		loading: function() {
        	return true;
      },
	},
});

// 
/*
renderTemplate: function() {
    this.render('favoritePost', {   // the template to render
      into: 'posts',                // the template to render into
      outlet: 'posts',              // the name of the outlet in that template
      controller: 'blogPost'        // the controller to use for the template
    });
*/

