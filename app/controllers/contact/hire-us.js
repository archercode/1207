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

  	validations: {
          companyName:{
            format: { with: /^[A-Za-z-]{2,16}$/, /*allowBlank: true,*/ message: 'Enter valid name.'  },
            length: { minimum: 2}
          },
          name: {
            format: { with: /^[A-Za-z-]{3,16}$/ , message: 'Enter valid name.'  },
            length: { minimum: 2}
          },
          //
          email:{ // /^(\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*\.)/
            format: { with: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i, /*allowBlank: true,*/ message: 'Enter valid email.'  }
          },
          phone: {
            format: { with: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/ , message: 'Enter valid phone number.'  }
          },
 
    },

    selectedVal: 'Ship',

	  radioSelection: [
	        {label: 'Shipping', value: 'Ship'},
	        {label: 'Meetup', value: 'Meet'},
	        {label: 'PayPal', value: 'Paypal'},
	        //{label: 'Credit Card', value: 'cc'},
	  ],
	  
	  optionBank: true,
	  optionMeet: false,
	  optionPayP: false,    

	onChangeRadio : function () {
	      if (this.selectedVal === 'Ship'){
	        this.set('optionBank', true);
	        this.set('optionMeet', false);
	        this.set('optionPayP', false);
	      }
	      if (this.selectedVal === 'Meet'){
	        this.set('optionBank', false);
	        this.set('optionMeet', true);
	        this.set('optionPayP', false);
	      }
	      if (this.selectedVal === 'Paypal'){
	        this.set('optionBank', false);
	        this.set('optionMeet', false);
	        this.set('optionPayP', true);
	      }
	  }.observes('selectedVal'),

    actions:{
		sendContactMaterial: function(){
			console.log('sendContactMaterial');
		}
	},
});