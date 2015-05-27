import Ember from 'ember';

export default Ember.ObjectController.extend({	
	  q: Ember.computed.mapBy('model','quantity'),
  	count: Ember.computed.sum('q'),
    /*function(){
      var data = this.get('q');
      var total = 0
      for(var i = 0; i < data.length; i++){
        total += parseInt(data[i],10);
      }
      return total;
    }.property('q'),*/
    itemCounter: function() {
   // console.log(this);
    return this.get('length');
  }.property('length'),
     
    actions: {
  		// showCartSummary: function(){
  		// 	//TODO: jquery show
  		// 	var view = $('.checkout_summary');
  		// 	//if(view.get(''))	
  		// 	view.toggle();
  		// },
  		removeItem: function(){
        var item = this.get('model');
        item.set('quantity', 0);
  			//item.deleteRecord();
  			//item.save();
        item.destroyRecord();
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