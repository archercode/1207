import Ember from 'ember';
export default Ember.Route.extend({

	queryParams: {
    query: {
      refreshModel: true
    }
  },
	
	beforeModel: function(){
	 //return new Ember.RSVP.Promise(function (resolve, reject) {
     // 	  setTimeout(function () {resolve({});}, 5000);
     // });
	},
	model:function(params){
		if (!params.query) {
				return [];
    	}
	  	var regex = new RegExp(params.query,'i');
	    return this.store.find('product').then(function(products){
	    	var arr = products.filter(function(product) {
	     	 	return regex.exec(product.get('title')); 
	     	});
	    	return arr;
	    });
	},

	actions:{
		loading: function() {
        	return true;
      },
	},
});