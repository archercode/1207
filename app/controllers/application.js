import Ember from 'ember';

export default Ember.ObjectController.extend({	
	  sum: Ember.computed.mapBy('model', 'quantity'),
  	count: Ember.computed.sum('sum'),  	
  	actions: {
  		// showCartSummary: function(){
  		// 	//TODO: jquery show
  		// 	var view = $('.checkout_summary');
  		// 	//if(view.get(''))	
  		// 	view.toggle();
  		// },
  		removeItem: function(){
    		
        var item = this.get('model');
  			item.deleteRecord();
  			item.save();
  		},
  	}
});