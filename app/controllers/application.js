import Ember from 'ember';

export default Ember.ObjectController.extend({	
	  q: Ember.computed.mapBy('model','quantity'),
  	count: Ember.computed.sum('q'),
     
    actions: {
  		// showCartSummary: function(){
  		// 	//TODO: jquery show
  		// 	var view = $('.checkout_summary');
  		// 	//if(view.get(''))	
  		// 	view.toggle();
  		// },
      turnItUp: function(){
        console.log('dummy called');
      },
  		removeItem: function(){
        //console.log(item.get('title'));
        this.set('quantity',0);
        var item = this.get('model');
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