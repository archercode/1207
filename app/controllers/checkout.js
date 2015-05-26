import Ember from 'ember';

import Errors from 'ember-validations/errors';
import EmberValidations from 'ember-validations';
 
export default Ember.ObjectController.extend(EmberValidations.Mixin,{
	init: function () {
    this._super();
    this.errors = Errors.create();
    this.dependentValidationKeys = {};
    this.validators = Ember.A();
    if (Ember.get(this, 'validations') === undefined) {
      this.validations = {};
    }
    Ember.run.scheduleOnce('afterRender', this, function(){
      this.buildValidators();
      this.validators.forEach(function(validator) {
        validator.addObserver('errors.[]', this, function(sender) {
          var errors = Ember.A();
          this.validators.forEach(function(validator) {
            if (validator.property === sender.property) {
              errors.addObjects(validator.errors);
            }
          }, this);
          Ember.set(this, 'errors.' + sender.property, errors);
        });
      }, this);
    });    
  },
	/*validations: {
	    name: {
	      presence: true,
	      length: { minimum: 5 }
	    },
	    age: {
	      numericality: true
	    },
    	profile: true
  	},
  	*/
  	 validations: {
          firstName:{
            format: { with: /^[A-Za-z-]{2,16}$/, /*allowBlank: true,*/ message: 'Enter valid name.'  },
            length: { minimum: 2}
          },
          lastName: {
            format: { with: /^[A-Za-z-]{3,16}$/ , message: 'Required field lastname.'  },
            length: { minimum: 2}
          },
          //
          email:{
            format: { with: /^[A-Za-z-]{2,16}$/, /*allowBlank: true,*/ message: 'Enter valid name.'  }
          },
          phone: {
            format: { with: /^[A-Za-z-]{3,16}$/ , message: 'Required field lastname.'  }
          },
          //
          streetAddress:{
            format: { with: /^[A-Za-z-]{2,16}$/, /*allowBlank: true,*/ message: 'Enter valid name.'  }
          },
          streetAddress2: {
            format: { with: /^[A-Za-z-]{3,16}$/ , message: 'Required field lastname.'  }
          },
          //
          zip:{
            //format: { with: /^[A-Za-z-]{2,16}$/, /*allowBlank: true,*/ message: 'Enter valid name.'  }
            numericality: true,
            length: { minimum: 7}
          },
          city: {
            format: { with: /^[A-Za-z-]{3,16}$/ , message: 'Required field city.'  }
          },
          state: {
            format: { with: /^[A-Za-z-]{3,16}$/ , message: 'Required field state.'  }
          },
        },
    sub: Ember.computed.mapBy('model','subtotal'),
    subTotal: Ember.computed.sum('sub'),  
    actions:{
      submit: function() {
        console.log('submitted');
      },
      processOrder: function(){
        this.send('inputInformation');  
      },
      inputInformation: function(){
            var order = this.store.createRecord('order', {
                    firstName: this.get('firstName'),
                    lastName: this.get('lastName'),
                    email: this.get('email'),
                    phone: this.get('phone'),
                    streetAddress: this.get('streetAddress'),
                    streetAddress2: this.get('streetAddress2'),
                    zip: this.get('zip'),
                    city: this.get('city'),
                    state: this.get('state'),
                });
            order.save();
      },
    }
});