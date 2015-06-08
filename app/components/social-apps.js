import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
	    addItem: function(product) {
	    	console.log('inside component');
			this.sendAction('addItem', product);
	    }
	},
	mouseEnter:function(){
     //this.get('controller').send('hover', this.get('context'));
  	 var view = $('.social_links');
        //if(view.get(''))  
        view.toggle();
  },
   mouseLeave: function(){
  	 var view = $('.social_links');
        //if(view.get(''))  
        view.toggle();
  },
});
