import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
  	console.log("didInsertElement product specific");

  	//todo: minimize navbar

  	var navTexts = $(".nav_text");
  	for(text in navTexts){
  		text.hide();
  	}

  },
});