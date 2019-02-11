angular
    .module('app')
    .controller('TransactionsController', TransactionsController)
    .component('appTransactions', {
        templateUrl: 'app/components/transactions/transactions.view.html',
        bindings: {
            model: '=',
        },
        controller: TransactionsController
    });

TransactionsController.$inject = [];

function TransactionsController() {
    var vm = this;

    vm.transactions = [
        { label: 'November 2018' },
        { date: '2018-11-07', asset: latour, quantity: 200, price: 104.50 },
        { date: '2018-11-08', asset: sagax, quantity: 600, price: 33.50 },
        { date: '2018-11-12', asset: swedbank, quantity: 100, price: 208.50 },
        { date: '2018-11-15', asset: swedbank, quantity: 10, price: 205.50 },
        { date: '2018-11-15', asset: sagax, quantity: 60, price: 32.90 },
        { date: '2018-11-15', asset: latour, quantity: 20, price: 112.90 },
        { date: '2018-11-26', asset: investor, quantity: 10, price: 380.30 },
        { date: '2018-11-26', asset: castellum, quantity: 50, price: 156.40 },
        { date: '2018-11-26', asset: husqvarna, quantity: 120, price: 69.18 },
        { date: '2018-11-27', asset: investor, quantity: 20, price: 382.20 },
        { date: '2018-11-28', asset: handelsbanken, quantity: 60, price: 99.40 },
        { sum: '2018-11' },
        { label: 'December 2018' },
        { date: '2018-12-03', asset: kungsleden, quantity: 20, price: 63.05 },
        { date: '2018-12-03', asset: akelius, quantity: 10, price: 331.50 },
        { date: '2018-12-03', asset: xact_hogutdelande, quantity: 20, price: 111.62 },
        { date: '2018-12-04', asset: investor, quantity: 3, price: 397.00 },
        { date: '2018-12-04', asset: axfood, quantity: 11, price: 159.90 },
        { date: '2018-12-05', asset: xact_hogutdelande, quantity: 40, price: 109.70 },
        { date: '2018-12-06', asset: xact_hogutdelande, quantity: 40, price: 107.40 },
        { date: '2018-12-10', asset: skanska, quantity: 10, price: 136.30 },
        { date: '2018-12-10', asset: autoliv, quantity: 2, price: 694.40 },
        { date: '2018-12-10', asset: industrivarden, quantity: 10, price: 181.30 },
        { date: '2018-12-10', asset: xact_hogutdelande, quantity: 13, price: 107.42 },
        { date: '2018-12-13', asset: atlas_copco, quantity: 10, price: 203.80 },
        { date: '2018-12-14', asset: axfood, quantity: 8, price: 156.20 },
        { date: '2018-12-14', asset: axfood, quantity: 10, price: 154.65 },
        { date: '2018-12-17', asset: xact_hogutdelande, quantity: 16, price: 108.70 },
        { date: '2018-12-17', asset: np3, quantity: 20, price: 61.10 },
        { date: '2018-12-18', asset: axfood, quantity: 15, price: 151.55 },
        { date: '2018-12-18', asset: xact_hogutdelande, quantity: 14, price: 106.72 },
        { date: '2018-12-18', asset: investor, quantity: 2, price: 381.70 },
        { date: '2018-12-20', asset: xact_hogutdelande, quantity: 60, price: 106.63 },
        { date: '2018-12-20', asset: pfizer, quantity: 3, price: 376.00 },
        { date: '2018-12-21', asset: sagax, quantity: -260, price: 32.10 },
        { date: '2018-12-21', asset: handelsbanken, quantity: 40, price: 96.98 },
        { date: '2018-12-21', asset: investor, quantity: 11, price: 373.70 },
        { sum: '2018-12' },
        { label: 'Januari 2019' },
        { date: '2019-01-02', asset: investor, quantity: 4, price: 367.30 },
        { date: '2019-01-02', asset: handelsbanken, quantity: 10, price: 96.18 },
        { date: '2019-01-03', asset: atlas_copco, quantity: 5, price: 189.72 },
        { date: '2019-01-03', asset: dustin_group, quantity: 13, price: 71.90 },
        { date: '2019-01-07', asset: tryg, quantity: 12, price: 224.08, rate: 1.36 },
        { date: '2019-01-08', asset: axfood, quantity: 16, price: 153.45 },
        { date: '2019-01-08', asset: np3, quantity: 15, price: 63.10 },
        { date: '2019-01-09', asset: castellum, quantity: 10, price: 166.15 },
        { date: '2019-01-09', asset: nordea, quantity: 40, price: 79.44 },
        { date: '2019-01-10', asset: pfizer, quantity: 3, price: 376.00 },
        { date: '2019-01-15', asset: axfood, quantity: 11, price: 155.85 },
        { date: '2019-01-17', asset: bmw, quantity: 3, price: 71.26, rate: 10 },
        { date: '2019-01-17', asset: nordea, quantity: 17, price: 80.56 },
        { date: '2019-01-21', asset: axfood, quantity: 6, price: 155.70 },
        { date: '2019-01-22', asset: nordea, quantity: 17, price: 81.57 },
        { date: '2019-01-23', asset: castellum, quantity: 20, price: 170.35 },
        { date: '2019-01-29', asset: autoliv, quantity: 2, price: 716.20 },
        { date: '2019-01-29', asset: pfizer, quantity: 4, price: 354.00 },
        { date: '2019-01-30', asset: tryg, quantity: 12, price: 168.10, rate: 1.38 },
        { sum: '2019-01' },
        { label: 'Februari 2019' },
        { date: '2019-02-01', asset: dustin_group, quantity: 17, price: 80.80 },
        { date: '2019-02-04', asset: castellum, quantity: 10, price: 169.75 },
        { date: '2019-02-05', asset: axfood, quantity: 22, price: 159.20 },
        { date: '2019-02-07', asset: handelsbanken, quantity: 10, price: 97.26 },
        { date: '2019-02-07', asset: np3, quantity: 21, price: 64.20 },
        { date: '2019-02-11', asset: nordea, quantity: 26, price: 83.52 },
        { sum: '2019-02' }
    ]

    vm.getSum = function(month)
    {
        var sum = 0;
        vm.transactions.forEach(function (transaction) {
            if (transaction.date != undefined && transaction.date.startsWith(month)) {
                sum += transaction.quantity * transaction.price * (transaction.rate || 1);
            }
        });
        return sum;
    }

    vm.getValue = function(value, currency) {
        if (currency === 'sek') {
            return parseFloat(value).toFixed(2) + ' SEK';
        } if (currency === 'eur') {
            return parseFloat(value).toFixed(2) + ' EUR';
        } if (currency === 'dkk') {
            return parseFloat(value).toFixed(2) + ' DKK';
        }
    }
}