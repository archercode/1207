import Ember from 'ember';

export default Ember.View.extend({
  actions:{
	},
	mouseEnter:function(){
     //this.get('controller').send('hover', this.get('context'));
  	console.log('mouseEnter');
  },
   mouseLeave: function(){
  	console.log('mouseLeave');
  },
});