import Ember from 'ember';

export default Ember.ArrayController.extend({
		actions:{
		addItem: function(){
			//this.notify.info(this.get('model').get('title'));
			return;
			var store = this.store;
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
      		
      		this.store.find('item').then(function(items){
		        return items.find(function(item){
		          return item.get('title') === product.get('title');
		        });
		    }).then(function(item){
        		if (item){
	          		item.incrementProperty('quantity');
	          		item.save();
        		} else {
           			var item = store.createRecord('item', {
		                title: product.get('title'),
						image: product.get('image'),
						price: product.get('price'),
  						quantity: product.get('quantity'),
                });
            		item.save();
            		
        		}
      		});

		},
		/*
		editTodo: function(){
			this.set('isEditing', true);
		},
		acceptChanges:function(){
			this.set('isEditing', false);
			if (Ember.isEmpty(this.get('model.title'))){
				this.send('removeTodo');
			}	else {
				this.get('model').save();
			}
		},
		removeTodo:function(){
			var todo = this.get('model');
			todo.deleteRecord();
			todo.save();
		}*/
	},
});
