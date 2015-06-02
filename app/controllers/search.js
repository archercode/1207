import Ember from 'ember';

export default Ember.ObjectController.extend({
  dummy: 0,

  didInsertElement: function(){
  	debugger;
  },


  count: function() {
   // console.log(this);
    return this.get('length');
  }.property('length'),
  
  queryParams: ['query'],
  query: null,
  
  queryField: Ember.computed.oneWay('query'),
  actions: {
    search: function() {
      this.set('query', this.get('queryField'));
      this.set(this.get('queryField'), '');
    }
  }
});
