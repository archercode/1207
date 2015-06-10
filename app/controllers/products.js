import Ember from 'ember';

export default Ember.ArrayController.extend({
		actions:{
			saveToStorage:function(product){
				this.send('addItem', product);
			},
			addItem: function(product){	      
			var store = this.store;
	      		this.store.find('item').then(function(items){
			        return items.find(function(item){
			          return item.get('title') === product.get('title');
			        });
			    }).then(function(item){
	        		if (item){
		          		item.incrementProperty('quantity');
	                item.save();
	        		} else {
	           			var newitem = store.createRecord('item', {
			                title: product.get('title'),
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
