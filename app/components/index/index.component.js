angular
    .module('app')
    .controller('IndexController', IndexController)
    .component('appIndex', {
        templateUrl: 'app/components/index/index.view.html',
        bindings: {},
        controller: IndexController
    });

IndexController.$inject = [];

function IndexController() {
    var vm = this;

    vm.castellum = castellum;
    vm.husqvarna = husqvarna;
    vm.investor = investor;
    vm.latour = latour;
    vm.sagax = sagax;
    vm.swedbank = swedbank;
}