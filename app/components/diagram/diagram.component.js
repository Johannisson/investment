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
        return Math.floor(index * ((vm.width - 20) / vm.data.length) * 0.93 + offset);
    };

    vm.pixel = function(value) {
        return Math.floor(value) + 0.5;
    }

    vm.$onInit = function() {
        vm.scale = 1 / Math.max.apply(null, vm.rows) * 300;
        vm.decimals = undefined;
        vm.data.forEach(function (element) {
            element.visibility1 = 'hidden';
            element.visibility2 = 'hidden';
            element.visibility3 = 'hidden';
        });
    }
}