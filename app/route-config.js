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
            template: '<app-investor />'
        }).when('/portfoljbolag/latour', { 
            template: '<app-latour />'
        }).when('/portfoljbolag/swedbank', { 
            template: '<app-swedbank />'
        });
}