angular
    .module('app')
    .controller('DividendsController', DividendsController)
    .component('appDividends', {
        templateUrl: 'app/components/dividends/dividends.view.html',
        bindings: {},
        controller: DividendsController
    });

DividendsController.$inject = [];

function DividendsController() {
    var vm = this;
}