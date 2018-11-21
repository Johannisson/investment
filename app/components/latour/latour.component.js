angular
    .module('app')
    .controller('LatourController', LatourController)
    .component('appLatour', {
        templateUrl: 'app/components/latour/latour.view.html',
        bindings: {},
        controller: LatourController
    });

LatourController.$inject = [];

function LatourController() {
    var vm = this;
}