angular
    .module('app')
    .controller('DividendsController', DividendsController)
    .component('appDividends', {
        templateUrl: 'app/components/dividends/dividends.view.html',
        bindings: {},
        controller: DividendsController
    });

DividendsController.$inject = ['DividendsService'];

function DividendsController(DividendsService) {
    var vm = this;

    vm.dividends = DividendsService.dividends;
}