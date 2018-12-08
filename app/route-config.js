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
        }).when('/utdelningar', {
            template: '<app-dividends />'
        }).when('/transaktioner', {
            template: '<app-transactions />'
        }).when('/manadsrapport', {
            template: '<app-report />'
        }).when('/bevakningslista', {
            template: '<app-watchlist />'
        }).when('/strategi', {
            template: '<app-strategy />'
        }).when('/portfoljbolag', {
            template: '<app-portfolio />'
        }).when('/portfoljbolag/axfood', {
            template: '<app-axfood />'
        }).when('/portfoljbolag/atlas-copco', {
            template: '<app-atlas-copco />'
        }).when('/portfoljbolag/investor', {
            template: '<app-investor />'
        }).when('/portfoljbolag/latour', { 
            template: '<app-latour />'
        }).when('/portfoljbolag/sagax-d', { 
            template: '<app-sagax />'
        }).when('/portfoljbolag/skanska', { 
            template: '<app-skanska />'
        }).when('/portfoljbolag/swedbank', { 
            template: '<app-swedbank />'
        }).when('/portfoljbolag/husqvarna', { 
            template: '<app-husqvarna />'
        }).when('/portfoljbolag/castellum', { 
            template: '<app-castellum />'
        }).when('/portfoljbolag/kungsleden', { 
            template: '<app-kungsleden />'
        }).when('/portfoljbolag/akelius', { 
            template: '<app-akelius />'
        }).when('/portfoljbolag/handelsbanken', { 
            template: '<app-handelsbanken />'
        }).when('/portfoljbolag/xact-hogutdelande', { 
            template: '<app-xact-hogutdelande />'
        });
}