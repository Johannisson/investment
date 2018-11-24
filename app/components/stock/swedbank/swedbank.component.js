angular
    .module('app')
    .controller('SwedbankController', SwedbankController)
    .component('appSwedbank', {
        templateUrl: 'app/components/stock/swedbank/swedbank.view.html',
        bindings: {},
        controller: SwedbankController
    });

SwedbankController.$inject = [];

function SwedbankController() {
    var vm = this;

    vm.data = swedbank;
}