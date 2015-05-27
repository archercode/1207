import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    var view = this;
    console.log('didInsertElement'); 
  },
  actions:{
	  cl: function(){
	 	 console.log('did click'); 
      this.get('controller').send('turnItUp');
	  }
	},

 click: function(event) {
    // console.log(event);
    // console.log(event);
    // console.log(event);
    return false;
  },
});