angular
    .module('app')
    .controller('InvestorController', InvestorController)
    .component('appInvestor', {
        templateUrl: 'app/components/stock/investor/investor.view.html',
        bindings: {},
        controller: InvestorController
    });

InvestorController.$inject = [];

function InvestorController() {
    var vm = this;

    vm.data = investor;

    vm.diagram = [];

    vm.data.dividends.forEach(function(element) {
        vm.diagram.push({label:(element.year + '').substring(2), value1:element.ordinary, value2:element.extra, value3:element.stocks});
    });
}