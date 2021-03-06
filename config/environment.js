/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'rockincircuits',
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' http://rockincircuits.disqus.com/ apis.google.com http://platform.twitter.com/ use.typekit.net connect.facebook.net maps.googleapis.com maps.gstatic.com https://cdn.mxpnl.com http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js https://apis.google.com/ http://threejs.org/examples/js/libs/stats.min.js",
      'font-src': "'self' data: use.typekit.net http://fonts.gstatic.com",
      'connect-src': "'self' https://api.mixpanel.com http://custom-api.local",
      'img-src': "'self' www.facebook.com p.typekit.net http://a.disquscdn.com/ https://referrer.disqus.com/ http://www.elecrow.com/ data:",
      'style-src': "'self' 'unsafe-inline' use.typekit.net http://fonts.googleapis.com http://a.disquscdn.com/",
      'frame-src': "'self' https://disqus.com s-static.ak.facebook.com static.ak.facebook.com www.facebook.com platform.twitter.com apis.google.com accounts.google.com www.disqus.com a.disquscdn.com/embed.js data:", 
      'media-src': "'self'",

    },
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },

    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      disqus: {
        shortname: 'rockincircuits'
      }
    },
    sassOptions: {
      includePaths: ['bower_components/materialize/sass']
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
