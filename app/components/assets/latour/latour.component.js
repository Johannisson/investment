angular
    .module('app')
    .controller('LatourController', LatourController)
    .component('appLatour', {
        templateUrl: 'app/components/assets/latour/latour.view.html',
        bindings: {},
        controller: LatourController
    });

LatourController.$inject = [];

function LatourController() {
    var vm = this;
    
    vm.data = latour;

    vm.diagram = [];

    vm.data.years.forEach(function(element) {
        vm.diagram.push({label:(element.year + '').substring(2), value1:element.ordinary, value2:element.extra, value3:element.stocks});
    });
}