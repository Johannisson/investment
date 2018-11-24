angular
    .module('app')
    .controller('CastellumController', CastellumController)
    .component('appCastellum', {
        templateUrl: 'app/components/stock/castellum/castellum.view.html',
        bindings: {},
        controller: CastellumController
    });

CastellumController.$inject = [];

function CastellumController() {
    var vm = this;

    vm.data = castellum;
}