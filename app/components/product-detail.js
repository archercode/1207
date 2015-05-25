import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
	    addItem: function(product) {
	    	console.log('inside component');
			this.sendAction('addItem', product);
	    }
	}
});
