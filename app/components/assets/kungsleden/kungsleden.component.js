angular
    .module('app')
    .controller('KungsledenController', KungsledenController)
    .component('appKungsleden', {
        templateUrl: 'app/components/assets/kungsleden/kungsleden.view.html',
        bindings: {},
        controller: KungsledenController
    });

KungsledenController.$inject = [];

function KungsledenController() {
    var vm = this;

    vm.data = kungsleden;

    vm.diagram = [];

    vm.data.years.forEach(function(element) {
        vm.diagram.push({label:(element.year + '').substring(2), value1:element.ordinary, value2:element.extra, value3:element.stocks});
    });
}