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
  	
	this.route('blogs', function(){
		this.resource('blog', { path: '/:blog_slug' });
	});
	this.route('about');
	this.route('contact');
	this.route('checkout', function(){
		this.route('success');
	});
});

export default Router;
