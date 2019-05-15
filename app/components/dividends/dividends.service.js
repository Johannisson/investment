angular
    .module('app')
    .service('DividendsService', DividendsService);

DividendsService.$inject = ['AssetService'];

function DividendsService(AssetService) {
    var vm = this;

    vm.dividends = [
        { date: '2019-01-04',  asset: AssetService.kungsleden,        quantity: 20,   amount: 11.00,    tax: 0,       type: '',           last: false },
        { date: '2019-01-04',  asset: AssetService.sagax,             quantity: 400,  amount: 200.00,   tax: 0,       type: '',           last: false },
        { date: '2019-01-04',  asset: AssetService.tryg,              quantity: 12,   amount: 27.36,    tax: 7.38,    type: '',           last: true  },

        { date: '2019-02-08',  asset: AssetService.akelius,           quantity: 10,   amount: 50.00,    tax: 0,       type: '',           last: false },
        { date: '2019-02-13',  asset: AssetService.investor_a,        quantity: 50,   amount: 137.00,   tax: 0,       type: 'arbitrage',  last: true  },

        { date: '2019-03-02',  asset: AssetService.pfizer,            quantity: 10,   amount: 33.32,    tax: 4.99,    type: '',           last: false },
        { date: '2019-03-06',  asset: AssetService.autoliv,           quantity: 4,    amount: 22.99,    tax: 3.44,    type: '',           last: false },
        { date: '2019-03-28',  asset: AssetService.axfood,            quantity: 99,   amount: 693.00,   tax: 0,       type: '',           last: false },
        { date: '2019-03-28',  asset: AssetService.castellum,         quantity: 90,   amount: 274.50,   tax: 0,       type: '',           last: false },
        { date: '2019-03-29',  asset: AssetService.industrivarden_a,  quantity: 13,   amount: 56.00,    tax: 0,       type: 'arbitrage',  last: true  },

        { date: '2019-04-03',  asset: AssetService.handelsbanken,     quantity: 120,  amount: 660.00,   tax: 0,       type: '',           last: false },
        { date: '2019-04-03',  asset: AssetService.sagax,             quantity: 400,  amount: 200.00,   tax: 0,       type: '',           last: false },
        { date: '2019-04-04',  asset: AssetService.swedbank,          quantity: 155,  amount: 2201.00,  tax: 0,       type: '',           last: false },
        { date: '2019-04-04',  asset: AssetService.skanska,           quantity: 10,   amount: 60.00,    tax: 0,       type: '',           last: false },
        { date: '2019-04-04',  asset: AssetService.nordea,            quantity: 100,  amount: 718.64,   tax: 107.79,  type: '',           last: false },
        { date: '2019-04-15',  asset: AssetService.tryg,              quantity: 40,   amount: 95.05,    tax: 25.66,   type: '',           last: false },
        { date: '2019-04-15',  asset: AssetService.husqvarna,         quantity: 140,  amount: 105.00,   tax: 0,       type: '',           last: false },
        { date: '2019-04-17',  asset: AssetService.telia,             quantity: 100,  amount: 118.00,   tax: 0,       type: '',           last: false },
        { date: '2019-04-25',  asset: AssetService.industrivarden_c,  quantity: 31,   amount: 178.25,   tax: 0,       type: '',           last: true  },

        { date: '2019-05-02',  asset: AssetService.atlas_copco,       quantity: 15,   amount: 47.25,    tax: 0,       type: '',           last: false },
        { date: '2019-05-03',  asset: AssetService.kungsleden,        quantity: 28,   amount: 16.80,    tax: 0,       type: '',           last: false },
        { date: '2019-05-03',  asset: AssetService.lifco,             quantity: 12,   amount: 55.20,    tax: 0,       type: '',           last: false },
        { date: '2019-05-10',  asset: AssetService.np3,               quantity: 91,   amount: 136.50,   tax: 0,       type: '',           last: false },
        { date: '2019-05-14',  asset: AssetService.latour,            quantity: 249,  amount: 622.50,   tax: 0,       type: '',           last: false },
        { date: '2019-05-15',  asset: AssetService.investor_a,        quantity: 60,   amount: 540.00,   tax: 0,       type: '',           last: true  }
    ];

    vm.getDividend = function(month, asset) {
        for (var i in vm.dividends) {
            if (vm.dividends[i].date.startsWith(month) && vm.dividends[i].asset.id == asset.id) {
                return vm.dividends[i].amount;
            }
        };
        return 0;
    };

    vm.getDividends = function(month) {
        var sum = 0;
        for (var i in vm.dividends) {
            if (vm.dividends[i].date.startsWith(month) && vm.dividends[i].type == '') {
                sum += vm.dividends[i].amount;
            }
        };
        return sum;
    };

    vm.getArbitrages = function(month) {
        var sum = 0;
        for (var i in vm.dividends) {
            if (vm.dividends[i].date.startsWith(month) && vm.dividends[i].type == 'arbitrage') {
                sum += vm.dividends[i].amount;
            }
        };
        return sum;
    };
}