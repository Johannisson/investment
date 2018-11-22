angular
    .module('app')
    .controller('SwedbankController', SwedbankController)
    .component('appSwedbank', {
        templateUrl: 'app/components/swedbank/swedbank.view.html',
        bindings: {},
        controller: SwedbankController
    });

SwedbankController.$inject = [];

function SwedbankController() {
    var vm = this;

    vm.data = {
        quantity: 110
    };
}