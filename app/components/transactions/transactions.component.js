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

TransactionsController.$inject = ['TransactionsService'];

function TransactionsController(TransactionsService) {
    this.transactions = TransactionsService.transactions;
    this.getSum = TransactionsService.getSum;

    this.getValue = function(value, currency) {
        if (currency === 'sek') {
            return parseFloat(value).toFixed(2) + ' SEK';
        } if (currency === 'eur') {
            return parseFloat(value).toFixed(2) + ' EUR';
        } if (currency === 'dkk') {
            return parseFloat(value).toFixed(2) + ' DKK';
        }
    }
}