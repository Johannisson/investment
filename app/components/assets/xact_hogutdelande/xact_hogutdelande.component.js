angular
    .module('app')
    .controller('XactHogutdelandeController', XactHogutdelandeController)
    .component('appXactHogutdelande', {
        templateUrl: 'app/components/assets/xact_hogutdelande/xact_hogutdelande.view.html',
        bindings: {},
        controller: XactHogutdelandeController
    });

XactHogutdelandeController.$inject = [];

function XactHogutdelandeController() {
    var vm = this;

    vm.data = xact_hogutdelande;

    vm.diagram = [];

    vm.data.years.forEach(function(element) {
        vm.diagram.push({label:(element.year + '').substring(2), value1:element.ordinary, value2:element.extra, value3:element.stocks});
    });
}