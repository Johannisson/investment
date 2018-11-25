angular
    .module('app')
    .controller('SwedbankController', SwedbankController)
    .component('appSwedbank', {
        templateUrl: 'app/components/stock/swedbank/swedbank.view.html',
        bindings: {},
        controller: SwedbankController
    });

SwedbankController.$inject = [];

function SwedbankController() {
    var vm = this;

    vm.data = swedbank;

    vm.diagram = [];

    vm.data.years.forEach(function(element) {
        vm.diagram.push({label:(element.year + '').substring(2), value1:element.ordinary, value2:element.extra, value3:element.stocks});
    });
}