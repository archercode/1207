import Ember from 'ember';

export default Ember.ObjectController.extend({	
	  sum: Ember.computed.mapBy('model', 'quantity'),
  	count: Ember.computed.sum('sum'), 
    //way: Ember.computed.oneWay('items.length'), 	
   
  	actions: {
  		// showCartSummary: function(){
  		// 	//TODO: jquery show
  		// 	var view = $('.checkout_summary');
  		// 	//if(view.get(''))	
  		// 	view.toggle();
  		// },
  		removeItem: function(){
        var item = this.get('model');
        //item.save();
  			item.deleteRecord();
  			item.save();
      },
      acceptChanges:function(){
        //this.set('isEditing', false);
        if (this.get('model.quantity') < 1){
           this.send('removeItem');
        } 
        else {
          this.get('model').save();
        }
        //console.log(this.value);//this.get('value')
      },
  	}
});