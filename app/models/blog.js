import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  image: DS.attr('string'),
  descrition: DS.attr('string'),
  slug: function() {
    	return this.get('title').replace(/\s+/g, '-').concat('-philippines').toLowerCase();
  	}.property('title'),
});
