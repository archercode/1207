import Ember from 'ember';
export default Ember.Route.extend({

	queryParams: {
    query: {
      // Opt into full transition
      refreshModel: true
    }
  },
	
	beforeModel: function(){
	 //return new Ember.RSVP.Promise(function (resolve, reject) {
     // 	  setTimeout(function () {resolve({});}, 5000);
     // });
	},
	model:function(params){
		//return this.modelFor('products');
		if (!params.query) {
      	//	return []; // no results;
      		console.log('model is empty');
				return this.store.find('product');
    	}

			console.log('!empty', params.query);
			//var regex = new RegExp(this.get('queryField'), 'i');
  		  var regex = new RegExp(params.query);
  		  //return this.store.findAll('product').filter(function(product) {
     	  //return regex.exec(product.title);
     	  return this.store.find('product');
    	//});
  		  ///

  		  //var searchTerm = this.get('searchTerm');
        //var regExp = new RegExp(searchTerm,'i');
        //this.get('model').set('content',this.store.filter('todo',function(item){
          //  return regExp.test(item.get('title'));
        //}));


  		  ///



	},
	actions:{
		loading: function() {
        	return true;
      },
	},
});