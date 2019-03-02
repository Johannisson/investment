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
            asset: tryg,
            last: true
        },
        {
            date: '2019-02-08',
            quantity: 10,
            amount: 50.00,
            asset: akelius,
        },
        {
            date: '2019-02-13',
            type: 'arbitrage',
            quantity: 50,
            amount: 137.00,
            asset: investor_a,
            last: true
        },
        {
            date: '2019-03-02',
            quantity: 10,
            amount: 33.32,
            tax: 4.99,
            asset: pfizer,
            last: true
        }
    ];
}