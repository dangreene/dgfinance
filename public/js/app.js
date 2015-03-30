requirejs.config({
    baseUrl: 'js',
    paths:{
        'papaparse':'../vendor/papaparse/papaparse.min',
        'angular':'../vendor/angular/angular.min',
        'angular-route':'../vendor/angular-route/angular-route.min',
        'lodash':'../vendor/lodash/lodash.min'
    },
    shim:{
        angular:{
            exports:'angular'
        },
        'angular-route':{
            exports:'angular-route',
            deps:['angular']
        },
        'papaparse':{
            exports:'Papa'
        },
        'lodash':{
            exports: "_"
        }
    }
});

requirejs(['app/main']);