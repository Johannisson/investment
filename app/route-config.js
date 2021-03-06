angular
    .module('app')
    .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            template: '<app-index />'
        }).when('/utdelningskalender', {
            template: '<app-dividend />'
        }).when('/ranta-pa-ranta', {
            template: '<app-compound-interest />'
        }).when('/utdelningar', {
            template: '<app-dividends />'
        }).when('/transaktioner', {
            template: '<app-transactions />'
        }).when('/milstolpar', {
            template: '<app-milestones />'
        }).when('/manadsrapport', {
            template: '<app-report />'
        }).when('/arsrapport', {
            template: '<app-year />'
        }).when('/bevakningslista', {
            template: '<app-watchlist />'
        }).when('/strategi', {
            template: '<app-strategy />'
        }).when('/portfoljbolag', {
            template: '<app-portfolio />'
        }).when('/portfoljbolag/akelius', {
            template: '<app-asset asset="akelius" />'
        }).when('/portfoljbolag/bmw', {
            template: '<app-asset asset="bmw" />'
        }).when('/portfoljbolag/atlas-copco', {
            template: '<app-asset asset="atlas_copco" />'
        }).when('/portfoljbolag/autoliv', {
            template: '<app-asset asset="autoliv" />'
        }).when('/portfoljbolag/axfood', {
            template: '<app-asset asset="axfood" />'
        }).when('/portfoljbolag/castellum', {
            template: '<app-asset asset="castellum" />'
        }).when('/portfoljbolag/catena-media', {
            template: '<app-asset asset="catena-media" />'
        }).when('/portfoljbolag/dustin-group', {
            template: '<app-asset asset="dustin" />'
        }).when('/portfoljbolag/handelsbanken', {
            template: '<app-asset asset="handelsbanken" />'
        }).when('/portfoljbolag/husqvarna', {
            template: '<app-asset asset="husqvarna" />'
        }).when('/portfoljbolag/industrivarden-a', {
            template: '<app-asset asset="industrivarden-a" />'
        }).when('/portfoljbolag/industrivarden-c', {
            template: '<app-asset asset="industrivarden-c" />'
        }).when('/portfoljbolag/investor-a', {
            template: '<app-asset asset="investor-a" />'
        }).when('/portfoljbolag/investor-b', {
            template: '<app-asset asset="investor-b" />'
        }).when('/portfoljbolag/kungsleden', {
            template: '<app-asset asset="kungsleden" />'
        }).when('/portfoljbolag/latour', {
            template: '<app-asset asset="latour" />'
        }).when('/portfoljbolag/nordea', {
            template: '<app-asset asset="nordea" />'
        }).when('/portfoljbolag/np3', {
            template: '<app-asset asset="np3" />'
        }).when('/portfoljbolag/peab', {
            template: '<app-asset asset="peab" />'
        }).when('/portfoljbolag/pfizer', {
            template: '<app-asset asset="pfizer" />'
        }).when('/portfoljbolag/sagax', {
            template: '<app-asset asset="sagax" />'
        }).when('/portfoljbolag/skanska', {
            template: '<app-asset asset="skanska" />'
        }).when('/portfoljbolag/stora-enso', {
            template: '<app-asset asset="stora-enso" />'
        }).when('/portfoljbolag/swedbank', {
            template: '<app-asset asset="swedbank" />'
        }).when('/portfoljbolag/telia', {
            template: '<app-asset asset="telia" />'
        }).when('/portfoljbolag/tryg', {
            template: '<app-asset asset="tryg" />'
        }).when('/portfoljbolag/xact-hogutdelande', {
            template: '<app-asset asset="xact_hogutdelande" />'
        });
}