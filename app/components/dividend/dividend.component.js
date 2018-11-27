angular
    .module('app')
    .controller('DividendController', DividendController)
    .component('appDividend', {
        templateUrl: 'app/components/dividend/dividend.view.html',
        bindings: {
            model: '=',
        },
        controller: DividendController
    });

DividendController.$inject = [];

function DividendController() {
    var vm = this;

    vm.months = [
        { id: 'january', name: 'Januari' },
        { id: 'february', name: 'Februari' },
        { id: 'march', name: 'Mars' },
        { id: 'april', name: 'April' },
        { id: 'may', name: 'Maj' },
        { id: 'june', name: 'Juni' },
        { id: 'july', name: 'Juli' },
        { id: 'august', name: 'Augusti' },
        { id: 'september', name: 'September' },
        { id: 'october', name: 'Oktober' },
        { id: 'november', name: 'November' },
        { id: 'december', name: 'December' }
    ];

    vm.data = [
        castellum,
        husqvarna,
        investor,
        latour,
        sagax,
        swedbank
    ];

    vm.getTotal = function () {
        var total = 0;
        ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'].forEach(function(month) {
            vm.data.forEach(function(stock) {
                if (stock.dividends[month] !== undefined) {
                    total += stock.dividends[month] * stock.quantity
                }
            });
        });;
        return total;
    }
}