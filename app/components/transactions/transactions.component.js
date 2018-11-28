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
        { date: '2018-11-07', stock: latour, quantity: 200, price: 104.50 },
        { date: '2018-11-08', stock: sagax, quantity: 600, price: 33.50 },
        { date: '2018-11-12', stock: swedbank, quantity: 100, price: 208.50 },
        { date: '2018-11-15', stock: swedbank, quantity: 10, price: 205.50 },
        { date: '2018-11-15', stock: sagax, quantity: 60, price: 32.90 },
        { date: '2018-11-15', stock: latour, quantity: 20, price: 112.90 },
        { date: '2018-11-26', stock: investor, quantity: 10, price: 380.30 },
        { date: '2018-11-26', stock: castellum, quantity: 50, price: 156.40 },
        { date: '2018-11-26', stock: husqvarna, quantity: 120, price: 69.18 },
        { date: '2018-11-27', stock: investor, quantity: 20, price: 382.20 },
        { date: '2018-11-28', stock: handelsbanken, quantity: 60, price: 99.40 },
    ]
}