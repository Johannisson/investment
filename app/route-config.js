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
            templateUrl: 'view/portföljbolag.html'
        }).when('/portföljbolag/investor', {
            templateUrl: 'view/portföljbolag/investor.html'
        }).when('/portföljbolag/latour', {
            templateUrl: 'view/portföljbolag/latour.html'
        });
}