angular
    .module('app')
    .controller('DiagramController', DiagramController)
    .component('appDiagram', {
        templateUrl: 'app/components/diagram/diagram.view.html',
        bindings: {
            data: '=',
            rows: '=',
            width: '=',
            height: '='
        },
        controller: DiagramController
    });

DiagramController.$inject = [];

function DiagramController() {
    var vm = this;

    vm.step = function(index, offset) {
        return Math.floor(index * ((vm.width - 20) / vm.data.length) * 0.95 + offset);
    };

    vm.pixel = function(value) {
        return Math.floor(value) + 0.5;
    }

    vm.$onInit = function() {
        vm.scale = 1 / Math.max.apply(null, vm.rows) * 310;
        vm.decimals = undefined;
    }
}