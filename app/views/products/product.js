import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
  	console.log("didInsertElement product specific");

  	//todo: minimize navbar

  	var navTexts = this.$(".nav_text");
  	for(var i = 0; i < navTexts.length; i++){//text in navTexts){
  		navTexts[i].hide();
  	}

  },
});