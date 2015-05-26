import Ember from 'ember';

export default Ember.ArrayController.extend({
	actions:{
		addItem: function(){
			console.log('index');
			//this.notify.warning(product.get('title') + ' was added to cart');
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
