angular
    .module('app')
    .controller('AkeliusController', AkeliusController)
    .component('appAkelius', {
        templateUrl: 'app/components/assets/akelius/akelius.view.html',
        bindings: {},
        controller: AkeliusController
    });

AkeliusController.$inject = [];

function AkeliusController() {
    var vm = this;

    vm.data = akelius;

    vm.diagram = [];

    vm.data.years.forEach(function(element) {
        vm.diagram.push({label:(element.year + '').substring(2), value1:element.ordinary, value2:element.extra, value3:element.stocks});
    });
}