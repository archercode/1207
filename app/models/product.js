import DS from 'ember-data';

var Product = DS.Model.extend({
  	title: DS.attr('string'),
  	price: DS.attr('number'),
  	model: DS.attr('string'),
  	description: DS.attr('string'),
  	type: DS.attr('string'),
  	image: DS.attr('string'),
  	items: DS.hasMany('item', { async:true } ),
  	
	itemsCount: function() {
        var firstItem = this.get('items.firstObject');
       	if (firstItem === undefined){
       		return 0;
       	}
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
			description: '<section><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><p> </p><p>This Motor shield  for Arduino uses L293 chip which allow to drive two 7-12V DC motors with maximum 1A current. This shield can be directly mount onto standard Arduino Duemilanove and Arduino Mega. </p><p> </p></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><p> </p><ul><li>2 way 7-12V motor drive </li><li>Up to 1A current each way</li><li>PIN 4,5,6,7 are used to drive two DC motors</li><li>Support PWM speed control </li></ul><p> </p></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><p> </p><ul><li><a href="http://www.dfrobot.com/wiki/index.php?title=Arduino_Motor_Shield_(L293)_(SKU:_DRI0001)">Manual</a></li></ul><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><p> </p><ul><li>1A Motor Shield  For Arduino  x1</li></ul></div></div></div></section></section></section>',
			type: 'boards',
			image: '/DFR0009.jpg',
			//items: [1]
		},
		{
			id: 2,
			title: 'DS18B20 Temperature Sensor',
			price: 500,
			model: '20xx10',
			description: 'This module help you to detect the light density and reflect the analog voltage signal back to Arduino controller. You can set the threshold of voltage level to trig other unit on Arduino project',
			type:'sensors',
			image: '/DFR0017.jpg',
			//items: [1]
		},
		{
			id: 3,
			title: 'Analog Ambient Light Sensor',
			price: 900,
			model: '30xx10',
			description: 'This module help you to detect the light density and reflect the analog voltage signal back to Arduino controller. You can set the threshold of voltage level to trig other unit on Arduino project',
			type: 'robotics',
			image: '/DFR0024.jpg',
			//items: [1]
		},
		{
			id: 4,
			title: 'URM37 V4.0 Ultrasonic Sensor',
			price: 400,
			model: '10xx10',
			description: '<section><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><p> </p><p>This Motor shield  for Arduino uses L293 chip which allow to drive two 7-12V DC motors with maximum 1A current. This shield can be directly mount onto standard Arduino Duemilanove and Arduino Mega. </p><p> </p></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><p> </p><ul><li>2 way 7-12V motor drive </li><li>Up to 1A current each way</li><li>PIN 4,5,6,7 are used to drive two DC motors</li><li>Support PWM speed control </li></ul><p> </p></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><p> </p><ul><li><a href="http://www.dfrobot.com/wiki/index.php?title=Arduino_Motor_Shield_(L293)_(SKU:_DRI0001)">Manual</a></li></ul><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><p> </p><ul><li>1A Motor Shield  For Arduino  x1</li></ul></div></div></div></section></section></section>',
			type: 'boards',
			image: '/DFR0009.jpg',
			//items: [1]
		},
		{
			id: 5,
			title: 'DS18B20 Temperature Sensor',
			price: 500,
			model: '20xx10',
			description: 'This module help you to detect the light density and reflect the analog voltage signal back to Arduino controller. You can set the threshold of voltage level to trig other unit on Arduino project',
			type:'sensors',
			image: '/DFR0017.jpg',
			//items: [1]
		},
		{
			id: 6,
			title: 'Analog Ambient Light Sensor',
			price: 900,
			model: '30xx10',
			description: 'This module help you to detect the light density and reflect the analog voltage signal back to Arduino controller. You can set the threshold of voltage level to trig other unit on Arduino project',
			type: 'robotics',
			image: '/DFR0024.jpg',
			//items: [1]
		},
		{
			id: 7,
			title: 'URM37 V4.0 Ultrasonic Sensor',
			price: 400,
			model: '10xx10',
			description: '<section><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><p> </p><p>This Motor shield  for Arduino uses L293 chip which allow to drive two 7-12V DC motors with maximum 1A current. This shield can be directly mount onto standard Arduino Duemilanove and Arduino Mega. </p><p> </p></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><p> </p><ul><li>2 way 7-12V motor drive </li><li>Up to 1A current each way</li><li>PIN 4,5,6,7 are used to drive two DC motors</li><li>Support PWM speed control </li></ul><p> </p></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><p> </p><ul><li><a href="http://www.dfrobot.com/wiki/index.php?title=Arduino_Motor_Shield_(L293)_(SKU:_DRI0001)">Manual</a></li></ul><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><p> </p><ul><li>1A Motor Shield  For Arduino  x1</li></ul></div></div></div></section></section></section>',
			type: 'boards',
			image: '/DFR0009.jpg',
			//items: [1]
		},
		{
			id: 8,
			title: 'DS18B20 Temperature Sensor',
			price: 500,
			model: '20xx10',
			description: 'This module help you to detect the light density and reflect the analog voltage signal back to Arduino controller. You can set the threshold of voltage level to trig other unit on Arduino project',
			type:'sensors',
			image: '/DFR0017.jpg',
			//items: [1]
		},
		{
			id: 9,
			title: 'Analog Ambient Light Sensor',
			price: 900,
			model: '30xx10',
			description: 'This module help you to detect the light density and reflect the analog voltage signal back to Arduino controller. You can set the threshold of voltage level to trig other unit on Arduino project',
			type: 'robotics',
			image: '/DFR0024.jpg',
			//items: [1]
		},
	]
});

export default Product;
