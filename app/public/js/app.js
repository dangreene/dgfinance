System.config({
  baseURL: '/',
  map: {
    'papaparse': 'vendor/papaparse/papaparse.min.js',
    'angular': 'vendor/angular/angular.min.js',
    'angular-route': 'vendor/angular-route/angular-route.min.js',
    'lodash': 'vendor/lodash/lodash.min.js',
    'app': 'js/app',
    'components': 'js/components'
  },
  meta: {
    angular: {
      exports: 'angular'
    },
    'angular-route': {
      deps: ['angular']
    },
    'papaparse': {
      exports: 'Papa'
    },
    'lodash': {
      exports: '_'
    }
  }
});

System.import('app/main.js');
