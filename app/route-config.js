angular
    .module('app')
    .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            template: '<app-index />'
        }).when('/utdelningsprognos', {
            template: '<app-dividend />'
        }).when('/transaktioner', {
            template: '<app-transactions />'
        }).when('/manadsrapport', {
            template: '<app-report />'
        }).when('/bevakningslista', {
            template: '<app-watchlist />'
        }).when('/portfoljbolag', {
            template: '<app-portfolio />'
        }).when('/portfoljbolag/investor', {
            template: '<app-investor />'
        }).when('/portfoljbolag/latour', { 
            template: '<app-latour />'
        }).when('/portfoljbolag/sagax-d', { 
            template: '<app-sagax />'
        }).when('/portfoljbolag/swedbank', { 
            template: '<app-swedbank />'
        }).when('/portfoljbolag/husqvarna', { 
            template: '<app-husqvarna />'
        }).when('/portfoljbolag/castellum', { 
            template: '<app-castellum />'
        }).when('/portfoljbolag/handelsbanken', { 
            template: '<app-handelsbanken />'
        }).when('/portfoljbolag/xact_hogutdelande', { 
            template: '<app-xact-hogutdelande />'
        });
}