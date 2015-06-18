import Ember from 'ember';
import MixinUrl from '../mixins/mixin-url';
export default Ember.ObjectController.extend(MixinUrl, {
 isTitlePH: function(){
      var model = this.get('model');
      var title = model.get('title');
    return title.concat(' Philippines');
 }.property('title'),
 mouseX: null,
 mouseY: null,

	actions:{
    fbClick: function(link){
    console.log('fbClick'); 
    var page = "http://www.facebook.com/share.php?u=link&title='Rockin' Circuits";   
window.open(page,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'); 
    },
    twitterClick: function(link){ 
var page = "http://twitter.com/home?status='Rockin Circuits'+link";   
window.open(page,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'); 
    },
    gplusClick: function(link){ 
var page = "https://plus.google.com/share?url=link";   
window.open(page,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'); 
    },
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