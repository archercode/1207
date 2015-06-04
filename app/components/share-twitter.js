import Ember from 'ember';
  import MixinUrl from '../mixins/mixin-url';
  export default Ember.Component.extend(MixinUrl,{
	tagName: 'a',
  	classNames: 'twitter-share-button',
  	attributeBindings: ['data-size', 'data-url', 'data-text', 'data-hashtags', 'data-via']		
});
