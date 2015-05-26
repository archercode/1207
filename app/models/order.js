import DS from 'ember-data';

var Order = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),
  streetAddress: DS.attr('string'),
  streetAddress2: DS.attr('string'),
  zip: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
});

Order.reopenClass({
	FIXTURES:[
		{
			id: 1,
			firstName: 'firstName',
 			lastName: 'lastName',
  			email: 'email',
  			phone: 'phone',
  			streetAddress: 'streetAddress',
  			streetAddress2: 'streetAddress2',
  			zip: 'zip',
  			city: 'city',
  			state: 'state',
		},
		{
			id: 2,
			firstName: 'firstName',
 			lastName: 'lastName',
  			email: 'email',
  			phone: 'phone',
  			streetAddress: 'streetAddress',
  			streetAddress2: 'streetAddress2',
  			zip: 'zip',
  			city: 'city',
  			state: 'state',
		},
		{
			id: 3,
			firstName: 'firstName',
 			lastName: 'lastName',
  			email: 'email',
  			phone: 'phone',
  			streetAddress: 'streetAddress',
  			streetAddress2: 'streetAddress2',
  			zip: 'zip',
  			city: 'city',
  			state: 'state',
		}
	]
});

export default Order;