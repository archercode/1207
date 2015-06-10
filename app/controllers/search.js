import Ember from 'ember';

export default Ember.ObjectController.extend({
  queryParams: ['query'],
  query: null,
  queryField: Ember.computed.oneWay('query'),
  isEmptyField: function(){
    return Ember.isEmpty(this.get('queryField'));
  }.property('queryField'),
  actions: {
    search: function() {
      this.set('query', this.get('queryField'));
    }
  },
});
