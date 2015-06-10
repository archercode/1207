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



  isShipping: false,
  selectedVal: 'Meet',
  radioSelection: [
        {label: 'Meetup', value: 'Meet'},
        {label: 'Money Transfer', value: 'Bank'},
        {label: 'PayPal', value: 'Paypal'},
        //{label: 'Credit Card', value: 'cc'},
  ],
  
  optionBank: true,
  optionMeet: false,
  optionPayP: false,    

  onChangeRadio : function () {
      if (this.selectedVal === 'Bank'){
        this.set('isShipping', true)
        this.set('optionBank', true);
        this.set('optionMeet', false);
        this.set('optionPayP', false);
      }
      if (this.selectedVal === 'Meet'){
        this.set('isShipping', false)
        this.set('optionBank', false);
        this.set('optionMeet', true);
        this.set('optionPayP', false);
      }
      if (this.selectedVal === 'Paypal'){
        this.set('isShipping', true)
        this.set('optionBank', false);
        this.set('optionMeet', false);
        this.set('optionPayP', true);
      }
  }.observes('selectedVal'),

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
          format: { with: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i, /*allowBlank: true,*/ message: 'Enter valid email.'  }
        },
        phone: {
          format: { with: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/ , message: 'Required field lastname.'  }
        },
        //
        streetAddress:{
          format: { with:  /\b(\d{2,5}\s+)(?![a|p]m\b)(NW|NE|SW|SE|north|south|west|east|n|e|s|w)?([\s|\,|.]+)?(([a-zA-Z|\s+]{1,30}){1,4})(court|ct|street|st|drive|dr|lane|ln|road|rd|blvd)/i, /*allowBlank: true,*/ message: 'Enter valid address.'  }
        },
        streetAddress2: {
           length: { minimum: 5}
        },
        //
        zip:{
          //format: { with: /^[A-Za-z-]{2,16}$/, /*allowBlank: true,*/ message: 'Enter valid name.'  }
          numericality: true,
          length: { minimum: 3}
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

    grandTotal: function(){
      console.log(this.get('subTotal'));
      return this.get('isShipping') ? (this.get('subTotal') + 150) : this.get('subTotal');
    }.property('subTotal', 'isShipping'), 
   
    actions:{
      removeItem: function(){
        //console.log(item.get('title'));
        this.set('quantity',0);
        var item = this.get('model');
        item.deleteRecord();
        item.save();
      },
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