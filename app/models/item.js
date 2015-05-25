import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  image: DS.attr('string'),
  price: DS.attr('number'),
  quantity: DS.attr('number'),
  product:DS.belongsTo('product'),
  subtotal: function(){
    return this.get('quantity') * this.get('price');
  }.property('quantity', 'currentprice'),
});
