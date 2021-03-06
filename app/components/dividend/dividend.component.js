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

DividendController.$inject = ['AssetService'];

function DividendController(AssetService) {
    var vm = this;

    vm.months = [
        { id: 'january', name: 'Januari', short: 'Jan' },
        { id: 'february', name: 'Februari', short: 'Feb' },
        { id: 'march', name: 'Mars', short: 'Mars' },
        { id: 'april', name: 'April', short: 'April' },
        { id: 'may', name: 'Maj', short: 'Maj' },
        { id: 'june', name: 'Juni', short: 'Juni' },
        { id: 'july', name: 'Juli', short: 'Juli' },
        { id: 'august', name: 'Augusti', short: 'Aug' },
        { id: 'september', name: 'September', short: 'Sept' },
        { id: 'october', name: 'Oktober', short: 'Okt' },
        { id: 'november', name: 'November', short: 'Nov' },
        { id: 'december', name: 'December', short: 'Dec' }
    ];

    vm.assets = AssetService.assets;
    vm.currency = currency;

    vm.getSum = function (month) {
        var sum = 0;
        vm.assets.forEach(function(asset) {
            if (asset.dividends[month.id] !== undefined) {
                sum += asset.dividends[month.id] * asset.quantity * vm.currency[asset.currency];
            }
        });
        return sum;
    }

    vm.getTotal = function () {
        var sum = 0;
        vm.months.forEach(function(month) {
            vm.assets.forEach(function(asset) {
                if (asset.dividends[month.id] !== undefined) {
                    sum += asset.dividends[month.id] * asset.quantity * vm.currency[asset.currency];
                }
            });
        });;
        return sum;
    }

    vm.getAssetTotal = function (asset) {
        var sum = 0;
        vm.months.forEach(function(month) {
            if (asset.dividends[month.id] !== undefined) {
                sum += asset.dividends[month.id] * asset.quantity * vm.currency[asset.currency];
            }
        });
        return sum;
    }
}