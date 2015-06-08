import Ember from 'ember';

export default Ember.ObjectController.extend({	
	  hasQuantity: Ember.computed.mapBy('model','quantity'),
  	count: Ember.computed.sum('hasQuantity'),

    hasSubtotal: Ember.computed.mapBy('model','subtotal'),
    subTotal: Ember.computed.sum('hasSubtotal'),
     
    actions: {
  		showCartSummary: function(){
  			//TODO: jquery show
  			var view = Ember.$('.checkout_summary');
  			//if(view.get(''))	
  			view.toggle();
  		},
      showSocialLinks: function(){
        //TODO: jquery show
        var view = Ember.$('.social_links');
        //if(view.get(''))  
        view.toggle();
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