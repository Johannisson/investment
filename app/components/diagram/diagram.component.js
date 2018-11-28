angular
    .module('app')
    .controller('DiagramController', DiagramController)
    .component('appDiagram', {
        templateUrl: 'app/components/diagram/diagram.view.html',
        bindings: {
            data: '=',
            scale: '=',
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
        return Math.floor(index * (vm.width / vm.data.length) * 0.95 + offset);
    };

    vm.pixel = function(value) {
        return Math.floor(value) + 0.5;
    }
}