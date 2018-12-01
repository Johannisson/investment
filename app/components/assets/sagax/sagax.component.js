angular
    .module('app')
    .controller('SagaxController', SagaxController)
    .component('appSagax', {
        templateUrl: 'app/components/assets/sagax/sagax.view.html',
        bindings: {},
        controller: SagaxController
    });

SagaxController.$inject = [];

function SagaxController() {
    var vm = this;

    vm.data = sagax;

    vm.diagram = [];

    vm.data.calendar.forEach(function(element) {
        vm.diagram.push({label:element.month, value1:element.ordinary});
    });
}