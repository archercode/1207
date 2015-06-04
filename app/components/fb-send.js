  import Ember from 'ember';
  import MixinUrl from '../mixins/mixin-url';
  export default Ember.Component.extend(MixinUrl,{
    classNames: ['facebook-send'],
    actions: {
      sendLink: function(url) {
        console.log(url);
        FB.ui({
         //method: 'send',
         method: 'share',
         //link: 'https://developers.facebook.com/docs/plugins/',
         href: url, 
   
       });
     }
   }
 });