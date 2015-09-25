System.config({
  baseURL: '/',
  map: {
    'papaparse': 'vendor/papaparse/papaparse.min.js',
    'angular': 'vendor/angular/angular.min.js',
    'angular-route': 'vendor/angular-route/angular-route.min.js',
    'lodash': 'vendor/lodash/lodash.min.js',
    'app': 'js/app',
    'components': 'js/components',
    'ui-bootstrap': 'vendor/angular-bootstrap/ui-bootstrap.min.js'
  },
  meta: {
    'angular-route': {
      deps: ['angular']
    },
    'ui-bootstrap': {
      deps: ['angular']
    }
  }
});

System.import('app/main.js');
