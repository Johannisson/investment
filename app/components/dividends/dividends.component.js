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
        { date: '2019-01-04',  asset: kungsleden,        quantity: 20,   amount: 11.00,    tax: 0,       type: '',           last: false },
        { date: '2019-01-04',  asset: sagax,             quantity: 400,  amount: 200.00,   tax: 0,       type: '',           last: false },
        { date: '2019-01-04',  asset: tryg,              quantity: 12,   amount: 27.36,    tax: 7.38,    type: '',           last: true  },
        { date: '2019-02-08',  asset: akelius,           quantity: 10,   amount: 50.00,    tax: 0,       type: '',           last: false },
        { date: '2019-02-13',  asset: investor_a,        quantity: 50,   amount: 137.00,   tax: 0,       type: 'arbitrage',  last: true  },
        { date: '2019-03-02',  asset: pfizer,            quantity: 10,   amount: 33.32,    tax: 4.99,    type: '',           last: false },
        { date: '2019-03-06',  asset: autoliv,           quantity: 4,    amount: 22.99,    tax: 3.44,    type: '',           last: false },
        { date: '2019-03-28',  asset: axfood,            quantity: 99,   amount: 693.00,   tax: 0,       type: '',           last: false },
        { date: '2019-03-28',  asset: castellum,         quantity: 90,   amount: 274.50,   tax: 0,       type: '',           last: false },
        { date: '2019-03-29',  asset: industrivarden_a,  quantity: 13,   amount: 56.00,    tax: 0,       type: 'arbitrage',  last: true  },
        { date: '2019-04-03',  asset: handelsbanken,     quantity: 120,  amount: 660.00,   tax: 0,       type: '',           last: false },
        { date: '2019-04-03',  asset: sagax,             quantity: 400,  amount: 200.00,   tax: 0,       type: '',           last: false },
        { date: '2019-04-04',  asset: swedbank,          quantity: 155,  amount: 2201.00,  tax: 0,       type: '',           last: false },
        { date: '2019-04-04',  asset: skanska,           quantity: 10,   amount: 60.00,    tax: 0,       type: '',           last: false },
        { date: '2019-04-04',  asset: nordea,            quantity: 100,  amount: 718.64,   tax: 107.79,  type: '',           last: true  }
    ];
}