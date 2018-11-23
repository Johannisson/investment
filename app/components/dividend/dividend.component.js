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

    vm.data = [
        castellum,
        husqvarna,
        investor,
        latour,
        sagax,
        swedbank
    ];
}