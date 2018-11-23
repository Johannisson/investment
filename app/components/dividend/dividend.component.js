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

    vm.months = {
        january: 'Januari',
        february: 'Februari',
        march: 'Mars',
        april: 'April',
        may: 'Maj',
        june: 'Juni',
        july: 'Juli',
        august: 'Augusti',
        september: 'September',
        october: 'Oktober',
        november: 'November',
        december: 'December'
    };

    vm.data = [
        castellum,
        husqvarna,
        investor,
        latour,
        sagax,
        swedbank
    ];

    vm.getTotal = function () {
        return 123;
    }
}