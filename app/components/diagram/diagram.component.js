angular
    .module('app')
    .controller('DiagramController', DiagramController)
    .component('appDiagram', {
        templateUrl: 'app/components/diagram/diagram.view.html',
        bindings: {},
        controller: DiagramController
    });

DiagramController.$inject = [];

function DiagramController() {
    var vm = this;
}