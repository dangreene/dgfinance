System.config({
  baseURL: '/',
  map: {
    'papaparse': 'vendor/papaparse/papaparse.min.js',
    'angular': 'vendor/angular/angular.min.js',
    'angular-route': 'vendor/angular-route/angular-route.min.js',
    'angular-animate': 'vendor/angular-animate/angular-animate.min.js',
    'lodash': 'vendor/lodash/lodash.min.js',
    'app': 'js/app',
    'components': 'js/components',
    'ui-bootstrap': 'vendor/angular-bootstrap/ui-bootstrap.min.js',
    'ui-grid': 'vendor/angular-ui-grid/ui-grid.min.js'
  },
  meta: {
    'angular-route': {
      deps: ['angular']
    },
    'ui-bootstrap': {
      deps: ['angular']
    },
    'ui-grid': {
      deps: ['angular']
    }
  }
});

System.import('app/main.js');
