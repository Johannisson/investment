angular
    .module('app')
    .controller('DividendsController', DividendsController)
    .component('appDividends', {
        templateUrl: 'app/components/dividends/dividends.view.html',
        bindings: {},
        controller: DividendsController
    });

DividendsController.$inject = [];

function DividendsController() {
    var vm = this;

    vm.dividends = [
        {
            date: '2019-01-04',
            quantity: 20,
            amount: 11,
            asset: kungsleden
        },
        {
            date: '2019-01-04',
            quantity: 400,
            amount: 200,
            asset: sagax
        },
    ];
}