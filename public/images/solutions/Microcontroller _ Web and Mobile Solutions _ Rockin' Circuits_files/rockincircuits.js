/* jshint ignore:start */

/* jshint ignore:end */

define('rockincircuits/adapters/application', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].LSAdapter.extend({
    namespace: "rockincircuits"
  });

});
define('rockincircuits/adapters/image', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].FixtureAdapter.extend();

});
define('rockincircuits/adapters/product', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].FixtureAdapter.extend();

});
define('rockincircuits/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'rockincircuits/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('rockincircuits/components/document-title', ['exports', 'ember-document-title/components/document-title'], function (exports, DocumentTitle) {

	'use strict';

	exports['default'] = DocumentTitle['default'];

});
define('rockincircuits/components/edit-quantity', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].TextField.extend({
		didInsertElement: function didInsertElement() {
			this.$().focus();
		}
	});

});
define('rockincircuits/components/ember-modal-dialog-positioned-container', ['exports', 'ember-modal-dialog/components/positioned-container'], function (exports, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('rockincircuits/components/ember-notify', ['exports', 'ember-notify/components/ember-notify'], function (exports, Notify) {

	'use strict';

	exports['default'] = Notify['default'];

});
define('rockincircuits/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('rockincircuits/components/fb-send', ['exports', 'ember', 'rockincircuits/mixins/mixin-url'], function (exports, Ember, MixinUrl) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend(MixinUrl['default'], {
    classNames: ["facebook-send"],
    actions: {
      sendLink: function sendLink(url) {
        console.log(url);
        Ember['default'].FB.ui({
          //method: 'send',
          method: "share",
          //link: 'https://developers.facebook.com/docs/plugins/',
          href: url });
      }
    }
  });

});
define('rockincircuits/components/labeled-radio-button', ['exports', 'ember-radio-button/components/labeled-radio-button'], function (exports, LabeledRadioButton) {

	'use strict';

	exports['default'] = LabeledRadioButton['default'];

});
define('rockincircuits/components/materialize-badge', ['exports', 'ember', 'rockincircuits/components/md-badge'], function (exports, Ember, MaterializeBadge) {

  'use strict';

  exports['default'] = MaterializeBadge['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-badge}} has been deprecated. Please use {{md-badge}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-button-submit', ['exports', 'ember', 'rockincircuits/components/md-btn-submit'], function (exports, Ember, MaterializeButtonSubmit) {

  'use strict';

  exports['default'] = MaterializeButtonSubmit['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-button-submit}} has been deprecated. Please use {{md-btn-submit}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-button', ['exports', 'ember', 'rockincircuits/components/md-btn'], function (exports, Ember, MaterializeButton) {

  'use strict';

  exports['default'] = MaterializeButton['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-button}} has been deprecated. Please use {{md-btn}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-card-action', ['exports', 'ember', 'rockincircuits/components/md-card-action'], function (exports, Ember, MaterializeCardAction) {

  'use strict';

  exports['default'] = MaterializeCardAction['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-card-action}} has been deprecated. Please use {{md-card-action}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-card-content', ['exports', 'ember', 'rockincircuits/components/md-card-content'], function (exports, Ember, MaterializeCardContent) {

  'use strict';

  exports['default'] = MaterializeCardContent['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-card-content}} has been deprecated. Please use {{md-card-content}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-card-panel', ['exports', 'ember', 'rockincircuits/components/md-card-panel'], function (exports, Ember, MaterializeCardPanel) {

  'use strict';

  exports['default'] = MaterializeCardPanel['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-card-panel}} has been deprecated. Please use {{md-card-panel}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-card-reveal', ['exports', 'ember', 'rockincircuits/components/md-card-reveal'], function (exports, Ember, MaterializeCardReveal) {

  'use strict';

  exports['default'] = MaterializeCardReveal['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-card-reveal}} has been deprecated. Please use {{md-card-reveal}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-card', ['exports', 'ember', 'rockincircuits/components/md-card'], function (exports, Ember, MaterializeCard) {

  'use strict';

  exports['default'] = MaterializeCard['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-card}} has been deprecated. Please use {{md-card}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-checkbox', ['exports', 'ember', 'rockincircuits/components/md-check'], function (exports, Ember, materializeCheckbox) {

  'use strict';

  exports['default'] = materializeCheckbox['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-checkbox}} has been deprecated. Please use {{md-check}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-checkboxes', ['exports', 'ember', 'rockincircuits/components/md-checks'], function (exports, Ember, materializeCheckboxes) {

  'use strict';

  exports['default'] = materializeCheckboxes['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-checkboxes}} has been deprecated. Please use {{md-checks}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-collapsible-card', ['exports', 'ember', 'rockincircuits/components/md-card-collapsible'], function (exports, Ember, MaterializeCollapsibleCard) {

  'use strict';

  exports['default'] = MaterializeCollapsibleCard['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-collapsible-card}} has been deprecated. Please use {{md-card-collapsible}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-collapsible', ['exports', 'ember', 'rockincircuits/components/md-collapsible'], function (exports, Ember, MaterializeCollapsible) {

  'use strict';

  exports['default'] = MaterializeCollapsible['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-collapsible}} has been deprecated. Please use {{md-collapsible}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-copyright', ['exports', 'ember', 'rockincircuits/components/md-copyright'], function (exports, Ember, materializeCopyright) {

  'use strict';

  exports['default'] = materializeCopyright['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-copyright}} has been deprecated. Please use {{md-copyright}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-date-input', ['exports', 'ember', 'rockincircuits/components/md-input-date'], function (exports, Ember, materializeDateInput) {

  'use strict';

  exports['default'] = materializeDateInput['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-date-input}} has been deprecated. Please use {{md-input-date}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-input-field', ['exports', 'ember', 'rockincircuits/components/md-input-field'], function (exports, Ember, materializeInputField) {

  'use strict';

  exports['default'] = materializeInputField['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-input-field}} has been deprecated. Please use {{md-input-field}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-input', ['exports', 'ember', 'rockincircuits/components/md-input'], function (exports, Ember, materializeInput) {

  'use strict';

  exports['default'] = materializeInput['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-input}} has been deprecated. Please use {{md-input}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-loader', ['exports', 'ember', 'rockincircuits/components/md-loader'], function (exports, Ember, materializeLoader) {

  'use strict';

  exports['default'] = materializeLoader['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-loader}} has been deprecated. Please use {{md-loader}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-modal', ['exports', 'ember', 'rockincircuits/components/md-modal'], function (exports, Ember, MaterializeModal) {

  'use strict';

  exports['default'] = MaterializeModal['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-modal}} has been deprecated. Please use {{md-modal}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-navbar', ['exports', 'ember', 'rockincircuits/components/md-navbar'], function (exports, Ember, MaterializeNavBar) {

  'use strict';

  exports['default'] = MaterializeNavBar['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-navbar}} has been deprecated. Please use {{md-navbar}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-pagination', ['exports', 'ember', 'rockincircuits/components/md-pagination'], function (exports, Ember, materializePagination) {

  'use strict';

  exports['default'] = materializePagination['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-pagination}} has been deprecated. Please use {{md-pagination}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-parallax', ['exports', 'ember', 'rockincircuits/components/md-parallax'], function (exports, Ember, materializeParallax) {

  'use strict';

  exports['default'] = materializeParallax['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-parallax}} has been deprecated. Please use {{md-parallax}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-radio', ['exports', 'ember', 'rockincircuits/components/md-radio'], function (exports, Ember, materializeRadio) {

  'use strict';

  exports['default'] = materializeRadio['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-radio}} has been deprecated. Please use {{md-radio}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-radios', ['exports', 'ember', 'rockincircuits/components/md-radios'], function (exports, Ember, materializeRadios) {

  'use strict';

  exports['default'] = materializeRadios['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-radios}} has been deprecated. Please use {{md-radios}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-range', ['exports', 'ember', 'rockincircuits/components/md-range'], function (exports, Ember, materializeRange) {

  'use strict';

  exports['default'] = materializeRange['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-range}} has been deprecated. Please use {{md-range}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-select', ['exports', 'ember', 'rockincircuits/components/md-select'], function (exports, Ember, materializeSelect) {

  'use strict';

  exports['default'] = materializeSelect['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-select}} has been deprecated. Please use {{md-select}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-switch', ['exports', 'ember', 'rockincircuits/components/md-switch'], function (exports, Ember, materializeSwitch) {

  'use strict';

  exports['default'] = materializeSwitch['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-switch}} has been deprecated. Please use {{md-switch}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-switches', ['exports', 'ember', 'rockincircuits/components/md-switches'], function (exports, Ember, materializeSwitches) {

  'use strict';

  exports['default'] = materializeSwitches['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-switches}} has been deprecated. Please use {{md-switches}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-tabs-tab', ['exports', 'ember', 'rockincircuits/components/md-tab'], function (exports, Ember, materializeTabsTab) {

  'use strict';

  exports['default'] = materializeTabsTab['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-tabs-tab}} has been deprecated. Please use {{md-tab}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-tabs', ['exports', 'ember', 'rockincircuits/components/md-tabs'], function (exports, Ember, materializeTabs) {

  'use strict';

  exports['default'] = materializeTabs['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-tabs}} has been deprecated. Please use {{md-tabs}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/materialize-textarea', ['exports', 'ember', 'rockincircuits/components/md-textarea'], function (exports, Ember, materializeTextarea) {

  'use strict';

  exports['default'] = materializeTextarea['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-textarea}} has been deprecated. Please use {{md-textarea}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('rockincircuits/components/md-badge', ['exports', 'ember-cli-materialize/components/md-badge'], function (exports, materializeBadge) {

	'use strict';

	exports['default'] = materializeBadge['default'];

});
define('rockincircuits/components/md-btn-submit', ['exports', 'ember-cli-materialize/components/md-btn-submit'], function (exports, MaterializeButtonSubmit) {

	'use strict';

	exports['default'] = MaterializeButtonSubmit['default'];

});
define('rockincircuits/components/md-btn', ['exports', 'ember-cli-materialize/components/md-btn'], function (exports, MaterializeButton) {

	'use strict';

	exports['default'] = MaterializeButton['default'];

});
define('rockincircuits/components/md-card-action', ['exports', 'ember-cli-materialize/components/md-card-action'], function (exports, MaterializeCardAction) {

	'use strict';

	exports['default'] = MaterializeCardAction['default'];

});
define('rockincircuits/components/md-card-collapsible', ['exports', 'ember-cli-materialize/components/md-card-collapsible'], function (exports, MaterializeCollapsibleCard) {

	'use strict';

	exports['default'] = MaterializeCollapsibleCard['default'];

});
define('rockincircuits/components/md-card-content', ['exports', 'ember-cli-materialize/components/md-card-content'], function (exports, MaterializeCardContent) {

	'use strict';

	exports['default'] = MaterializeCardContent['default'];

});
define('rockincircuits/components/md-card-panel', ['exports', 'ember-cli-materialize/components/md-card-panel'], function (exports, MaterializeCardPanel) {

	'use strict';

	exports['default'] = MaterializeCardPanel['default'];

});
define('rockincircuits/components/md-card-reveal', ['exports', 'ember-cli-materialize/components/md-card-reveal'], function (exports, MaterializeCardReveal) {

	'use strict';

	exports['default'] = MaterializeCardReveal['default'];

});
define('rockincircuits/components/md-card', ['exports', 'ember-cli-materialize/components/md-card'], function (exports, MaterializeCard) {

	'use strict';

	exports['default'] = MaterializeCard['default'];

});
define('rockincircuits/components/md-check', ['exports', 'ember-cli-materialize/components/md-check'], function (exports, materializeCheckbox) {

	'use strict';

	exports['default'] = materializeCheckbox['default'];

});
define('rockincircuits/components/md-checks', ['exports', 'ember-cli-materialize/components/md-checks'], function (exports, materializeCheckboxes) {

	'use strict';

	exports['default'] = materializeCheckboxes['default'];

});
define('rockincircuits/components/md-collapsible', ['exports', 'ember-cli-materialize/components/md-collapsible'], function (exports, MaterializeCollapsible) {

	'use strict';

	exports['default'] = MaterializeCollapsible['default'];

});
define('rockincircuits/components/md-copyright', ['exports', 'ember-cli-materialize/components/md-copyright'], function (exports, materializeCopyright) {

	'use strict';

	exports['default'] = materializeCopyright['default'];

});
define('rockincircuits/components/md-input-date', ['exports', 'ember-cli-materialize/components/md-input-date'], function (exports, materializeDateInput) {

	'use strict';

	exports['default'] = materializeDateInput['default'];

});
define('rockincircuits/components/md-input-field', ['exports', 'ember-cli-materialize/components/md-input-field'], function (exports, materializeInputField) {

	'use strict';

	exports['default'] = materializeInputField['default'];

});
define('rockincircuits/components/md-input', ['exports', 'ember-cli-materialize/components/md-input'], function (exports, materializeInput) {

	'use strict';

	exports['default'] = materializeInput['default'];

});
define('rockincircuits/components/md-loader', ['exports', 'ember-cli-materialize/components/md-loader'], function (exports, materializeLoader) {

	'use strict';

	exports['default'] = materializeLoader['default'];

});
define('rockincircuits/components/md-modal-container', ['exports', 'ember-cli-materialize/components/md-modal-container'], function (exports, mdModalContainer) {

	'use strict';

	exports['default'] = mdModalContainer['default'];

});
define('rockincircuits/components/md-modal', ['exports', 'ember-cli-materialize/components/md-modal'], function (exports, materializeModal) {

	'use strict';

	exports['default'] = materializeModal['default'];

});
define('rockincircuits/components/md-navbar', ['exports', 'ember-cli-materialize/components/md-navbar'], function (exports, MaterializeNavBar) {

	'use strict';

	exports['default'] = MaterializeNavBar['default'];

});
define('rockincircuits/components/md-pagination', ['exports', 'ember-cli-materialize/components/md-pagination'], function (exports, materializePagination) {

	'use strict';

	exports['default'] = materializePagination['default'];

});
define('rockincircuits/components/md-parallax', ['exports', 'ember-cli-materialize/components/md-parallax'], function (exports, materializeParallax) {

	'use strict';

	exports['default'] = materializeParallax['default'];

});
define('rockincircuits/components/md-radio', ['exports', 'ember-cli-materialize/components/md-radio'], function (exports, materializeRadio) {

	'use strict';

	exports['default'] = materializeRadio['default'];

});
define('rockincircuits/components/md-radios', ['exports', 'ember-cli-materialize/components/md-radios'], function (exports, materializeRadios) {

	'use strict';

	exports['default'] = materializeRadios['default'];

});
define('rockincircuits/components/md-range', ['exports', 'ember-cli-materialize/components/md-range'], function (exports, materializeRange) {

	'use strict';

	exports['default'] = materializeRange['default'];

});
define('rockincircuits/components/md-select', ['exports', 'ember-cli-materialize/components/md-select'], function (exports, materializeSelect) {

	'use strict';

	exports['default'] = materializeSelect['default'];

});
define('rockincircuits/components/md-switch', ['exports', 'ember-cli-materialize/components/md-switch'], function (exports, materializeSwitch) {

	'use strict';

	exports['default'] = materializeSwitch['default'];

});
define('rockincircuits/components/md-switches', ['exports', 'ember-cli-materialize/components/md-switches'], function (exports, materializeSwitches) {

	'use strict';

	exports['default'] = materializeSwitches['default'];

});
define('rockincircuits/components/md-tab', ['exports', 'ember-cli-materialize/components/md-tab'], function (exports, materializeTabsTab) {

	'use strict';

	exports['default'] = materializeTabsTab['default'];

});
define('rockincircuits/components/md-tabs', ['exports', 'ember-cli-materialize/components/md-tabs'], function (exports, materializeTabs) {

	'use strict';

	exports['default'] = materializeTabs['default'];

});
define('rockincircuits/components/md-textarea', ['exports', 'ember-cli-materialize/components/md-textarea'], function (exports, materializeTextarea) {

	'use strict';

	exports['default'] = materializeTextarea['default'];

});
define('rockincircuits/components/modal-dialog', ['exports', 'ember-modal-dialog/components/modal-dialog'], function (exports, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('rockincircuits/components/particle-bg', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({
		didInsertElement: function didInsertElement() {} });

});
define('rockincircuits/components/product-detail', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({
		actions: {
			addItem: function addItem(product) {
				console.log("inside component");
				this.sendAction("addItem", product);
			}
		}
	});

});
define('rockincircuits/components/radio-button', ['exports', 'ember-radio-button/components/radio-button'], function (exports, RadioButton) {

	'use strict';

	exports['default'] = RadioButton['default'];

});
define('rockincircuits/components/share-twitter', ['exports', 'ember', 'rockincircuits/mixins/mixin-url'], function (exports, Ember, MixinUrl) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend(MixinUrl['default'], {
    tagName: "a",
    classNames: "twitter-share-button",
    attributeBindings: ["data-size", "data-url", "data-text", "data-hashtags", "data-via"]
  });

});
define('rockincircuits/components/social-apps', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    actions: {
      addItem: function addItem(product) {
        console.log("inside component");
        this.sendAction("addItem", product);
      }
    },
    mouseEnter: function mouseEnter() {
      //this.get('controller').send('hover', this.get('context'));
      var view = Ember['default'].$(".social_links");
      //if(view.get('')) 
      view.toggle();

      /*  var view = Ember.$('.social_links_icon');
        view.toggle();*/
    },
    mouseLeave: function mouseLeave() {
      var view = Ember['default'].$(".social_links");
      //if(view.get('')) 
      view.toggle();
    } });

});
define('rockincircuits/controllers/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].ObjectController.extend({
    hasQuantity: Ember['default'].computed.mapBy("model", "quantity"),
    count: Ember['default'].computed.sum("hasQuantity"),

    hasSubtotal: Ember['default'].computed.mapBy("model", "subtotal"),
    subTotal: Ember['default'].computed.sum("hasSubtotal"),

    actions: {
      showCartSummary: function showCartSummary() {
        //TODO: jquery show
        var view = Ember['default'].$(".checkout_summary");
        //if(view.get(''))	
        view.toggle();
      },
      showSocialLinks: function showSocialLinks() {
        //TODO: jquery show
        var view = Ember['default'].$(".social_links");
        //if(view.get('')) 
        view.toggle();
      },

      removeItem: function removeItem() {
        //console.log(item.get('title'));
        this.set("quantity", 0);
        var item = this.get("model");
        item.deleteRecord();
        item.save();
      },
      acceptChanges: function acceptChanges() {
        //this.set('isEditing', false);

        if (this.get("model.quantity") < 1) {
          this.send("removeItem");
        } else {
          this.get("model").save();
        }
        //console.log(this.value);//this.get('value')
      } }
  });

});
define('rockincircuits/controllers/checkout', ['exports', 'ember', 'ember-validations/errors', 'ember-validations'], function (exports, Ember, Errors, EmberValidations) {

  'use strict';

  exports['default'] = Ember['default'].ObjectController.extend(EmberValidations['default'].Mixin, {
    init: function init() {
      this._super();
      this.errors = Errors['default'].create();
      this.dependentValidationKeys = {};
      this.validators = Ember['default'].A();
      if (Ember['default'].get(this, "validations") === undefined) {
        this.validations = {};
      }
      Ember['default'].run.scheduleOnce("afterRender", this, function () {
        this.buildValidators();
        this.validators.forEach(function (validator) {
          validator.addObserver("errors.[]", this, function (sender) {
            var errors = Ember['default'].A();
            this.validators.forEach(function (validator) {
              if (validator.property === sender.property) {
                errors.addObjects(validator.errors);
              }
            }, this);
            Ember['default'].set(this, "errors." + sender.property, errors);
          });
        }, this);
      });
    },

    isShipping: false,
    selectedVal: "Meet",
    radioSelection: [{ label: "Meetup", value: "Meet" }, { label: "Money Transfer", value: "Bank" }, { label: "PayPal", value: "Paypal" }],

    optionBank: true,
    optionMeet: false,
    optionPayP: false,

    onChangeRadio: (function () {
      if (this.selectedVal === "Bank") {
        this.set("isShipping", true);
        this.set("optionBank", true);
        this.set("optionMeet", false);
        this.set("optionPayP", false);
      }
      if (this.selectedVal === "Meet") {
        this.set("isShipping", false);
        this.set("optionBank", false);
        this.set("optionMeet", true);
        this.set("optionPayP", false);
      }
      if (this.selectedVal === "Paypal") {
        this.set("isShipping", true);
        this.set("optionBank", false);
        this.set("optionMeet", false);
        this.set("optionPayP", true);
      }
    }).observes("selectedVal"),

    validations: {
      firstName: {
        format: { "with": /^[A-Za-z-]{2,16}$/, /*allowBlank: true,*/message: "Enter valid name." },
        length: { minimum: 2 }
      },
      lastName: {
        format: { "with": /^[A-Za-z-]{3,16}$/, message: "Required field lastname." },
        length: { minimum: 2 }
      },
      //
      email: {
        format: { "with": /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i, /*allowBlank: true,*/
          message: "Enter valid email."
        }
      },
      phone: {
        format: { "with": /^([0-9\(\)\/\+ \-]*)$/ },
        length: { minimum: 7, maximum: 14 }
      },

      streetAddress: {
        format: { "with": /\b(\d{2,5}\s+)(?![a|p]m\b)(NW|NE|SW|SE|north|south|west|east|n|e|s|w)?([\s|\,|.]+)?(([a-zA-Z|\s+]{1,30}){1,4})(court|ct|street|st|drive|dr|lane|ln|road|rd|blvd)/i, /*allowBlank: true,*/message: "Enter valid address." }
      },
      streetAddress2: {
        length: { minimum: 5 }
      },
      //
      zip: {
        //format: { with: /^[A-Za-z-]{2,16}$/, /*allowBlank: true,*/ message: 'Enter valid name.'  }
        numericality: true,
        length: { minimum: 3 }
      },
      city: {
        format: { "with": /^[A-Za-z-]{3,16}$/, message: "Required field city." }
      },
      state: {
        format: { "with": /^[A-Za-z-]{3,16}$/, message: "Required field state." }
      } },

    sub: Ember['default'].computed.mapBy("model", "subtotal"),
    subTotal: Ember['default'].computed.sum("sub"),

    grandTotal: (function () {
      console.log(this.get("subTotal"));
      return this.get("isShipping") ? this.get("subTotal") + 150 : this.get("subTotal");
    }).property("subTotal", "isShipping"),

    actions: {
      removeItem: function removeItem() {
        //console.log(item.get('title'));
        this.set("quantity", 0);
        var item = this.get("model");
        item.deleteRecord();
        item.save();
      },
      submit: function submit() {
        console.log("submitted");
      },
      processOrder: function processOrder() {
        this.send("inputInformation");
        this.send("deleteData");
      },
      inputInformation: function inputInformation() {
        var order = this.store.createRecord("order", {
          firstName: this.get("firstName"),
          lastName: this.get("lastName"),
          email: this.get("email"),
          phone: this.get("phone"),
          streetAddress: this.get("streetAddress"),
          streetAddress2: this.get("streetAddress2"),
          zip: this.get("zip"),
          city: this.get("city"),
          state: this.get("state") });
        order.save();
      },
      deleteData: function deleteData() {
        this.get("store").findAll("item").then(function (record) {
          record.content.forEach(function (rec) {
            Ember['default'].run.once(this, function () {
              rec.deleteRecord();
              rec.save();
            });
          }, this);
        });
      } }
  });

  //{label: 'Credit Card', value: 'cc'},

  //message: 'Enter valid phone number.'

});
define('rockincircuits/controllers/contact', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].ArrayController.extend({});

});
define('rockincircuits/controllers/contact/ask-us', ['exports', 'ember', 'ember-validations/errors', 'ember-validations'], function (exports, Ember, Errors, EmberValidations) {

  'use strict';

  exports['default'] = Ember['default'].ObjectController.extend(EmberValidations['default'].Mixin, {
    init: function init() {
      this._super();
      this.errors = Errors['default'].create();
      this.dependentValidationKeys = {};
      this.validators = Ember['default'].A();
      if (Ember['default'].get(this, "validations") === undefined) {
        this.validations = {};
      }
      Ember['default'].run.scheduleOnce("afterRender", this, function () {
        this.buildValidators();
        this.validators.forEach(function (validator) {
          validator.addObserver("errors.[]", this, function (sender) {
            var errors = Ember['default'].A();
            this.validators.forEach(function (validator) {
              if (validator.property === sender.property) {
                errors.addObjects(validator.errors);
              }
            }, this);
            Ember['default'].set(this, "errors." + sender.property, errors);
          });
        }, this);
      });
    },

    isNameEmpty: (function () {
      if (!Ember['default'].isEmpty(this.get("name"))) {
        return true;
      }
    }).property("name"),

    isEmailEmpty: (function () {
      if (!Ember['default'].isEmpty(this.get("email"))) {
        return true;
      }
    }).property("email"),

    isPhoneEmpty: (function () {
      if (!Ember['default'].isEmpty(this.get("phone"))) {
        return true;
      }
    }).property("phone"),

    isReasonEmpty: (function () {
      if (!Ember['default'].isEmpty(this.get("reason"))) {
        return true;
      }
    }).property("reason"),

    validations: {
      name: {
        format: { "with": /^[A-Za-z-]{3,16}$/,

          message: "Enter valid name." },
        length: { minimum: 2 }
      },
      //
      email: {
        format: { "with": /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i, /*allowBlank: true,*/
          message: "Enter valid email." }
      },
      phone: {
        format: { "with": /^([0-9\(\)\/\+ \-]*)$/ },
        length: { minimum: 7, maximum: 14 }
      },
      reason: {
        format: {},
        length: { minimum: 10, maximum: 50 }
      } },

    questionType: [{ type: "Software Related", id: 1 }, { type: "Hardware Related", id: 2 }, { type: "Mix", id: 3 }],

    currentQuestionType: {
      id: 0
    },

    actions: {
      sendContactMaterial: function sendContactMaterial() {
        console.log("sendContactMaterial");
      }
    } });

  //message: 'Enter valid phone number.' 
  //with:  /^[A-Za-z-]{3,16}$/, /*allowBlank: true,*/
  //message: 'Describe properly.'

});
define('rockincircuits/controllers/contact/hire-us', ['exports', 'ember', 'ember-validations/errors', 'ember-validations'], function (exports, Ember, Errors, EmberValidations) {

	'use strict';

	exports['default'] = Ember['default'].ObjectController.extend(EmberValidations['default'].Mixin, {
		init: function init() {
			this._super();
			this.errors = Errors['default'].create();
			this.dependentValidationKeys = {};
			this.validators = Ember['default'].A();
			if (Ember['default'].get(this, "validations") === undefined) {
				this.validations = {};
			}
			Ember['default'].run.scheduleOnce("afterRender", this, function () {
				this.buildValidators();
				this.validators.forEach(function (validator) {
					validator.addObserver("errors.[]", this, function (sender) {
						var errors = Ember['default'].A();
						this.validators.forEach(function (validator) {
							if (validator.property === sender.property) {
								errors.addObjects(validator.errors);
							}
						}, this);
						Ember['default'].set(this, "errors." + sender.property, errors);
					});
				}, this);
			});
		},

		isCompanyNameEmpty: (function () {
			if (!Ember['default'].isEmpty(this.get("companyName"))) {
				return true;
			}
		}).property("companyName"),

		isNameEmpty: (function () {
			if (!Ember['default'].isEmpty(this.get("name"))) {
				return true;
			}
		}).property("name"),

		isEmailEmpty: (function () {
			if (!Ember['default'].isEmpty(this.get("email"))) {
				return true;
			}
		}).property("email"),

		isPhoneEmpty: (function () {
			if (!Ember['default'].isEmpty(this.get("phone"))) {
				return true;
			}
		}).property("phone"),

		isReasonEmpty: (function () {
			if (!Ember['default'].isEmpty(this.get("reason"))) {
				return true;
			}
		}).property("reason"),

		validations: {
			companyName: {
				format: { "with": /^[A-Za-z-]{2,16}$/,
					message: "Enter valid name." },
				length: { minimum: 2 }
			},
			name: {
				format: { "with": /^[A-Za-z-]{3,16}$/,
					message: "Enter valid name." },
				length: { minimum: 2 }
			},
			//
			email: {
				format: { "with": /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i, /*allowBlank: true,*/
					message: "Enter valid email." }
			},
			phone: {
				format: { "with": /^([0-9\(\)\/\+ \-]*)$/ },
				length: { minimum: 7, maximum: 14 }
			},

			reason: {
				format: {},
				length: { minimum: 10, maximum: 50 }
			} },

		onChangeVal: (function () {
			console.log(this.get("currentOrganization.id"));

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
		}).observes("currentOrganization.id"),

		organization: [{ type: "Individual", id: 1 }, { type: "Startup", id: 2 }, { type: "Enterprise", id: 3 }],

		currentOrganization: {
			id: 0
		},

		projectType: [{ type: "Mobile App", id: 1 }, { type: "Web App", id: 2 }, { type: "Hardware Related", id: 3 }, { type: "Mix", id: 4 }],

		currentProjectType: {
			id: 0
		},

		actions: {
			sendContactMaterial: function sendContactMaterial() {
				console.log("sendContactMaterial");
			}
		} });

	//message: 'Enter valid phone number.' 
	//with: /^[A-Za-z-]{2,16}$/, /*allowBlank: true,*/
	//message: 'Describe properly.'

});
define('rockincircuits/controllers/loading', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].ArrayController.extend({
			load: 50,
			actions: {} });

});
define('rockincircuits/controllers/product', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].ObjectController.extend({
        //itemCount: Ember.computed.oneWay('title.length'),
        // activeButton: true,
        //  sample: function(){
        //    return this.get('itemCount').get('length');
        //  }.property('itemCount','length'),
        actions: {
            addItem: function addItem(product) {
                //this.notify.info(this.get('model').get('title'));

                var store = this.store;
                product = this.get("model");

                this.store.find("item").then(function (items) {
                    return items.find(function (item) {
                        return item.get("title") === product.get("title");
                    });
                }).then(function (item) {
                    if (item) {
                        item.incrementProperty("quantity");
                        item.save();
                    } else {
                        console.log("first iteration");
                        var newitem = store.createRecord("item", {
                            title: product.get("title"),
                            // image: product.get('image'),
                            price: product.get("price"),
                            quantity: 1,
                            item: product.get("title") });
                        product.get("items").addObject(newitem);

                        newitem.save();
                    }
                });
            },
            minusItem: function minusItem(product) {
                //var store = this.store;
                product = this.get("model");
                this.store.find("item").then(function (items) {
                    return items.find(function (item) {
                        return item.get("title") === product.get("title");
                    });
                }).then(function (item) {
                    if (item) {
                        item.decrementProperty("quantity");
                        if (item.get("quantity") === 0) {
                            item.deleteRecord();
                        }
                    } /*else {
                      console.log('first iteration');
                      		var item = store.createRecord('item', {
                            title: product.get('title'),
                      image: product.get('image'),
                      price: product.get('price'),
                      quantity: 1,
                      item: product.get('title'),
                          });
                      		product.get('items').addObject(item);
                      		
                      }
                      */
                    item.save();
                });
            } }
    });

});
define('rockincircuits/controllers/products', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].ArrayController.extend({
			actions: {
					saveToStorage: function saveToStorage(product) {
							this.send("addItem", product);
					},
					addItem: function addItem(product) {
							var store = this.store;
							this.store.find("item").then(function (items) {
									return items.find(function (item) {
											return item.get("title") === product.get("title");
									});
							}).then(function (item) {
									if (item) {
											item.incrementProperty("quantity");
											item.save();
									} else {
											var newitem = store.createRecord("item", {
													title: product.get("title"),
													price: product.get("price"),
													quantity: 1,
													item: product.get("title") });
											product.get("items").addObject(newitem);
											newitem.save();
									}
							});
					} } });

});
define('rockincircuits/controllers/products/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    queryParams: ["page"],
    page: 1
  });

});
define('rockincircuits/controllers/related', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].ArrayController.extend({});

});
define('rockincircuits/controllers/search', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].ObjectController.extend({
    queryParams: ["query"],
    query: null,
    queryField: Ember['default'].computed.oneWay("query"),
    isEmptyField: (function () {
      return Ember['default'].isEmpty(this.get("queryField"));
    }).property("queryField"),
    actions: {
      search: function search() {
        this.set("query", this.get("queryField"));
      }
    } });

});
define('rockincircuits/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, initialize) {

  'use strict';

  exports['default'] = {
    name: "add-modals-container",
    initialize: initialize['default']
  };

});
define('rockincircuits/initializers/app-version', ['exports', 'rockincircuits/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;
  var registered = false;

  exports['default'] = {
    name: "App Version",
    initialize: function initialize(container, application) {
      if (!registered) {
        var appName = classify(application.toString());
        Ember['default'].libraries.register(appName, config['default'].APP.version);
        registered = true;
      }
    }
  };

});
define('rockincircuits/initializers/ember-notify', ['exports', 'ember-notify'], function (exports, Notify) {

  'use strict';

  exports['default'] = {
    name: "ember-notify",
    initialize: function initialize(container, app) {
      container.optionsForType("notify", { instantiate: false, singleton: true });
      app.register("notify:main", Notify['default']);
      app.inject("route", "notify", "notify:main");
      app.inject("controller", "notify", "notify:main");
      app.inject("component", "notify", "notify:main");
    }
  };

});
define('rockincircuits/initializers/export-application-global', ['exports', 'ember', 'rockincircuits/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal && !window[classifiedName]) {
      window[classifiedName] = application;
    }
  }

  ;

  exports['default'] = {
    name: "export-application-global",

    initialize: initialize
  };

});
define('rockincircuits/initializers/facebook-sdk', ['exports'], function (exports) {

  'use strict';

  /* global FB */
  exports['default'] = {
    name: "facebook",

    initialize: function initialize() {
      var fbAsyncInit = function fbAsyncInit() {
        FB.init({
          appId: "837097049714800",
          xfbml: true,
          version: "v2.3"
        });
      };

      (function (d, s, id) {
        var js,
            fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");

      window.fbAsyncInit = fbAsyncInit;
    }
  };

});
define('rockincircuits/initializers/key-responder', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = {
    name: "ember-key-responder",

    initialize: function initialize(container, application) {
      application.inject("view", "keyResponder", "key-responder:main");
      application.inject("component", "keyResponder", "key-responder:main");

      //TextField/TextArea are currently uninjectable, so we're going to hack our
      //way in
      Ember['default'].TextSupport.reopen({
        keyResponder: Ember['default'].computed(function () {
          return this.container.lookup("key-responder:main");
        }).readOnly()
      });

      // Set up a handler on the document for keyboard events that are not
      // handled by Ember's event dispatcher.
      Ember['default'].$(document).on("keyup.outside_ember_event_delegation", null, function (event) {

        if (Ember['default'].$(event.target).closest(".ember-view").length === 0) {
          var keyResponder = container.lookup("key-responder:main");
          var currentKeyResponder = keyResponder.get("current");
          if (currentKeyResponder && currentKeyResponder.get("isVisible")) {
            return currentKeyResponder.respondToKeyEvent(event, currentKeyResponder);
          }
        }

        return true;
      });

      // Set up a handler on the ApplicationView for keyboard events that were
      // not handled by the current KeyResponder yet
      container.lookupFactory("view:application").reopen({
        delegateToKeyResponder: Ember['default'].on("keyUp", function (event) {
          var currentKeyResponder = this.get("keyResponder.current");
          if (currentKeyResponder && currentKeyResponder.get("isVisible")) {
            // check to see if the event target is the keyResponder or the
            // keyResponders parents.  if so, no need to dispatch as it has
            // already had a chance to handle this event.
            var id = "#" + currentKeyResponder.get("elementId");
            if (Ember['default'].$(event.target).closest(id).length === 1) {
              return true;
            }
            return currentKeyResponder.respondToKeyEvent(event, currentKeyResponder);
          }
          return true;
        })
      });
    }
  };

});
define('rockincircuits/initializers/link-view', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    Ember['default'].LinkView.reopen({
      attributeBindings: ["data-activates"]
    });
  }

  exports['default'] = {
    name: "link-view",
    initialize: initialize
  };
  /* container, application */

});
define('rockincircuits/key-responder', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var get = Ember['default'].get;

  /*
    Holds a stack of key responder views. With this we can neatly handle
    restoring the previous key responder when some modal UI element is closed.
    There are a few simple rules that governs the usage of the stack:
     - mouse click does .replace (this should also be used for programmatically taking focus when not a modal element)
     - opening a modal UI element does .push
     - closing a modal element does .pop

    Also noteworthy is that a view will be signaled that it loses the key focus
    only when it's popped off the stack, not when something is pushed on top. The
    idea is that when a modal UI element is opened, we know that the previously
    focused view will re-gain the focus as soon as the modal element is closed.
    So if the previously focused view was e.g. in the middle of some edit
    operation, it shouldn't cancel that operation.
  */
  var KeyResponder = Ember['default'].ArrayProxy.extend({
    init: function init() {
      this.set("isActive", true);
      this.set("content", Ember['default'].A());
      this._super.apply(this, arguments);
    },

    current: Ember['default'].computed.readOnly("lastObject"),
    pushView: function pushView(view, wasTriggeredByFocus) {
      if (!Ember['default'].isNone(view)) {
        view.trigger("willBecomeKeyResponder", wasTriggeredByFocus);
        this.pushObject(view);
        view.trigger("didBecomeKeyResponder", wasTriggeredByFocus);
      }
      return view;
    },

    resume: function resume() {
      this.set("isActive", true);
    },

    pause: function pause() {
      this.set("isActive", false);
    },

    popView: function popView(wasTriggeredByFocus) {
      if (get(this, "length") > 0) {
        var view = get(this, "current");
        if (view) {
          view.trigger("willLoseKeyResponder", wasTriggeredByFocus);
        }
        view = this.popObject();
        if (view) {
          view.trigger("didLoseKeyResponder", wasTriggeredByFocus);
        }
        return view;
      } else {
        return undefined;
      }
    },

    replaceView: function replaceView(view, wasTriggeredByFocus) {
      if (get(this, "current") !== view) {
        this.popView(wasTriggeredByFocus);
        return this.pushView(view, wasTriggeredByFocus);
      }
    }
  });

  exports['default'] = KeyResponder;

  var KEY_EVENTS = {
    8: "deleteBackward",
    9: "insertTab",
    13: "insertNewline",
    27: "cancel",
    32: "insertSpace",
    37: "moveLeft",
    38: "moveUp",
    39: "moveRight",
    40: "moveDown",
    46: "deleteForward"
  };

  var MODIFIED_KEY_EVENTS = {
    8: "deleteForward",
    9: "insertBacktab",
    37: "moveLeftAndModifySelection",
    38: "moveUpAndModifySelection",
    39: "moveRightAndModifySelection",
    40: "moveDownAndModifySelection"
  };

  var KeyResponderSupportViewMixin = Ember['default'].Mixin.create({
    // Set to true in your view if you want to accept key responder status (which
    // is needed for handling key events)
    acceptsKeyResponder: false,
    canBecomeKeyResponder: Ember['default'].computed("acceptsKeyResponder", "disabled", "isVisible", function () {
      return get(this, "acceptsKeyResponder") && !get(this, "disabled") && get(this, "isVisible");
    }).readOnly(),

    becomeKeyResponderViaMouseDown: Ember['default'].on("mouseDown", function (evt) {
      var responder = this.get("keyResponder");
      if (responder === undefined) {
        return;
      }

      Ember['default'].run.later(function () {
        responder._inEventBubblingPhase = undefined;
      }, 0);

      if (responder._inEventBubblingPhase === undefined) {
        responder._inEventBubblingPhase = true;
        this.becomeKeyResponder(false);
      }
    }),

    /*
      Sets this view as the target of key events. Call this if you need to make
      this happen programmatically.  This gets also called on mouseDown if the
      view handles that, returns true and doesn't have property
      'acceptsKeyResponder'
      set to false. If mouseDown returned true but 'acceptsKeyResponder' is
      false, this call is propagated to the parent view.
       If called with no parameters or with replace = true, the current key
      responder is first popped off the stack and this view is then pushed. See
      comments for Ember.KeyResponderStack above for more insight.
    */
    becomeKeyResponder: function becomeKeyResponder(replace, wasTriggeredByFocus) {
      if (wasTriggeredByFocus === undefined) {
        wasTriggeredByFocus = false;
      }

      var keyResponder = get(this, "keyResponder");

      if (!keyResponder) {
        return;
      }

      if (get(keyResponder, "current") === this) {
        return;
      }

      if (get(this, "canBecomeKeyResponder")) {
        if (replace === undefined || replace === true) {
          return keyResponder.replaceView(this, wasTriggeredByFocus);
        } else {
          return keyResponder.pushView(this, wasTriggeredByFocus);
        }
      } else {
        var parent = get(this, "parentView");

        if (parent && parent.becomeKeyResponder) {
          return parent.becomeKeyResponder(replace, wasTriggeredByFocus);
        }
      }
    },

    becomeKeyResponderViaFocus: function becomeKeyResponderViaFocus() {
      return this.becomeKeyResponder(true, true);
    },

    /*
      Resign key responder status by popping the head off the stack. The head
      might or might not be this view, depending on whether user clicked anything
      since this view became the key responder. The new key responder
      will be the next view in the stack, if any.
    */
    resignKeyResponder: function resignKeyResponder(wasTriggeredByFocus) {
      if (wasTriggeredByFocus === undefined) {
        wasTriggeredByFocus = false;
      }

      var keyResponder = get(this, "keyResponder");

      if (!keyResponder) {
        return;
      }

      keyResponder.popView(wasTriggeredByFocus);
    },

    resignKeyResponderViaFocus: function resignKeyResponderViaFocus() {
      return this.resignKeyResponder(true);
    },

    respondToKeyEvent: function respondToKeyEvent(event) {
      Ember['default'].run(this, function () {
        if (get(this, "keyResponder.isActive")) {
          if (get(this, "keyResponder.current.canBecomeKeyResponder")) {
            get(this, "keyResponder.current").interpretKeyEvents(event);
          }
        }
      });
    },

    interpretKeyEvents: function interpretKeyEvents(event) {
      var mapping = event.shiftKey ? MODIFIED_KEY_EVENTS : KEY_EVENTS;
      var eventName = mapping[event.keyCode];

      if (eventName && this.has(eventName)) {
        return this.trigger(eventName, event);
      }

      return false;
    }
  });

  Ember['default'].View.reopen(KeyResponderSupportViewMixin);
  Ember['default'].Component.reopen(KeyResponderSupportViewMixin);

  var KeyResponderInputSupport = Ember['default'].Mixin.create({
    acceptsKeyResponder: true,
    init: function init() {
      this._super.apply(this, arguments);
      this.on("focusIn", this, this.becomeKeyResponderViaFocus);
      this.on("focusOut", this, this.resignKeyResponderViaBlur);
    },

    didBecomeKeyResponder: function didBecomeKeyResponder(wasTriggeredByFocus) {
      if (!wasTriggeredByFocus && this._state === "inDOM") {
        this.$().focus();
      }
    },

    didLoseKeyResponder: function didLoseKeyResponder(wasTriggeredByFocus) {
      if (!wasTriggeredByFocus && this._state === "inDOM") {
        this.$().blur();
      }
    }
  });

  Ember['default'].TextSupport.reopen(KeyResponderInputSupport);
  Ember['default'].Checkbox.reopen(KeyResponderInputSupport);
  Ember['default'].Select.reopen(KeyResponderInputSupport);

  exports.KEY_EVENTS = KEY_EVENTS;
  exports.MODIFIED_KEY_EVENTS = MODIFIED_KEY_EVENTS;
  exports.KeyResponderInputSupport = KeyResponderInputSupport;

});
define('rockincircuits/mixins/mixin-url', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Mixin.create({
    currentBaseUrl: (function () {
      var pathArray = window.location.href.split("/");
      return "%@//%@".fmt(pathArray[0], pathArray[2]);
    }).property()
  });

});
define('rockincircuits/models/blog', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    title: DS['default'].attr("string"),
    image: DS['default'].attr("string"),
    descrition: DS['default'].attr("string"),
    slug: (function () {
      return this.get("title").replace(/\s+/g, "-").concat("-philippines").toLowerCase();
    }).property("title") });

});
define('rockincircuits/models/item', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var Item = DS['default'].Model.extend({
    title: DS['default'].attr("string"),
    // image: DS.attr('string'),
    price: DS['default'].attr("number"),
    quantity: DS['default'].attr("number"),
    product: DS['default'].belongsTo("product"),

    subtotal: (function () {
      return this.get("quantity") * this.get("price");
    }).property("quantity", "price") });

  Item.reopenClass({
    FIXTURES: [{
      id: 1,
      title: "Learn Ember.js",
      // image: 'link1',
      price: 900,
      quantity: 0,
      product: 1 }, {
      id: 2,
      title: "hello",
      // image: 'link2',
      price: 900,
      quantity: 0,
      product: 1 }, {
      id: 3,
      title: "Profit!",
      // image: 'link3',
      price: 900,
      quantity: 0,
      product: 1 }]
  });

  exports['default'] = Item;

});
define('rockincircuits/models/product', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	var Product=DS['default'].Model.extend({title:DS['default'].attr("string"), price:DS['default'].attr("number"), model:DS['default'].attr("string"), description:DS['default'].attr("string"), html:DS['default'].attr("string"), type:DS['default'].attr("string"), image:DS['default'].attr("string"), items:DS['default'].hasMany("item", {async:true}), itemsCount:(function(){var firstItem=this.get("items.firstObject");if(firstItem === undefined){return 0;}return firstItem.get("quantity");}).property("items.firstObject.quantity"), slug:(function(){return this.get("title").replace(/\s+/g, "-").concat("-philippines").toLowerCase();}).property("title")});Product.reopenClass({FIXTURES:[{id:1, title:"URM37 V4.0 Ultrasonic Sensor", price:500, model:"SEN0001", description:"URM37 V4.0 Ultrasonic Sensor comes with a temperature correction which is a very unique feature in its class. URM37 V4.0 (last version) has already been a very good realization of ultrasonic switch and serial (TTL and RS232 level optional), pulse output function, the module can also control a servo rotation to realize a spatial ultrasound scanner. On this basis we have to upgrade the function", html:"<section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><p>URM37 V4.0 Ultrasonic Sensor comes with a temperature correction which is a very unique feature in its class. URM37 V4.0 (last version) has already been a very good realization of ultrasonic switch and serial (TTL and RS232 level optional), pulse output function, the module can also control a servo rotation to realize a spatial ultrasound scanner. On this basis we have to upgrade the function.<br/><br/>URM37 V4.0, the current version has better intelligence capabilities, meanwhile, mechanical dimensions and pin interface and communication commands are compatible with V3.2, V3.2 has been reversed based on the following changes:<br/></p><ul><li>Serial level selected from the skipped stitches to button, user can easily select RS232 or TTL-level output level output by pressing the settings(after reboot)</li><li>Modified the algorithm, so dead zone was reduced and enhance accuracy</li><li>Analog voltage output, voltage and the measured distance is proportional</li><li>Wide voltage support +3.3V-5.0V</li><li>Power reverse protection</li><li>Automatic measurement of time interval can be modified</li><li>Modify a servo controlled angle of 0-180, compatible with the most of the servos on the market</li><li>Measuring time is 100ms</li></ul></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>Power: +3.3V～+5.0V</li><li>Current: &lt;20mA</li><li>Working temperature: -10 ~ +70 C</li><li>Detecting range: 5cm-500cm</li><li>Resolution: 1cm</li><li>Interface: RS232 (TTL), PWM</li><li>Size: 22mm × 51 mm</li><li>Weight: 25g</li></ul> </div></div></div></section><section><div><div><div><p><strong>OPTIONAL PARTS</strong></p></div><div> <ul><li><a href=\"http://www.dfrobot.com/index.php?route=product/product&amp;product_id=322\">URM Sensor Mounting bracket</a></li><li><a href=\"http://www.thingiverse.com/thing:333632\">Case for URM37 with Interface to Servo</a> (by MM-CNC)</li></ul></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"https://www.dfrobot.com/wiki/index.php?title=URM37_V4.0_Ultrasonic_Sensor_(SKU:SEN0001)#Introduction\">Wiki Doc</a></li><li><a href=\"https://raw.githubusercontent.com/Arduinolibrary/DFRobot_Ultrasonic_Sensor/master/URM37%20img.JPG\">Dimension Diagram</a></li><li><a href=\"http://www.dfrobot.com/image/data/SEN0001/URMV3.2HelpMate.rar\">Software \"HelpMate\"</a></li><li><a href=\"http://milesburton.com/URM37_Ultrasonic_Distance_Measurement_Library\">Arduino Library Tutorial</a></li></ul><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>URM37 V4.0 Ultrasonic Sensor x1</li></ul></div></div></div></section>", type:"sensors", image:"/images/products/SEN0001.jpg"}, {id:2, title:"Sharp GP2Y0A21 Distance Sensor (10-80cm)", price:520, model:"SEN0014", description:"The Sharp distance sensors are a popular choice for many projects that require accurate distance measurements. This IR sensor is more economical than sonar rangefinders, yet it provides much better performance than other IR alternatives. Interfacing to most microcontrollers is straightforward: the single analog output can be connected to an analog-to-digital converter for taking distance measurements, or the output can be connected to a comparator for threshold detection. The detection range of this version is approximately 10 cm to 80 cm (4 in to 32 in); a plot of distance versus output voltage is shown below.", html:"<section><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><p>The Sharp distance sensors are a popular choice for many projects that require accurate distance measurements. This IR sensor is more economical than sonar rangefinders, yet it provides much better performance than other IR alternatives. Interfacing to most microcontrollers is straightforward: the single analog output can be connected to an analog-to-digital converter for taking distance measurements, or the output can be connected to a comparator for threshold detection. The detection range of this version is approximately 10 cm to 80 cm (4\" to 32\"); a plot of distance versus output voltage is shown below.</p> <p>The GP2Y0A21 uses a 3-pin JST connector that connects to our 3-pin JST cable for Sharp distance sensors (not included) as shown in the upper picture on the right. It is also simple to solder three wires to the sensor where the connector pins are mounted (see the lower picture to the right). When looking at the back, the three connections from left to right are power, ground, and the output signal.  </p> <p>NOTE: All Sharp sensors from DFRobot are shipped with JST cable.</p> <p> </p></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>operating voltage: 4.5 V to 5.5 V</li><li>average current consumption: 30 mA (typical)</li><li>distance measuring range: 10 cm to 80 cm (4\" to 32\")</li><li>output type: analog voltage</li><li>output voltage differential over distance range: 1.9 V (typical)</li><li>response time: 38 ± 10 ms</li><li>package size: 29.5×13.0×13.5 mm (1.16×0.5×0.53\")</li><li>weight: 3.5 g (0.12 oz)</li></ul></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://dfrobot.com/wiki/index.php/Sharp_GP2Y0A21_Distance_Sensor_(10-80cm)_(SKU:SEN0014)\">Wiki Doc</a></li><li><a href=\"http://www.dfrobot.com/image/data/SEN0014/gp2y0a21yk0f.pdf\">DataSheet</a></li></ul></div></div></div></section></section></section>", type:"sensors", image:"/images/products/SEN0014.png"}, {id:3, title:"LED Current Meter 10A", model:"DFR0130", price:300, description:"URM37 V4.0 Ultrasonic Sensor comes with a temperature correction which is a very unique feature in its class. URM37 V4.0 (last version) has already been a very good realization of ultrasonic switch and serial (TTL and RS232 level optional), pulse output function, the module can also control a servo rotation to realize a spatial ultrasound scanner. On this basis we have to upgrade the function", html:"<section><section><section><ul><li><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><div>This is a standard LED Current Meter 10A. It measures 0-9.99A with 2% accuracy. Best suitable for current display in the circuit.Just apply four wires without any extra circuit or components, it gives the reading straight away.  Easy to use, and good company with robot application.It has three color to select, green/blue/red.</div> <div> </div> <div>Warnings:  Please carefully follow the instructions for wiring. The power supply terminal and measurement terminal of this LED Current Meter are used common-ground connection. So,the measurement terminal of current meter must be cascaded after loads. It is better that power supply of the current meter is isolated.</div> <div> </div> <div> </div></div></div></div></section><section><div><div><div><p><strong>APPLICATIONS</strong></p></div><div><ul><li>Various circuits</li></ul> <div> </div></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>Measure Current: 0-9.99A DC</li><li>Power supply voltage: 4-30V DC  </li><li>Display mode: 3-bit 0.56 Led digital tube</li><li>Accuracy:2%</li><li>Opening dimension: 45.5mm*26.5mm</li><li>Dimension: 48mm*29mm*21mm</li></ul> <div> </div></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/wiki/index.php?title=LED_Current_Meter_10A(SKU:DFR0244)&amp;action=edit&amp;redlink=1\">Wiki Doc</a>        </li></ul> <p> </p> <p> </p><br/><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>LED Current Meter 10A (Blue) x 1</li></ul></div></div></div></section></li></ul></section></section></section>", type:"robotics", image:"/images/products/DFR0130.jpg"}, {id:4, title:"UV Sensor", price:300, model:"TOY0044", description:"This UV Sensor used GUVA-S12SD chip is suitable for detecting the UV raditation in sunlight. It can be used in UV Index Monitoring, DIY project, UV-A Lamp Monitoring, Plants growing Environmental monitoring...etc. It can detect the UV wavelength of 200-370nm, fast response, linear analog voltage signal output. Small size, easy for installing. With the diagram of the world health organization UV index grading standards, you can know the UV index from the sensor directly.", html:"<section><section><section><ul><li><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><div>This UV Sensor (Gadgeteer compatible) used GUVA-S12SD chip is suitable for detecting the UV raditation in sunlight. It can be used in UV Index Monitoring, DIY project, UV-A Lamp Monitoring, Plants growing Environmental monitoring...etc. <br/> </div><div>It can detect the UV wavelength of 200-370nm, fast response, linear analog voltage signal output. Small size, easy for installing. With the diagram of the world health organization UV index grading standards, you can know the UV index from the sensor directly.<br/> </div><div>This sensor can be powered with 5V or 3.3V which make it compatile with both Gadgeteer, Arduino DUE 3.3V system and standard Arduino UNO / Mega 5V system. </div></div></div></div></section><section><div><div><div><p><strong>APPLICATIONS</strong></p></div><div><ul><li>UV-A Lamp Monitoring</li><li>UV Index Monitoring</li><li>DIY UV electronic project,etc...</li></ul></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>Input voltage: 5V(via Pin) 3.3V(via IDC10)</li><li>Output voltage: DC 0-1V(Corresponding 0-10 UV index)</li><li>Working current: 0.06mA(0.1mA max)</li><li>Test accuracy: 1UV INDEX</li><li>Response time: 0.5s</li><li>Operating temperature: -20℃-85℃</li><li>Interface Type: Analog</li><li>UV wavelength detect: 200-370nm</li><li>.NET gadgeteer connector (IDC10)Socket</li><li>Size: 27 x 22mm</li></ul></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/wiki/index.php/UV_Sensor_(SKU:TOY0044)\">Wiki Doc</a></li><li><a href=\"http://www.dfrobot.com/image/data/TOY0044/UV%20Senser%20sch.pdf\">Schematic</a></li><li><a href=\"http://www.dfrobot.com/image/data/TOY0044/guva-s12sd.pdf\">GUVA-S12SD datasheet</a></li><li><a href=\"http://www.dfrobot.com/image/data/TOY0044/UVS10.pdf\">Guide for UV sensor Appliction</a></li><li><a href=\"http://gadgeteerdfrobot.codeplex.com/\">Gadgeteer Driver</a></li></ul><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>UV Sensor(.Net Gadgeteer Compatible) x1</li><li>3pin Header-Straight x1</li><li>Cable x1</li></ul></div></div></div></section></section></li></ul></section></section></section>", type:"sensors", image:"/images/products/TOY0044.jpg"}, {id:5, title:"DS18B20 Temperature Sensor", price:300, model:"DFR0024", description:"While there are many types of temperature sensors available in the market, the DS18B20 Temperature Sensor form DALLAS is the best choice in applications which require high accuracy and high reliability. Its ultra-small size, low hardware overhead, strong anti-interference capability and high accuracy, together with other additional features makes DS18B20 even more popular among users. For electronic enthusiasts and hobbyists, the DS18B20 is a good start for learning and developing temperature-dependent prototypes.", html:"<section><section><section><ul><li><section><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><div>While there are many types of temperature sensors available in the market, the DS18B20 Temperature Sensor form DALLAS is the best choice in applications which require high accuracy and high reliability. Its ultra-small size, low hardware overhead, strong anti-interference capability and high accuracy, together with other additional features makes DS18B20 even more popular among users. For electronic enthusiasts and hobbyists, the DS18B20 is a good start for learning and developing temperature-dependent prototypes. </div><p>This sensor can be directly plugged and used with our new <a href=\"http://www.dfrobot.com/index.php?route=product/product&amp;filter_name=IO%20Expansion&amp;product_id=1009#.UsYrkvQW2So\">IO expansion shield</a>.</p></div></div></div></section><section><div><div><div><p><strong>FEATURES</strong></p></div><div><ul><li>Digital temperature conversion and output</li><li>Advanced single-bus data communication</li><li>Maximum 12-bit resolution, accuracy up to ±0.5 degrees Celsius</li><li>Parasitic mode available</li><li>Temperature detection range: -55 ° C ~ +125 ° C (-67 ° F ~ +257 ° F)</li><li>Built-in EEPROM and temperature limit</li></ul></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>Supply Voltage: 3.3V to 5V</li><li>Temperature range :-55 °C ~  +125 °C</li><li>Interface: Digital</li><li>Size:22x32mm</li></ul></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/wiki/index.php/18B20_Temperature_Sensor_V2_SKU:_DFR0024\">Wiki Doc</a></li><li><a href=\"http://www.dfrobot.com/image/data/DFR0024/DFR0024_Schematic_V2.pdf\">Schematics</a></li><li><a href=\"http://www.dfrobot.com/image/data/DFR0024/DFR0024_18B20_Datasheet.pdf\">DS18B20 Datasheet</a></li><li><a href=\"http://www.dfrobot.com/image/data/DFR0024/OneWire.zip\">One Wire Library for 18B20</a></li><li><a href=\"http://www.dfrobot.com/image/data/DFR0024/DS18B20%20for%20Arduino%201.0.zip\">DFR0024_SampleCode_V1</a></li></ul><br/><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>18B20 Temerature Sensor V2 x1 </li><li>Digital Cable x1</li></ul></div></div></div></section></section></section></li></ul></section></section></section><p>Document edited with <a href=\"http://www.html-cleaner.com\" target=\"_blank\">HTML-Cleaner.com</a></p>", type:"sensors", image:"/images/products/DFR0024.jpg"}, {id:6, title:"Analog Ambient Light Sensor", price:150, model:"DFR0026", description:"This module help you to detect the light density and reflect the analog voltage signal back to Arduino controller. You can set the threshold of voltage level to trig other unit on Arduino project.", html:"<section><section><section><ul><li><section><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><div>While there are many types of temperature sensors available in the market, the DS18B20 Temperature Sensor form DALLAS is the best choice in applications which require high accuracy and high reliability. Its ultra-small size, low hardware overhead, strong anti-interference capability and high accuracy, together with other additional features makes DS18B20 even more popular among users. For electronic enthusiasts and hobbyists, the DS18B20 is a good start for learning and developing temperature-dependent prototypes. </div><p>This sensor can be directly plugged and used with our new <a href=\"http://www.dfrobot.com/index.php?route=product/product&amp;filter_name=IO%20Expansion&amp;product_id=1009#.UsYrkvQW2So\">IO expansion shield</a>.</p></div></div></div></section><section><div><div><div><p><strong>FEATURES</strong></p></div><div><ul><li>Digital temperature conversion and output</li><li>Advanced single-bus data communication</li><li>Maximum 12-bit resolution, accuracy up to ±0.5 degrees Celsius</li><li>Parasitic mode available</li><li>Temperature detection range: -55 ° C ~ +125 ° C (-67 ° F ~ +257 ° F)</li><li>Built-in EEPROM and temperature limit</li></ul></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>Supply Voltage: 3.3V to 5V</li><li>Temperature range :-55 °C ~  +125 °C</li><li>Interface: Digital</li><li>Size:22x32mm</li></ul></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/wiki/index.php/18B20_Temperature_Sensor_V2_SKU:_DFR0024\">Wiki Doc</a></li><li><a href=\"http://www.dfrobot.com/image/data/DFR0024/DFR0024_Schematic_V2.pdf\">Schematics</a></li><li><a href=\"http://www.dfrobot.com/image/data/DFR0024/DFR0024_18B20_Datasheet.pdf\">DS18B20 Datasheet</a></li><li><a href=\"http://www.dfrobot.com/image/data/DFR0024/OneWire.zip\">One Wire Library for 18B20</a></li><li><a href=\"http://www.dfrobot.com/image/data/DFR0024/DS18B20%20for%20Arduino%201.0.zip\">DFR0024_SampleCode_V1</a></li></ul><br/><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>18B20 Temerature Sensor V2 x1 </li><li>Digital Cable x1</li></ul></div></div></div></section></section></section></li></ul></section></section></section><p>Document edited with <a href=\"http://www.html-cleaner.com\" target=\"_blank\">HTML-Cleaner.com</a></p>", type:"sensors", image:"/images/products/DFR0026.jpg"}, {id:7, title:"Soil Moisture Sensor Immersion Gold", price:180, model:"SEN0114", description:"The new soil moisture sensor uses Immersion Gold which protects the nickel from oxidation. Electroless nickel immersion gold (ENIG)  has several advantages over more conventional (and cheaper) surface platings such as HASL (solder), including excellent surface planarity (particularly helpful for PCBs with large BGA packages), good oxidation resistance, and usability for untreated contact surfaces such as membrane switches and contact points.", html:"<section><section><section><ul><li><section><section><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><div>The new soil moisture sensor uses Immersion Gold which protects the nickel from oxidation. Electroless nickel immersion gold (ENIG)  has several advantages over more conventional (and cheaper) surface platings such as HASL (solder), including excellent surface planarity (particularly helpful for PCBs with large BGA packages), good oxidation resistance, and usability for untreated contact surfaces such as membrane switches and contact points.</div><p> </p><div>A soil moisture sensor can read the amount of moisture present in the soil surrounding it. It is a low tech sensor, but ideal for monitoring an urban garden, or your pet plants water level. This is a must have tool for a connected garden!</div><p> </p><div>This sensor uses the two probes to pass current through the soil, and then it reads that resistance to get the moisture level. More water makes the soil conduct electricity more easily (less resistance), while dry soil conducts electricity poorly (more resistance).</div> <p>This sensor will be helpful to remind you to water your indoor plants or to monitor the soil moisture in your garden. The<a href=\"http://www.dfrobot.com/index.php?route=product/product&amp;filter_name=v5&amp;product_id=264\"> IO Expansion Shield</a> is the perfect shield to connect this senor to Arduino.</p><div> </div></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>Power supply: 3.3v or 5v</li><li>Output voltage signal: 0~4.2v</li><li>Current: 35mA</li><li>Pin definition:<ul><li>Analog output(Blue wire)</li><li>GND(Black wire)</li><li>Power(Red wire)</li></ul></li><li>Size: 60x20x5mm</li><li>Surface finish:Immersion Gold</li></ul></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/wiki/index.php?title=Moisture_Sensor_(SKU:SEN0114)\">Wiki</a></li><li><a href=\"http://www.dfrobot.com/image/data/SEN0114/Moisture%20Sensor%20Schematic.pdf\">Moisture sensor schematic</a></li><li><a href=\"http://www.dfrobot.com/image/data/SEN0114/MoistureSample.rar\">Moisture sensor Sample code</a></li></ul><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>Moisture sensor x1</li><li>Analog Sensor Cable x1</li></ul></div></div></div></section><section><div><div><div><p><strong>PROJECTS</strong></p></div><div><ul><li><a href=\"http://youtu.be/53sTSy-wwkI\">Brian Kelley watering project</a></li></ul></div></div></div></section></section></section></section></li></ul></section></section></section>", type:"sensors", image:"/images/products/SEN0114.jpg"}, {id:8, title:"Waterproof DS18B20 Digital temperature sensor", price:300, model:"DFR0198", description:"This is a waterproofed version of the DS18B20 Temperature sensor. Handy for when you need to measure something far away, or in wet conditions. While the sensor is good up to 125°C the cable is jacketed in PVC so we suggest keeping it under 100°C. Because they are digital, you do nott get any signal degradation even over long distances! The DS18B20 provides 9 to 12-bit (configurable) temperature readings over a 1-Wire interface, so that only one wire (and ground) needs to be connected from a central microprocessor.Usable with 3.0-5.5V systems.", html:"<section><section><section><ul><li><section><section><section><section><p> </p><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><div>This is a waterproofed version of the DS18B20 Temperature sensor. Handy for when you need to measure something far away, or in wet conditions. While the sensor is good up to 125°C the cable is jacketed in PVC so we suggest keeping it under 100°C. Because they are digital, you dont get any signal degradation even over long distances! The DS18B20 provides 9 to 12-bit (configurable) temperature readings over a 1-Wire interface, so that only one wire (and ground) needs to be connected from a central microprocessor.Usable with 3.0-5.5V systems. </div> <div> </div> <div>Because each DS18B20 contains a unique silicon serial number, multiple DS18B20s can exist on the same 1-Wire bus. This allows for placing temperature sensors in many different places. Applications where this feature is useful include HVAC environmental controls, sensing temperatures inside buildings,equipment or machinery, and process monitoring and control.</div> <div> </div> <div>With our <a href=\"http://www.dfrobot.com/index.php?route=product/product&amp;product_id=203\">plugable terminal</a>, there is no soldering required to connect to our <a href=\"http://www.dfrobot.com/index.php?route=product/search&amp;filter_name=expansion\">IO Expansion Shield</a>. </div> <div> </div> <div> </div><br/>{C}</div></div></div></section><section><div><div><div><p><strong>SPECIFICATION{C}</strong></p></div><div><ul><li>Usable with 3.0V to 5.5V power/data</li><li>±0.5°C Accuracy from -10°C to +85°C</li><li>Usable temperature range: -55 to 125°C (-67°F to +257°F)</li><li>9 to 12 bit selectable resolution</li><li>Uses 1-Wire interface- requires only one digital pin for communication</li><li>Unique 64 bit ID burned into chip</li><li>Multiple sensors can share one pin</li><li>Temperature-limit alarm system</li><li>Query time is less than 750ms</li><li>3 wires interface:<ul><li>Type A<ul><li>Red wire - VCC</li><li>Black wire - GND</li><li>Yellow wire - DATA</li></ul></li><li>Type B (Recently theres a series of sensors using this pin mapping. Sorry for the inconvenience.)<div><ul><li>Red wire  - VCC</li><li>Yellow wire - GND</li><li>Green wire - DATA</li></ul></div></li></ul></li><li>Stainless steel tube 6mm diameter by 35mm long</li><li>Cable diameter: 4mm</li><li>Length: 90cm</li></ul> <div> </div></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://dfrobot.com/wiki/index.php?title=Waterproof_DS18B20_Digital_Temperature_Sensor_(SKU:DFR0198)\">Wiki</a></li><li><a href=\"http://www.dfrobot.com/image/data/DFR0198/DS18B20.pdf\">DS18B20 datasheet</a></li><li><a href=\"http://www.dfrobot.com/image/data/DFR0198/DS18B20%20for%20Arduino%201.0.zip\">Sample code for Arduino 1.0</a></li><li><a href=\"http://www.dfrobot.com/image/data/DFR0198/DS18B20%20sketch%20for%20Arduino%20IDE%20under%201.0.zip\">Sample code for IDE under 1.0</a></li><li><a href=\"http://www.arduino.cc/playground/Learning/OneWire\">One Wire library</a></li><li><a href=\"http://tushev.org/articles/electronics/42-how-it-works-ds18b20-and-arduino\">How it works- DS18B20 and Arduino</a></li><li><a href=\"http://www.dfrobot.com/image/data/DFR0198/DFRobot%20DFR0198.zip\">Zip file with all of the above</a></li></ul><br/><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>Waterproof DS18B20 Digital temperature sensor         x1</li></ul></div></div></div></section></section><section><div> </div></section></section></section></section></li><li></li></ul></section></section></section>", type:"sensors", image:"/images/products/DFR0198.jpg"}, {id:9, title:"Real Time Clock Module", price:150, model:"DFR0151", description:"The module comes fully assembled and pre-programmed with the current time (ok, so its our current time - MST). The included Lithium coin cell battery (CR1225 41mAh) will run the module for a minimum of 9 years (17 years typical) without external 5V power. The DS1307 is accessed via the I2C protocol.", html:"<section><section><section><ul><li><section><section><section><section><p> </p><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><div>The DS1307 Real Time Clock developed by one of our designers: Waiman.  The module comes fully assembled and pre-programmed with the current time (ok, so it is our current time - MST). The included Lithium coin cell battery (CR1225 41mAh) will run the module for a minimum of 9 years (17 years typical) without external 5V power. The DS1307 is accessed via the I2C protocol.</div><div>Except the DS1307 real time clock, the module also integrate the I2C EEPROM chip(24C32) and the DS18B20 sensor interface. The I2C EEPROM makes it possible to save the sensor data easily without spending too much microcontroller source. And the DS18B20 interface with the pull-up resistor embeded will be helpful to extend temperature monitoring feature for your project.</div></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>Working voltage: 5v</li><li>Two wire I2C interface</li><li>Hour : Minutes : Seconds AM/PM</li><li>Day Month, Date - Year</li><li>Leap year compensation</li><li>Accurate calendar up to year 2100</li><li>Consumes Less than 500nA in Battery-Backup</li><li>Battery included</li><li>1Hz output pin</li><li>56 Bytes of Non-volatile memory available to user</li><li>provides 32,768 bits(4KB) of serial electrically erasable and programmable</li><li>read only memory (EEPROM)</li><li>Embed DS18B20 temperature sensor interface with the pull-up resistor</li><li>Dimensions: 28mm x 25mm x 8mm</li></ul></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/wiki/index.php/Real_Time_Clock_Module_(DS1307)_V1.1_(SKU:DFR0151)\">Wiki</a></li><li><a href=\"http://www.dfrobot.com/image/data/DFR0151/V1.1/Arduino%20library.zip\">Arduino library</a></li><li><a href=\"http://www.dfrobot.com/image/data/DFR0151/V1.1/Wiring%20diagrams.zip\">Wiring diagram</a></li><li><a href=\"http://www.dfrobot.com/image/data/DFR0151/V1.1/TinyRTC%20V1.1%20sch.pdf\">Schematic</a></li><li><a href=\"http://www.dfrobot.com/image/data/DFR0151/V1.1/AT24C32%20datasheet.pdf\">EEPROM datasheet</a></li><li><a href=\"http://www.dfrobot.com/image/data/DFR0151/V1.1/DS1307%20datasheet.pdf\">DS1307 datasheet</a></li><li><a href=\"http://www.dfrobot.com/image/data/DFR0151/V1.1/DFRobot%20DFR0151.zip\">Zip file with all of the above</a></li></ul><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>Real Time Clock Module (DS1307) v1.1  x1 </li></ul></div></div></div></section></section></section></section></section></li></ul></section></section></section>", type:"robotics", image:"/images/products/DFR0151.jpg"}, {id:10, title:"360 Degree Motor (20kg)", price:800, model:"SER0035", description:"The DF15RSMG  equips with two pairs of the servo shells. One is a stardard shell with four M4 mounting holes. And the other one includes a shell with double bearing which is specially designed for the application of the robot arm or the joints.The shells of this kit are thickened to make it stable enough for motion system.", html:"<section><section><section><ul><li><section><section><section><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><div>This is the most powerful standard servo sized motor from DFRobot so far. The DF15RSMG  equips with two pairs of the servo shells. One is a stardard shell with four M4 mounting holes. And the other one includes a shell with double bearing which is specially designed for the application of the robot arm or the joints.The shells of this kit are thickened to make it stable enough for motion system.</div> <div>The torque of this motor is about 19kg.cm at 7.4v power supply.Using the Arduino servo library, you could drive this servo motor easily.To reduce the consumption of your microcontroller, this servo has a lock function for the pulse detection. So driving it to a target position just requires one PPM controlling signal.<br/> </div><div><strong>Cable definition</strong></div><ul><li>Brown - GND</li><li>Red  - VCC</li><li>Orange  - Signal(PPM input wire)</li></ul></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><div><strong>Mechanical specification</strong></div> <ul><li>Rotation angle range: 360°</li><li>No-load speed:60°/0.16s @7.4v</li><li>Stall torque:19.3kg.cm（7.4v）</li><li>Dynamic torque:15.1kg.cm（7.4v）</li><li>Gear:steel,copper mixed gear</li><li>Assembly method:fastening with double layer 4 screws</li><li>Equip 2 pairs of shells,2 metal servo horns and 2 servo support</li><li>Size: 40x40x20 (mm)</li></ul><div><strong>Electrical specification </strong></div> <ul><li>Working Voltage: 5-7.4v</li><li>Stall current:3A(@8.5V - Limit test)</li><li>PPM Voltage:3V-5V</li><li>PPM Resolution:2us</li><li>PWM driver frequency:4KHZ</li><li>Range of PPM positive pulse width:400us-2550us</li><li>Minimum value of PPM negative pulse width:400us</li></ul></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://arduino.cc/en/Reference/Servo\">Servo library</a></li><li><a href=\"http://www.dfrobot.com/image/data/SER0035/Standard%20mode%20dimension.png\">Standard mode dimension</a>     </li><li><a href=\"http://www.dfrobot.com/image/data/SER0035/Robot%20arm%20mode%20dimension.png\">Robot arm mode dimension</a>        </li></ul><br/><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>DF15RSMG Servo x1</li><li>Servo Shell x2</li><li>Fitting package x1</li></ul></div></div></div></section></section></section></section></section></li></ul></section></section></section>", type:"robotics", image:"/images/products/SER0035.jpg"}, {id:11, title:"Capacitive Touch Sensor", price:200, model:"DFR0030", description:"This little sensor can \"feel\" people and metal touch and feedback a high/low voltage level. Even isolated by some cloth and paper, it still can feel the touch. And the sensetivity well decrease as isolation get thick.", html:"<section><section><section><ul><li><section><section><section><section><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><p>Are you tired with clicking mechanic button? Try our capacitive touch sensor. Right now we can find touch sensor on most electronic device. So uprade your Arduino project with our new version touch sensor and make it cool!!</p><div>This little sensor can \"feel\" people and metal touch and feedback a high/low voltage level. Even isolated by some cloth and paper, it still can feel the touch. And the sensetivity well decrease as isolation get thick. For detail of usage, please check our wiki. To exetreme user experience of our sensor module, we made following improvement. We can feel our care for customers.</div><div> </div><div><img src=\"http://www.dfrobot.com/image/data/DFR0030/V2.0/touch1.jpg\" alt=\"\"/></div><p> </p><div><strong>With this sensor Arduino can feel your touch</strong></div><p> </p></div></div></div></section><section><div><div><div><p><strong>FEATURES</strong></p></div><div><ul><li>Wide voltage range from 3.3V to 5V</li><li>Standard assembling structure (two 3mm holes with multiple of 5cm as interval)</li><li>Easily recognitive interfaces of sensors (\"A\" for analog and \"D\" for digital)</li><li>Icons to simplely illustrate sensor function </li><li>High quality connector</li><li>Immersion gold surface</li><li>Specification</li><li>Supply Voltage: 3.3V to 5V</li><li>Interface: Digital</li><li>Size:22x30mm</li></ul></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/wiki/index.php/DFRobot_Capacitive_Touch_Sensor_SKU:DFR0030\">Wiki Doc</a>     </li><li><a href=\"http://www.dfrobot.com.cn/images/upload/File/DFR0030/20140825132741ztc9n2.pdf\">Schematic</a>    </li></ul><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>Capacitive Touch Sensor x1</li><li>Digital cable x1</li></ul></div></div></div></section></section></section></section></section></section></li></ul></section></section></section><p>Document edited with <a href=\"http://www.html-cleaner.com\" target=\"_blank\">HTML-Cleaner.com</a></p>", type:"sensors", image:"/images/products/DFR0030.jpg"}, {id:12, title:"Triple Axis Accelerometer BMA220 (Tiny)", price:200, model:"SEN0168", description:"This Triple Axis Accelerometer with Bosch BMA220 is an ultra small triaxial, low-g acceleration sensor breakboard with SPI and I2C interface, aiming for lowpower consumer market applications. It allows measurement of accelerations in 3 perpendicular axes and thus senses tilt, motion, shock and vibration in cell phones, handhelds, computer peripherals, man-machine interfaces, virtual reality features and game controllers.", html:"<section><section><section><ul><li><section><section><section><section><section><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><div>This Triple Axis Accelerometer with Bosch BMA220 is an ultra small triaxial, low-g acceleration sensor breakboard with SPI and I2C interface, aiming for lowpower consumer market applications. It allows measurement of accelerations in 3 perpendicular axes and thus senses tilt, motion, shock and vibration in cell phones, handhelds, computer peripherals, man-machine interfaces, virtual reality features and game controllers.<br/> </div><div>With a size of only 2 mm x 2 mm, the Bosch BMA220 represents a new generation of acceleration sensors. The Tri-Axis Accelerometer integrates a multitude of features that acilitates its use especially in the area of motion detection applications, such as device orientation detection, gaming, HMI and menu browser control. It is highly configurable in order to give the designer full flexibility when integrating the sensor into his system.<br/> </div><div>It can be used in sensing tilt, motion and shock vibration in mobile devices, handhelds, digital peripherals, man-machine interfaces, virtual reality features and game consoles.</div><div>Note: Recommend to connect the sensor to 3.3v powered microcontroller. Though it directly works with Arduino UNO/Leonardo(System working voltage: 5v). </div></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>Power supply: 2.0-3.6V</li><li>Interface: I2C</li><li>Acceleration range:±2g/±4g/±8g/±16g</li><li>Ultra Low Power</li><li>LED power indication</li><li>Tiny size design and easy-to-use</li><li>Compatible with Arduino controllers</li><li>Size: 13x22mm</li></ul></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/wiki/index.php/Triple_Axis_Accelerometer_BMA220(Tiny)_SKU:SEN0168\">Wiki Doc</a></li><li><a href=\"http://www.dfrobot.com/image/data/SEN0168/SEN0168_Schematic_V1.pdf\">SEN0168_Schematic_V1</a></li><li><a href=\"http://www.dfrobot.com/image/data/SEN0168/Wire%20Library.zip\">Wire library for Arduino</a></li><li><a href=\"http://www.dfrobot.com/image/data/SEN0168/BMA220_I2C_test_code.zip\">BMA220_I2C_test_code</a></li><li><a href=\"http://www.dfrobot.com/image/data/SEN0168/BMA220%20datasheet.pdf\">BMA220 datasheet</a></li></ul><br/><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>Triple Axis Accelerometer BMA220(Tiny)                x1</li><li>5P Pin Headers</li></ul></div></div></div></section></section></section></section></section></section></section></li></ul></section></section></section>", type:"sensors", image:"/images/products/SEN0168.jpg"}, {id:13, title:"10 Segment LED Bar Graph", price:100, model:"FIT0188", description:"These 10 segment bar graph LEDs have many uses. With a compact footprint, and a simple hookup, they are easy for prototyping or finished products. Essentially, they are 10 individual red LEDs housed together.", html:"<section><section><section><ul><li><section><section><section><section><section><section><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><div>These 10 segment bar graph LEDs have many uses. With a compact footprint, and a simple hookup, they are easy for prototyping or finished products. Essentially, they are 10 individual red LEDs housed together.</div><p> </p><div><img src=\"http://www.dfrobot.com/image/data/FIT0188/SP/sample.gif\" alt=\"\"/> </div></div></div></div></section><section><div><div><div><p><strong>APPLICATIONS</strong></p></div><div><ul><li>Audio equipment</li><li>Instrument panels</li><li>Digital readout display</li><li>Signal strength display</li><li>Power status display</li><li>Art display</li></ul></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>Forward Current (Per Segment): 25mA</li><li>Max Reverse Voltage: 5v</li><li>10 segment bar</li><li>Color: Super Bright Red</li><li>Industrial standard size</li><li>Low power consumption</li><li>Categorized for luminous intensity</li></ul></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/wiki/index.php?title=10_Segment_LED_Bar_Graph_(SKU:FIT0188)\">Wiki Doc</a></li><li><a href=\"http://www.dfrobot.com/image/data/FIT0188/LEDBarSample.rar\">Arduino Sample code</a></li><li><a href=\"http://www.dfrobot.com/image/data/FIT0188/KWL-R1025SB.pdf\">Datasheet</a></li><li><a href=\"http://www.youtube.com/watch?v=y1Bke3750WE\">Arduino Project</a></li></ul><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>10 segment led bar graph - Red x1</li></ul></div></div></div></section></section></section></section></section></section></section></section></li></ul></section></section></section>", type:"robotics", image:"/images/products/FIT0188.jpg"}, {id:14, title:"Bluno ­Bluetooth 4.0 Micro­controller Compatible with Arduino Uno", price:1300, model:"DFR0267", description:"Its time to get Bluetooth 4.0 into your project and sync it up with your phone! For aficionados of smart devices and wearables with this new tech (BT4.0 BLE), now you can go further than hacking things apart to start prototyping with your Arduino. Bluno is first of its kind in intergrating BT 4.0(BLE) module into Arduino Uno, making it an ideal prototyping platform for both software and hardware developers to go BLE. You will be able to develop your own smart bracelet , smart pedometer and more. Through the low-power Bluetooth 4.0 technology, real-time low energy communication can be made really easy.", html:"<section><section><section><ul><li><section><section><section><section><section><section><section><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><div>It is time to get Bluetooth 4.0 into your project and sync it up with your phone! For aficionados of smart devices and wearables with this new tech (BT4.0 BLE), now you can go further than hacking things apart to start prototyping with your Arduino. Bluno is first of its kind in intergrating BT 4.0(BLE) module into Arduino Uno, making it an ideal prototyping platform for both software and hardware developers to go BLE. You will be able to develop your own smart bracelet , smart pedometer and more. Through the low-power Bluetooth 4.0 technology, real-time low energy communication can be made really easy. </div>  <div>Bluno integrates a TI CC2540 BT 4.0 chip with the Arduino UNO development board. It allows wireless programming via BLE, supports Bluetooth HID, AT command to config BLE and you can upgrade BLE firmware easily. Bluno is also compatible with all Arduino Uno pins which means any project made with Uno can directly go wireless! </div>  <div>Whats more, we also developed an App for Bluno (both Android and IOS) and they are completely opensource. You can modify and develop your own BLE-hardware platform. Below is a quick demo video covering some of the major features of Bluno with the help of an Accessory Shield for Bluno, which will also be available very soon.</div>   <div>In short, you can use Bluno with any Bluetooth 4.0 compatible devices and enjoy features such as wireless transmission, master and slave settings, wireless programming and even establishing a Bluetooth HID connection with the PC between devices.</div> <div> </div> <div>Note: For the demo application and arduino code, we integrated DFRobot wireless libraries for the beginners. The idea is supplying a simple way for you to use wireless modules without learning the wireless comunication protocol. However, for the developer, we recommend to custom or choose the protocol according to the application.<br/>Note: Since the different Bluetooth profile, Bluno does not support other brand BLE devices, but you could use our <a href=\"http://www.dfrobot.com/index.php?route=product/product&amp;product_id=1220&amp;search=usb+ble+link&amp;description=true\">USE BLE Link</a> as data receiver. And it supports wireless programming directly.<br/> </div></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>On-board BLE chip: TI CC2540</li><li>Wireless Programming via BLE</li><li>Support Bluetooth HID</li><li>Support AT command to config the BLE</li><li>Transparent communication through Serial</li><li>Upgrade BLE firmware easily</li><li>DC Supply: USB Powered or External 7V~12V DC</li><li>Microcontroller: Atmega328</li><li>Bootloader: Arduino Uno ( disconnect any BLE device before uploading a new sketch )</li><li>Compatible with the Arduino Uno pin mapping</li><li>Size: 60mm * 53mm</li><li>Weight: 30g</li></ul></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/wiki/index.php/Bluno_SKU:DFR0267\">Wiki Doc</a></li><li><a href=\"http://www.dfrobot.com/image/data/DFR0267/Bluno%20Sch.pdf\">Schematic</a></li></ul><p>Demo Tutorials</p><ul><li><a href=\"http://www.dfrobot.com/wiki/index.php/Bluno_SKU:DFR0267#Bluno_Basic_Demo\">Bluno Basic Demo</a></li><li><a href=\"http://www.dfrobot.com/index.php?route=DFblog/blog&amp;id=56\">Bluno Accessory Shield Demo</a></li><li><a href=\"https://www.youtube.com/watch?v=NnDjjAdkKkA\">Programming the Internet lesson 37: Exploring the DFRobot Bluno</a></li></ul><p>User Review</p><ul><li><a href=\"http://embeddedcomputing.weebly.com/dfrobot-bluno.html\">Embedded Computing Review</a> by Rei Vilo</li></ul><p>Custom Application from User</p><ul><li><a href=\"https://itunes.apple.com/cn/app/bluno-zhong-duan/id794109935?mt=8\">Bluno iOS Terminal</a> (developed by Air Vision)</li><li><a href=\"http://www.thingiverse.com/thing:489105\">3D Printable Bumper for Bluno</a> (by omega368)</li></ul><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>Bluno x1</li></ul></div></div></div></section></section></section></section></section></section></section></section></section></li></ul></section></section></section>", type:"boards", image:"/images/products/DFR0267.jpg"}, {id:15, title:"LCD Keypad Shield for Arduino", price:400, model:"DFR0009", description:"This is a very popular LCD Keypad shield for Arduino and other variants. It includes a 2x16 LCD display and 6 momentary push buttons. Pins 4, 5, 6, 7, 8, 9 and 10 are used to interface with the LCD. Just one Analog Pin 0 is used to read the five pushbuttons. The LCD shield supports contrast adjustment and back-lit on/off functions. It also exposes five analog pins with DFRobot color code for easy analog sensor plugging and display. The on board LED indicates power on.", html:"<section><section><section><ul><li><section><section><section><section><section><section><section><section><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><p>This is a very popular LCD Keypad shield for Arduino and other variants. It includes a 2x16 LCD display and 6 momentary push buttons. Pins 4, 5, 6, 7, 8, 9 and 10 are used to interface with the LCD. Just one Analog Pin 0 is used to read the five pushbuttons. The LCD shield supports contrast adjustment and back-lit on/off functions. It also exposes five analog pins with DFRobot color code for easy analog sensor plugging and display. The on board LED indicates power on.<br/><br/>This design is great since easily lets you keep connecting sensors to the rest of the pins, and use it for monitoring or menu selection with the push buttons even for gaming. Often project applications require testing or debugging. Displaying information right away help on most occasions when a computer is not at reach. If you are planning to build something not attached to a computer and you need to check what is going on when you place it on position, this addition will prove very valuable to make sure the program is running well.<br/><br/>The used LCD pins are not exposed on top side of the board leaving only the unused ones. This way, conflict with LCD pins on top of the board will not happen anymore. This design includes a APC / Bluetooth v3 socket to enable you data transmission with your robot.</p></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>Operating Voltage:5V</li><li>5 Push buttons to supply a custom menu control panel</li><li>RST button for resetting arduino program</li><li>Integrate a potentiometer for adjusting the backlight</li><li>Pin used:<ul><li>D4-D7    -&gt; LCD Data transmission</li><li>D8       -&gt; Reset pin</li><li>D9       -&gt; Enable pin</li><li>D10      -&gt; Backlight control</li></ul></li><li>APC&amp;BT pin header for connecting wireless devices, directly compatible with:<ul><li><a href=\"http://www.dfrobot.com/index.php?route=product/product&amp;filter_name=apc&amp;product_id=57\">APC220 Radio Communication Module</a></li><li><a href=\"http://www.dfrobot.com/index.php?route=product/product&amp;filter_name=bluetooth&amp;product_id=360\">DFRobot Bluetooth V3</a></li></ul></li><li>Expanded available I/O pins</li><li>Expanded Analog Pinout with standard DFRobot configuration for fast sensor extension</li><li>Dimension: 80 x 58 mm</li></ul></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/wiki/index.php/LCD_KeyPad_Shield_For_Arduino_SKU:_DFR0009\">Wiki Doc</a></li><li><a href=\"https://github.com/Arduinolibrary/DFRobot_LCD_keypad/raw/master/LCDKeypad%20Shield.png\">Product Dimension</a></li><li><a href=\"https://github.com/Arduinolibrary/DFRobot_LCD_keypad/raw/master/DFR0009_Layout.png\">Layout</a></li></ul><br/><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>LCD Keypad Shield for Arduino    x1</li></ul></div></div></div></section></section></section></section></section></section></section></section></section></section></li></ul></section></section></section>", type:"boards", image:"/images/products/DFR0009.jpg"}, {id:16, title:"Digital Push Button", price:100, model:"DFR0029", description:"Press to release pleasure! Our redesigned digital push buttons come with LED, immersion gold surface, and bright colored hats. A captital D at left corner indicates that it is a digital sensor. An illustration of button painted in the back notifying its function. Pressing it is a real fun, especially with the plastic cap off. The long pressable life also ensures its durability.", html:"<section><section><section><ul><li><section><section><section><section><section><section><section><section><section><section><section><div><div><div><div>Press to release pleasure! Our redesigned digital push buttons come with LED, immersion gold surface, and bright colored hats. A captital D at left corner indicates that it is a digital sensor. An illustration of button painted in the back notifying its function. Pressing it is a real fun, especially with the plastic cap off. The long pressable life also ensures its durability.</div><p> </p></div></div></div></section><section><div><div><div><p><strong>FEATURES</strong></p></div><div><ul><li>Wide voltage range from 3.3V to 5V</li><li>Standard assembling structure (two 3mm diameter holes with multiple of 5mm as distance from center)</li><li>Easily recognitive interfaces of sensors (\"A\" for analog and \"D\" for digital)</li><li>Icons to simplely illustrate sensor function </li><li>High quality connector</li><li>Immersion gold surface</li></ul></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>Supply Voltage: 3.3V to 5V</li><li>Indicator LED on board</li><li>Easy to plug and play</li><li>Large button keypad and high-quality first-class hat</li><li>Able to achieve very interesting and an interactive work</li><li>Interface: Digital</li><li>Size:22x30mm</li></ul></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/wiki/index.php/DFRobot_Digital_Push_Button_SKU:DFR0029#Sample_Code\">Wiki Doc</a>     </li><li><a href=\"http://www.dfrobot.com/image/data/DFR0029/V2.0/Digital%20Push%20Button%20SCH.pdf\">Schematic</a></li></ul><br/><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>Digital Push Button x1</li><li>Digital cable x1</li></ul></div></div></div></section></section></section></section></section></section></section></section></section></section></section></li></ul></section></section></section><p>Document edited with <a href=\"http://www.html-cleaner.com\" target=\"_blank\">HTML-Cleaner.com</a></p>", type:"robotics", image:"/images/products/DFR0029.jpg"}, {id:17, title:"Analog Sound Sensor", price:250, model:"DFR0034", description:"Analog Sound Sensor is typically used in detecting the loudness in ambient, the Arduino can collect its output signal and actuate accordingly. You may use it to make some funny interactive works such as a \"clap and buzz\" to find your lost keys or remote control if you add a buzzer.", html:"<section><section><section><ul><li><section><section><section><section><section><section><section><section><section><section><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><div>This is an updated version of the Analog Sound Sensor. Analog Sound Sensor is typically used in detecting the loudness in ambient, the Arduino can collect its output signal and actuate accordingly. You may use it to make some funny interactive works such as a \"clap and buzz\" to find your lost keys or remote control if you add a buzzer. This sensor works best with our sound analyzer module. <br/> </div><p>As one of our new version of breakout boards, we have improved the analog sound sensor in below:  </p><ul><li>Wide voltage range from 3.3V to 5V</li><li>Standard assembling structure (two 3mm holes with multiple of 5cm as interval)</li><li>Easily recognitive interfaces of sensors (\"A\" for analog and \"D\" for digital)</li><li>Icons to simplely illustrate sensor function </li><li>High quality connector</li><li>Immersion gold surface</li></ul><p> </p><p> </p><p> </p><div>Notice:The new version of analog sensor port pin mapping has been changed as the following two features.Please check <a href=\"http://www.dfrobot.com/index.php?route=pavblog/blog&amp;id=191\">the tips for changing sensor cable pin mapping </a>while using the I/O Expansion shield. We will continue to update. For the inconvenience caused, please understand.</div><p> </p></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>Supply Voltage: 3.3V to 5V</li><li>Swift sound intensity detection</li><li>Interface: Analog</li><li>Size:22x32mm</li></ul></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/wiki/index.php/Analog_Sound_Sensor_SKU:_DFR0034\">Wiki Doc</a>     </li><li><a href=\"http://www.dfrobot.com/image/data/DFR0034/V2.0/Analog%20Sound%20Sensor%20SCH.pdf\">Schematic</a></li><li><a href=\"https://github.com/Arduinolibrary/DFRobot_Sound_Sensor/blob/master/HYLD%209767%20Specification.pdf?raw=true\">Sensor Datasheet</a></li></ul><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>Analog Sound Sensor x1</li><li>Analog cable x1</li></ul></div></div></div></section></section></section></section></section></section></section></section></section></section></section></section></li></ul></section></section></section>", type:"sensors", image:"/images/products/DFR0034.jpg"}, {id:18, title:"Arduino Mega2560 Rev3", model:"DFR0108", price:2350, description:"The Arduino Mega 2560 is a microcontroller board based on the ATmega2560 (datasheet). It has 54 digital input/output pins (of which 14 can be used as PWM outputs), 16 analog inputs, 4 UARTs (hardware serial ports), a 16 MHz crystal oscillator, a USB connection, a power jack, an ICSP header, and a reset button. It contains everything needed to support the microcontroller; simply connect it to a computer with a USB cable or power it with a AC-to-DC adapter or battery to get started. The Mega is compatible with most shields designed for the Arduino Uno, Duemilanove or Diecimila.", html:"<section><section><section><ul><li><section><section><section><section><section><section><section><section><section><section><section><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><div>The Arduino Mega 2560 is a microcontroller board based on the ATmega2560 (datasheet). It has 54 digital input/output pins (of which 14 can be used as PWM outputs), 16 analog inputs, 4 UARTs (hardware serial ports), a 16 MHz crystal oscillator, a USB connection, a power jack, an ICSP header, and a reset button. It contains everything needed to support the microcontroller; simply connect it to a computer with a USB cable or power it with a AC-to-DC adapter or battery to get started. The Mega is compatible with most shields designed for the Arduino Uno, Duemilanove or Diecimila.</div> <div> </div> <div>The Mega 2560 is an update to the Arduino Mega, which it replaces.</div> <div> </div> <div>Additional features coming with the R3 version are:</div> <ul><li>ATmega16U2 instead 8U2 as USB-to-Serial converter</li><li>1.0 pinout: added SDA and SCL pins for TWI communication placed near to the AREF pin and two other new pins placed near to the RESET pin, the IOREF that allow the shields to adapt to the voltage provided from the board and the second one is a not connected pin, that is reserved for future purposes</li><li>stronger RESET circuit</li></ul> <div> </div></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>Microcontroller: ATmega2560</li><li>Operating Voltage 5V</li><li>Input Voltage (recommended) 7-12V</li><li>Input Voltage (limits) 6-20V</li><li>Digital I/O Pins 54 (of which 14 provide PWM output)</li><li>Analog Input Pins 16</li><li>DC Current per I/O Pin 40 mA</li><li>DC Current for 3.3V Pin 50 mA</li><li>Flash Memory 256 KB of which 8 KB used by bootloader</li><li>SRAM 8 KB</li><li>EEPROM 4 KB</li><li>Clock Speed 16 MHz</li></ul> <div> </div></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/image/data/DFR0108/Atmega2560%20datasheet.pdf\">Atmega2560 datasheet</a></li><li><a href=\"http://www.dfrobot.com/image/data/DFR0108/arduino-mega2560_R3-schematic.pdf\">Mega Schematic</a></li><li><a href=\"http://arduino.cc/en/Main/Software\">Arduino IDE</a></li><li><a href=\"http://arduino.cc/en/Main/ArduinoBoardMega2560\">Arduino Mega product page</a></li><li><a href=\"http://arduino.cc/en/Guide/HomePage\">Arduino - Getting Started</a></li></ul><br/><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>Arduino Mega2560 Rev3 x1</li></ul></div></div></div></section></section></section></section></section></section></section></section></section></section></section></section></section></li></ul></section></section></section>", type:"boards", image:"/images/products/DFR0108.png"}, {id:19, title:"DFRduino UNO R3", model:"DFR0216", price:700, description:"URM37 V4.0 Ultrasonic Sensor comes with a temperature correction which is a very unique feature in its class. URM37 V4.0 (last version) has already been a very good realization of ultrasonic switch and serial (TTL and RS232 level optional), pulse output function, the module can also control a servo rotation to realize a spatial ultrasound scanner. On this basis we have to upgrade the function", html:"<section><section><section><ul><li><section><section><section><section><section><section><section><section><section><section><section><section><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><div>DFRduino Uno V3.0 from DFRobot is a physical world computing board of small size for academics or development . It is a simple microcontroller board fully compatible with Arduino UNO R3 and Arduino IDE open-source development environment. This environment implements the Processing / Wiring language. Arduino can be used to develop stand-alone interactive objects or can be connected to software on your computer (e.g. Flash, Processing, MaxMSP). The open-source IDE can be<a href=\"http://www.arduino.cc/en/Main/Software\">downloaded for free</a> (currently for Mac OS X, Windows, and Linux).<br/><br/>This board features the ATmega16U2 programmed as a USB-to-serial converter. An added bonus is that our DFRduino is still using the DIP package AVR Chip. You could remove it to update or reprogram the chips firmware, or even to place it on a finished, more compact project. The cool thing about our new DFRduino microcontroller is that the headers use different colors to feature I/O ports of different types:</div><ul><li>Red for Power Section.</li><li>Blue for Analog I/O.</li><li>Green for Digital I/O.</li></ul> <div>These colors match our sensor cables. This makes it really easy to figure out where to connect sensors, or to identify which side is Analog (blue) or Digital (green).<br/><br/>The Arduino Uno is a microcontroller board based on the <a href=\"http://www.dfrobot.com/image/data/DFR0216/ATmega328P.pdf\">ATmega328</a>. It has 14 digital input/output pins (of which 6 can be used as PWM outputs), 6 analog inputs, a 16 MHz crystal oscillator, a USB connection, a power jack, an ICSP header, and a reset button. It contains everything needed to support the microcontroller; simply connect it to a computer with a USB cable or power it with a AC-to-DC adapter or battery to get started.<br/><br/>This board added SDA and SCL pins that are near to the AREF pin and two other new pins placed near to the RESET pin, the IOREF that allow the shields to adapt to the voltage provided from the board. In future, shields will be compatible both with the board that use the AVR, which operate with 5V and with the Arduino Due that operate with 3.3V. The second one is a not connected pin, that is reserved for future purposes.</div><div> </div><p> </p></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>Microcontroller: ATmega328 (DIP Package)</li><li>Operating Voltage: 5V</li><li>Input Voltage (recommended): 7 ~ 12V</li><li>Input Voltage (limits): 6 ~ 20V</li><li>Digital I/O Pins: 14 (of which 6 provide PWM output)</li><li>Analog Input Pins: 6</li><li>DC Current per I/O Pin: 40 mA</li><li>DC Current for 3.3V Pin: 50 mA</li><li>Flash Memory: 32 KB of which 2KB used by bootloader</li><li>SRAM: 2 KB (ATmega328)</li><li>EEPROM: 1 KB (ATmega328)</li><li>Clock Speed: 16 MHz</li><li>Size: 75 x54 x15 mm</li><li>Envionment Friendly: Rohs Compliance</li></ul><div> </div></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/image/data/DFR0216/ATmega328P.pdf\">ATmega328P datasheet</a></li><li><a href=\"http://www.arduino.cc/\">Arduino Home Page</a></li><li><a href=\"http://arduino.cc/en/Guide/HomePage\">How to</a></li><li><a href=\"http://www.arduino.cc/en/Reference/HomePage\">Programming Reference</a></li></ul><br/><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>DFRduino Uno V3.0  x1</li></ul></div></div></div></section></section></section></section></section></section></section></section></section></section></section></section></section></section></li></ul></section></section></section>", type:"boards", image:"/images/products/DFR0216.jpg"}, {id:20, title:"DFRobot Mega 2560 V3.0", model:"DFR0108", price:1400, description:"DFRduino Mega 2560 V3.0 which is now fully compatible with Arduino Mega 2560 R3. The Arduino Mega is a microcontroller board based on the ATmega2560. It has 54 digital input/output pins (of which 14 can be used as PWM outputs), 16 analog inputs, 4 UARTs (hardware serial ports), a 16 MHz crystal oscillator, a USB connection, a power jack, an ICSP header and a reset button. It contains everything needed to support the microcontroller; Connect it to a computer with a USB cable or power it with a AC-to-DC adapter or battery to get started. ", html:"<section><section><section><ul><li><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><div>NEW VERSION! This is the upgraded DFRduino Mega 2560 V3.0 which is now fully compatible with Arduino Mega 2560 R3. The Arduino Mega is a microcontroller board based on the ATmega2560. It has 54 digital input/output pins (of which 14 can be used as PWM outputs), 16 analog inputs, 4 UARTs (hardware serial ports), a 16 MHz crystal oscillator, a USB connection, a power jack, an ICSP header and a reset button. It contains everything needed to support the microcontroller; Connect it to a computer with a USB cable or power it with a AC-to-DC adapter or battery to get started. The Mega is compatible with most shields designed for the Arduino Duemilanove, Diecimila or Uno.</div><div> </div> <div>One cool thing about our DFRduino microcontrollers is that the hearders with different colors are used to differentiate I/O ports in an relatively easy way:</div><ul><li><strong>Red</strong> indicates Power Section </li><li><strong>Blue</strong> indicates Analog I/O</li><li><strong>Green </strong>indicates Digital I/O. </li></ul><br/>This kind of correspondence match exactly the same with our sensors, making it even cooler and more user-friendly.<div> </div><div><div>The R3 board enjoys following new features:</div><ul><li>Added SDA and SCL pins that are close to AREF pin and two other new pins close to RESET pin, allowing voltage adaptation with IOREF. Our shields will be fully compatible both with the AVR boards operating @5V and Due @3.3V in future.</li><li>Improved RESET circuit</li><li>Replacing the Atmega 8U2 with Atmega 16U2 (<a href=\"http://www.atmel.com/Images/doc2549.pdf\">datasheet</a>)</li></ul> <p>Version history:</p><ul><li>V3.1 - Choose the quartz crystals resonator to improve the timer and serial accuracy. Compared with ceramic crystals, quartz crystals get better temperature stability.</li></ul></div></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>Compatible with Arduino Mega 2560 R3</li><li>Microcontroller: ATmega2560</li><li>Operating Voltage: 5V</li><li>Input Voltage (recommended): 7 ~ 12V</li><li>Digital I/O Pins: 54 (of which 14 provide PWM output)</li><li>Analog Input Pins: 16</li><li>DC Current per I/O Pin: 40 mA</li><li>DC Current for 3.3V Pin: 50 mA</li><li>Flash Memory: 256 KB of which 8 KB used by bootloader</li><li>SRAM: 8 KB</li><li>EEPROM: 4 KB</li><li>Clock Speed: 16 MHz</li></ul> <div>The Mega is compatible with:</div> <ul><li><a href=\"http://www.dfrobot.com/index.php?route=product/product&amp;filter_name=prototyping&amp;product_id=60\">Mega Prototyping Shield For Arduino Mega</a></li><li><a href=\"http://www.dfrobot.com/index.php?route=product/product&amp;filter_name=mega&amp;page=2&amp;product_id=560\">Mega IO Expansion Shield V2.3 For Arduino Mega</a></li><li><a href=\"http://www.dfrobot.com/index.php?route=product/product&amp;filter_name=mega%20shield&amp;page=4&amp;product_id=990\">Mega-multi Expansion Shield</a></li><li><a href=\"http://www.dfrobot.com/index.php?route=product/product&amp;filter_name=lcd&amp;product_id=51\">LCD Keypad Shield For Arduino</a></li><li><a href=\"http://www.dfrobot.com/index.php?route=product/product&amp;filter_name=motor%20shield&amp;product_id=69\">2A Motor Shield for Arduino</a></li><li><a href=\"http://www.dfrobot.com/index.php?route=product/product&amp;filter_name=motor%20shield&amp;product_id=1060\">Stepper Motor Driver Shield for Arduino</a></li><li><a href=\"http://www.dfrobot.com/index.php?route=product/product&amp;filter_name=screw&amp;product_id=846\">Screw Shield V3 for Arduino</a></li><li><a href=\"http://www.dfrobot.com/index.php?route=product/product&amp;filter_name=xbee&amp;product_id=61\">Xbee Shield</a></li><li><a href=\"http://www.dfrobot.com/index.php?route=product/product&amp;filter_name=ethernet&amp;page=2&amp;product_id=455\">DFRduino Ethernet Shield (Support Mega and SD)</a></li><li><a href=\"http://www.dfrobot.com/index.php?route=product/product&amp;filter_name=relay&amp;product_id=496\">Relay Shield for Arduino V2.1</a></li><li><a href=\"http://www.dfrobot.com/index.php?route=product/product&amp;filter_name=wifi&amp;product_id=548\">WIFI Shield V2.2</a></li><li><a href=\"http://www.dfrobot.com/index.php?route=product/product&amp;filter_name=io%20expansion&amp;product_id=1009\">IO Expansion Shield For Arduino(V7)</a></li><li>And <a href=\"http://www.dfrobot.com/index.php?route=product/category&amp;path=123_124\">other</a> arduino standard size shields...</li></ul></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/image/data/DFR0191/Mega2560%20V3.0%20schematic.pdf\">Mega v3.0 Schematic</a></li><li><a href=\"http://www.dfrobot.com/image/data/DFR0191/DFRduino%20Mega2560%20V3.0%20layout.pdf\">Mega v3.0 Layout</a></li><li><a href=\"http://arduino.cc/en/Main/ArduinoBoardMega2560\">Arduino Official Website</a>                    </li><li><a href=\"http://www.atmel.com/Images/doc2549.pdf\">Atmega 2560 datasheet</a>                                                     </li><li><a href=\"http://arduino.cc/en/Main/Software\">Arduino IDE</a></li><li><a href=\"http://arduino.cc/en/Reference/HomePage\">Language Reference</a></li></ul><br/><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>DFRduino Mega 2560 V3.0  x1</li></ul></div></div></div></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></li></ul></section></section></section>", type:"boards", image:"/images/products/DFR0108.jpg"}, {id:21, title:"Line Tracking Sensor", model:"SEN0017", price:250, description:"Line tracking is the most basic function of smart mobile robot. As you can see line tracking robot one of the easiest ways for a robot to successfully and accurately navigate. We designed this new generation of line tracking sensor to be your robot's powerful copilot all the way. It will guide your robot by telling white from black quickly and accurately, via TTL signal. With a drawed path and good programming can ensure results that are far more consistent than if the robot was simply told where to go without any reference.", html:"", type:"sensors", image:"/images/products/SEN0017.jpg"}, {id:22, title:"50A Current Sensor(AC/DC)", model:"SEN0098", price:500, description:"This is a breakout board for the fully integrated Hall Effect based linear ACS758 current sensor. The sensor gives precise current measurement for both AC and DC signals.The thickness of the copper conductor allows survival of the device at high overcurrent conditions.", html:"<section><section><section><ul><li><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><div>Line tracking is the most basic function of smart mobile robot. As you can see line tracking robot one of the easiest ways for a robot to successfully and accurately navigate. We designed this new generation of line tracking sensor to be your robots powerful copilot all the way. It will guide your robot by telling white from black quickly and accurately, via TTL signal. With a drawed path and good programming can ensure results that are far more consistent than if the robot was simply told where to go without any reference.</div> <div>To improve its sensitivity we have replaced the old opto interrupt with high quality one on our latest version. Now the sensor is more accurate and Its simplified design make it compatible with most mobile platforms. You can combine several line following sensors with other ranged sensors, making mobile robots complete. With a sensor aiming the floor, not only you can detect lines, but often, floor with low reflectance and dark color can be used to distinguish different areas. For example, a kitchen with a dark floor and a living room with a light or white floor, given this information to your robot you can keep it enclosed to a specific area or even let the robot know the area to change its behaviour. Weve seen it also for stairs detector, when the sensor is triggered by the lack of reflectance when high altitude is detected.</div><br/>Version Update: Adds a variable resistor, now it can change the detecting range. 2012/12/24</div></div></div></section><section><div><div><div><p><strong>FEATURES</strong></p></div><div><ul><li>Wide voltage range from 3.3V to 5V</li><li>Standard assembling struct (Times-of-5mm Center distance between two 3mm mounting holes)</li><li>Easily recognitive interfaces of sensors (\"A\" for analog and \"D\" for digital)</li><li>Icons to simplely illustrate sensor function </li><li>High quality connector</li><li>Immersion gold surface</li></ul></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>Supply Voltage: 3.3V to 5V</li><li>Interface:Digital</li><li>Operating current: 20mA @ 5V</li><li>Operating temperature range: 0°C ~ + 50°C</li><li>Output: TTL(Black for LOW output, White for HIGH output)</li><li>Size:28x10mm</li></ul></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/wiki/index.php/Line_Tracking_Sensor_for_Arduino_V4_SKU:SEN0017\">Wiki Doc</a>           </li><li><a href=\"https://github.com/Arduinolibrary/DFRobot_line_tracking/blob/master/Tracker%20V4.0%20R2%20Sch.pdf?raw=true\">Schematic</a>    </li><li><a href=\"http://www.dfrobot.com/image/data/SEN0017/V2.0/ITR20001-T.pdf\">Datasheet</a></li></ul><br/><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>Line Tracking Sensor for Arduino V4 x1</li></ul></div></div></div></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></li></ul></section></section></section><p>Document edited with <a href=\"http://www.html-cleaner.com\" target=\"_blank\">HTML-Cleaner.com</a></p>", type:"sensors", image:"/images/products/SEN0098.jpg"}, {id:23, title:"WiDo ­Open Source IoT Node", model:"DFR0321", price:1200, description:"Wido is an Arduino compatible WIFI IoT Node development board, which integrates with WG1300 WIFI solution. The microcontroller of Wido is ATMEL ATmega32U4.", html:"<section><section><section><ul><li><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>Power Supply range: 5v or 7-12v</li><li>Arduino Leonardo Compatible</li><li>Integrate with WG1300 WIFI chip and support 2.4GHz IEEE 802.11 b/g network</li><li>WIFi and MicroSD driven by SPI port</li><li>On board 2.4G PCB Antenna</li><li>Driver pins</li><li>WIFI Module-D7(IRQ),D5(VBAT),D10(CS),D14(MISO),D15(SCK),D16(MOSI)</li><li>MicroSD-D4(CS),D14(MISO),D15(SCK),D16(MOSI)</li><li>User friendly Reset button</li><li>Dimension: 72 mm x 55 mm</li></ul></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/wiki/index.php/Wido-WIFI_IoT_Node_SKU:DFR0321\">Wiki Doc</a></li><li><a href=\"https://github.com/Lauren-ED209/Adafruit_CC3000_Library/archive/master.zip\">Arduino library</a></li><li><a href=\"https://github.com/Lauren-ED209/Adafruit_CC3000_Library\">Github</a></li><li><a href=\"https://github.com/Lauren-ED209/Wido-OpenSource-IOT-Node\">Schematic</a></li></ul><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>WiDo x1</li></ul></div></div></div></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></li></ul></section></section></section>", type:"boards", image:"/images/products/DFR0321.jpg"}, {id:24, title:"Tilt/Pan Kit (5kg)", price:900, model:"FIT0045", description:"This DF05BB Pan and Tilt assembly for horizontal surface mount. Made using two DFRobot servo brackets. Perfect for your small remote piloted robot! Includes hardware and two DF05 ball bearing servos.", html:"<section><section><section><ul><li><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><p>This DF05BB Pan and Tilt assembly for horizontal surface mount. Made using two DFRobot servo brackets. Perfect for your small remote piloted robot! Includes hardware and two DF05 ball bearing servos.</p></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>Working Voltage: 4.8-6V</li><li>Working current: 0.1-0.8 A</li><li>Torque: 4.8kg-cm @ 4.8V ; 5.5kg-cm @6V  </li><li>Average speed: 60 rpm</li><li>Rotation range: 0- 120</li><li>Working Temperature: 0℃~55℃</li><li>Size: 41x20x38mm</li><li>Weight: 48g</li></ul> <p> </p></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/image/data/FIT0045/Pan-tilt--assembly-guide-v0.1.rar\"><strong>Assembly guide</strong></a></li></ul><br/><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div> <p> </p><ul><li>DF05BB Standard Servo x2</li><li>Aluminum multifunction bracket x1</li><li>Aluminum U-shape bracket x1</li><li>Bearing cup x1</li><li>High-quality sets of screw nuts x1</li></ul></div></div></div></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></li></ul></section></section></section>", type:"robotics", image:"/images/products/FIT0045.png"}, {id:25, title:"Analog LPG Gas Sensor(MQ6)", model:"SEN0131", price:300, description:"The MQ6 is a simple-to-use liquefied petroleum gas (LPG) sensor. It can be used in gas leakage detecting equipment in consumer and industry applications,this sensor is suitable for detecting LPG, iso-butane, propane, LNG. Avoid the noise of alcohol, cooking fumes and cigarette smoke. The sensitivity can be adjusted by the potentiometer.", html:"<section><section><section><ul><li><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><div><div><div><p><strong>INTRODUCTION<br/></strong></p></div><div><div>The MQ6 is a simple-to-use liquefied petroleum gas (LPG) sensor. It can be used in gas leakage detecting equipment in consumer and industry applications,this sensor is suitable for detecting LPG, iso-butane, propane, LNG. Avoid the noise of alcohol, cooking fumes and cigarette smoke. The sensitivity can be adjusted by the potentiometer.</div> <div> </div> <div> </div></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>Power supply needs: 5V</li><li>Interface type: Analog</li><li>Pin Definition:  1-Output  2-GND  3-VCC</li><li>High sensitivity to LPG, iso-butane, propane</li><li>Small sensitivity to alcohol, smoke</li><li>Fast response</li><li>Stable and long life</li><li>Simple drive circuit</li><li>Size: 40x20mm</li></ul> <div> </div></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/wiki/index.php?title=LPG_Gas_Sensor(MQ6)_(SKU:SEN0131)\">Wiki Doc</a></li><li><a href=\"http://www.dfrobot.com/image/data/SEN0131/MQ-6.pdf\">MQ6 datasheet</a></li><li><a href=\"http://www.dfrobot.com/image/data/SEN0131/MQ-X%20Schematic.pdf\">Schematic</a></li></ul><br/><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>LPG Gas Sensor (MQ6) x1</li></ul></div></div></div></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></li></ul></section></section></section>", type:"sensors", image:"/images/products/SEN0131.jpg"}, {id:26, title:"Analog Gas Sensor(MQ4)", model:"SEN0129", price:300, description:"The MQ4 is used in gas leakage detecting equipment in consumer and industry markets,this sensor is suitable for detecting CH4,Natural gas, LNG, avoid exposure to alcohol, cooking fumes, and cigarette smoke. The sensitivity can be adjusted by the potentiometer.", html:"<section><section><section><ul><li><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><div><div><div><p><strong>INTRODUCTION<br/></strong></p></div><div><div>The MQ4 is used in gas leakage detecting equipment in consumer and industry markets,this sensor is suitable for detecting CH4,Natural gas, LNG, avoid exposure to alcohol, cooking fumes, and cigarette smoke. The sensitivity can be adjusted by the potentiometer.</div> <div><div>Notice:The new version of analog sensor port pin mapping has been changed as the following two features.Please check the <a href=\"http://www.dfrobot.com/community/trick-for-changing-sensor-cable-pin-mapping.html\">tips for changing sensor cable pin mapping</a> while using the I/O Expansion shield. We will continue to update. For the inconvenience caused, please understand.</div><div><img src=\"http://www.dfrobot.com/image/data/SEN0127/pin%20mapping%20comparison.jpg\" alt=\"\"/></div></div> <div><div> </div>Improvement List<ul><li>Standard assembling structure (Times-of-5mm Center distance between two 3mm mounting holes)</li><li>Easily recognitive interfaces of sensors (\"A\" for analog and \"D\" for digital)</li><li>Icons to simplely illustrate sensor function </li><li>High quality connector</li><li>Immersion gold surface</li></ul></div></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>Power supply: 5V</li><li>Interface type: Analog</li><li>Pin Definition:  1-Output  2-GND  3-VCC</li><li>High sensitivity to CH4，Natural gas</li><li>Small sensitivity to alcohol, smoke</li><li>Fast response</li><li>Stable and long life</li><li>Simple drive circuit</li><li>Size: 40x20mm</li></ul> <div> </div></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/wiki/index.php?title=Analog_Gas_Sensor(MQ4)_(SKU:SEN0129)\">Wiki Doc</a></li><li><a href=\"http://www.dfrobot.com/image/data/SEN0129/MQ-4.pdf\">MQ4 datasheet</a></li></ul><br/><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>Analog Gas sensor (MQ4) x1</li></ul></div></div></div></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></li></ul></section></section></section><p>Document edited with <a href=\"http://www.html-cleaner.com\" target=\"_blank\">HTML-Cleaner.com</a></p>", type:"sensors", image:"/images/products/SEN0131.jpg"}, {id:27, title:"DC­ to DC boost converter", model:"DFR0123", price:300, description:"This is multipurpose boost converter, a breakout board. Supply voltage is as low as 3.7v and it boosts to as high as 34v.  With this module, you can now power your Arduino with our 3.7V lipo battery or use it to regulate any other project. The tiny form factor and its simplicty makes it for a very nice addition for all projects requiring an extra power module.", html:"<section><section><section><ul><li><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><p>This is multipurpose boost converter, a breakout board. Supply voltage is as low as 3.7v and it boosts to as high as 34v.  With this module, you can now power your Arduino with our <a href=\"http://www.dfrobot.com/index.php?route=product/product&amp;product_id=437\">3.7V lipo battery</a> or use it to regulate any other project.<br/>The tiny form factor and its simplicty makes it for a very nice addition for all projects requiring an extra power module.</p><p><strong>Note:</strong></p><ol><li>This board does not have reverse polarity protection, so please be sure to recognize the polarity of your connections!</li><li>The input voltage must be less than output voltage, otherwise, it may damage the board.</li></ol> </div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div> <ul><li>Input voltage:3.7-34V</li><li>Output voltage:3.7-34V</li><li>Max input current:3A</li><li>Max Power:15W</li><li>Efficiency: 90%</li><li>Size:32x34x20 mm</li></ul></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/image/data/DFR0123/LM1577.PDF\">LM2577 Datasheet</a></li></ul><br/><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>DC-DC boost converter    x1</li></ul></div></div></div></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></li></ul></section></section></section>", type:"robotics", image:"/images/products/DFR0123.jpg"}, {id:28, title:"GPS/GPRS/GSM Shield V3.0", model:"TEL0051", price:3000, description:"This shield with a Quad-band GSM/GPRS engine works on frequencies EGSM 900MHz/DCS 1800MHz and GSM850 MHz/PCS 1900MHz. It also supports GPS technology for satellite navigation. It's possible for your robot and control system to send messages and use the GSM network.", html:"<section><section><section><ul><li><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><div><div>This is a GPS/GPRS/GSM shield from DFRobot. This shield with a Quad-band GSM/GPRS engine works on frequencies EGSM 900MHz/DCS 1800MHz and GSM850 MHz/PCS 1900MHz. It also supports GPS technology for satellite navigation. Its possible for your robot and control system to send messages and use the GSM network.</div><div> </div><div>It is controlled via AT commands (GSM07.07 ,07.05 and SIMCOM enhanced AT Commands). And the design of this shield allows you to drive the GSM &amp; GPS function directly with the computer and the Arduino Board. It includes a high-gain SMD antenna for GPS and a flexible GSM antenna 8.5cm ( U.FL connector ).</div><div> </div><div>This GPS/GPRS/GSM shield uses an embedded SIM908 chip from SIMCom. Featuring an industry-standard interface and GPS function, the combination of both technologies allows items, vehicles and people to be tracked seamlessly at any location and anytime with signal coverage.</div></div><div> </div></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>Power supply: 6-12v</li><li>Low power consumption (100mA@7v - GSM mode)</li><li>Quad-Band 850/900/18001900MHz</li><li>GPRS multi-slot class 10</li><li>GPRS mobile station class B</li><li>Compliant to GSM phase 2/2+</li><li>Class 4 (2 W @ 850/900 MHz)</li><li>Class 1 (1 W @ 1800/1900MHz)</li><li>Control via AT commands(GSM07.07 ,07.05 and SIMCOM enhanced AT Commands)</li><li>Support GPS technology for satellite navigation</li><li>Embeded high-gain SMD antennas for GPS &amp; GSM</li><li>Directly support 4*4 button pad</li><li>USB/Arduino control switch</li><li>Programmable switch for Arduino</li><li>LED indicators for power supply, network states and working status</li><li>Board Surface:Immersion Gold</li><li>Switches:<ul><li>S1 -- Programming mode / Communication mode</li><li>S2 -- Controlling interface: USB / Arduino</li></ul></li><li>Interfaces:<ul><li>Embedded SIM card holder</li><li>Speaker &amp; Mic Jack socket</li></ul></li><li>Size: 81x70mm </li></ul><div> </div><ul><li>Specifications for SMS via GSM / GPRS<ul><li>Point-to-point MO and MT</li><li>SMS cell broadcast</li><li>Text and PDU mode </li></ul></li></ul><div> </div><ul><li>Specification for GPS<ul><li>Receiver 42 channels, GPS L1 C/A code, High-performance STE engine</li><li>Sensitivity:<ul><li>Tracking: -160 dBm</li><li>Cold starts: -143 dBm</li></ul></li><li>Time-To-First-Fix:<ul><li>Cold starts: 30s (typ.)</li><li>Hot starts: 1s (typ.)</li></ul></li><li><div>Accuracy:Horizontal position: &lt;2.5m CEP</div></li><li><div>Power consumption (GSM engine in idle mode):Acquisition 77mA,Tracking 76mA</div></li></ul></li></ul><div> </div></div></div></div></section><section><div><div><div><p><strong>OPTIONAL PARTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/index.php?route=product/product&amp;product_id=701&amp;search=sma&amp;description=true\">Antenna adapter</a></li><li><a href=\"http://www.dfrobot.com/index.php?route=product/product&amp;product_id=1012&amp;search=gps&amp;description=true\">Antenna amplifier</a></li></ul></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/wiki/index.php/GPS/GPRS/GSM_Module_V3.0_(SKU:TEL0051)\">Wiki</a></li><li><a href=\"http://www.dfrobot.com/image/data/TEL0051/GSM+GPRS+GPS%20SIM908%20V3.0.pdf\">Schematic<span> </span></a>       </li><li><a href=\"http://www.dfrobot.com/image/data/TEL0051/3.0/NMEA%20Reference%20Manual-Rev2.1-Dec07.pdf\">SiRF NMEA Protocol</a>      </li><li><a href=\"http://www.dfrobot.com/image/data/TEL0051/3.0/SIM908_AT%20Command%20Manual_V1.01.pdf\">AT Command manual</a>      </li><li><a href=\"http://www.dfrobot.com/image/data/TEL0051/3.0/SIM908_SIM548C_ATC_Comparison_V1.00.pdf\">SIM908_SIM548C_ATC_Comparison</a>       </li><li><a href=\"http://www.dfrobot.com/image/data/TEL0051/3.0/SIM908%20datasheet.pdf\">SIM908 Datasheet</a>      </li><li><a href=\"http://www.simcom.us/product_detail.php?cid=1&amp;pid=38\">SIM908 Product Page</a>  </li><li><a href=\"https://www.youtube.com/watch?v=6ryQ-aTnO6I&amp;feature=youtu.be\">Youtube Video</a>               </li><li><a href=\"https://github.com/DFRobot/GPS-GPRS-GSM-Shield-V3.0/tree/master/gps_gsm_sim908\">Test library for Leonardo based boards</a></li></ul><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>GPS/GPRS/GSM Module V3.0 x1</li></ul></div></div></div></section><section><div><div><div><p><strong>PROJECTS</strong></p></div><div><ul><li>Geolocator sample script contributed by N4rf ( <a href=\"http://www.dfrobot.com/forum/index.php?topic=886.msg22717#msg22717\">forum discussion</a>, <a href=\"https://github.com/DFRobot/GPS-GPRS-GSM-Shield-V3.0/tree/master/geoLocator\">software sources</a> )</li><li>DTMF encoder / decoder world-wide remote control robot ( <a href=\"http://www.dfrobot.com/forum/index.php?topic=1590.msg5377#msg5377\">forum discussion</a> )</li></ul></div></div></div></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></li></ul></section></section></section>", type:"boards", image:"/images/products/TEL0051.jpg"}, {id:29, title:"MicroSD card module", model:"DFR0229", price:300, description:"This is a Micro SD(TF) module from DFRobot. It is compatible with TF SD card (commonly used in Mobile Phone) which is the most tiny card in the market. SD module has various applications such as data logger, audio, video, graphics. This module will greatly expand the capbility an Arduino can do with their poor limited memory. ", html:"<section><section><section><ul><li><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><div>This is a Micro SD(TF) module from DFRobot. It is compatible with TF SD card (commonly used in Mobile Phone) which is the most tiny card in the market. SD module has various applications such as data logger, audio, video, graphics. This module will greatly expand the capbility an Arduino can do with their poor limited memory. </div> <div>This module has SPI interface and 5V power supply which is compatible with Arduino UNO/Mega.   The Pinout is fully compatiblw with DFRobots <a href=\"http://www.dfrobot.com/index.php?route=product/product&amp;filter_name=DFR0265&amp;product_id=1009#.UjlqHzY63nc\" target=\"_blank\">IO Expansion Shield V</a><a href=\"http://www.dfrobot.com/index.php?route=product/product&amp;filter_name=DFR0265&amp;product_id=1009\">7</a>. </div> <div> </div></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>Working Voltage:5V</li><li>Size:20x28mm</li><li>Interface: SPI</li><li>Compatible: MicroSD(TF)</li></ul> <div> </div></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/wiki/index.php/MicroSD_card_module_for_Arduino_(SKU:DFR0229)\">Wiki Page</a>                </li><li><a href=\"http://www.dfrobot.com/image/data/DFR0229/MicroSD%20ModuleV1.0_Sch.pdf\">Schematics</a>   </li><li><a href=\"http://www.dfrobot.com/image/data/DFR0229/SdFat.zip\">Arduino library</a></li><li><a href=\"https://code.google.com/p/sdfatlib/\">sdfatlib google code link</a>(FAT16/32 library for SD/SDHC card)</li></ul><br/><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>MicroSD card module for Arduino   x1</li></ul></div></div></div></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></li></ul></section></section></section>", type:"boards", image:"/images/products/DFR0229.jpg"}, {id:30, title:"DFPlayer ­ A Mini MP3 Player", price:320, model:"DFR0299", description:"Sing for the moment! The DFPlayer Mini is a small and low cost MP3 module with an simplified output directly to the speaker. The module can be used as a stand alone module with attached battery, speaker and push buttons or used in combination with an Arduino UNO or any other with RX/TX capabilities. ", html:"<section><section><section><ul><li><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><div>Sing for the moment! The DFPlayer Mini is a small and low cost MP3 module with an simplified output directly to the speaker. The module can be used as a stand alone module with attached battery, speaker and push buttons or used in combination with an Arduino UNO or any other with RX/TX capabilities. </div><p> </p><div>The DFPlayer perfectly integrates hard decoding module, which supports common audio formats such as MP3, WAV and WMA. Besides, it also supports TF card with FAT16, FAT32 file system. Through a simple serial port, you can play the designated music without any other tedious underlying operations.</div></div></div></div></section><section><div><div><div><p><strong>APPLICATIONS</strong></p></div><div><ul><li>Car navigation voice broadcast;</li><li>Road transport inspectors, toll stations voice prompts;</li><li>Railway station, bus safety inspection voice prompts;</li><li>Electricity, communications, financial business hall voice prompts;</li><li>Vehicle into and out of the channel verify that the voice prompts;</li><li>The public security border control channel voice prompts;</li><li>Multi-channel voice alarm or equipment operating guide voice;</li><li>The electric tourist car safe driving voice notices;</li><li>Electromechanical equipment failure alarm;</li><li>Fire alarm voice prompts;</li><li>The automatic broadcast equipment, regular broadcast.</li></ul></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>Supported sampling rates (kHz): 8/11.025/12/16/22.05/24/32/44.1/48</li><li>24 -bit DAC output, support for dynamic range 90dB , SNR support 85dB</li><li>Fully supports FAT16 , FAT32 file system, maximum support 32G of the TF card, support 32G of U disk, 64M bytes NORFLASH</li><li>A variety of control modes, I/O control mode, serial mode, AD button control mode</li><li>Advertising sound waiting function, the music can be suspended. when advertising is over in the music continue to play</li><li>Audio data sorted by folder, supports up to 100 folders, every folder can hold up to 255 songs</li><li>30 level adjustable volume, 6 -level EQ adjustable</li></ul></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"https://github.com/DFRobot/DFPlayer-Mini-mp3/archive/master.zip\">Arduino Library V2.0</a></li><li><a href=\"http://www.dfrobot.com/wiki/index.php/DFPlayer_Mini_SKU:DFR0299\">Wiki Doc</a></li><li><a href=\"http://www.dfrobot.com/image/data/DFR0299/DFPlayer%20Mini%20Manul.pdf\">User Manual</a></li></ul><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>DFPlayer Mini x1</li></ul></div></div></div></section><section><div><div><div><p><strong>PROJECTS</strong></p></div><div><ul><li><a href=\"http://stonez56.blogspot.tw/2015/03/arduino-dfplayer-mini-mp3-module.html\">Arduino - Test DFPlayer Mini MP3 Module by Stonez</a></li></ul></div></div></div></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></li></ul></section></section></section>", type:"boards", image:"/images/products/DFR0299.jpg"}, {id:31, title:"LED Voltage Meter", price:320, model:"DFR0130", description:"This is a standalone DC voltage meter. It measures 3V-30V with 1% accuracy.  Best suited for battery level display. Just apply two wires on the power without any extra circuit or components, it gives the reading straight away.  Easy to use, and is a good company with robotic applications.", html:"<section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><p> </p><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><p>This is a standalone DC voltage meter. It measures 3V-30V with 1% accuracy.  Best suited for battery level display. Just apply two wires on the power without any extra circuit or components, it gives the reading straight away.  Easy to use, and is a good company with robotic applications.</p> <p>Three colors options: green / blue / red.</p></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>Measure Voltage:3.0-30V DC</li><li>Refresh Rate:2 Hz</li><li>Accuracy:1%</li></ul></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>LED Voltage Meter (Blue)   x1</li></ul></div></div></div></section></section><section><div> </div></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section>", type:"robotics", image:"/images/products/DFR0130.jpg"}, {id:32, title:"Mini Bread Board Self Adhesive", price:170, model:"FIT0008", description:"This is a very small breadboard with 170 tie points. This bread board is compatible with the Arduino Proto Shield. Strong self-adhesive backing. Measures 1.8x1.4.", html:"<section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><div>This is a very small breadboard with 170 tie points. This bread board is compatible with the Arduino Proto Shield. Strong self-adhesive backing. Measures 1.8\"x1.4\".You also have choices of different colors.</div> <div> </div> <div> </div></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>170 tie point breadboard</li><li>17 x 5 x 2 points</li><li>Adhesive backing</li><li>Black</li></ul> <p> </p></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>Black 170 tie point bread board ×1</li></ul></div></div></div></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section>", type:"robotics", image:"/images/products/FIT0008.jpg"}, {id:33, title:"Arduino Yun", model:"DFR0297", price:4000, description:"The Arduino Yún is a newcomer microcontroller board in the Arduino boards family. It is a microcontroller board based on the ATmega32u4 (datasheet) and the Atheros AR9331. The Atheros processor supports a Linux distribution based on OpenWRT named Linino. The board has built-in Ethernet and WiFi support, a USB-A port, micro-SD card slot, 20 digital input/output pins (of which 7 can be used as PWM outputs and 12 as analog inputs), a 16 MHz crystal oscillator, a micro USB connection, an ICSP header, and 3 reset buttons.", html:"<section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><div> </div> <div>The Arduino Yún is a newcomer microcontroller board in the Arduino boards family. It is a microcontroller board based on the ATmega32u4 (<a href=\"http://www.atmel.com/dyn/resources/prod_documents/7766S.pdf\">datasheet</a>) and the Atheros AR9331. The Atheros processor supports a Linux distribution based on OpenWRT named Linino. The board has built-in Ethernet and WiFi support, a USB-A port, micro-SD card slot, 20 digital input/output pins (of which 7 can be used as PWM outputs and 12 as analog inputs), a 16 MHz crystal oscillator, a micro USB connection, an ICSP header, and 3 reset buttons.</div> <div> </div> <div>The Yún distinguishes itself from other Arduino boards in that it can communicate with the Linux distribution onboard, offering a powerful networked computer with the ease of Arduino. In addition to Linux commands like cURL, you can write your own shell and python scripts for robust interactions.</div> <div> </div> <div>The Yún is similar to the Leonardo in that the ATmega32u4 has built-in USB communication, eliminating the need for a secondary processor. This allows the Yún to appear to a connected computer as a mouse and keyboard, in addition to a virtual (CDC) serial / COM port.</div> <div> </div> <div>The Bridge library facilitates communication between the two processors, giving Arduino sketches the ability to run shell scripts, communicate with network interfaces, and receive information from the AR9331 processor. The USB host, network interfaces and SD card are not connected to the 32U4, but the AR9331, and the Bridge library also enables the Arduino to interface with those peripherals.</div> <div> </div> <div><img src=\"http://www.dfrobot.com/image/data/DFR0297/BridgeInShort.png\" alt=\"\"/></div></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><div> </div> <div>Because the Yún has two processors, the specification section shows the characteristics of each one in two separate tables.</div> <div> </div> <div><strong>AVR Arduino microcontroller</strong></div> <div><ul><li>Microcontroller ATmega32u4</li><li>Operating Voltage 5V</li><li>Input Voltage 5V</li><li>Digital I/O Pins 20</li><li>PWM Channels 7</li><li>Analog Input Channels 12</li><li>DC Current per I/O Pin 40 mA</li><li>DC Current for 3.3V Pin 50 mA</li><li>Flash Memory 32 KB (of which 4 KB used by bootloader)</li><li>SRAM 2.5 KB</li><li>EEPROM 1 KB</li><li>Clock Speed 16 MHz</li></ul><div><strong>Linux microprocessor</strong></div><ul><li>Processor Atheros AR9331</li><li>Architecture MIPS @400MHz</li><li>Operating Voltage 3.3V</li><li>Ethernet IEEE 802.3 10/100Mbit/s</li><li>WiFi IEEE 802.11b/g/n</li><li>USB Type-A 2.0 Host/Device</li><li>Card Reader Micro-SD only</li><li>RAM 64 MB DDR2</li><li>Flash Memory 16 MB</li><li>PoE compatible 802.3af card support (see the note below)</li></ul></div></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/image/data/DFR0297/arduino-Yun-schematic.pdf\">Schematic</a></li><li><a href=\"http://arduino.cc/en/Main/ArduinoBoardYun?from=Main.ArduinoYUN#.UxQGv_mSySq\">Product Page</a></li><li><a href=\"http://arduino.cc/en/Main/Software\">Arduino IDE Download</a></li><li><a href=\"http://arduino.cc/en/Guide/ArduinoYun#toc15\">Guide to the Arduino Yún</a></li></ul><br/><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>Arduino Yún x1</li></ul></div></div></div></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section>", type:"boards", image:"/images/products/DFR0297.png"}, {id:34, title:"Relay Module V3.1", model:"DFR0017", price:250, description:"Some of the most common applications with Arduino are: Home lighting, electrical appliances of high power and other equipments. The modular design makes it easy to integrate with a controller board. The Relay integrates a status LED, in order to acknoledge visually it's status ON or OFF. It can be controlled through the digital IO port, with a simple HIGH or LOW on Arduino compatible boards. Other boards will work requiring same voltage level. Other usages include control of solenoid valves, lamps, motors and other high current or high voltage devices.", html:"<section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><section><div><div><div><p><strong>INTRODUCTION</strong></p></div><div><p>The DFRobot Relay Module is a standard relay used with a controller board to interface external electrical circuits or modules. Some of the most common applications with Arduino are: Home lighting, electrical appliances of high power and other equipments. The modular design makes it easy to integrate with a controller board. The Relay integrates a status LED, in order to acknoledge visually its status ON or OFF. It can be controlled through the digital IO port, with a simple HIGH or LOW on Arduino compatible boards. Other boards will work requiring same voltage level. Other usages include control of solenoid valves, lamps, motors and other high current or high voltage devices.</p> <p> </p> <p>Latest Update: V3.1</p><ul><li>Improved the silkscreen on the bottom layer of the sensor to indicate the hardware connection.</li><li>Some kits may include acrylic holder and nylon screw set to prevent shorting of high power interface with metalic surface.</li></ul></div></div></div></section><section><div><div><div><p><strong>SPECIFICATION</strong></p></div><div><ul><li>Single relay board</li><li>Rated through-current: 10A (NO) 5A (NC)</li><li>Maximum switching voltage: 150VAC 24VDC</li><li>Interface: Digital</li><li>Control signal: TTL level</li><li>Contact Rating (Res. Load): 10A 277VAC / 24VDC</li><li>Max. switching voltage 250VAC / 30VDC</li><li>Max. switching current 15A</li><li>Max. switching power 2770VA 240W </li><li>UL Rating: 10A 120VAC / 10A 277VAC</li><li>Operate time (at nomi. Vot.): 10ms</li><li>Release time (at nomi. Vot.): 5ms</li><li>High quality connector</li><li>Immersion gold surface</li></ul></div></div></div></section><section><div><div><div><p><strong>DOCUMENTS</strong></p></div><div><ul><li><a href=\"http://www.dfrobot.com/wiki/index.php?title=Relay_Module_(Arduino_Compatible)_(SKU:_DFR0017)\">Wiki Doc</a></li><li><a href=\"http://www.dfrobot.com/image/data/DFR0017/DFR-0017-Relay%20JQC-3FF.pdf\">Datasheet</a></li><li><a href=\"http://www.dfrobot.com/image/data/DFR0017/Relay%20Module%20V3%20SCH.pdf\">Schematic</a></li><li><a href=\"http://www.dfrobot.com/wiki/index.php?title=Tutorial:_DFR0017_V2_Relay\">How to use relay tutorial </a></li></ul><br/><div> </div></div></div></div></section><section><div><div><div><p><strong>SHIPPING LIST</strong></p></div><div><ul><li>Relay Module V3.1 x1</li><li>Digital  Cable  x1</li></ul></div></div></div></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section></section>", type:"robotics", image:"/images/products/DFR0017.jpg"}]});exports['default'] = Product;

});
define('rockincircuits/router', ['exports', 'ember', 'rockincircuits/config/environment'], function (exports, Ember, config) {

	'use strict';

	var Router = Ember['default'].Router.extend({
		location: config['default'].locationType
	});

	Router.map(function () {
		this.resource("products", function () {
			this.route("boards");
			this.route("sensors");
			this.route("robotics");
			this.resource("product", { path: "/:product_slug" });
		});

		this.resource("blogs", function () {
			this.resource("blog", { path: "/:blog_slug" });
		});

		this.route("about");

		this.resource("contact", function () {
			this.route("hire-us");
			this.route("ask-us");
		});

		this.route("checkout");
		this.route("success", { path: "checkout/success" });
		this.resource("search");
		this.route("solutions");
		this.resource("information", function () {
			this.route("termsandcondition");
			this.route("shipping");
			this.route("payment");
			this.route("privacypolicy");
		});
		this.route("catchall", { path: "/*wildcard" });
	});

	exports['default'] = Router;

});
define('rockincircuits/routes/application', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			return this.store.find("item");
		},
		actions: {
			loading: function loading() {
				return true;
			},
			error: function error() {
				this.transitionTo("catchall", "application-error");
			} } });

});
define('rockincircuits/routes/contact/ask-us', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

	// renderTemplate: function(controller){
	// 	this.render('contact/index');
	// }

});
define('rockincircuits/routes/contact/hire-us', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

	// 	renderTemplate: function(controller){
	// 		this.render('contact/index');
	// 	}

});
define('rockincircuits/routes/contact/index', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			this.transitionTo("contact.hire-us");
		},
		actions: {
			loading: function loading() {
				return true;
			} } });

});
define('rockincircuits/routes/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    actions: {
      loading: function loading() {
        //var view = this.container.lookup('view:loading').append();
        //this.router.one('didTransition', view, 'destroy');
        return true;
      } },

    model: function model() {} });

  // return new Ember.RSVP.Promise(function (resolve, reject) {
  //   	  setTimeout(function () {resolve({});}, 3000);
  //   	});

});
define('rockincircuits/routes/loading', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

	//renderTemplate: function() {
	//this.render('working');
	//}

});
define('rockincircuits/routes/product', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model(params) {
      var products = this.modelFor("products");
      return products.findBy("slug", params.product_slug);
    },

    serialize: function serialize(model) {
      return { product_slug: model.get("slug") };
    },

    renderTemplate: function renderTemplate() {
      this.render();
      var modalController = this.controllerFor("related");
      this.render("related", {
        into: "product",
        outlet: "sidebar",
        model: this.modelFor("products"),
        controller: modalController
      });
    } });

});
define('rockincircuits/routes/products', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    actions: {
      loading: function loading() {
        //displayLoadingSpinner();

        // Return true to bubble this event to `FooRoute`
        // or `ApplicationRoute`.
        return true;
      } },
    beforeModel: function beforeModel() {},
    model: function model() {
      return this.store.find("product");
    },
    afterModel: function afterModel() {}
  });

  // return new Ember.RSVP.Promise(function (resolve, reject) {
  //   	  setTimeout(function () {resolve({});}, 5000);
  //   });

});
define('rockincircuits/routes/products/boards', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			return this.modelFor("products").filterProperty("type", "boards");
		},

		renderTemplate: function renderTemplate(controller) {
			this.render("products/index", { controller: controller });
		}

	});

});
define('rockincircuits/routes/products/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({

    beforeModel: function beforeModel() {},
    model: function model() {
      return this.modelFor("products");
    },
    actions: {
      loading: function loading() {
        return true;
      } } });

  // return new Ember.RSVP.Promise(function (resolve, reject) {
  //   	  setTimeout(function () {resolve({});}, 5000);
  //   });

  /*
  queryParams: {
    query: {
      // Opt into full transition
      refreshModel: true
    }
  },

  model: function(params) {
    if (!params.query) {
      return []; // no results;
    }
    
    var regex = new RegExp(this.get('queryField'), 'i');
    return this.modelFor('products').filter(function(product) {
      return regex.exec(product.title);
    });
  }	
  */

});
define('rockincircuits/routes/products/robotics', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			return this.modelFor("products").filterProperty("type", "robotics");
		},

		renderTemplate: function renderTemplate(controller) {
			this.render("products/index", { controller: controller });
		}

	});

});
define('rockincircuits/routes/products/sensors', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			return this.modelFor("products").filterProperty("type", "sensors");
		},

		renderTemplate: function renderTemplate(controller) {
			this.render("products/index", { controller: controller });
		}

	});

});
define('rockincircuits/routes/related', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({

    model: function model() {
      console.log("related model");
      return this.modelFor("products").filterProperty("type", "boards");
    },
    /*
    renderTemplate: function(){
          this.render('name', {
          into: 'product',
          outlet: 'sidebar',
          
          //controller: modalController 
        });
    },
    */
    actions: {
      loading: function loading() {
        return true;
      } } });

  //
  /*
  renderTemplate: function() {
      this.render('favoritePost', {   // the template to render
        into: 'posts',                // the template to render into
        outlet: 'posts',              // the name of the outlet in that template
        controller: 'blogPost'        // the controller to use for the template
      });
  */

});
define('rockincircuits/routes/search', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
			queryParams: {
					query: {
							refreshModel: true
					}
			},
			model: function model(params) {
					if (!params.query) {
							return [];
					}
					var regex = new RegExp(params.query, "i");
					return this.store.find("product").then(function (products) {
							var arr = products.filter(function (product) {
									return regex.exec(product.get("title"));
							});
							return arr;
					});
			},
			actions: {
					loading: function loading() {
							return true;
					} } });

});
define('rockincircuits/routes/solutions', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		actions: {
			loading: function loading() {
				return true;
			} } });

});
define('rockincircuits/serializer/application', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].LSSerializer.extend();

});
define('rockincircuits/serializer/blog', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].LSSerializer.extend();

});
define('rockincircuits/serializer/order', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].LSSerializer.extend();

});
define('rockincircuits/templates/about', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" 			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n			  	 \n			  	");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","parallax_desc");
          var el3 = dom.createTextNode("\n			        \n			        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","page_title text_white no_bottom_border about");
          var el4 = dom.createTextNode("\nRockin' Circuits \n");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3,"class","row ");
          var el4 = dom.createTextNode("\n\n	is an online electronics store that sells electronics parts and provide software development services to make your electronics, mobile, web projects possible. \n	");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","row   emphasis");
          var el5 = dom.createTextNode("We aim to assist in unleashing your \n		");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("span");
          dom.setAttribute(el5,"class"," ");
          var el6 = dom.createTextNode("inner inventor");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode(" \n	");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(".\n\n	Rockin' Circuits is a solid believer in the idea of open source technology. We believe an open market is a productive market. We belief that open source technology promotes ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("span");
          dom.setAttribute(el4,"class"," ");
          var el5 = dom.createTextNode("innovation");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" and ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("span");
          dom.setAttribute(el4,"class"," ");
          var el5 = dom.createTextNode("creativity");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(".\n\n");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n			  	\n	  	");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class"," emphasis");
          var el4 = dom.createTextNode("\n	  		We design and develop ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("span");
          dom.setAttribute(el4,"class"," ");
          var el5 = dom.createTextNode("simple solutions");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" to ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("span");
          dom.setAttribute(el4,"class"," ");
          var el5 = dom.createTextNode("complex problems");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(".\n	  	");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n			  	");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n 			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" 			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n			  	 \n			  	");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","parallax_desc");
          var el3 = dom.createTextNode("\n			        \n			        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","page_title no_bottom_border about");
          var el4 = dom.createTextNode("\nRockin' Circuits \n");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3,"class","row ");
          var el4 = dom.createTextNode("is an online electronics store that sells electronics parts and provide software development services to make your electronics, mobile, web projects possible. ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","row text_green emphasis");
          var el5 = dom.createTextNode("We aim to assist in unleashing your ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("span");
          dom.setAttribute(el5,"class","text_green");
          var el6 = dom.createTextNode("inner inventor");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(".\n\nRockin' Circuits is a solid believer in the idea of open source technology. We believe an open market is a productive market. We belief that open source technology promotes ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("span");
          dom.setAttribute(el4,"class","text_green");
          var el5 = dom.createTextNode("innovation");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" and ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("span");
          dom.setAttribute(el4,"class","text_green");
          var el5 = dom.createTextNode("creativity");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(".");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n			  	\n	  	");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","text_green emphasis");
          var el4 = dom.createTextNode("\n	  		We design and develop ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("span");
          dom.setAttribute(el4,"class","text_green");
          var el5 = dom.createTextNode("simple solutions");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" to ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("span");
          dom.setAttribute(el4,"class","text_green");
          var el5 = dom.createTextNode("complex problems");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(".\n	  	");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n			  	");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n 			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createElement("div");
        dom.setAttribute(el0,"class","container whole");
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","paralla");
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","parallax__group filler about ");
        dom.setAttribute(el2,"id","about");
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","parallax__layer parallax__layer--back");
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","page_title text-uppercase text_green no_bottom_border");
        var el5 = dom.createTextNode("\n			\n		");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n	");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","parallax__layer parallax__layer--base");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("	  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","parallax__layer parallax__layer--base");
        var el4 = dom.createTextNode("\n\n\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("	  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("	\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [1, 1]);
        var morph0 = dom.createMorphAt(dom.childAt(element0, [3]),0,1);
        var morph1 = dom.createMorphAt(dom.childAt(element0, [5]),0,1);
        block(env, morph0, context, "md-card-panel", [], {"class": "white", "bodyClass": "transparent", "class": "parallax_card about shadow"}, child0, null);
        block(env, morph1, context, "md-card-panel", [], {"class": "", "bodyClass": "center text-green", "class": "parallax_card about"}, child1, null);
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode("Rockin' Circuits");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","/logo.png");
          dom.setAttribute(el1,"class","img_logo");
          dom.setAttribute(el1,"height","50");
          dom.setAttribute(el1,"width","50");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" \n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("b");
          dom.setAttribute(el1,"class"," hidden-xs hidden-sm");
          var el2 = dom.createTextNode("\n    Rockin' Circuits\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createTextNode(" SHOP ");
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createTextNode(" SOLUTIONS ");
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            return fragment;
          }
        };
      }());
      var child2 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createTextNode(" CONTACT ");
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            return fragment;
          }
        };
      }());
      var child3 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createTextNode(" SEARCH ");
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","navbar_border start");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","navbar_border");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","navbar_border");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","navbar_border");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","navbar_border social_links_icon");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("        \n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","navbar_border");
          var el2 = dom.createTextNode("\n\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class"," social_links");
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("ul");
          dom.setAttribute(el3,"class","");
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("li");
          dom.setAttribute(el4,"class","social_link");
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","fb-like");
          dom.setAttribute(el5,"data-href","https://www.facebook.com/rockincircuits");
          dom.setAttribute(el5,"data-width","70");
          dom.setAttribute(el5,"data-height","50");
          dom.setAttribute(el5,"data-layout","button_count");
          dom.setAttribute(el5,"data-action","like");
          dom.setAttribute(el5,"data-show-faces","false");
          dom.setAttribute(el5,"data-share","true");
          var el6 = dom.createTextNode("\n      ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n    ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment(" \n      <li>\n      {{fb-send}}\n      </li> ");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("li");
          dom.setAttribute(el4,"class","social_link");
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("a href=\"https://twitter.com/rockincircuits\" class=\"twitter-follow-button\" data-show-count=\"false\">Follow @rockincircuits</a>\n      <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("a");
          dom.setAttribute(el5,"href","https://twitter.com/rockincircuits");
          dom.setAttribute(el5,"class","twitter-follow-button");
          dom.setAttribute(el5,"data-show-count","false");
          dom.setAttribute(el5,"data-show-screen-name","false");
          var el6 = dom.createTextNode("Follow @rockincircuits");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("script");
          var el6 = dom.createTextNode("!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n\n    ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createComment(" \n    <li class=\"social_link\">\n      <script src=\"https://apis.google.com/js/platform.js\" async defer></script>\n      <div class=\"g-follow\" data-annotation=\"bubble\" data-height=\"20\" data-href=\"//plus.google.com/u/0/104379645768107546602\" data-rel=\"publisher\">\n      </div>\n    </li> ");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n  ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","navbar_border cart start");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class"," shopping-cart");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("img");
          dom.setAttribute(el3,"src","/ic_cart.png");
          dom.setAttribute(el3,"class","nav_icon");
          dom.setAttribute(el3,"height","40");
          dom.setAttribute(el3,"width","40");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","badge orange prod_count");
          var el4 = dom.createTextNode(" ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block, content = hooks.content, get = hooks.get, element = hooks.element;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element2 = dom.childAt(fragment, [13, 1]);
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),-1,-1);
          var morph1 = dom.createMorphAt(dom.childAt(fragment, [3]),-1,-1);
          var morph2 = dom.createMorphAt(dom.childAt(fragment, [5]),-1,-1);
          var morph3 = dom.createMorphAt(dom.childAt(fragment, [7]),-1,-1);
          var morph4 = dom.createMorphAt(dom.childAt(fragment, [9]),0,1);
          var morph5 = dom.createMorphAt(dom.childAt(element2, [3]),0,-1);
          block(env, morph0, context, "link-to", ["products"], {}, child0, null);
          block(env, morph1, context, "link-to", ["solutions"], {}, child1, null);
          block(env, morph2, context, "link-to", ["contact"], {}, child2, null);
          block(env, morph3, context, "link-to", ["search"], {}, child3, null);
          content(env, morph4, context, "social-apps");
          element(env, element2, context, "action", ["showCartSummary", get(env, context, "this")], {});
          content(env, morph5, context, "count");
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1,"class","row");
            var el2 = dom.createTextNode(" \n              ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","col s8");
            var el3 = dom.createTextNode("\n              ");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n              ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n              ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","col s2");
            var el3 = dom.createTextNode("\n              ");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n              ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n              ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","col s1");
            var el3 = dom.createTextNode("\n              ");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(" \n              ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n\n              ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","col s1");
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("button");
            dom.setAttribute(el3,"class","close");
            var el4 = dom.createTextNode("×");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n              ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content, element = hooks.element;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [7, 1]);
            var morph0 = dom.createMorphAt(dom.childAt(element0, [1]),0,1);
            var morph1 = dom.createMorphAt(dom.childAt(element0, [3]),0,1);
            var morph2 = dom.createMorphAt(dom.childAt(element0, [5]),0,1);
            content(env, morph0, context, "item.title");
            content(env, morph1, context, "item.price");
            content(env, morph2, context, "item.quantity");
            element(env, element1, context, "action", ["removeItem"], {});
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1,"class","btn btn-primary btn-whole col m6");
            var el2 = dom.createTextNode("CHECKOUT");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ul");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("li");
          dom.setAttribute(el3,"class","row");
          var el4 = dom.createTextNode("\n\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","col s8");
          var el5 = dom.createElement("label");
          var el6 = dom.createTextNode("Item");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","col s2");
          var el5 = dom.createElement("label");
          var el6 = dom.createTextNode("Price");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","col s1");
          var el5 = dom.createElement("label");
          var el6 = dom.createTextNode("#");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","col s1");
          var el5 = dom.createElement("label");
          var el6 = dom.createTextNode(" ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" \n\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("hr");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","row col s12");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","col s6 left-align");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("label");
          var el4 = dom.createTextNode("Subtotal: ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","col s5 right-align checkout_title text_green");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("strong");
          var el4 = dom.createTextNode("P ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("   \n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          if (this.cachedFragment) { dom.repairClonedNode(fragment,[7]); }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1, 1]),2,3);
          var morph1 = dom.createMorphAt(dom.childAt(fragment, [5, 3, 1]),0,-1);
          var morph2 = dom.createMorphAt(fragment,6,7,contextualElement);
          block(env, morph0, context, "each", [get(env, context, "model")], {"itemController": "application", "keyword": "item"}, child0, null);
          content(env, morph1, context, "subTotal");
          block(env, morph2, context, "link-to", ["checkout"], {}, child1, null);
          return fragment;
        }
      };
    }());
    var child4 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n          Your cart is empty. Add some goodies!\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child5 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","/logo_small.png");
          dom.setAttribute(el1,"class","footer_logo");
          dom.setAttribute(el1,"height","32");
          dom.setAttribute(el1,"width","32");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("  \n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child6 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode(" SHOP ");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child7 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode(" SOLUTIONS ");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child8 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode(" CONTACT ");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child9 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode(" SEARCH ");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child10 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode(" SHOP ");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child11 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode(" SOLUTIONS ");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child12 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode(" CONTACT ");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child13 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode(" SEARCH ");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child14 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode(" INFORMATION ");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child15 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","/logo_small.png");
          dom.setAttribute(el1,"class","footer_logo");
          dom.setAttribute(el1,"height","32");
          dom.setAttribute(el1,"width","32");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("  \n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","header fixed_component");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("     \n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","hover checkout_summary");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","main_container");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    \n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("footer");
        dom.setAttribute(el1,"class","fixed_component hidden-xs hidden-sm");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","text_white row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col s1 l3");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col l2 footer_logo footer_links");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col l10 author footer_links");
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","  text-uppercase text-smaller");
        var el6 = dom.createTextNode("\n        developed and designed by\n      ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","  text-uppercase");
        var el6 = dom.createTextNode("\n        TYQuintos & FBarcelona\n      ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col s6 l5");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4,"class","footer_links text-normal  center-align");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","footer_link col s2 ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","footer_link col s3");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" <li class=\"footer_link  col s2\">{{#link-to 'blogs' class='text_white'}} BLOGS {{/link-to}}</li> ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","footer_link  col s3");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","footer_link col s2");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" <li class=\"footer_link  col s2\" >{{#link-to 'about' class='text_white'}} ABOUT {{/link-to}}</li> ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        var el4 = dom.createTextNode("\n\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","footer_links right valign-wrapper col s5 l4 hidden-xs ");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col l4 text_small text-uppercase  hidden-xs hidden-sm");
        var el5 = dom.createTextNode("\n          Follow Us\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","iconmelon footer_icon");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.setNamespace("http://www.w3.org/2000/svg");
        var el6 = dom.createElement("svg");
        dom.setAttribute(el6,"class","");
        dom.setAttribute(el6,"viewBox","0 0 32 32");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("use");
        dom.setAttributeNS(el7,"http://www.w3.org/1999/xlink","xlink:href","/icons.svg#facebook1");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" \n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        dom.setNamespace(null);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","iconmelon footer_icon");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.setNamespace("http://www.w3.org/2000/svg");
        var el6 = dom.createElement("svg");
        dom.setAttribute(el6,"class","");
        dom.setAttribute(el6,"viewBox","0 0 32 32");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("use");
        dom.setAttributeNS(el7,"http://www.w3.org/1999/xlink","xlink:href","/icons.svg#twitter1");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        dom.setNamespace(null);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","iconmelon footer_icon");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.setNamespace("http://www.w3.org/2000/svg");
        var el6 = dom.createElement("svg");
        dom.setAttribute(el6,"class","");
        dom.setAttribute(el6,"viewBox","0 0 32 32");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("use");
        dom.setAttributeNS(el7,"http://www.w3.org/1999/xlink","xlink:href","/icons.svg#google-plus1");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        dom.setNamespace(null);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","iconmelon footer_icon");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.setNamespace("http://www.w3.org/2000/svg");
        var el6 = dom.createElement("svg");
        dom.setAttribute(el6,"class","");
        dom.setAttribute(el6,"viewBox","0 0 32 32");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("use");
        dom.setAttributeNS(el7,"http://www.w3.org/1999/xlink","xlink:href","/icons.svg#youtube1");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        dom.setNamespace(null);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","iconmelon footer_icon");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.setNamespace("http://www.w3.org/2000/svg");
        var el6 = dom.createElement("svg");
        dom.setAttribute(el6,"class","");
        dom.setAttribute(el6,"viewBox","0 0 32 32");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("use");
        dom.setAttributeNS(el7,"http://www.w3.org/1999/xlink","xlink:href","/icons.svg#youtube1");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        dom.setNamespace(null);
        var el1 = dom.createElement("footer");
        dom.setAttribute(el1,"class","hidden-md hidden-lg");
        var el2 = dom.createTextNode("\n    \n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","text_white ");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class"," text-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4,"class","footer_links text-normal  center-align");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","footer_link col s3 ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","footer_link col s3");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" <li class=\"footer_link  col s2\">{{#link-to 'blogs' class='text_white'}} BLOGS {{/link-to}}</li> ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","footer_link  col s3");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","footer_link col s3");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","footer_link col s3");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" <li class=\"footer_link  col s2\" >{{#link-to 'about' class='text_white'}} ABOUT {{/link-to}}</li> ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        var el4 = dom.createTextNode("\n\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row footer_links valign-wrapper ");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col l4 text_small text-uppercase  hidden-xs hidden-sm");
        var el5 = dom.createTextNode("\n          Follow Us\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","iconmelon footer_icon");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.setNamespace("http://www.w3.org/2000/svg");
        var el6 = dom.createElement("svg");
        dom.setAttribute(el6,"class","");
        dom.setAttribute(el6,"viewBox","0 0 32 32");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("use");
        dom.setAttributeNS(el7,"http://www.w3.org/1999/xlink","xlink:href","/icons.svg#facebook1");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" \n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        dom.setNamespace(null);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","iconmelon footer_icon");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.setNamespace("http://www.w3.org/2000/svg");
        var el6 = dom.createElement("svg");
        dom.setAttribute(el6,"class","");
        dom.setAttribute(el6,"viewBox","0 0 32 32");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("use");
        dom.setAttributeNS(el7,"http://www.w3.org/1999/xlink","xlink:href","/icons.svg#twitter1");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        dom.setNamespace(null);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","iconmelon footer_icon");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.setNamespace("http://www.w3.org/2000/svg");
        var el6 = dom.createElement("svg");
        dom.setAttribute(el6,"class","");
        dom.setAttribute(el6,"viewBox","0 0 32 32");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("use");
        dom.setAttributeNS(el7,"http://www.w3.org/1999/xlink","xlink:href","/icons.svg#google-plus1");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        dom.setNamespace(null);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","iconmelon footer_icon");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.setNamespace("http://www.w3.org/2000/svg");
        var el6 = dom.createElement("svg");
        dom.setAttribute(el6,"class","");
        dom.setAttribute(el6,"viewBox","0 0 32 32");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("use");
        dom.setAttributeNS(el7,"http://www.w3.org/1999/xlink","xlink:href","/icons.svg#youtube1");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        dom.setNamespace(null);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","iconmelon footer_icon");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.setNamespace("http://www.w3.org/2000/svg");
        var el6 = dom.createElement("svg");
        dom.setAttribute(el6,"class","");
        dom.setAttribute(el6,"viewBox","0 0 32 32");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("use");
        dom.setAttributeNS(el7,"http://www.w3.org/1999/xlink","xlink:href","/icons.svg#youtube1");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        dom.setNamespace(null);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","text-center center-align footer_logo footer_links");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class"," text-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","  text-uppercase text-smaller");
        var el6 = dom.createTextNode("\n          developed and designed by\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","  text-uppercase");
        var el6 = dom.createTextNode("\n          TYQuintos & FBarcelona\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block, get = hooks.get, content = hooks.content, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var element3 = dom.childAt(fragment, [2]);
        if (this.cachedFragment) { dom.repairClonedNode(element3,[1]); }
        var element4 = dom.childAt(fragment, [4]);
        var element5 = dom.childAt(fragment, [6, 1]);
        var element6 = dom.childAt(element5, [3, 1]);
        var element7 = dom.childAt(fragment, [8, 1]);
        var element8 = dom.childAt(element7, [1, 1]);
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createMorphAt(element3,0,1);
        var morph2 = dom.createMorphAt(element3,1,2);
        var morph3 = dom.createMorphAt(dom.childAt(element3, [3]),0,1);
        var morph4 = dom.createMorphAt(element4,0,1);
        var morph5 = dom.createMorphAt(element4,1,2);
        var morph6 = dom.createMorphAt(element4,2,3);
        var morph7 = dom.createMorphAt(dom.childAt(element5, [1, 1]),0,1);
        var morph8 = dom.createMorphAt(dom.childAt(element6, [1]),-1,-1);
        var morph9 = dom.createMorphAt(dom.childAt(element6, [3]),-1,-1);
        var morph10 = dom.createMorphAt(dom.childAt(element6, [7]),-1,-1);
        var morph11 = dom.createMorphAt(dom.childAt(element6, [9]),-1,-1);
        var morph12 = dom.createMorphAt(dom.childAt(element8, [1]),-1,-1);
        var morph13 = dom.createMorphAt(dom.childAt(element8, [3]),-1,-1);
        var morph14 = dom.createMorphAt(dom.childAt(element8, [7]),-1,-1);
        var morph15 = dom.createMorphAt(dom.childAt(element8, [9]),-1,-1);
        var morph16 = dom.createMorphAt(dom.childAt(element8, [11]),-1,-1);
        var morph17 = dom.createMorphAt(dom.childAt(element7, [7]),0,1);
        block(env, morph0, context, "document-title", [], {"prepend": true}, child0, null);
        block(env, morph1, context, "link-to", ["index"], {"class": "logo title no_style"}, child1, null);
        block(env, morph2, context, "md-navbar", [], {"class": "navbar_custom"}, child2, null);
        block(env, morph3, context, "if", [get(env, context, "hasQuantity")], {}, child3, child4);
        content(env, morph4, context, "md-modal-container");
        inline(env, morph5, context, "ember-notify", [], {"messageStyle": "bootstrap"});
        content(env, morph6, context, "outlet");
        block(env, morph7, context, "link-to", ["index"], {"class": ""}, child5, null);
        block(env, morph8, context, "link-to", ["products"], {"class": "text_white"}, child6, null);
        block(env, morph9, context, "link-to", ["solutions"], {"class": "text_white"}, child7, null);
        block(env, morph10, context, "link-to", ["contact"], {"class": "text_white"}, child8, null);
        block(env, morph11, context, "link-to", ["search"], {"class": "text_white"}, child9, null);
        block(env, morph12, context, "link-to", ["products"], {"class": "text_white"}, child10, null);
        block(env, morph13, context, "link-to", ["solutions"], {"class": "text_white"}, child11, null);
        block(env, morph14, context, "link-to", ["contact"], {"class": "text_white"}, child12, null);
        block(env, morph15, context, "link-to", ["search"], {"class": "text_white"}, child13, null);
        block(env, morph16, context, "link-to", ["information"], {"class": "text_white"}, child14, null);
        block(env, morph17, context, "link-to", ["index"], {"class": ""}, child15, null);
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/blogs', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode("Blogs");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","main container");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","page_title text-uppercase text_green");
        var el3 = dom.createTextNode("\nBLOG\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createMorphAt(dom.childAt(fragment, [2]),2,3);
        block(env, morph0, context, "document-title", [], {}, child0, null);
        content(env, morph1, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/catchall', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createTextNode("error 404.");
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/checkout', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode("link to success");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          content(env, morph0, context, "errors.firstName");
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          content(env, morph0, context, "errors.lastName");
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" <span class=\"error\"><span class=\"glyphicon glyphicon-warning-sign\"></span> {{errors.newFamilyname}}</span> ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          content(env, morph0, context, "errors.email");
          return fragment;
        }
      };
    }());
    var child4 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" <span class=\"error\"><span class=\"glyphicon glyphicon-warning-sign\"></span> {{errors.newFamilyname}}</span> ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          content(env, morph0, context, "errors.phone");
          return fragment;
        }
      };
    }());
    var child5 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" <span class=\"error\"><span class=\"glyphicon glyphicon-warning-sign\"></span> {{errors.newFamilyname}}</span> ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          content(env, morph0, context, "errors.streetAddress");
          return fragment;
        }
      };
    }());
    var child6 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" <span class=\"error\"><span class=\"glyphicon glyphicon-warning-sign\"></span> {{errors.newFamilyname}}</span> ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          content(env, morph0, context, "errors.streetAddress2");
          return fragment;
        }
      };
    }());
    var child7 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" <span class=\"error\"><span class=\"glyphicon glyphicon-warning-sign\"></span> {{errors.newFamilyname}}</span> ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          content(env, morph0, context, "errors.zip");
          return fragment;
        }
      };
    }());
    var child8 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" <span class=\"error\"><span class=\"glyphicon glyphicon-warning-sign\"></span> {{errors.newFamilyname}}</span> ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          content(env, morph0, context, "errors.city");
          return fragment;
        }
      };
    }());
    var child9 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" <span class=\"error\"><span class=\"glyphicon glyphicon-warning-sign\"></span> {{errors.newFamilyname}}</span> ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          content(env, morph0, context, "errors.state");
          return fragment;
        }
      };
    }());
    var child10 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","alert alert-info");
          dom.setAttribute(el1,"role","alert");
          var el2 = dom.createTextNode(" \n                   Kindly ask me for the bank details or other information after placing your order. \n                   You may deposit the amount to BDO, BPI or UNIONBANK\n                   or remit via LBC, JRS, and other pawnshop that provides nationwide money transfer\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child11 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("              ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","alert alert-info");
          dom.setAttribute(el1,"role","alert");
          var el2 = dom.createTextNode(" \n                    Let's schedule for a meet up. Kindly contact me at 0905-575-3988/0998-469-2148. Thank you. \n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child12 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","alert alert-info");
          dom.setAttribute(el1,"role","alert");
          var el2 = dom.createTextNode(" \n                    Just a heads up!\n                    After clicking the button below you will be redirected to PayPal to authorize the payment. Be sure to complete the process or your order will not be processed successfully.\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child13 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("\n                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1,"class","row");
            var el2 = dom.createTextNode("\n\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","col s6");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","col s2");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","col s1");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","col s2");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("button");
            dom.setAttribute(el2,"class","col s1 close");
            var el3 = dom.createTextNode("×");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n\n                ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" \n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content, element = hooks.element;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [9]);
            var morph0 = dom.createMorphAt(dom.childAt(element0, [1]),-1,-1);
            var morph1 = dom.createMorphAt(dom.childAt(element0, [3]),-1,-1);
            var morph2 = dom.createMorphAt(dom.childAt(element0, [5]),-1,-1);
            var morph3 = dom.createMorphAt(dom.childAt(element0, [7]),-1,-1);
            content(env, morph0, context, "item.title");
            content(env, morph1, context, "item.price");
            content(env, morph2, context, "item.quantity");
            content(env, morph3, context, "item.subtotal");
            element(env, element1, context, "action", ["removeItem"], {});
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class","row checkout_total");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","col s6 left-align");
            var el3 = dom.createTextNode("\n                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("label");
            var el4 = dom.createTextNode("Shipping Fee");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","col s5 right-align checkout_title text_green");
            var el3 = dom.createTextNode("\n                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("P 150");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("   \n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","col m1 right-align");
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","row checkout_order thumbnail fixed_component");
          var el2 = dom.createTextNode(" \n\n            \n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","row checkout_title checkout_input");
          var el3 = dom.createTextNode("\n               Order Summary\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ul");
          dom.setAttribute(el2,"class"," checkout_order_list checkout_input row");
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("li");
          dom.setAttribute(el3,"class","row");
          var el4 = dom.createTextNode("\n\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","col s6");
          var el5 = dom.createElement("label");
          var el6 = dom.createTextNode("Item");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","col s2");
          var el5 = dom.createElement("label");
          var el6 = dom.createTextNode("Price");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","col s1");
          var el5 = dom.createElement("label");
          var el6 = dom.createTextNode("#");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","col s2");
          var el5 = dom.createElement("label");
          var el6 = dom.createTextNode(" ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n\n                ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" \n\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","row col s12 checkout_total");
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","col s6 left-align");
          var el4 = dom.createTextNode("\n                    ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("label");
          var el5 = dom.createTextNode("Sub Total");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","col s5 right-align checkout_title text_green");
          var el4 = dom.createTextNode("\n                    ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("strong");
          var el5 = dom.createTextNode("P ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("   \n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","col m1 right-align");
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","row col s12 checkout_total");
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","col s6 left-align");
          var el4 = dom.createTextNode("\n                    ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("label");
          var el5 = dom.createTextNode("Grand Total");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","col s5 right-align checkout_title text_green");
          var el4 = dom.createTextNode("\n                    ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("strong");
          var el5 = dom.createTextNode("P ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("   \n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","col m1 right-align");
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element2 = dom.childAt(fragment, [1]);
          var morph0 = dom.createMorphAt(dom.childAt(element2, [3]),2,3);
          var morph1 = dom.createMorphAt(dom.childAt(element2, [5, 3, 1]),0,-1);
          var morph2 = dom.createMorphAt(element2,6,7);
          var morph3 = dom.createMorphAt(dom.childAt(element2, [8, 3, 1]),0,-1);
          block(env, morph0, context, "each", [get(env, context, "model")], {"itemController": "checkout", "keyword": "item"}, child0, null);
          content(env, morph1, context, "subTotal");
          block(env, morph2, context, "if", [get(env, context, "isShipping")], {}, child1, null);
          content(env, morph3, context, "grandTotal");
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createElement("div");
        dom.setAttribute(el0,"class"," container");
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row checkout");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col m6");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","thumbnail checkout_info");
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row checkout_title checkout_input");
        var el5 = dom.createTextNode("\n                Customer Information\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row checkout_input");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        dom.setAttribute(el5,"class","col s4");
        var el6 = dom.createTextNode("First Name");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            \n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row checkout_input");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        dom.setAttribute(el5,"class","col s4");
        var el6 = dom.createTextNode("Last Name");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" \n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n     ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row checkout_input");
        var el5 = dom.createTextNode(" \n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        dom.setAttribute(el5,"class","col s4");
        var el6 = dom.createTextNode("Email");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n     ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row checkout_input");
        var el5 = dom.createTextNode(" \n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" <label>*Last name: </label>\n                    {{input type=\"text\" placeholder=\"Family name\" value=newFamilyname class=\"form-control\"}} ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        dom.setAttribute(el5,"class","col s4");
        var el6 = dom.createTextNode("Phone");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            \n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n     ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row checkout_input");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" <label>*Last name: </label>\n                    {{input type=\"text\" placeholder=\"Family name\" value=newFamilyname class=\"form-control\"}} ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        dom.setAttribute(el5,"class","col s4");
        var el6 = dom.createTextNode("Address");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("        \n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n     ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row checkout_input");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" <label>*Last name: </label>\n                    {{input type=\"text\" placeholder=\"Family name\" value=newFamilyname class=\"form-control\"}} ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        dom.setAttribute(el5,"class","col s4");
        var el6 = dom.createTextNode("Apt, suite, etc.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n     ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row checkout_input");
        var el5 = dom.createTextNode(" \n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" <label>*Last name: </label>\n                    {{input type=\"text\" placeholder=\"Family name\" value=newFamilyname class=\"form-control\"}} ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        dom.setAttribute(el5,"class","col s4");
        var el6 = dom.createTextNode("Zip Code");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("     \n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n     ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row checkout_input");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" <label>*Last name: </label>\n                    {{input type=\"text\" placeholder=\"Family name\" value=newFamilyname class=\"form-control\"}} ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        dom.setAttribute(el5,"class","col s4");
        var el6 = dom.createTextNode("City");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            \n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row checkout_input ");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" <label>*Last name: </label>\n                    {{input type=\"text\" placeholder=\"Family name\" value=newFamilyname class=\"form-control\"}} ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        dom.setAttribute(el5,"class","col s4");
        var el6 = dom.createTextNode("State/Province");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n     ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row checkout_payment_method");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","row checkout_title col s12");
        var el6 = dom.createTextNode("\n                Payment Method\n            ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","row col s12 checkout_payment_data");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("            ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n\n");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" \n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col m1");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col m5 ");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("       \n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class"," footer col m6");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3,"type","submit");
        dom.setAttribute(el3,"class","btn btn-primary btn-whole");
        var el4 = dom.createTextNode("PLACE ORDER");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block, get = hooks.get, inline = hooks.inline, element = hooks.element, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element3 = dom.childAt(fragment, [1]);
        var element4 = dom.childAt(element3, [1, 1]);
        var element5 = dom.childAt(element4, [3]);
        var element6 = dom.childAt(element4, [5]);
        var element7 = dom.childAt(element4, [7]);
        var element8 = dom.childAt(element4, [9]);
        var element9 = dom.childAt(element4, [11]);
        var element10 = dom.childAt(element4, [13]);
        var element11 = dom.childAt(element4, [15]);
        var element12 = dom.childAt(element4, [17]);
        var element13 = dom.childAt(element4, [19]);
        var element14 = dom.childAt(element4, [21]);
        var element15 = dom.childAt(element14, [4]);
        if (this.cachedFragment) { dom.repairClonedNode(element15,[1,2]); }
        var element16 = dom.childAt(fragment, [3, 1, 1]);
        var morph0 = dom.createMorphAt(dom.childAt(element4, [1]),0,1);
        var morph1 = dom.createMorphAt(element5,2,3);
        var morph2 = dom.createMorphAt(element5,3,4);
        var morph3 = dom.createMorphAt(element6,2,3);
        var morph4 = dom.createMorphAt(element6,3,4);
        var morph5 = dom.createMorphAt(element7,2,3);
        var morph6 = dom.createMorphAt(element7,3,4);
        var morph7 = dom.createMorphAt(element8,4,5);
        var morph8 = dom.createMorphAt(element8,5,6);
        var morph9 = dom.createMorphAt(element9,4,5);
        var morph10 = dom.createMorphAt(element9,5,6);
        var morph11 = dom.createMorphAt(element10,4,5);
        var morph12 = dom.createMorphAt(element10,5,6);
        var morph13 = dom.createMorphAt(element11,4,5);
        var morph14 = dom.createMorphAt(element11,5,6);
        var morph15 = dom.createMorphAt(element12,4,5);
        var morph16 = dom.createMorphAt(element12,5,6);
        var morph17 = dom.createMorphAt(element13,4,5);
        var morph18 = dom.createMorphAt(element13,5,6);
        var morph19 = dom.createMorphAt(element14,2,3);
        var morph20 = dom.createMorphAt(element15,0,1);
        var morph21 = dom.createMorphAt(element15,1,2);
        var morph22 = dom.createMorphAt(element15,2,3);
        var morph23 = dom.createMorphAt(dom.childAt(element3, [5]),0,1);
        var morph24 = dom.createMorphAt(fragment,4,5);
        block(env, morph0, context, "link-to", ["success"], {}, child0, null);
        inline(env, morph1, context, "input", [], {"value": get(env, context, "firstName"), "label": "First name", "class": "col s8", "placeholder": "First Name"});
        block(env, morph2, context, "if", [get(env, context, "errors.firstName")], {}, child1, null);
        inline(env, morph3, context, "input", [], {"value": get(env, context, "lastName"), "label": "Last name", "class": "col s8", "placeholder": "Last Name"});
        block(env, morph4, context, "if", [get(env, context, "errors.lastName")], {}, child2, null);
        inline(env, morph5, context, "input", [], {"class": "col s8", "value": get(env, context, "email"), "label": "Email Address", "placeholder": "Email Address"});
        block(env, morph6, context, "if", [get(env, context, "errors.email")], {}, child3, null);
        inline(env, morph7, context, "input", [], {"value": get(env, context, "phone"), "label": "Phone", "class": "col s8", "placeholder": "Phone"});
        block(env, morph8, context, "if", [get(env, context, "errors.phone")], {}, child4, null);
        inline(env, morph9, context, "input", [], {"value": get(env, context, "streetAddress"), "label": "Street Address", "class": "col s8", "placeholder": "Street Address"});
        block(env, morph10, context, "if", [get(env, context, "errors.streetAddress")], {}, child5, null);
        inline(env, morph11, context, "input", [], {"value": get(env, context, "streetAddress2"), "label": "Street Address 2", "class": "col s8", "placeholder": "Apt, suite, etc.", "autofocus": false});
        block(env, morph12, context, "if", [get(env, context, "errors.streetAddress2")], {}, child6, null);
        inline(env, morph13, context, "input", [], {"value": get(env, context, "zip"), "label": "Zip Code", "class": "col s8", "placeholder": "Zip Code"});
        block(env, morph14, context, "if", [get(env, context, "errors.zip")], {}, child7, null);
        inline(env, morph15, context, "input", [], {"value": get(env, context, "city"), "label": "City", "class": "col s8", "placeholder": "City"});
        block(env, morph16, context, "if", [get(env, context, "errors.city")], {}, child8, null);
        inline(env, morph17, context, "input", [], {"value": get(env, context, "state"), "label": "State/Province", "class": "col s8", "placeholder": "State/Province"});
        block(env, morph18, context, "if", [get(env, context, "errors.state")], {}, child9, null);
        inline(env, morph19, context, "md-radios", [], {"class": "payment_method", "selection": get(env, context, "selectedVal"), "content": get(env, context, "radioSelection"), "optionValuePath": "value", "optionLabelPath": "label"});
        block(env, morph20, context, "if", [get(env, context, "optionBank")], {}, child10, null);
        block(env, morph21, context, "if", [get(env, context, "optionMeet")], {}, child11, null);
        block(env, morph22, context, "if", [get(env, context, "optionPayP")], {}, child12, null);
        block(env, morph23, context, "if", [get(env, context, "sub")], {}, child13, null);
        element(env, element16, context, "bind-attr", [], {"disabled": "isInvalid"});
        element(env, element16, context, "action", ["processOrder"], {});
        content(env, morph24, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/checkout/success', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" Big Check above ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\nCongrats! Your goodies are on their way!\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/components/document-title', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
            var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
            content(env, morph0, context, "previous.separator");
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
            var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
            content(env, morph0, context, "yield");
            return fragment;
          }
        };
      }());
      var child2 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
            var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
            content(env, morph0, context, "title");
            return fragment;
          }
        };
      }());
      var child3 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
            var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
            content(env, morph0, context, "separator");
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1,2,3]); }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          var morph1 = dom.createMorphAt(fragment,1,2,contextualElement);
          var morph2 = dom.createMorphAt(fragment,2,3,contextualElement);
          block(env, morph0, context, "if", [get(env, context, "showSeparatorBefore")], {}, child0, null);
          block(env, morph1, context, "if", [get(env, context, "template")], {}, child1, child2);
          block(env, morph2, context, "if", [get(env, context, "showSeparatorAfter")], {}, child3, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        block(env, morph0, context, "unless", [get(env, context, "hidden")], {}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/components/ember-notify', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("a");
            dom.setAttribute(el1,"class","close");
            var el2 = dom.createTextNode("×");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1,"class","message");
            var el2 = dom.createTextNode("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, element = hooks.element, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(fragment, [3]);
            if (this.cachedFragment) { dom.repairClonedNode(element1,[0]); }
            var morph0 = dom.createMorphAt(element1,-1,0);
            var morph1 = dom.createUnsafeMorphAt(element1,0,-1);
            element(env, element0, context, "action", ["close"], {"target": "view"});
            content(env, morph0, context, "message.message");
            content(env, morph1, context, "message.raw");
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          block(env, morph0, context, "view", [get(env, context, "view.messageClass")], {"message": get(env, context, "message"), "closeAfter": get(env, context, "closeAfter"), "class": "clearfix"}, child0, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        block(env, morph0, context, "each", [get(env, context, "messages")], {"keyword": "message"}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/components/fb-send', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createElement("button");
        var el1 = dom.createTextNode("FB");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = fragment;
        element(env, element0, context, "action", ["sendLink", get(env, context, "currentBaseUrl")], {});
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/components/labeled-radio-button', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createMorphAt(fragment,1,2,contextualElement);
        inline(env, morph0, context, "radio-button", [], {"changed": "innerRadioChanged", "disabled": get(env, context, "disabled"), "groupValue": get(env, context, "groupValue"), "name": get(env, context, "name"), "required": get(env, context, "required"), "value": get(env, context, "value")});
        content(env, morph1, context, "yield");
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/components/modal-dialog', ['exports', 'ember-modal-dialog/templates/components/modal-dialog'], function (exports, template) {

	'use strict';

	exports['default'] = template['default'];

});
define('rockincircuits/templates/components/particle-bg', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createElement("button");
          dom.setAttribute(el0,"class"," btn-intro text_white");
          var el1 = dom.createTextNode("SHOP");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createElement("button");
          dom.setAttribute(el0,"class","btn-intro text_white");
          var el1 = dom.createTextNode("SOLUTIONS");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"id","particles-js");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" stats - count particles  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("\n<div class=\"count-particles\">\n  <span class=\"js-count-particles\">--</span> particles\n</div>\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","intro main container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","intro_text page_title text-uppercase text_white");
        var el3 = dom.createTextNode("\n    Hello, are you here to shop or to find solutions?\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row center");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col s12 m6");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col s12 m6");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n/* ---- particles.js config ---- */\n\n$\n\nparticlesJS(\"particles-js\", {\n  \"particles\": {\n    \"number\": {\n      \"value\": 80,\n      \"density\": {\n        \"enable\": true,\n        \"value_area\": 800\n      }\n    },\n    \"color\": {\n      \"value\": \"#ffffff\"\n    },\n    \"shape\": {\n      \"type\": \"circle\",\n      \"stroke\": {\n        \"width\": 0,\n        \"color\": \"#000000\"\n      },\n      \"polygon\": {\n        \"nb_sides\": 5\n      },\n      \"image\": {\n        \"src\": \"img/github.svg\",\n        \"width\": 100,\n        \"height\": 100\n      }\n    },\n    \"opacity\": {\n      \"value\": 0.5,\n      \"random\": false,\n      \"anim\": {\n        \"enable\": false,\n        \"speed\": 1,\n        \"opacity_min\": 0.1,\n        \"sync\": false\n      }\n    },\n    \"size\": {\n      \"value\": 3,\n      \"random\": true,\n      \"anim\": {\n        \"enable\": false,\n        \"speed\": 40,\n        \"size_min\": 0.1,\n        \"sync\": false\n      }\n    },\n    \"line_linked\": {\n      \"enable\": true,\n      \"distance\": 150,\n      \"color\": \"#ffffff\",\n      \"opacity\": 0.4,\n      \"width\": 1\n    },\n    \"move\": {\n      \"enable\": true,\n      \"speed\": 6,\n      \"direction\": \"none\",\n      \"random\": false,\n      \"straight\": false,\n      \"out_mode\": \"out\",\n      \"bounce\": false,\n      \"attract\": {\n        \"enable\": false,\n        \"rotateX\": 600,\n        \"rotateY\": 1200\n      }\n    }\n  },\n  \"interactivity\": {\n    \"detect_on\": \"canvas\",\n    \"events\": {\n      \"onhover\": {\n        \"enable\": true,\n        \"mode\": \"grab\"\n      },\n      \"onclick\": {\n        \"enable\": true,\n        \"mode\": \"push\"\n      },\n      \"resize\": true\n    },\n    \"modes\": {\n      \"grab\": {\n        \"distance\": 140,\n        \"line_linked\": {\n          \"opacity\": 1\n        }\n      },\n      \"bubble\": {\n        \"distance\": 400,\n        \"size\": 40,\n        \"duration\": 2,\n        \"opacity\": 8,\n        \"speed\": 3\n      },\n      \"repulse\": {\n        \"distance\": 200,\n        \"duration\": 0.4\n      },\n      \"push\": {\n        \"particles_nb\": 4\n      },\n      \"remove\": {\n        \"particles_nb\": 2\n      }\n    }\n  },\n  \"retina_detect\": true\n});\n\n\n\nvar count_particles, stats, update;\nstats = new Stats;\nstats.setMode(0);\nstats.domElement.style.position = 'absolute';\nstats.domElement.style.left = '0px';\nstats.domElement.style.top = '0px';\ndocument.body.appendChild(stats.domElement);\ncount_particles = document.querySelector('.js-count-particles');\nupdate = function() {\n  stats.begin();\n  stats.end();\n  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {\n    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;\n  }\n  requestAnimationFrame(update);\n};\nrequestAnimationFrame(update);\n\n/* ---- stats.js config ---- */\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" particles.js lib (JavaScript CodePen settings): https://github.com/VincentGarreau/particles.js ");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [7, 3]);
        var morph0 = dom.createMorphAt(dom.childAt(element0, [1]),0,1);
        var morph1 = dom.createMorphAt(dom.childAt(element0, [3]),0,1);
        block(env, morph0, context, "link-to", ["products"], {}, child0, null);
        block(env, morph1, context, "link-to", ["solutions"], {}, child1, null);
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/components/product-detail', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createTextNode("More Info");
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("	    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
            block(env, morph0, context, "link-to", ["product", get(env, context, "product.slug")], {"class": "bottom-align"}, child0, null);
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("	      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
            content(env, morph0, context, "product.description");
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	  	\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    \n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          var morph1 = dom.createMorphAt(fragment,1,2,contextualElement);
          block(env, morph0, context, "md-card-content", [], {}, child0, null);
          block(env, morph1, context, "md-card-reveal", [], {}, child1, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","product-detail-price ribbon-container");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        var el3 = dom.createTextNode("\n	₱");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[3]); }
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [1, 1]),0,1);
        var morph1 = dom.createMorphAt(fragment,2,3,contextualElement);
        content(env, morph0, context, "product.price");
        block(env, morph1, context, "md-card", [], {"title": get(env, context, "product.title"), "image": get(env, context, "product.image"), "activator": true}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/components/share-twitter', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("script");
        dom.setAttribute(el1,"type","text/javascript");
        dom.setAttribute(el1,"src","http://platform.twitter.com/widgets.js");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[2]); }
        var morph0 = dom.createMorphAt(fragment,1,2,contextualElement);
        content(env, morph0, context, "yield");
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/components/social-apps', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class"," header_icons valign-wrapper");
        var el2 = dom.createTextNode(" \n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","iconmelon svg_icon");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        dom.setNamespace("http://www.w3.org/2000/svg");
        var el3 = dom.createElement("svg");
        dom.setAttribute(el3,"class","");
        dom.setAttribute(el3,"viewBox","0 0 32 32");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("use");
        dom.setAttributeNS(el4,"http://www.w3.org/1999/xlink","xlink:href","/icons.svg#facebook1");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" \n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        dom.setNamespace(null);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","iconmelon svg_icon");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        dom.setNamespace("http://www.w3.org/2000/svg");
        var el3 = dom.createElement("svg");
        dom.setAttribute(el3,"class","");
        dom.setAttribute(el3,"viewBox","0 0 32 32");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("use");
        dom.setAttributeNS(el4,"http://www.w3.org/1999/xlink","xlink:href","/icons.svg#twitter1");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        dom.setNamespace(null);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","iconmelon svg_icon");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        dom.setNamespace("http://www.w3.org/2000/svg");
        var el3 = dom.createElement("svg");
        dom.setAttribute(el3,"class","");
        dom.setAttribute(el3,"viewBox","0 0 32 32");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("use");
        dom.setAttributeNS(el4,"http://www.w3.org/1999/xlink","xlink:href","/icons.svg#google-plus1");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("google+");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" <div class=\"hover social_links\" >\n	<ul class=\"\">\n		<li class=\"social_link\">\n			<div class=\"fb-like\" data-href=\"https://www.facebook.com/rockincircuits\" data-width=\"70\" data-height=\"50\" data-layout=\"button_count\" data-action=\"like\" data-show-faces=\"false\" data-share=\"true\">\n			</div>\n		</li>\n		<li class=\"social_link\">\n			<a href=\"https://twitter.com/rockincircuits\" class=\"twitter-follow-button\" data-show-count=\"false\" data-show-screen-name=\"false\">Follow @rockincircuits</a>\n			<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>\n\n		</li>\n		<li class=\"social_link\">\n			<script src=\"https://apis.google.com/js/platform.js\" async defer></script>\n			<div class=\"g-follow\" data-annotation=\"bubble\" data-height=\"20\" data-href=\"//plus.google.com/u/0/104379645768107546602\" data-rel=\"publisher\">\n			</div>\n		</li>\n	</ul>\n</div> ");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [1]);
        element(env, element0, context, "action", ["showSocialLinks", get(env, context, "this")], {});
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/contact', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode("Contact Us");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode("				Hire us\n");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode("				Ask us\n");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","main container footer");
        var el2 = dom.createTextNode("\n\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","");
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","contact_us_links center-align row container");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("			\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4,"class","nav_indicator");
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var element0 = dom.childAt(fragment, [2, 1]);
        var element1 = dom.childAt(element0, [1]);
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createMorphAt(element1,0,1);
        var morph2 = dom.createMorphAt(element1,1,2);
        var morph3 = dom.createMorphAt(dom.childAt(element0, [3]),0,1);
        block(env, morph0, context, "document-title", [], {}, child0, null);
        block(env, morph1, context, "link-to", ["contact.hire-us"], {"class": "no_style hire_us page_title text-uppercase text_green col l6 no_bottom_border active"}, child1, null);
        block(env, morph2, context, "link-to", ["contact.ask-us"], {"class": "no_style ask_us page_title text-uppercase text_green col l6 no_bottom_border"}, child2, null);
        content(env, morph3, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/contact/ask-us', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("         ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","small mdi-alert-error");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("    \n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1,"class","small mdi-navigation-check");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" \n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          block(env, morph0, context, "if", [get(env, context, "isNameEmpty")], {}, child0, null);
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("         ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","small mdi-alert-error");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("    \n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1,"class","small mdi-navigation-check");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" \n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          block(env, morph0, context, "if", [get(env, context, "isPhoneEmpty")], {}, child0, null);
          return fragment;
        }
      };
    }());
    var child4 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("         ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","small mdi-alert-error");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("    \n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child5 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1,"class","small mdi-navigation-check");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" \n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          block(env, morph0, context, "if", [get(env, context, "isEmailEmpty")], {}, child0, null);
          return fragment;
        }
      };
    }());
    var child6 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("         ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","small mdi-alert-error");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("    \n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child7 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1,"class","small mdi-navigation-check");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" \n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          block(env, morph0, context, "if", [get(env, context, "isReasonEmpty")], {}, child0, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode(" ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col s11");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" \n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col s1 contact_underline");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("   \n\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col s11");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col s1 contact_underline");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("   \n\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col s11");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col s1 contact_underline");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("  \n\n ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Question Type ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Reasong ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n \n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col s11");
        var el3 = dom.createTextNode("\n      \n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col s1 contact_underline");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("  \n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row center");
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" <button type=\"submit\" class=\"btn btn-primary btn-whole footer col m6\" {{bind-attr disabled='isInvalid'}}{{action 'sendContactMaterial'}}>SUBMIT</button> ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(fragment, [3]);
        var element2 = dom.childAt(fragment, [5]);
        var element3 = dom.childAt(fragment, [12]);
        var morph0 = dom.createMorphAt(dom.childAt(element0, [1]),0,1);
        var morph1 = dom.createMorphAt(dom.childAt(element0, [3]),0,1);
        var morph2 = dom.createMorphAt(dom.childAt(element1, [1]),0,1);
        var morph3 = dom.createMorphAt(dom.childAt(element1, [3]),0,1);
        var morph4 = dom.createMorphAt(dom.childAt(element2, [1]),0,1);
        var morph5 = dom.createMorphAt(dom.childAt(element2, [3]),0,1);
        var morph6 = dom.createMorphAt(fragment,8,9,contextualElement);
        var morph7 = dom.createMorphAt(dom.childAt(element3, [1]),0,1);
        var morph8 = dom.createMorphAt(dom.childAt(element3, [3]),0,1);
        var morph9 = dom.createMorphAt(dom.childAt(fragment, [14]),2,3);
        inline(env, morph0, context, "input", [], {"value": get(env, context, "name"), "label": "name", "class": "", "placeholder": "Name"});
        block(env, morph1, context, "if", [get(env, context, "errors.name")], {}, child0, child1);
        inline(env, morph2, context, "input", [], {"value": get(env, context, "phone"), "label": "phone", "class": "", "placeholder": "Phone Number"});
        block(env, morph3, context, "if", [get(env, context, "errors.phone")], {}, child2, child3);
        inline(env, morph4, context, "input", [], {"value": get(env, context, "email"), "label": "email", "class": "", "placeholder": "Email Address"});
        block(env, morph5, context, "if", [get(env, context, "errors.email")], {}, child4, child5);
        inline(env, morph6, context, "md-select", [], {"content": get(env, context, "questionType"), "value": get(env, context, "currentQuestionType.id"), "optionLabelPath": "content.type", "optionValuePath": "content.id", "prompt": "Question Related"});
        inline(env, morph7, context, "input", [], {"value": get(env, context, "reason"), "label": "reason", "class": "", "placeholder": "Reason |  My Company is looking to create a web app that does the following | etc "});
        block(env, morph8, context, "if", [get(env, context, "errors.reason")], {}, child6, child7);
        inline(env, morph9, context, "md-btn-submit", [], {"icon": "mdi-content-send", "iconPosition": "right", "text": "Submit", "action": "sendContactMaterial", "isDisabled": get(env, context, "isInvalid")});
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/contact/hire-us', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("         ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","small mdi-alert-error");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("    \n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1,"class","small mdi-navigation-check");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("  \n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          block(env, morph0, context, "if", [get(env, context, "isCompanyNameEmpty")], {}, child0, null);
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("         ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","small mdi-alert-error");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("    \n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1,"class","small mdi-navigation-check");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" \n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          block(env, morph0, context, "if", [get(env, context, "isNameEmpty")], {}, child0, null);
          return fragment;
        }
      };
    }());
    var child4 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("         ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","small mdi-alert-error");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("    \n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child5 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1,"class","small mdi-navigation-check");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" \n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          block(env, morph0, context, "if", [get(env, context, "isPhoneEmpty")], {}, child0, null);
          return fragment;
        }
      };
    }());
    var child6 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("         ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","small mdi-alert-error");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("    \n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child7 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1,"class","small mdi-navigation-check");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" \n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          block(env, morph0, context, "if", [get(env, context, "isEmailEmpty")], {}, child0, null);
          return fragment;
        }
      };
    }());
    var child8 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("         ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","small mdi-alert-error");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("    \n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child9 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1,"class","small mdi-navigation-check");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" \n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          block(env, morph0, context, "if", [get(env, context, "isReasonEmpty")], {}, child0, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col s11");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col s1 contact_underline");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("    \n\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col s11");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" \n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col s1 contact_underline");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("   \n\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col s11");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col s1 contact_underline");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("   \n\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col s11");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col s1 contact_underline");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("  \n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" organization ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" looking for ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Reasong ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col s11");
        var el3 = dom.createTextNode("\n      \n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col s1 contact_underline");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("  \n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row center");
        var el2 = dom.createTextNode("\n\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(fragment, [3]);
        var element2 = dom.childAt(fragment, [5]);
        var element3 = dom.childAt(fragment, [7]);
        var element4 = dom.childAt(fragment, [17]);
        var morph0 = dom.createMorphAt(dom.childAt(element0, [1]),0,1);
        var morph1 = dom.createMorphAt(dom.childAt(element0, [3]),0,1);
        var morph2 = dom.createMorphAt(dom.childAt(element1, [1]),0,1);
        var morph3 = dom.createMorphAt(dom.childAt(element1, [3]),0,1);
        var morph4 = dom.createMorphAt(dom.childAt(element2, [1]),0,1);
        var morph5 = dom.createMorphAt(dom.childAt(element2, [3]),0,1);
        var morph6 = dom.createMorphAt(dom.childAt(element3, [1]),0,1);
        var morph7 = dom.createMorphAt(dom.childAt(element3, [3]),0,1);
        var morph8 = dom.createMorphAt(fragment,10,11,contextualElement);
        var morph9 = dom.createMorphAt(fragment,13,14,contextualElement);
        var morph10 = dom.createMorphAt(dom.childAt(element4, [1]),0,1);
        var morph11 = dom.createMorphAt(dom.childAt(element4, [3]),0,1);
        var morph12 = dom.createMorphAt(dom.childAt(fragment, [19]),0,1);
        inline(env, morph0, context, "input", [], {"value": get(env, context, "companyName"), "label": "companyName", "class": "", "placeholder": "Company | Organization Name"});
        block(env, morph1, context, "if", [get(env, context, "errors.companyName")], {}, child0, child1);
        inline(env, morph2, context, "input", [], {"value": get(env, context, "name"), "label": "name", "class": "", "placeholder": "Name"});
        block(env, morph3, context, "if", [get(env, context, "errors.name")], {}, child2, child3);
        inline(env, morph4, context, "input", [], {"value": get(env, context, "phone"), "label": "phone", "class": "", "placeholder": "Phone Number"});
        block(env, morph5, context, "if", [get(env, context, "errors.phone")], {}, child4, child5);
        inline(env, morph6, context, "input", [], {"value": get(env, context, "email"), "label": "email", "class": "", "placeholder": "Email Address"});
        block(env, morph7, context, "if", [get(env, context, "errors.email")], {}, child6, child7);
        inline(env, morph8, context, "md-select", [], {"content": get(env, context, "organization"), "value": get(env, context, "currentOrganization.id"), "optionLabelPath": "content.type", "optionValuePath": "content.id", "prompt": "Organization"});
        inline(env, morph9, context, "md-select", [], {"content": get(env, context, "projectType"), "value": get(env, context, "currentProjectType.id"), "optionLabelPath": "content.type", "optionValuePath": "content.id", "prompt": "Project Type"});
        inline(env, morph10, context, "input", [], {"value": get(env, context, "reason"), "label": "reason", "class": "", "placeholder": "Reason |  My Company is looking to create a web app that does the following | etc "});
        block(env, morph11, context, "if", [get(env, context, "errors.reason")], {}, child8, child9);
        inline(env, morph12, context, "md-btn-submit", [], {"icon": "mdi-content-send", "iconPosition": "right", "text": "Submit", "action": "sendContactMaterial", "isDisabled": get(env, context, "isInvalid")});
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/contact/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode("Electronic Goods Distributor & Software App Solutions");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,2]); }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createMorphAt(fragment,1,2,contextualElement);
        block(env, morph0, context, "document-title", [], {}, child0, null);
        content(env, morph1, context, "particle-bg");
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/information', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode("Information");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h1");
            var el3 = dom.createTextNode("Terms and Conditions");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("Welcome to the circuit.rocks website (the \"Site\"). These terms and conditions (\"Terms and Conditions\") apply to the Site and all of its divisions, subsidiaries, and affiliate operated Internet sites which reference these Terms and Conditions.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("You confirm your understanding of the Terms and Conditions by accessing this Site. You shall not use this website if you disagree with the Terms and Conditions of use. The Site reserves the right, to change, modify, add, or remove portions of these Terms and Conditions of use at any time. Changes will be effective when posted on the Site with no other notice provided. Please check these Terms and Conditions of use regularly for updates. Your continued use of the Site following the posting of changes to these Terms and Conditions of use constitutes your acceptance of those changes.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h3");
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("USE OF THE SITE");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("You must be at least 18 years of age or access the Site under the supervision of a parent or legal guardian.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("We grant you a non-transferable and revocable license to use the Site, under the Terms and Conditions described, for the purpose of procuring personal items sold on the Site. Commercial use or use on behalf of any third party is forbidden, except as explicitly permitted by us in advance. Any breach of these Terms and Conditions shall result in the immediate revocation of the license granted in this paragraph without notice to you.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("Content provided on this site is solely for informational purposes. Product representations expressed on this Site are those of the vendor and are not made by us. Submissions or opinions expressed on this Site are those of the individual posting such content and may not reflect our opinions.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("Certain services and related features that may be made available on the Site may require registration or subscription. Should you choose to register or subscribe for any such services or related features, you agree to provide accurate and current information about yourself, and to promptly update such information if there are any changes. Every user of the Site is solely responsible for keeping passwords and other account identifiers safe and secure. The account owner is entirely responsible for all activities that occur under such password or account. Furthermore, you must notify us of any unauthorized use of your password or account. The Site shall not be responsible or liable, directly or indirectly, in any way for any loss or damage of any kind incurred as a result of, or in connection with, your failure to comply with this section.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("During the registration process you agree to receive promotional emails from the Site. You can subsequently opt out of receiving such promotional e-mails by clicking on the link at the bottom of any promotional email.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h3");
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("USER SUBMISSIONS");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("Anything that you submit to the Site and/or provide to us, including but not limited to, questions, reviews, comments, and suggestions (collectively, \"Submissions\") will become our sole and exclusive property and shall not be returned to you. In addition to the rights applicable to any Submission, when you post comments or reviews to the Site, you also grant us the right to use the name that you submit, in connection with such review, comment, or other content. You shall not use a false e-mail address, pretend to be someone other than yourself or otherwise mislead us or third parties as to the origin of any Submissions. We may, but shall not be obligated to, remove or edit any Submissions.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h3");
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("ORDER ACCEPTANCE AND PRICING");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("Please note that there are cases when an order cannot be processed for various reasons. The Site reserves the right to refuse or cancel any order for any reason at any given time. You may be asked to provide additional verifications or information, including but not limited to phone number and address, before we accept the order.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("We are determined to provide the most accurate pricing information on the Site to our users; however, errors may still occur, such as cases when the price of an item is not displayed correctly on the website. As such, we reserve the right to refuse or cancel any order. In the event that an item is mispriced, we may, at our own discretion, either contact you for instructions or cancel your order and notify you of such cancellation. We shall have the right to refuse or cancel any such orders whether or not the order has been confirmed and your credit card charged.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h3");
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("TRADEMARKS AND COPYRIGHTS");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("All intellectual property rights, whether registered or unregistered, in the Site, information content on the Site and all the website design, including, but not limited to, text, graphics, software, photos, video, music, sound, and their selection and arrangement, and all software compilations, underlying source code and software shall remain our property. The entire contents of the Site also are protected by copyright as a collective work under Philippine copyright laws and international conventions. All rights are reserved.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h3");
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("APPLICABLE LAW AND JURISDICTION");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("These Terms and Conditions shall be interpreted and governed by the laws in force in Manila, Philippines. Subject to the Arbitration section below, each party hereby agrees to submit to the jurisdiction of the courts of the Philippines and to waive any objections based upon venue.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h3");
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("ARBITRATION");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("Any controversy, claim or dispute arising out of or relating to these Terms and Conditions will be referred to and finally settled by private and confidential binding arbitration before a single arbitrator held in Manila, Philippines. The arbitrator shall be a person who is legally trained and who has experience in the information technology field in the Philippines and is independent of either party. Notwithstanding the foregoing, the Site reserves the right to pursue the protection of intellectual property rights and confidential information through injunctive or other equitable relief through the courts.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h3");
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("TERMINATION");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("In addition to any other legal or equitable remedies, we may, without prior notice to you, immediately terminate the Terms and Conditions or revoke any or all of your rights granted under the Terms and Conditions. Upon any termination of this Agreement, you shall immediately cease all access to and use of the Site and we shall, in addition to any other legal or equitable remedies, immediately revoke all password(s) and account identification issued to you and deny your access to and use of this Site in whole or in part. Any termination of this agreement shall not affect the respective rights and obligations (including without limitation, payment obligations) of the parties arising before the date of termination. You furthermore agree that the Site shall not be liable to you or to any other person as a result of any such suspension or termination. If you are dissatisfied with the Site or with any terms, conditions, rules, policies, guidelines in operating the Site, your sole and exclusive remedy is to discontinue using the Site.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("p");
            var el2 = dom.createTextNode("We collect information about you from a variety of sources, including:");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("ul");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("li");
            var el3 = dom.createTextNode("Information we collect from you directly.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("li");
            var el3 = dom.createTextNode("Information we collect about you when you visit our site, use our services, or view our online advertisements.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("li");
            var el3 = dom.createTextNode("Information we collect about you from other sources, such as commercially available sources.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode("We use the information we collect to provide the products and services you request, to tell you about other products and services offered by DFRobot, and to manage our sites and services. In general, we do not share your personal information with third-party marketers, unless we have asked for and obtained your explicit consent.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode("We may share your information:");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("ul");
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("li");
            var el4 = dom.createTextNode("With our third-party service suppliers, including those who work on behalf of DFRobot and our business partners to send you joint communications that we hope you find of interest.");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("li");
            var el4 = dom.createTextNode("If a DFRobot brand is sold to another company.");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("li");
            var el4 = dom.createTextNode("To protect and defend the right and property of DFRobot (including enforcing our Terms and Conditions).");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("li");
            var el4 = dom.createTextNode("When required by law, and / or public authorities.");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            var el2 = dom.createTextNode("All the information we collect about you may be combined to help us tailor our communications to you and to develop world-class products and services.");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            return fragment;
          }
        };
      }());
      var child2 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("   ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h1");
            var el3 = dom.createTextNode("Shipping and Returns");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h2");
            var el3 = dom.createTextNode("1. Shipping ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createElement("img");
            dom.setAttribute(el3,"title","Dynamodo Shipping Xend");
            dom.setAttribute(el3,"src","http://www.dynamodo.com/media/wysiwyg/xend-logo.png");
            dom.setAttribute(el3,"alt","Dynamodo Shipping Xend");
            dom.setAttribute(el3,"width","150");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("img");
            dom.setAttribute(el3,"title","Dynamodo Shipping LBC");
            dom.setAttribute(el3,"src","http://www.dynamodo.com/media/wysiwyg/lbc-logo.png");
            dom.setAttribute(el3,"alt","Dynamodo Shipping LBC");
            dom.setAttribute(el3,"width","150");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("img");
            dom.setAttribute(el3,"title","Dynamodo Shipping Partner 2GO");
            dom.setAttribute(el3,"src","http://www.dynamodo.com/media/wysiwyg/2go-logo.png");
            dom.setAttribute(el3,"alt","Dynamodo Shipping Partner 2GO");
            dom.setAttribute(el3,"width","150");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("Shipping is handled by Xend, LBC and 2GO. Xend for Metro Manila deliveries while LBC/2GO for provincial addresses!");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("Dynamodo ships across the Philippines. Whether you live in Manila, Cebu, Davao, Boracay or Palawan you can order from our website and get the delivery at home or at your office in no time!");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("If you are in Metro Manila, you will receive your order within 2-3 business days after full payment. For customers outside Metro Manila, orders are delivered in 3-4 business days.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("And for customers who want to meetup for the items, Dynamodo temporarily offers meet and pickup at ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("Shangri-la Plaza Mall, EDSA");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(" from ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("M-F");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(", ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("11am-5pm");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(".  ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h2");
            var el3 = dom.createElement("img");
            dom.setAttribute(el3,"title","Dynamodo Meetup Shangri-la Plaza Mall");
            dom.setAttribute(el3,"src","http://www.dynamodo.com/media/wysiwyg/shangri-la-plaza-mall.png");
            dom.setAttribute(el3,"alt","Dynamodo Meetup Shangri-la Plaza Mall");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            return fragment;
          }
        };
      }());
      var child3 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("hr");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h3");
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("Bank Deposit (Over the Counter)");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createElement("strong");
            var el4 = dom.createElement("img");
            dom.setAttribute(el4,"title","Dynamodo Payment Methods BDO");
            dom.setAttribute(el4,"src","http://www.dynamodo.com/media/wysiwyg/BDO.png");
            dom.setAttribute(el4,"alt","Dynamodo Payment Methods BDO");
            dom.setAttribute(el4,"width","250");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("img");
            dom.setAttribute(el4,"title","Dynamodo Payment Methods Unionbank");
            dom.setAttribute(el4,"src","http://www.dynamodo.com/media/wysiwyg/unionbank.png");
            dom.setAttribute(el4,"alt","Dynamodo Payment Methods Unionbank");
            dom.setAttribute(el4,"width","175");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("img");
            dom.setAttribute(el4,"title","Dynamodo Payment Methods Metrobank");
            dom.setAttribute(el4,"src","http://www.dynamodo.com/media/wysiwyg/metrobank-logo.png");
            dom.setAttribute(el4,"alt","Dynamodo Payment Methods Metrobank");
            dom.setAttribute(el4,"width","225");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode("Another option Dynamodo offers is through direct bank deposit of the payment to any of our bank accounts.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode("1. Just go to the nearest ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("Banco De Oro | Unionbank | Metrobank");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(" branch.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode("2. Deposit in cash/check the exact payment amount. Make the deposit to the following details:");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode("Bank: ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("Banco De Oro");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(" (");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("BDO)");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode("Account Number:");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode(" 002770042366");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode("Account Name: ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("Tridale Inc.");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode(" ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode("or");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode("Bank: ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("Unionbank (UB)");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode("Account Number:");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode(" 001580000876");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode("Account Name: ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("Tridale Inc.");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode("or");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode("Bank: ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("Metrobank (MBTC)");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode("Account Number: ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("014-3-01452187-0");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode("Account Name:");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode(" Tridale Inc. ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode("3. Send us an image of the completed deposit slip, through email ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("cs@dynamodo.com");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode("4. Please indicate your ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("Full Name");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(" and ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("Order #");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(" for which the payment was made for ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createElement("em");
            var el4 = dom.createTextNode("**Payments made in check will need additional 3 business days for check clearance.**");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("hr");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h3");
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("Credit Card thru Paypal (Visa, Mastercard or American Express)");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createElement("img");
            dom.setAttribute(el3,"title","Dynamodo Payment Methods Paypal");
            dom.setAttribute(el3,"src","http://www.dynamodo.com/media/wysiwyg/paypal-verified.png");
            dom.setAttribute(el3,"alt","Dynamodo Payment Methods Paypal");
            dom.setAttribute(el3,"width","300");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode("If you are a Visa/Mastercard/Amex credit card holder then you can purchase from Dynamodo.com. ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("Credit Card payment requirements");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("User must be a legal credit card holder (VISA, MasterCard or American Express)");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("Prepare a valid government issued I.D. for random verification.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("If you are using a credit card which is not under your name, please email a scanned copy of the card to our email address: ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("cs@dynamodo.com");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("How to pay for your purchases in Dynamodo.com with Credit/Debit Card");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("1. During checkout, select Credit Card/Debit Card as your preferred payment system.");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("2. You will be redirected to Paypal.com, our payment processor.");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("3. Complete the transaction by providing your correct account information.");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("4. You shall receive an email confirming that we have received your payment.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createElement("em");
            var el4 = dom.createTextNode("Because we leave it up to the secure hands of the PayPal platform to handle your payments we do not make the final decision whether to accept or decline any payments made. We are only informed by PayPal if payment is approved.");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createElement("em");
            var el4 = dom.createTextNode(" ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createElement("em");
            var el4 = dom.createTextNode("We accept credit card payment through Paypal even if you don't have a Paypal account.");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("Who and how safe is Paypal?");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode("Paypal is an internationally recognized payment platform on the web. It is secure and very easy to use. If you have a PayPal account already, this is the best choice of payment to use.\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("p");
            var el4 = dom.createElement("em");
            var el5 = dom.createTextNode("**When using this payment option, you are authorizing Morbie to do a one-time charge against your credit card or checking account without your signature, as provided for under the mail-order regulations established by the Uniform Commercial Codes.");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\nFor as long as we can remember, we have had no problems with PayPal. But don’t take our word for it, check out their site at ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("a");
            dom.setAttribute(el3,"href","http://www.paypal.com/");
            dom.setAttribute(el3,"target","_blank");
            dom.setAttribute(el3,"rel","nofollow");
            var el4 = dom.createTextNode("www.paypal.com");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(".");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1,2,3,4]); }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          var morph1 = dom.createMorphAt(fragment,1,2,contextualElement);
          var morph2 = dom.createMorphAt(fragment,2,3,contextualElement);
          var morph3 = dom.createMorphAt(fragment,3,4,contextualElement);
          block(env, morph0, context, "md-collapsible", [], {"icon": "mdi-image-filter-drama", "title": "Terms and Condition"}, child0, null);
          block(env, morph1, context, "md-collapsible", [], {"icon": "mdi-maps-place", "title": "Privacy Policy"}, child1, null);
          block(env, morph2, context, "md-collapsible", [], {"icon": "mdi-social-whatshot", "title": "Shipping"}, child2, null);
          block(env, morph3, context, "md-collapsible", [], {"icon": "mdi-social-whatshot", "title": "Payment Method"}, child3, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createMorphAt(dom.childAt(fragment, [2]),0,-1);
        block(env, morph0, context, "document-title", [], {}, child0, null);
        block(env, morph1, context, "md-card-collapsible", [], {}, child1, null);
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/loading', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode(" ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","center_page");
        var el3 = dom.createTextNode("\n 		");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createMorphAt(dom.childAt(fragment, [2, 1]),0,1);
        inline(env, morph0, context, "md-loader", [], {"mode": "circular"});
        inline(env, morph1, context, "md-loader", [], {"mode": "circular"});
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/product', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          content(env, morph0, context, "title");
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("							");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" \n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          inline(env, morph0, context, "md-btn", [], {"text": "-", "action": "minusItem", "class": "col m4", "isDisabled": false, "iconPosition": "center"});
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("							");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" \n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          inline(env, morph0, context, "md-btn", [], {"text": "-", "action": "minusItem", "class": "col m4", "isDisabled": true, "iconPosition": "center"});
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        dom.setAttribute(el1,"id","product_specific_container");
        var el2 = dom.createTextNode("\n\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","fixed_component");
        var el3 = dom.createTextNode(" \n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col l5 space_on_top");
        var el4 = dom.createTextNode("\n\n			\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row");
        var el5 = dom.createTextNode("\n\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col s12");
        var el6 = dom.createTextNode("\n			    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"id","");
        dom.setAttribute(el6,"class","img-thumbnail");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n			    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row");
        var el5 = dom.createTextNode("\n		 		");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col m6 s6 ");
        var el6 = dom.createTextNode("\n		 			");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","prod_cart_buttons row");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"class","col m4 s4 center-align prod_cart_button_text");
        var el8 = dom.createTextNode("\n\n							");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n						");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        var el8 = dom.createTextNode("\n							");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n						");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n		 		");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col m6 s6  right-align product_price text_green product_title");
        var el6 = dom.createTextNode("\n			 		P ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" \n{{#share-twitter data-url=currentBaseUrl\n                    data-text= 'check this out!'\n                    data-size= 'large' \n                    data-hashtags= 'rockincircuits'\n                    data-via= 'rockincircuits'\n                }}\n                	tweet\n                {{/share-twitter}}\n                {{fb-send}} ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n			 	");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		 	");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		 	");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row col s12");
        var el5 = dom.createTextNode("\n		 		");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col m6 s6 left-border");
        var el6 = dom.createTextNode("\n		 			\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" <div class=\"iconmelon svg_icon\" >\n                  <svg class=\"\" viewBox=\"0 0 32 32\">\n                    <use xlink:href=\"/icons.svg#facebook1\"></use>\n                  </svg> \n                </div> ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n      				");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        dom.setAttribute(el6,"class","btn btn-primary btn-whole col m6");
        var el7 = dom.createTextNode("Facebook");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n		 		");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		 		");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col m6 s6 right-border");
        var el6 = dom.createTextNode("\n	 \n      				");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        dom.setAttribute(el6,"class","btn btn-primary btn-whole col m6");
        var el7 = dom.createTextNode("Twitter");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" <div class=\"iconmelon svg_icon\" >\n                  <svg class=\"\" viewBox=\"0 0 32 32\">\n                    <use xlink:href=\"/icons.svg#twitter1\"></use>\n                  </svg>\n                </div> ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n		 		");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n		 	");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		 	\n	 	");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","content_of_fixed_bar ");
        var el3 = dom.createTextNode(" \n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class"," col l7 space_on_top footer product_specific_text");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","product_title");
        var el5 = dom.createTextNode("\n		 		");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		 	");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		 	");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","badge text-uppercase");
        var el5 = dom.createTextNode("\n		 		");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		 	");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		 	");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","description");
        var el5 = dom.createTextNode("\n	    		");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	    	");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	    	");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	    	\n	   	");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block, element = hooks.element, get = hooks.get, content = hooks.content, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [1, 1]);
        var element2 = dom.childAt(element1, [1, 1, 1]);
        var element3 = dom.childAt(element1, [3]);
        var element4 = dom.childAt(element3, [1, 1]);
        var element5 = dom.childAt(element4, [4]);
        var element6 = dom.childAt(element0, [3, 1]);
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createMorphAt(element4,0,1);
        var morph2 = dom.createMorphAt(dom.childAt(element4, [2]),0,1);
        var morph3 = dom.createMorphAt(element5,0,1);
        var morph4 = dom.createMorphAt(dom.childAt(element3, [3]),0,1);
        var morph5 = dom.createMorphAt(dom.childAt(element6, [1]),0,1);
        var morph6 = dom.createMorphAt(dom.childAt(element6, [3]),0,1);
        var morph7 = dom.createUnsafeMorphAt(dom.childAt(element6, [5]),0,1);
        var morph8 = dom.createMorphAt(element6,6,7);
        block(env, morph0, context, "document-title", [], {}, child0, null);
        element(env, element2, context, "bind-attr", [], {"src": "image"});
        block(env, morph1, context, "if", [get(env, context, "itemsCount")], {}, child1, child2);
        content(env, morph2, context, "itemsCount");
        element(env, element5, context, "action", ["itemAnimation", get(env, context, "this")], {"target": get(env, context, "view")});
        inline(env, morph3, context, "md-btn", [], {"text": "+", "iconPosition": "center", "class": "col m4 add_button"});
        content(env, morph4, context, "price");
        content(env, morph5, context, "title");
        content(env, morph6, context, "type");
        content(env, morph7, context, "html");
        inline(env, morph8, context, "outlet", ["sidebar"], {});
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/products', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode("Arduino  , Elecrow , DFRobot , Sensors , Robotics");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","/icons/Remote-Control-128.png");
          dom.setAttribute(el1,"class","nav_icon");
          dom.setAttribute(el1,"height","48");
          dom.setAttribute(el1,"width","48");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"class","nav_text");
          var el2 = dom.createTextNode("\n                Boards\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","/icons/Modem-Wireless-128.png");
          dom.setAttribute(el1,"class","nav_icon");
          dom.setAttribute(el1,"height","48");
          dom.setAttribute(el1,"width","48");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                  \n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"class","nav_text");
          var el2 = dom.createTextNode("\n                Sensors\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","/icons/Webcam-128.png");
          dom.setAttribute(el1,"class","nav_icon");
          dom.setAttribute(el1,"height","48");
          dom.setAttribute(el1,"width","48");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                  \n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"class","nav_text");
          var el2 = dom.createTextNode("\n                Robotics\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","");
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row navigation fixed_component");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","");
        var el4 = dom.createTextNode("\n     ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","");
        var el5 = dom.createTextNode(" \n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5,"class"," ");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("li class=\"  row nav_title\">\n               {{#link-to 'products' activeClass='selected'}} All\n              {{/link-to}}            </li");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" \n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","col m4 center nav_title text-uppercase");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","  col m4 center nav_title text-uppercase");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","  col m4 center nav_title text-uppercase");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" \n\n           \n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" \n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row main content_of_fixed_bar footer");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("div class='row'>\n    <div");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("/div>\n  </div");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [1, 1, 1, 1]);
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createMorphAt(dom.childAt(element1, [3]),0,1);
        var morph2 = dom.createMorphAt(dom.childAt(element1, [5]),0,1);
        var morph3 = dom.createMorphAt(dom.childAt(element1, [7]),0,1);
        var morph4 = dom.createMorphAt(dom.childAt(element0, [3, 3]),0,1);
        block(env, morph0, context, "document-title", [], {}, child0, null);
        block(env, morph1, context, "link-to", ["products.boards"], {"activeClass": "selected"}, child1, null);
        block(env, morph2, context, "link-to", ["products.sensors"], {"activeClass": "selected"}, child2, null);
        block(env, morph3, context, "link-to", ["products.robotics"], {"activeClass": "selected"}, child3, null);
        content(env, morph4, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/products/boards', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createTextNode("boards.hbs");
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/products/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("				");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class"," prod_cart_button_text col s4 center-align");
            var el2 = dom.createTextNode("\n					");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n				");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
            var morph1 = dom.createMorphAt(dom.childAt(fragment, [2]),0,1);
            inline(env, morph0, context, "md-btn", [], {"text": "-", "action": "minusItem", "class": "col s4", "isDisabled": false, "iconPosition": "center"});
            content(env, morph1, context, "product.itemsCount");
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("				");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class"," prod_cart_button_text col s4 center-align");
            var el2 = dom.createTextNode("\n					BUY\n				");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
            inline(env, morph0, context, "md-btn", [], {"text": "-", "action": "minusItem", "class": "col s4", "isDisabled": true, "iconPosition": "center"});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","col l4 ");
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","product_card");
          var el3 = dom.createTextNode("\n			");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("	\n			");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment(" <button>{{action \"select\" post target=view}}</button> ");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n		  	");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","prod_cart_buttons row");
          var el4 = dom.createTextNode("\n\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n\n			");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n		");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, inline = hooks.inline, block = hooks.block, element = hooks.element;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element0 = dom.childAt(fragment, [1, 1]);
          var element1 = dom.childAt(element0, [4]);
          var element2 = dom.childAt(element1, [2]);
          var morph0 = dom.createMorphAt(element0,0,1);
          var morph1 = dom.createMorphAt(element1,0,1);
          var morph2 = dom.createMorphAt(element2,0,1);
          inline(env, morph0, context, "product-detail", [], {"product": get(env, context, "product"), "addItem": "addItem", "class": "details"});
          block(env, morph1, context, "if", [get(env, context, "product.itemsCount")], {}, child0, child1);
          element(env, element2, context, "action", ["itemAnimation", get(env, context, "product")], {"target": get(env, context, "view.parentView")});
          inline(env, morph2, context, "md-btn", [], {"text": "+", "iconPosition": "center", "class": "col s4 add_button"});
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createElement("div");
        dom.setAttribute(el0,"class","space_on_top");
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,-1);
        block(env, morph0, context, "each", [get(env, context, "model")], {"itemController": "product", "keyword": "product"}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/products/robotics', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/products/sensors', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createTextNode("sensors.hbs");
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/related', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            return {
              isHTMLBars: true,
              blockParams: 0,
              cachedFragment: null,
              hasRendered: false,
              build: function build(dom) {
                var el0 = dom.createTextNode("      More Info\n");
                return el0;
              },
              render: function render(context, env, contextualElement) {
                var dom = env.dom;
                dom.detectNamespace(contextualElement);
                var fragment;
                if (env.useFragmentCache && dom.canClone) {
                  if (this.cachedFragment === null) {
                    fragment = this.build(dom);
                    if (this.hasRendered) {
                      this.cachedFragment = fragment;
                    } else {
                      this.hasRendered = true;
                    }
                  }
                  if (this.cachedFragment) {
                    fragment = dom.cloneNode(this.cachedFragment, true);
                  }
                } else {
                  fragment = this.build(dom);
                }
                return fragment;
              }
            };
          }());
          return {
            isHTMLBars: true,
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, get = hooks.get, block = hooks.block;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
              var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
              block(env, morph0, context, "link-to", ["product", get(env, context, "item.slug")], {}, child0, null);
              return fragment;
            }
          };
        }());
        var child1 = (function() {
          return {
            isHTMLBars: true,
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            if (this.cachedFragment) { dom.repairClonedNode(fragment,[1,2]); }
            var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
            var morph1 = dom.createMorphAt(fragment,1,2,contextualElement);
            block(env, morph0, context, "md-card-content", [], {}, child0, null);
            block(env, morph1, context, "md-card-action", [], {}, child1, null);
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 1,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement, blockArguments) {
          var dom = env.dom;
          var hooks = env.hooks, set = hooks.set, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),0,1);
          set(env, context, "item", blockArguments[0]);
          block(env, morph0, context, "md-card", [], {"title": get(env, context, "item.title"), "titleClass": "orange-text", "image": get(env, context, "item.image")}, child0, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createElement("ul");
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,-1);
        block(env, morph0, context, "each", [get(env, context, "model")], {}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/search', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode("Search");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            blockParams: 1,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1,"class","col l4 ");
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2,"class","product_card");
              var el3 = dom.createTextNode("\n               ");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n            ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n          ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement, blockArguments) {
              var dom = env.dom;
              var hooks = env.hooks, set = hooks.set, get = hooks.get, inline = hooks.inline;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var morph0 = dom.createMorphAt(dom.childAt(fragment, [1, 1]),0,1);
              set(env, context, "product", blockArguments[0]);
              inline(env, morph0, context, "product-detail", [], {"product": get(env, context, "product"), "addItem": "addItem"});
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("ul");
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","row");
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("    ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(dom.childAt(fragment, [1, 1]),0,1);
            block(env, morph0, context, "each", [get(env, context, "model")], {}, child0, null);
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class","page_title no_bottom_border");
            var el2 = dom.createTextNode("\n    No results for ");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n     ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),0,1);
            content(env, morph0, context, "queryField");
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          block(env, morph0, context, "if", [get(env, context, "model")], {}, child0, child1);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container whole");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","search_header");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class"," page_title search text-uppercase text_green");
        var el4 = dom.createTextNode("\n  Search\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("form");
        dom.setAttribute(el3,"class","input-group container");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4,"class","input-group-btn");
        var el5 = dom.createTextNode(" \n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"type","submit");
        dom.setAttribute(el5,"class","search_button waves-light waves-effect btn");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","iconmelon");
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        dom.setNamespace("http://www.w3.org/2000/svg");
        var el7 = dom.createElement("svg");
        dom.setAttribute(el7,"class","");
        dom.setAttribute(el7,"viewBox","0 0 32 32");
        var el8 = dom.createTextNode("\n                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("use");
        dom.setAttributeNS(el8,"http://www.w3.org/1999/xlink","xlink:href","/icons.svg#search");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" \n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("   \n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block, element = hooks.element, get = hooks.get, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [1, 3]);
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createMorphAt(element1,0,1);
        var morph2 = dom.createMorphAt(element0,2,-1);
        block(env, morph0, context, "document-title", [], {}, child0, null);
        element(env, element1, context, "action", ["search"], {"on": "submit"});
        inline(env, morph1, context, "input", [], {"class": "search form-control", "placeholder": "Search shop for ...", "value": get(env, context, "queryField")});
        block(env, morph2, context, "if", [get(env, context, "query")], {}, child1, null);
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/templates/solutions', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode("Microcontroller | Web and Mobile Solutions");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		  		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","parallax_title text-uppercase");
          var el2 = dom.createTextNode("\n	 	 			BEAUTIFUL INDEPENDENT SOFTWARE FOR THE PEOPLE,\n					BY THE PEOPLE.\n			  	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" \n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		  		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","parallax_title text-uppercase");
          var el2 = dom.createTextNode("\n	 	 			BEAUTIFUL INDEPENDENT SOFTWARE FOR THE PEOPLE,\n					BY THE PEOPLE.\n			  	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" 			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n			  	");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","parallax_desc");
          var el3 = dom.createTextNode("\n			        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("We create wonderful Internet of Things, web and mobile applications ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n			  	");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n 			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child4 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n		  		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","parallax_title text-uppercase");
          var el2 = dom.createTextNode("\n			  		Microcontroller-based applications\n			  	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child5 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" 			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n			  	 \n			  	");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","parallax_desc");
          var el3 = dom.createTextNode("\n			        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit nunc, finibus sit amet sem in, aliquam viverra nibh. In nunc metus, pulvinar dignissim justo non, viverra semper neque. Ut eleifend enim eget ligula commodo ultrices. ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n			  	");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n 			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child6 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n		  		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","parallax_title text-uppercase");
          var el2 = dom.createTextNode("\n			  		Microcontroller-based applications\n			  	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child7 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" 			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n			  	 \n			  	");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","parallax_desc");
          var el3 = dom.createTextNode("\n			        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("It's not how you plant it, but how you nourish it.");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n			  	");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n 			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child8 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" 			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n			  	 \n			  	");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","parallax_desc");
          var el3 = dom.createTextNode("\n			        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit nunc, finibus sit amet sem in, aliquam viverra nibh. In nunc metus, pulvinar dignissim justo non, viverra semper neque. Ut eleifend enim eget ligula commodo ultrices.  ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n			  	");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n 			\n		 	 	 ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment(" <div class=\"iconmelon icon_green center_page\" >\n	              <svg class=\"\" viewBox=\"0 0 32 32\">\n	                <use xlink:href=\"/icons.svg#cloud\"></use>\n	              </svg> \n	            </div> ");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n 			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child9 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" 			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n			  	 \n			  	");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","parallax_desc");
          var el3 = dom.createTextNode("\n			        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit nunc, finibus sit amet sem in, aliquam viverra dfdfdsnibh. In nunc metus, pulvinar dignissim justo non, viverra semper neque. Ut eleifend enim eget ligula commodo ultrices. ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n			  	");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n 			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child10 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n		  		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","parallax_title text-uppercase");
          var el2 = dom.createTextNode("\n			  		Mobile Applications\n			  	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child11 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" 			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n			  	 \n			  	");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","parallax_desc");
          var el3 = dom.createTextNode("\n			        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("It's not how you plant it, but how you nourish it. ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n			  	");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n 			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child12 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		  		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","parallax_title text-uppercase");
          var el2 = dom.createTextNode("\n			  		Mobile Applications\n			  	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child13 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" 			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode(" \n			  	");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","parallax_desc");
          var el3 = dom.createTextNode("\n			        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("It's not how you plant it, but how you nourish it.");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n			  	");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n 			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child14 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	 	 	 ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","iconmelon icon_green center_page");
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          dom.setNamespace("http://www.w3.org/2000/svg");
          var el2 = dom.createElement("svg");
          dom.setAttribute(el2,"class","");
          dom.setAttribute(el2,"viewBox","0 0 32 32");
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("use");
          dom.setAttributeNS(el3,"http://www.w3.org/1999/xlink","xlink:href","/icons.svg#mail");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n              ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" \n            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container whole");
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" 	<div class=\"page_title text-uppercase text_green\">\n		SOLUTIONS\n	</div>\n ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","paralla space_on_top");
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","parallax__group filler intro");
        dom.setAttribute(el3,"id","intro");
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("video");
        dom.setAttribute(el5,"autoplay","");
        dom.setAttribute(el5,"loop","");
        dom.setAttribute(el5,"poster","https://www.paypalobjects.com/webstatic/en_TW/mktg/wright/home/home_hero_roa_holidays.jpg");
        dom.setAttribute(el5,"id","bgvid");
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("source");
        dom.setAttribute(el6,"src","https://www.paypalobjects.com/webstatic/mktg/roa/videos/buyer-protection/matt.webm");
        dom.setAttribute(el6,"type","video/webm");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("source");
        dom.setAttribute(el6,"src","https://www.paypalobjects.com/webstatic/mktg/roa/videos/buyer-protection/matt.mp4");
        dom.setAttribute(el6,"type","video/mp4");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n			");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	 	 ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","parallax__layer parallax__layer--base ");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("	 \n	  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","parallax__layer parallax__layer--base intro");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("	  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n\n\n\n  	");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n	");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","parallax__group");
        dom.setAttribute(el3,"id","slide1");
        var el4 = dom.createTextNode("\n	  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","parallax__layer parallax__layer--back");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n	  	");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","parallax_image arduino");
        var el6 = dom.createTextNode("\n	  		");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"src","/images/solutions/arduino-yun2.png");
        dom.setAttribute(el6,"height","427px");
        dom.setAttribute(el6,"width","528px");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n	  	");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n	  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","parallax__layer parallax__layer--base microcontroller");
        var el5 = dom.createTextNode("\n\n	  	\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("	  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","parallax__group");
        dom.setAttribute(el3,"id","slide2");
        var el4 = dom.createTextNode("\n	  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","parallax__layer parallax__layer--base");
        var el5 = dom.createTextNode("\n	  	");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" {{#md-card-panel class=\"white center\" bodyClass=\"transparent\" class=\"parallax_card title web shadow\"}}\n\n		  		<div class=\"parallax_title text-uppercase\">\n			  		Cloud Solutions and Web Applications\n			  	</div>\n 			{{/md-card-panel}} ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("	  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","parallax__layer parallax__layer--base");
        var el5 = dom.createTextNode("\n\n\n\n	  	\n			");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" {{#md-card-panel class=\"teal center\" bodyClass=\"white-text\" class=\"parallax_card title web\"}}\n\n		  		<div class=\"parallax_title text-uppercase\">\n			  		Cloud Solutions and Web Applications\n			  	</div>\n 			{{/md-card-panel}} ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("	  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n	  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" <div class=\"parallax__layer parallax__layer--deep\"> \n	  	<div class=\"parallax_image\">\n	  		<img src=\"/DFR0009.jpg\" height=\"100px\" width=\"100px\"/>\n	  	</div>\n	  </div> ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	\n\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","parallax__group");
        dom.setAttribute(el3,"id","slide3");
        var el4 = dom.createTextNode("\n	  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","parallax__layer parallax__layer--deep");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n  			");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","parallax_image ios");
        var el6 = dom.createTextNode("\n		  		");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"src","/images/solutions/iphone6.png");
        dom.setAttribute(el6,"height","425px");
        dom.setAttribute(el6,"width","338px");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n		  	");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		  	");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","parallax_image android");
        var el6 = dom.createTextNode("\n		  		");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"src","/images/solutions/nexus6.png");
        dom.setAttribute(el6,"height","500px");
        dom.setAttribute(el6,"width","500px");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n		  	");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n	  	\n	  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","parallax__layer parallax__layer--base");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("	  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n	");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","parallax__group filler");
        dom.setAttribute(el3,"id","end");
        var el4 = dom.createTextNode("\n	 	 ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","parallax__layer parallax__layer--base page_title ");
        var el5 = dom.createTextNode("\n	 	 	Itching to get that idea to take flight.\n\n	 	 	Let's Talk\n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	 	 ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n\n  	");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var element0 = dom.childAt(fragment, [2, 3]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [5]);
        if (this.cachedFragment) { dom.repairClonedNode(element2,[1]); }
        var element3 = dom.childAt(element0, [3]);
        var element4 = dom.childAt(element3, [1]);
        var element5 = dom.childAt(element3, [3]);
        var element6 = dom.childAt(element0, [5]);
        var element7 = dom.childAt(element0, [7]);
        var element8 = dom.childAt(element7, [1]);
        var element9 = dom.childAt(element7, [3]);
        if (this.cachedFragment) { dom.repairClonedNode(element9,[1]); }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createMorphAt(dom.childAt(element1, [3]),0,1);
        var morph2 = dom.createMorphAt(element2,0,1);
        var morph3 = dom.createMorphAt(element2,1,2);
        var morph4 = dom.createMorphAt(element4,0,1);
        var morph5 = dom.createMorphAt(element4,1,2);
        var morph6 = dom.createMorphAt(element5,0,1);
        var morph7 = dom.createMorphAt(element5,1,2);
        var morph8 = dom.createMorphAt(dom.childAt(element6, [1]),2,3);
        var morph9 = dom.createMorphAt(dom.childAt(element6, [3]),2,3);
        var morph10 = dom.createMorphAt(element8,0,1);
        var morph11 = dom.createMorphAt(element8,1,2);
        var morph12 = dom.createMorphAt(element9,0,1);
        var morph13 = dom.createMorphAt(element9,1,2);
        var morph14 = dom.createMorphAt(dom.childAt(element0, [9, 1]),0,1);
        block(env, morph0, context, "document-title", [], {}, child0, null);
        block(env, morph1, context, "md-card-panel", [], {"class": "white center", "bodyClass": "transparent", "class": "parallax_card title intro shadow"}, child1, null);
        block(env, morph2, context, "md-card-panel", [], {"class": "teal", "bodyClass": "white-text center", "class": "parallax_card title intro"}, child2, null);
        block(env, morph3, context, "md-card-panel", [], {"class": "", "bodyClass": "", "class": "parallax_card intro"}, child3, null);
        block(env, morph4, context, "md-card-panel", [], {"class": "white center", "bodyClass": "transparent", "class": "parallax_card title microcontroller shadow"}, child4, null);
        block(env, morph5, context, "md-card-panel", [], {"class": "white", "bodyClass": "transparent", "class": "parallax_card microcontroller shadow"}, child5, null);
        block(env, morph6, context, "md-card-panel", [], {"class": "teal", "bodyClass": "white-text center", "class": "parallax_card title microcontroller"}, child6, null);
        block(env, morph7, context, "md-card-panel", [], {"class": "", "bodyClass": "white-text", "class": "parallax_card microcontroller"}, child7, null);
        block(env, morph8, context, "md-card-panel", [], {"class": "white", "bodyClass": "transparent", "class": "parallax_card web shadow"}, child8, null);
        block(env, morph9, context, "md-card-panel", [], {"class": "", "bodyClass": "center text-green", "class": "parallax_card web"}, child9, null);
        block(env, morph10, context, "md-card-panel", [], {"class": "white center", "bodyClass": "transparent", "class": "parallax_card title mobile shadow"}, child10, null);
        block(env, morph11, context, "md-card-panel", [], {"class": "white", "bodyClass": "transparent", "class": "parallax_card mobile shadow"}, child11, null);
        block(env, morph12, context, "md-card-panel", [], {"class": "teal center", "bodyClass": "white-text", "class": "parallax_card title mobile"}, child12, null);
        block(env, morph13, context, "md-card-panel", [], {"class": "", "bodyClass": "white-text", "class": "parallax_card mobile"}, child13, null);
        block(env, morph14, context, "link-to", ["contact"], {}, child14, null);
        return fragment;
      }
    };
  }()));

});
define('rockincircuits/tests/adapters/application.jshint', function () {

  'use strict';

  module('JSHint - adapters');
  test('adapters/application.js should pass jshint', function() { 
    ok(true, 'adapters/application.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/adapters/image.jshint', function () {

  'use strict';

  module('JSHint - adapters');
  test('adapters/image.js should pass jshint', function() { 
    ok(true, 'adapters/image.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/adapters/product.jshint', function () {

  'use strict';

  module('JSHint - adapters');
  test('adapters/product.js should pass jshint', function() { 
    ok(true, 'adapters/product.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/components/edit-quantity.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/edit-quantity.js should pass jshint', function() { 
    ok(true, 'components/edit-quantity.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/components/fb-send.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/fb-send.js should pass jshint', function() { 
    ok(true, 'components/fb-send.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/components/particle-bg.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/particle-bg.js should pass jshint', function() { 
    ok(true, 'components/particle-bg.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/components/product-detail.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/product-detail.js should pass jshint', function() { 
    ok(true, 'components/product-detail.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/components/share-twitter.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/share-twitter.js should pass jshint', function() { 
    ok(true, 'components/share-twitter.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/components/social-apps.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/social-apps.js should pass jshint', function() { 
    ok(true, 'components/social-apps.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/controllers/application.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/application.js should pass jshint', function() { 
    ok(true, 'controllers/application.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/controllers/checkout.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/checkout.js should pass jshint', function() { 
    ok(true, 'controllers/checkout.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/controllers/contact.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/contact.js should pass jshint', function() { 
    ok(true, 'controllers/contact.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/controllers/contact/ask-us.jshint', function () {

  'use strict';

  module('JSHint - controllers/contact');
  test('controllers/contact/ask-us.js should pass jshint', function() { 
    ok(true, 'controllers/contact/ask-us.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/controllers/contact/hire-us.jshint', function () {

  'use strict';

  module('JSHint - controllers/contact');
  test('controllers/contact/hire-us.js should pass jshint', function() { 
    ok(true, 'controllers/contact/hire-us.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/controllers/loading.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/loading.js should pass jshint', function() { 
    ok(true, 'controllers/loading.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/controllers/product.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/product.js should pass jshint', function() { 
    ok(true, 'controllers/product.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/controllers/products.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/products.js should pass jshint', function() { 
    ok(true, 'controllers/products.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/controllers/products/index.jshint', function () {

  'use strict';

  module('JSHint - controllers/products');
  test('controllers/products/index.js should pass jshint', function() { 
    ok(true, 'controllers/products/index.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/controllers/related.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/related.js should pass jshint', function() { 
    ok(true, 'controllers/related.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/controllers/search.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/search.js should pass jshint', function() { 
    ok(true, 'controllers/search.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/helpers/resolver', ['exports', 'ember/resolver', 'rockincircuits/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('rockincircuits/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/helpers/start-app', ['exports', 'ember', 'rockincircuits/app', 'rockincircuits/router', 'rockincircuits/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('rockincircuits/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/initializers/facebook-sdk.jshint', function () {

  'use strict';

  module('JSHint - initializers');
  test('initializers/facebook-sdk.js should pass jshint', function() { 
    ok(true, 'initializers/facebook-sdk.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/mixins/mixin-url.jshint', function () {

  'use strict';

  module('JSHint - mixins');
  test('mixins/mixin-url.js should pass jshint', function() { 
    ok(true, 'mixins/mixin-url.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/models/blog.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/blog.js should pass jshint', function() { 
    ok(true, 'models/blog.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/models/item.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/item.js should pass jshint', function() { 
    ok(true, 'models/item.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/models/product.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/product.js should pass jshint', function() { 
    ok(true, 'models/product.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/routes/application.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/application.js should pass jshint', function() { 
    ok(true, 'routes/application.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/routes/contact/ask-us.jshint', function () {

  'use strict';

  module('JSHint - routes/contact');
  test('routes/contact/ask-us.js should pass jshint', function() { 
    ok(true, 'routes/contact/ask-us.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/routes/contact/hire-us.jshint', function () {

  'use strict';

  module('JSHint - routes/contact');
  test('routes/contact/hire-us.js should pass jshint', function() { 
    ok(true, 'routes/contact/hire-us.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/routes/contact/index.jshint', function () {

  'use strict';

  module('JSHint - routes/contact');
  test('routes/contact/index.js should pass jshint', function() { 
    ok(true, 'routes/contact/index.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/routes/index.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/index.js should pass jshint', function() { 
    ok(true, 'routes/index.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/routes/loading.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/loading.js should pass jshint', function() { 
    ok(true, 'routes/loading.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/routes/product.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/product.js should pass jshint', function() { 
    ok(true, 'routes/product.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/routes/products.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/products.js should pass jshint', function() { 
    ok(true, 'routes/products.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/routes/products/boards.jshint', function () {

  'use strict';

  module('JSHint - routes/products');
  test('routes/products/boards.js should pass jshint', function() { 
    ok(true, 'routes/products/boards.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/routes/products/index.jshint', function () {

  'use strict';

  module('JSHint - routes/products');
  test('routes/products/index.js should pass jshint', function() { 
    ok(true, 'routes/products/index.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/routes/products/robotics.jshint', function () {

  'use strict';

  module('JSHint - routes/products');
  test('routes/products/robotics.js should pass jshint', function() { 
    ok(true, 'routes/products/robotics.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/routes/products/sensors.jshint', function () {

  'use strict';

  module('JSHint - routes/products');
  test('routes/products/sensors.js should pass jshint', function() { 
    ok(true, 'routes/products/sensors.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/routes/related.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/related.js should pass jshint', function() { 
    ok(true, 'routes/related.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/routes/search.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/search.js should pass jshint', function() { 
    ok(true, 'routes/search.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/routes/solutions.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/solutions.js should pass jshint', function() { 
    ok(true, 'routes/solutions.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/serializer/application.jshint', function () {

  'use strict';

  module('JSHint - serializer');
  test('serializer/application.js should pass jshint', function() { 
    ok(true, 'serializer/application.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/serializer/blog.jshint', function () {

  'use strict';

  module('JSHint - serializer');
  test('serializer/blog.js should pass jshint', function() { 
    ok(true, 'serializer/blog.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/serializer/order.jshint', function () {

  'use strict';

  module('JSHint - serializer');
  test('serializer/order.js should pass jshint', function() { 
    ok(true, 'serializer/order.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/test-helper', ['rockincircuits/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('rockincircuits/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/unit/components/product-detail-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("product-detail", {});

  ember_qunit.test("it renders", function (assert) {
    assert.expect(2);

    // creates the component instance
    var component = this.subject();
    assert.equal(component._state, "preRender");

    // renders the component to the page
    this.render();
    assert.equal(component._state, "inDOM");
  });

  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('rockincircuits/tests/unit/components/product-detail-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/product-detail-test.js should pass jshint', function() { 
    ok(true, 'unit/components/product-detail-test.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/unit/controllers/products-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("controller:products", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('rockincircuits/tests/unit/controllers/products-test.jshint', function () {

  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/products-test.js should pass jshint', function() { 
    ok(true, 'unit/controllers/products-test.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/unit/models/item-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel("item", {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test("it exists", function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('rockincircuits/tests/unit/models/item-test.jshint', function () {

  'use strict';

  module('JSHint - unit/models');
  test('unit/models/item-test.js should pass jshint', function() { 
    ok(true, 'unit/models/item-test.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/unit/models/product-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel("product", {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test("it exists", function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('rockincircuits/tests/unit/models/product-test.jshint', function () {

  'use strict';

  module('JSHint - unit/models');
  test('unit/models/product-test.js should pass jshint', function() { 
    ok(true, 'unit/models/product-test.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/views/application.jshint', function () {

  'use strict';

  module('JSHint - views');
  test('views/application.js should pass jshint', function() { 
    ok(true, 'views/application.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/views/checkout.jshint', function () {

  'use strict';

  module('JSHint - views');
  test('views/checkout.js should pass jshint', function() { 
    ok(true, 'views/checkout.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/views/products.jshint', function () {

  'use strict';

  module('JSHint - views');
  test('views/products.js should pass jshint', function() { 
    ok(true, 'views/products.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/views/products/index.jshint', function () {

  'use strict';

  module('JSHint - views/products');
  test('views/products/index.js should pass jshint', function() { 
    ok(true, 'views/products/index.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/views/products/product.jshint', function () {

  'use strict';

  module('JSHint - views/products');
  test('views/products/product.js should pass jshint', function() { 
    ok(true, 'views/products/product.js should pass jshint.'); 
  });

});
define('rockincircuits/tests/views/socialicons.jshint', function () {

  'use strict';

  module('JSHint - views');
  test('views/socialicons.js should pass jshint', function() { 
    ok(true, 'views/socialicons.js should pass jshint.'); 
  });

});
define('rockincircuits/views/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].View.extend({
    didInsertElement: function didInsertElement() {
      var view = Ember['default'].$(".checkout_summary");
      view.hide();
    },
    actions: {} });

});
define('rockincircuits/views/checkout', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].View.extend({
    didInsertElement: function didInsertElement() {
      console.log("checkout_summary didInsertElement");
      this.$(".checkout_summary").hide();
    }
  });

});
define('rockincircuits/views/products', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].View.extend({
        didInsertElement: function didInsertElement() {},
        getParent: 0,
        mouseX: 0,
        mouseY: 0,

        actions: {
            itemAnimation: function itemAnimation(product) {

                var object = this;
                var cart = Ember['default'].$(".shopping-cart");
                var imgtodrag = this.$("<img id=\"dynamic\">");
                imgtodrag.attr("src", product.get("image"));

                imgtodrag = this.$(imgtodrag);
                if (imgtodrag) {
                    var imgclone = imgtodrag.clone().offset({
                        top: event.target.offsetTop,
                        left: event.target.offsetLeft
                    });
                    imgclone.css({
                        opacity: "0.5",
                        position: "absolute",
                        height: "150px",
                        width: "150px",
                        "z-index": "1050"
                    });
                    imgclone.appendTo(Ember['default'].$("body"));
                    imgclone.animate({
                        top: cart.offset().top + 20,
                        left: cart.offset().left,
                        width: 75,
                        height: 75
                    }, 1000, "easeInOutExpo");

                    object = this;

                    setTimeout(function () {
                        var intShakes = 2,
                            intDuration = 200,
                            intDistance = 30;
                        cart.css("position", "relative");
                        for (var x = 1; x <= intShakes; x++) {
                            cart.animate({ left: intDistance * -1 }, intDuration / intShakes / 4).animate({ left: intDistance }, intDuration / intShakes / 2).animate({ left: 0 }, intDuration / intShakes / 4);
                        }
                        object.get("controller").send("saveToStorage", product);
                        var view = Ember['default'].$(".checkout_summary");
                        if (!view.is(":visible")) {
                            view.toggle();
                        }
                    }, 1300);

                    imgclone.animate({
                        width: 10,
                        height: 10
                    }, function () {
                        Ember['default'].$(this).detach();
                    });
                }
            } } });

});
define('rockincircuits/views/products/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].View.extend({
    didInsertElement: function didInsertElement() {},

    actions: {} });

});
define('rockincircuits/views/products/product', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].View.extend({
    didInsertElement: function didInsertElement() {
      console.log("didInsertElement product specific");

      //todo: minimize navbar

      var navTexts = this.$(".nav_text");
      for (var i = 0; i < navTexts.length; i++) {
        //text in navTexts){
        navTexts[i].hide();
      }
    } });

});
define('rockincircuits/views/socialicons', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].View.extend({
    actions: {},
    mouseEnter: function mouseEnter() {
      //this.get('controller').send('hover', this.get('context'));
      console.log("mouseEnter");
    },
    mouseLeave: function mouseLeave() {
      console.log("mouseLeave");
    } });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('rockincircuits/config/environment', ['ember'], function(Ember) {
  var prefix = 'rockincircuits';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("rockincircuits/tests/test-helper");
} else {
  require("rockincircuits/app")["default"].create({"name":"rockincircuits","version":"0.0.0.a56a2628"});
}

/* jshint ignore:end */
//# sourceMappingURL=rockincircuits.map