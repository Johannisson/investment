angular
    .module('app')
    .controller('SagaxController', SagaxController)
    .component('appSagax', {
        templateUrl: 'app/components/stock/sagax/sagax.view.html',
        bindings: {},
        controller: SagaxController
    });

SagaxController.$inject = [];

function SagaxController() {
    var vm = this;

    vm.data = sagax;
}