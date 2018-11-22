angular
    .module('app')
    .controller('InvestorController', InvestorController)
    .component('appInvestor', {
        templateUrl: 'app/components/investor/investor.view.html',
        bindings: {},
        controller: InvestorController
    });

InvestorController.$inject = [];

function InvestorController() {
    var vm = this;

    vm.data = {
        quantity: 30,
        homepage: {
            name: 'www.investorab.se' ,
            url: 'https://www.investorab.se/'
        }
    };
}