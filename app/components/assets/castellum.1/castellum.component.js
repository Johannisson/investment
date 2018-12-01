angular
    .module('app')
    .controller('CastellumController', CastellumController)
    .component('appCastellum', {
        templateUrl: 'app/components/assets/castellum/castellum.view.html',
        bindings: {},
        controller: CastellumController
    });

CastellumController.$inject = [];

function CastellumController() {
    var vm = this;

    vm.data = castellum;

    vm.diagram = [];

    vm.data.years.forEach(function(element) {
        vm.diagram.push({label:(element.year + '').substring(2), value1:element.ordinary, value2:element.extra, value3:element.stocks});
    });
}