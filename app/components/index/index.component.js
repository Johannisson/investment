angular
    .module('app')
    .controller('IndexController', IndexController)
    .component('appIndex', {
        templateUrl: 'app/components/index/index.view.html',
        bindings: {},
        controller: IndexController
    });

IndexController.$inject = [];

function IndexController() {
    var vm = this;

    vm.data = [
        castellum,
        handelsbanken,
        husqvarna,
        investor,
        latour,
        sagax,
        swedbank
    ];
}