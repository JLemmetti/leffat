'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'leffat',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    firebase: {
      apiKey: "AIzaSyAvnl0fVm7lGRlEpXvqAsGSReUCVQeYnUs",
      authDomain: "leffat-e132d.firebaseapp.com",
      databaseURL: "https://leffat-e132d.firebaseio.com",
      projectId: "leffat-e132d",
      storageBucket: "leffat-e132d.appspot.com",
      messagingSenderId: "844443458945"
    },
    torii: {
      sessionServiceName: 'session'
    },
    moment: {
      allowEmpty: true
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
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
