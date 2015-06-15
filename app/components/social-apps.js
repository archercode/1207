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
  	 var view = Ember.$('.social_links');
        //if(view.get(''))  
        view.toggle();
     var v = Ember.$('.social.header_icons'); 
        v.addClass('hide_opacity');

      /*  var view = Ember.$('.social_links_icon');
        view.toggle();*/
  },
   mouseLeave: function(){
  	 var view = Ember.$('.social_links'); 
        view.toggle();
     /*var view = Ember.$('.social.header_icons'); 
        view.toggle();*/

     var v = Ember.$('.social.header_icons'); 
        v.removeClass('hide_opacity');
  },
});
