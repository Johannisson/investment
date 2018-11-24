angular
    .module('app')
    .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/utdelning', {
            template: '<app-dividend />'
        }).when('/', {
            template: '<app-index />'
        }).when('/portfoljbolag', {
            template: '<app-portfolio />'
        }).when('/portfoljbolag/investor', {
            template: '<app-investor />'
        }).when('/portfoljbolag/latour', { 
            template: '<app-latour />'
        }).when('/portfoljbolag/sagax', { 
            template: '<app-sagax />'
        }).when('/portfoljbolag/swedbank', { 
            template: '<app-swedbank />'
        }).when('/portfoljbolag/husqvarna', { 
            template: '<app-husqvarna />'
        }).when('/portfoljbolag/castellum', { 
            template: '<app-castellum />'
        });
}