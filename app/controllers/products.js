import Ember from 'ember';

export default Ember.ArrayController.extend({
		actions:{
			saveToStorage:function(product){
				//console.log('saveToStorage', products.get('title'));
				this.send('addItem', product);
			},
			addItem: function(product){
				//this.notify.info(this.get('model').get('title'));
	      
			var store = this.store;
				//product = this.get('model');
	      		
	      		this.store.find('item').then(function(items){
			        return items.find(function(item){
			          return item.get('title') === product.get('title');
			        });
			    }).then(function(item){
	        		if (item){
		          		item.incrementProperty('quantity');
	                item.save();
	        		} else {
	        			console.log('first iteration');
	           			var newitem = store.createRecord('item', {
			                title: product.get('title'),
							        // image: product.get('image'),
							        price: product.get('price'),
	                    quantity: 1,
	  						      item: product.get('title'),
	                });
	           			product.get('items').addObject(newitem);
	                
	                    newitem.save();
	            }
	      		});
			},
	},
});
