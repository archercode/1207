import Ember from 'ember';
export default Ember.ObjectController.extend({
	//itemCount: Ember.computed.oneWay('title.length'),
	// activeButton: true,
 //  sample: function(){
 //    return this.get('itemCount').get('length');
 //  }.property('itemCount','length'),
 isTitlePH: function(){
      var model = this.get('model');
      var title = model.get('title');
    return title.concat(' Philippines');
 }.property('title'),
 mouseX: null,
 mouseY: null,

	actions:{
    fbClick: function(){
      console.log("fb clikc");

      //http://www.facebook.com/share.php?u=[URL]&title=[TITLE]
var page = "http://www.facebook.com/share.php?u=www.google.com&title='Rockin' Circuits"; 
//onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"
 
window.open(page,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
/*var dialog = Ember.$('#modal-overlays')//<div></div>')
               .html('<iframe style="border: 0px; " src="' + page + '" width="100%" height="100%"></iframe>')
               .dialog({
                   autoOpen: false,
                   modal: true,
                   height: 625,
                   width: 500,
                   title: "Some title"
               });
dialog.dialog('open');*/
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