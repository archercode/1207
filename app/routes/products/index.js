import Ember from 'ember';
export default Ember.Route.extend({
	
	beforeModel: function(){
	// return new Ember.RSVP.Promise(function (resolve, reject) {
   //   	  setTimeout(function () {resolve({});}, 5000);
   //   });
	},
	model:function(){
		return this.modelFor('products');
	},
	actions:{
		loading: function() {
        	return true;
      },
	},




	
  /*
	queryParams: {
    query: {
      // Opt into full transition
      refreshModel: true
    }
  },
  
  model: function(params) {
    if (!params.query) {
      return []; // no results;
    }
    
    var regex = new RegExp(this.get('queryField'), 'i');
    return this.modelFor('products').filter(function(product) {
      return regex.exec(product.title);
    });
  }	
  */

});