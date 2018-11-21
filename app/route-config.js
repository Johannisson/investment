angular
    .module('app')
    .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            template: '<a href="portföljbolag">Portföljbolag</a>'
        }).when('/portföljbolag', {
            templateUrl: 'portföljbolag.html'
        }).when('/portföljbolag/investor', {
            templateUrl: 'portföljbolag/investor.html'
        }).when('/portföljbolag/latour', {
            templateUrl: 'portföljbolag/latour.html'
        });
}