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

    vm.assets = assets;

    vm.getTotal = function () {
        var total = 0;
        vm.months.forEach(function(month) {
            vm.assets.forEach(function(asset) {
                if (asset.dividends[month.id] !== undefined) {
                    total += asset.dividends[month.id] * asset.quantity
                }
            });
        });;
        return total;
    }
}