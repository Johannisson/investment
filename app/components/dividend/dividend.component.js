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
        handelsbanken,
        husqvarna,
        investor,
        latour,
        sagax,
        swedbank
    ];

    vm.getTotal = function () {
        var total = 0;
        vm.months.forEach(function(month) {
            vm.data.forEach(function(stock) {
                if (stock.dividends[month.id] !== undefined) {
                    total += stock.dividends[month.id] * stock.quantity
                }
            });
        });;
        return total;
    }
}