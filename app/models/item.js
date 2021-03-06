import DS from 'ember-data';

var Item = DS.Model.extend({
  title: DS.attr('string'),
  // image: DS.attr('string'),
  price: DS.attr('number'),
  quantity: DS.attr('number'),
  product:DS.belongsTo('product'),
  
  subtotal: function(){
    return this.get('quantity') * this.get('price');
  }.property('quantity', 'price'),
  
});

Item.reopenClass({
	FIXTURES:[
		{
			id: 1,
			title: 'Learn Ember.js',
			// image: 'link1',
  			price: 900,
  			quantity: 0,
  			product:1,
		},
		{
			id: 2,
			title: 'hello',
			// image: 'link2',
  			price: 900,
  			quantity: 0,
  			product:1,
		},
		{
			id: 3,
			title: 'Profit!',
			// image: 'link3',
  			price: 900,
  			quantity: 0,
  			product:1,
		}
	]
});

export default Item;
