import Ember from 'ember';

export default Ember.ObjectController.extend({
  queryParams: ['query'],
  query: null,
  queryField: Ember.computed.oneWay('query'),
  noResultField: null,
  isEmptyField: function(){
    return Ember.isEmpty(this.get('queryField'));
  }.property('queryField'),
  actions: {
    search: function() {
      var trim = this.get('queryField');
        trim = trim.substring(0, trim.length - 1);
      this.set('query', trim);
      this.set('noResultField', this.get('queryField'));
      //this.set('queryField', '');

    }
  },
});
