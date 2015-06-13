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

	isNameEmpty: function(){
  		if (!Ember.isEmpty(this.get('name'))){ return true; }
  	}.property('name'),

  	isEmailEmpty: function(){
  		if (!Ember.isEmpty(this.get('email'))){ return true; }
  	}.property('email'),

  	isPhoneEmpty: function(){
  		if (!Ember.isEmpty(this.get('phone'))){ return true; }
  	}.property('phone'),

  	isReasonEmpty: function(){
  		if (!Ember.isEmpty(this.get('reason'))){ return true; }
  	}.property('reason'),

  	validations: {
          name: {
            format: { with: /^[A-Za-z-]{3,16}$/ , 
            
            message: 'Enter valid name.'  },
            length: { minimum: 2}
          },
          //
          email:{
            format: { with: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i, /*allowBlank: true,*/ 
            message: 'Enter valid email.'  }
          },
          phone: {
            format: { with: /^([0-9\(\)\/\+ \-]*)$/ , 
           	 //message: 'Enter valid phone number.'  
        	},
            length: {minimum: 7, maximum: 14}
          },
          reason: {
          	format: { //with:  /^[A-Za-z-]{3,16}$/, /*allowBlank: true,*/ 
          	//message: 'Describe properly.'  
          	},
            length: { minimum: 10, maximum: 50}
          },
 
    },

 	questionType: [
	    {type: 'Software Related', id: 1},
	    {type: 'Hardware Related',    id: 2},
	    {type: 'Mix', id: 3},
  	],

  	currentQuestionType: {
     id: 0
 	},

    actions:{
		sendContactMaterial: function(){
			console.log('sendContactMaterial');
		}
	},
});