import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('products', function() {
	    this.route('boards');
	    this.route('sensors');
	    this.route('robotics');
		this.resource('product', { path: '/:product_slug' });
  	});
  	
	this.resource('blogs', function(){
		this.resource('blog', { path: '/:blog_slug' });
	});

	this.route('about');

	this.resource('contact', function(){
		this.route('hire-us');
		this.route('ask-us');
	});
	
	this.route('checkout');
	this.route('success', {path: 'checkout/success'});
	this.resource('search');
	this.route('solutions');
	this.resource('information', function() {
	    this.route('termsandcondition');
	    this.route('shipping');
	    this.route('payment');
		this.route('privacypolicy');
  	});
  	this.route('catchall', {path: '/*wildcard'});
});

export default Router;
