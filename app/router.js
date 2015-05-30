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
	this.route('contact');
	this.route('checkout');
	this.route('success',{path: 'checkout/success'});
});

export default Router;
