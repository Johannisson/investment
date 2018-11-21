angular
    .module('app')
    .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            template: '<a href="portfoljbolag">Portföljbolag</a>'
        }).when('/portfoljbolag', {
            templateUrl: 'view/portfoljbolag.html'
        }).when('/portfoljbolag/investor', {
            templateUrl: 'view/portfoljbolag/investor.html'
        }).when('/portfoljbolag/latour', { 
            templateUrl: 'view/portfoljbolag/latour.html'
        });
}