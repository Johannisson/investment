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
            amount: 11.00,
            asset: kungsleden
        },
        {
            date: '2019-01-04',
            quantity: 400,
            amount: 200.00,
            asset: sagax
        },
        {
            date: '2019-01-04',
            quantity: 12,
            amount: 27.36,
            tax: 7.38,
            asset: tryg
        },
    ];
}