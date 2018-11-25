angular
    .module('app')
    .controller('HusqvarnaController', HusqvarnaController)
    .component('appHusqvarna', {
        templateUrl: 'app/components/stock/husqvarna/husqvarna.view.html',
        bindings: {},
        controller: HusqvarnaController
    });

HusqvarnaController.$inject = [];

function HusqvarnaController() {
    var vm = this;

    vm.data = husqvarna;

    vm.diagram = [];

    vm.data.years.forEach(function(element) {
        vm.diagram.push({label:(element.year + '').substring(2), value1:element.ordinary, value2:element.extra, value3:element.stocks});
    });
}