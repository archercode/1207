 import Ember from 'ember';
 
 export default Ember.Mixin.create({
   currentBaseUrl: function() {
     var pathArray = window.location.href.split( '/' );
     return '%@//%@'.fmt(pathArray[0], pathArray[2]);
   }.property()
 });