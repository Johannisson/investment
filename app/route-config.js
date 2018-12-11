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
        }).when('/milstolpar', {
            template: '<app-milestones />'
        }).when('/manadsrapport', {
            template: '<app-report />'
        }).when('/bevakningslista', {
            template: '<app-watchlist />'
        }).when('/strategi', {
            template: '<app-strategy />'
        }).when('/portfoljbolag', {
            template: '<app-portfolio />'
        }).when('/portfoljbolag/axfood', {
            template: '<app-asset asset="axfood" />'
        }).when('/portfoljbolag/autoliv', {
            template: '<app-asset asset="autoliv" />'
        }).when('/portfoljbolag/dustin-group', {
            template: '<app-asset asset="dustin_group" />'
        }).when('/portfoljbolag/atlas-copco', {
            template: '<app-asset asset="atlas_copco" />'
        }).when('/portfoljbolag/investor', {
            template: '<app-asset asset="investor" />'
        }).when('/portfoljbolag/latour', { 
            template: '<app-asset asset="latour" />'
        }).when('/portfoljbolag/sagax-d', { 
            template: '<app-asset asset="sagax" />'
        }).when('/portfoljbolag/skanska', { 
            template: '<app-asset asset="skanska" />'
        }).when('/portfoljbolag/swedbank', { 
            template: '<app-asset asset="swedbank" />'
        }).when('/portfoljbolag/husqvarna', { 
            template: '<app-asset asset="husqvarna" />'
        }).when('/portfoljbolag/castellum', { 
            template: '<app-asset asset="castellum" />'
        }).when('/portfoljbolag/kungsleden', { 
            template: '<app-asset asset="kungsleden" />'
        }).when('/portfoljbolag/akelius', { 
            template: '<app-asset asset="akelius" />'
        }).when('/portfoljbolag/handelsbanken', { 
            template: '<app-asset asset="handelsbanken" />'
        }).when('/portfoljbolag/xact-hogutdelande', { 
            template: '<app-asset asset="xact_hogutdelande" />'
        });
}