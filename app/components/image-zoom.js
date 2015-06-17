import Ember from 'ember';

export default Ember.Component.extend({
  layoutName: 'components/image_zoom',
  classNames: ['image-zoom-component'],
  attributeBindings: ['style'],

  style: function() {
    return 'background-image: url(' + this.get('src') + ');';
  }.property('src'),

  watchMove: function() {
    var mouseX = this.get('mouseX');
    var mouseY = this.get('mouseY');

    // Only update the background position within valid area
    if (Ember.isEmpty(mouseX) || Ember.isEmpty(mouseY)){ return; }

    // The zoomed picture is 5 times as big as the preview so
    // scale the coordinates
    var posX = -((mouseX * 2) - 124);
    var posY = -((mouseY * 2) - 158);
    this.$().css('background-position', '%@px %@px'.fmt(posX, posY));
  }.observes('mouseX','mouseY')
});
