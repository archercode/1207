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
		if (!params.query) {
      	//	return []; // no results;
      		console.log('model is empty');
				return this.store.find('product');
    	}

		  console.log('!empty', params.query);
		  //var regex = new RegExp(this.get('queryField'), 'i');
  		  var regex = new RegExp(params.query,'i');
  		  console.log(regex);

  		  return this.store.find('product').filter(function(product) {
  		  	//console.log('product', product.get('title');
     	 	return regex.exec(product.title); });
	

	/*CLOSEST Solution i can find over the net */
	/*
	searchResult: function(){
		var searchTerm = this.get('searchTerm');
		var regExp = new RegExp(searchTerm,'i');
		this.get('model').set('content',this.store.filter('todo',function(item){
			return regExp.test(item.get('title'));
		}));
	}.observes('searchTerm')
	*/
	/* */
	},

	actions:{
		loading: function() {
        	return true;
      },
	},
});