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
  	
  	
  	isCompanyNameEmpty: function(){
  		if (!Ember.isEmpty(this.get('hire_companyName'))){ return true; }
  	}.property('hire_companyName'),

	isNameEmpty: function(){
  		if (!Ember.isEmpty(this.get('hire_name'))){ return true; }
  	}.property('hire_name'),

  	isEmailEmpty: function(){
  		if (!Ember.isEmpty(this.get('hire_email'))){ return true; }
  	}.property('hire_email'),

  	isPhoneEmpty: function(){
  		if (!Ember.isEmpty(this.get('hire_phone'))){ return true; }
  	}.property('hire_phone'),

  	isReasonEmpty: function(){
  		if (!Ember.isEmpty(this.get('hire_reason'))){ return true; }
  	}.property('hire_reason'),
	
	
  	validations: {
          hire_companyName:{
            format: { with: /^[A-Za-z-]{2,16}$/, 
            message: 'Enter valid name.'  },
            length: { minimum: 2}
          },
          hire_name: {
            format: { with: /^[A-Za-z-]{3,16}$/ , 
            message: 'Enter valid name.'  },
            length: { minimum: 2}
          },
          
          hire_email:{
            format: { with: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i, /*allowBlank: true,*/ 
            message: 'Enter valid email.'  }
          },
          hire_phone: {
            format: { with: /^([0-9\(\)\/\+ \-]*)$/ , 
           	 //message: 'Enter valid phone number.'  
        	},
            length: {minimum: 7, maximum: 14}
          },

          hire_reason: {
          	format: { //with: /^[A-Za-z-]{2,16}$/, /*allowBlank: true,*/ 
          		//message: 'Describe properly.'  
          	},
            length: { minimum: 10, maximum: 50}
          },
 
    },

	onChangeVal : function () {
		console.log(this.get('currentOrganization.id'));
		
		/*
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
	      */
	  }.observes('currentOrganization.id'),
	
	organization: [
	    {type: 'Individual', id: 1},
	    {type: 'Startup',    id: 2},
	    {type: 'Enterprise', id: 3},
  	],

  	currentOrganization: {
     id: 0
 	},

 	projectType: [
	    {type: 'Mobile App', id: 1},
	    {type: 'Web App',    id: 2},
	    {type: 'Hardware Related', id: 3},
	    {type: 'Mix', id: 4},
  	],

  	currentProjectType: {
     id: 0
 	},

    actions:{
		sendContactMaterial: function(){
			console.log('sendContactMaterial');
		}
	},
});