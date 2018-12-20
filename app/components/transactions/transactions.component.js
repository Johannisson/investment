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
        { sum: '2018-12' },
    ]

    vm.getSum = function(month)
    {
        var sum = 0;
        vm.transactions.forEach(function (transaction) {
            if (transaction.date != undefined && transaction.date.startsWith(month)) {
                sum += transaction.quantity * transaction.price;
            }
        });
        return sum;
    }
}