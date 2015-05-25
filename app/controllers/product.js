import Ember from 'ember';
export default Ember.ObjectController.extend({
	isModalShown: true,
	itemCount: Ember.computed.oneWay('items.length'),
	
	// itemCount: function() {
 	//        // Here is where i go wrong, i can get the length of spreads, but not access a spread to get the page length.
 	//        var spreadsLength = this.get('items.length');

 	//        var firstSpread = this.get('items').objectAt(0);
 	//        // var firstSpread = this.get('spreads.firstObject'); // elegant way to first Object

 	//        var firstSpread = this.get('model').get('items.firstObject');
 	//        return firstSpread.get('quantity');//firstSpread.get('quantity.length');
 	//    }.property('model.items.firstObject.quantity'),
	
	actions:{
		addItem: function(product){
			this.notify.info(this.get('model').get('title'));
			/////////
			// below code is doing partially. it double the saving to the local storage
			// var product = this.get('model'),
	  		// item = this.store.createRecord('item', {
	  		// item:  this.get('title')
   			//  })
      		//product.get('items').addObject(item);
      		console.log('bag added');
      		//item.save();
      		
			//return;

			var store = this.store;
			product = this.get('model');
			/*
		    this.store.find('product').then(function(items){
		        return items.find(function(item){
		          return item.get('title') === product.get('title');
		        });
		    }).then(function(item){
        		if (item){
	          		item.incrementProperty('quantity');
	          		item.save();
        		}
      		});
			*/
      		
      		this.store.find('item').then(function(items){
		        return items.find(function(item){
		          return item.get('title') === product.get('title');
		        });
		    }).then(function(item){
        		if (item){
	          		item.incrementProperty('quantity');
	          		//item.incrementProperty('product');
	          		//this.get('model').get('items').addObject(item);
	          		//product.get('items').addObject(product.get('title'));
	          		console.log('second iteration');

	          		/*var basket = this.store.createRecord('item', {});
	          		basket.get('items').addObject(this.store.createRecord('item', {
    					item: product.get('title');
					}));*/
	          		//item.save();
        		} else {
        			console.log('first iteration');
           			var item = store.createRecord('item', {
		                title: product.get('title'),
						image: product.get('image'),
						price: product.get('price'),
  						quantity: 1,
  						item: product.get('title'),
                });
           			product.get('items').addObject(item);
            		//item.save();
            		
        		}
					//product.get('items').addObject(item);
            		item.save();


      		});

		},
		// agree() {
		// 	var type = this.get('model').get('type');
  //     			this.set('isModalShown', false);
  //     		var products = 'products.' + type;
  //     			this.transitionToRoute('products');
  // 		},
	}



	
});