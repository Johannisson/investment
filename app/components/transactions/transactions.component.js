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
        { date: '2018-11-26', asset: investor_b, quantity: 10, price: 380.30 },
        { date: '2018-11-26', asset: castellum, quantity: 50, price: 156.40 },
        { date: '2018-11-26', asset: husqvarna, quantity: 120, price: 69.18 },
        { date: '2018-11-27', asset: investor_b, quantity: 20, price: 382.20 },
        { date: '2018-11-28', asset: handelsbanken, quantity: 60, price: 99.40 },
        { sum: '2018-11' },
        { label: 'December 2018' },
        { date: '2018-12-03', asset: kungsleden, quantity: 20, price: 63.05 },
        { date: '2018-12-03', asset: akelius, quantity: 10, price: 331.50 },
        { date: '2018-12-03', asset: xact_hogutdelande, quantity: 20, price: 111.62 },
        { date: '2018-12-04', asset: investor_b, quantity: 3, price: 397.00 },
        { date: '2018-12-04', asset: axfood, quantity: 11, price: 159.90 },
        { date: '2018-12-05', asset: xact_hogutdelande, quantity: 40, price: 109.70 },
        { date: '2018-12-06', asset: xact_hogutdelande, quantity: 40, price: 107.40 },
        { date: '2018-12-10', asset: skanska, quantity: 10, price: 136.30 },
        { date: '2018-12-10', asset: autoliv, quantity: 2, price: 694.40 },
        { date: '2018-12-10', asset: industrivarden_a, quantity: 10, price: 181.30 },
        { date: '2018-12-10', asset: xact_hogutdelande, quantity: 13, price: 107.42 },
        { date: '2018-12-13', asset: atlas_copco, quantity: 10, price: 203.80 },
        { date: '2018-12-14', asset: axfood, quantity: 8, price: 156.20 },
        { date: '2018-12-14', asset: axfood, quantity: 10, price: 154.65 },
        { date: '2018-12-17', asset: xact_hogutdelande, quantity: 16, price: 108.70 },
        { date: '2018-12-17', asset: np3, quantity: 20, price: 61.10 },
        { date: '2018-12-18', asset: axfood, quantity: 15, price: 151.55 },
        { date: '2018-12-18', asset: xact_hogutdelande, quantity: 14, price: 106.72 },
        { date: '2018-12-18', asset: investor_b, quantity: 2, price: 381.70 },
        { date: '2018-12-20', asset: xact_hogutdelande, quantity: 60, price: 106.63 },
        { date: '2018-12-20', asset: pfizer, quantity: 3, price: 376.00 },
        { date: '2018-12-21', asset: sagax, quantity: -260, price: 32.10 },
        { date: '2018-12-21', asset: handelsbanken, quantity: 40, price: 96.98 },
        { date: '2018-12-21', asset: investor_b, quantity: 11, price: 373.70 },
        { sum: '2018-12' },
        { label: 'Januari 2019' },
        { date: '2019-01-02', asset: investor_b, quantity: 4, price: 367.30 },
        { date: '2019-01-02', asset: handelsbanken, quantity: 10, price: 96.18 },
        { date: '2019-01-03', asset: atlas_copco, quantity: 5, price: 189.72 },
        { date: '2019-01-03', asset: dustin, quantity: 13, price: 71.90 },
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
        { date: '2019-02-01', asset: dustin, quantity: 17, price: 80.80 },
        { date: '2019-02-04', asset: castellum, quantity: 10, price: 169.75 },
        { date: '2019-02-05', asset: axfood, quantity: 22, price: 159.20 },
        { date: '2019-02-07', asset: handelsbanken, quantity: 10, price: 97.26 },
        { date: '2019-02-07', asset: np3, quantity: 21, price: 64.20 },
        { date: '2019-02-11', asset: nordea, quantity: 26, price: 83.52 },
        { date: '2019-02-11', asset: tryg, quantity: 10, price: 170.70, rate: 1.40 },
        { date: '2019-02-13', asset: investor_b, quantity: -50, price: 408.30 },
        { date: '2019-02-13', asset: investor_a, quantity: 50, price: 404.00 },
        { date: '2019-02-14', asset: tryg, quantity: 6, price: 172.70, rate: 1.40 },
        { date: '2019-02-15', asset: dustin, quantity: 22, price: 81.60 },
        { date: '2019-02-18', asset: lifco, quantity: 7, price: 369.50 },
        { date: '2019-02-19', asset: np3, quantity: 14, price: 67.70 },
        { date: '2019-02-20', asset: swedbank, quantity: 22, price: 185.50 },
        { date: '2019-02-21', asset: swedbank, quantity: 23, price: 165.10 },
        { date: '2019-02-26', asset: pfizer, quantity: 5, price: 402.00 },
        { date: '2019-02-27', asset: kungsleden, quantity: 8, price: 69.00 },
        { sum: '2019-02' },
        { label: 'Mars 2019' },
        { date: '2019-03-05', asset: telia, quantity: 100, price: 40.41 },
        { date: '2019-03-07', asset: lifco, quantity: 5, price: 370.50 },
        { date: '2019-03-11', asset: dustin, quantity: 21, price: 84.70 },
        { date: '2019-03-13', asset: latour, quantity: 18, price: 119.00 },
        { date: '2019-03-18', asset: husqvarna, quantity: 13, price: 73.42 },
        { date: '2019-03-18', asset: stora_enso, quantity: 11, price: 122.80 },
        { date: '2019-03-18', asset: np3, quantity: 8, price: 73.20 },
        { date: '2019-03-20', asset: stora_enso, quantity: 11, price: 122.50 },
        { date: '2019-03-20', asset: xact_hogutdelande, quantity: 11, price: 120.02 },
        { date: '2019-03-21', asset: dustin, quantity: 16, price: 83.70 },
        { date: '2019-03-22', asset: axfood, quantity: 10, price: 167.60 },
        { date: '2019-03-25', asset: xact_hogutdelande, quantity: 11, price: 117.50 },
        { date: '2019-03-25', asset: xact_hogutdelande, quantity: 28, price: 117.56 },
        { date: '2019-03-25', asset: stora_enso, quantity: 9, price: 110.50 },
        { date: '2019-03-26', asset: investor_a, quantity: 3, price: 411.00 },
        { date: '2019-03-26', asset: industrivarden_a, quantity: 3, price: 196.60 },
        { date: '2019-03-29', asset: industrivarden_a, quantity: -13, price: 198.80 },
        { date: '2019-03-29', asset: industrivarden_c, quantity: 7, price: 193.60 },
        { date: '2019-03-29', asset: industrivarden_c, quantity: 13, price: 193.60 },
        { date: '2019-03-29', asset: xact_hogutdelande, quantity: 4, price: 117.12 },
        { sum: '2019-03' },
        { label: 'April 2019' },
        { date: '2019-04-01', asset: handelsbanken, quantity: 6, price: 97.12 },
        { date: '2019-04-02', asset: stora_enso, quantity: 11, price: 117.70 },
        { date: '2019-04-02', asset: husqvarna, quantity: 7, price: 78.20 },
        { date: '2019-04-03', asset: catena_media, quantity: 17, price: 57.40 },
        { date: '2019-04-04', asset: castellum, quantity: 5, price: 180.50 },
        { date: '2019-04-05', asset: latour, quantity: 11, price: 126.60 },
        { date: '2019-04-08', asset: catena_media, quantity: 10, price: 58.10 },
        { date: '2019-04-08', asset: investor_a, quantity: 3, price: 428.40 },
        { date: '2019-04-09', asset: np3, quantity: 13, price: 74.60 },
        { date: '2019-04-11', asset: industrivarden_c, quantity: 11, price: 205.50 },
        { date: '2019-04-11', asset: stora_enso, quantity: 11, price: 122.70 },
        { date: '2019-04-12', asset: dustin, quantity: 11, price: 85.45 },
        { date: '2019-04-15', asset: castellum, quantity: 10, price: 177.55 },
        { date: '2019-04-16', asset: stora_enso, quantity: 12, price: 121.30 },
        { date: '2019-04-17', asset: handelsbanken, quantity: 17, price: 103.30 },
        { date: '2019-04-17', asset: pfizer, quantity: 2, price: 372.00 },
        { date: '2019-04-18', asset: castellum, quantity: 5, price: 177.55 },
        { date: '2019-04-23', asset: xact_hogutdelande, quantity: 21, price: 122.84 },
        { date: '2019-04-23', asset: dustin, quantity: 7, price: 83.05 },
        { date: '2019-04-23', asset: pfizer, quantity: 2, price: 366.00 },
        { date: '2019-04-24', asset: stora_enso, quantity: 4, price: 120.00 },
        { date: '2019-04-24', asset: castellum, quantity: 5, price: 178.50 },
        { sum: '2019-04' },
        { label: 'Maj 2019' },
        { date: '2019-05-06', asset: investor_a, quantity: 4, price: 435.00 },
        { date: '2019-05-07', asset: stora_enso, quantity: 5, price: 116.40 },
        { date: '2019-05-07', asset: industrivarden_c, quantity: 4, price: 206.80 },
        { date: '2019-05-09', asset: industrivarden_c, quantity: 6, price: 202.80 },
        { date: '2019-05-09', asset: xact_hogutdelande, quantity: 4, price: 122.36 },
        { sum: '2019-05' },
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