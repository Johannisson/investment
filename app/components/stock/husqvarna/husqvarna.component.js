angular
    .module('app')
    .controller('HusqvarnaController', HusqvarnaController)
    .component('appHusqvarna', {
        templateUrl: 'app/components/stock/husqvarna/husqvarna.view.html',
        bindings: {},
        controller: HusqvarnaController
    });

HusqvarnaController.$inject = [];

function HusqvarnaController() {
    var vm = this;

    vm.data = husqvarna;
}