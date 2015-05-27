import Ember from 'ember';
export default Ember.ObjectController.extend({
	//itemCount: Ember.computed.oneWay('title.length'),
	// activeButton: true,
 //  sample: function(){
 //    return this.get('itemCount').get('length');
 //  }.property('itemCount','length'),
	actions:{
		addItem: function(product){
			//this.notify.info(this.get('model').get('title'));
      
		var store = this.store;
			product = this.get('model');
      		
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
           			var item = store.createRecord('item', {
		                title: product.get('title'),
						        image: product.get('image'),
						        price: product.get('price'),
                    quantity: 1,
  						      item: product.get('title'),
                });
           			product.get('items').addObject(item);
                
            }
             item.save();
      		});
		},
		minusItem: function(product){
			//var store = this.store;
			product = this.get('model');
      		this.store.find('item').then(function(items){
		        return items.find(function(item){
		          return item.get('title') === product.get('title');
		        });
		    }).then(function(item){
        		if (item){
	          		item.decrementProperty('quantity');      		
        			if (item.get('quantity') === 0){
        				item.deleteRecord();
        			}
        		} /*else {
        			console.log('first iteration');
           			var item = store.createRecord('item', {
		                title: product.get('title'),
						image: product.get('image'),
						price: product.get('price'),
  						quantity: 1,
  						item: product.get('title'),
                });
           			product.get('items').addObject(item);
            		
        		}
        		*/
            		item.save();
      		});
		},
	}
});