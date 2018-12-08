angular
    .module('app')
    .controller('SkanskaController', SkanskaController)
    .component('appSkanska', {
        templateUrl: 'app/components/assets/skanska/skanska.view.html',
        bindings: {},
        controller: SkanskaController
    });

SkanskaController.$inject = [];

function SkanskaController() {
    var vm = this;

    vm.data = skanska;

    vm.diagram = [];

    vm.data.years.forEach(function(element) {
        vm.diagram.push({label:(element.year + '').substring(2), value1:element.ordinary, value2:element.extra, value3:element.stocks});
    });
}