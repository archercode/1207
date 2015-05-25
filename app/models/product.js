import DS from 'ember-data';

var Product = DS.Model.extend({
  	title: DS.attr('string'),
  	price: DS.attr('number'),
  	model: DS.attr('string'),
  	// quantity: DS.attr('number'),
  	description: DS.attr('string'),
  	type: DS.attr('string'),
  	image: DS.attr('string'),
  	items: DS.hasMany('item',{async:true}),
  	
	itemsCount: function() {
        var firstItem = this.get('items.firstObject');
       	if (firstItem === undefined)
       		return 0;
        return firstItem.get('quantity');
	}.property('items.firstObject.quantity'),

  	slug: function() {
    	return this.get('title').replace(/\s+/g, '-').concat('-philippines').toLowerCase();
  	}.property('title'),
});

Product.reopenClass({
	FIXTURES:[
		{
			id: 1,
			title: 'URM37 V4.0 Ultrasonic Sensor',
			price: 400,
			model: '10xx10',
			description: 'This module help you to detect the light density and reflect the analog voltage signal back to Arduino controller. You can set the threshold of voltage level to trig other unit on Arduino project',
			type: 'boards',
			image: '/DFR0009.jpg'
		},
		{
			id: 2,
			title: 'DS18B20 Temperature Sensor',
			price: 500,
			model: '20xx10',
			description: 'This module help you to detect the light density and reflect the analog voltage signal back to Arduino controller. You can set the threshold of voltage level to trig other unit on Arduino project',
			type:'sensors',
			image: '/DFR0017.jpg'
		},
		{
			id: 3,
			title: 'Analog Ambient Light Sensor',
			price: 900,
			model: '30xx10',
			description: 'This module help you to detect the light density and reflect the analog voltage signal back to Arduino controller. You can set the threshold of voltage level to trig other unit on Arduino project',
			type: 'robotics',
			image: '/DFR0024.jpg'
		},
	]
});

export default Product;
