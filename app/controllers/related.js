import Ember from 'ember';

export default Ember.ArrayController.extend({
	dummy: 0,
	count: function() {
    return this.get('length');
  }.property('length'),
  

});
