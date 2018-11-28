angular
    .module('app')
    .controller('HandelsbankenController', HandelsbankenController)
    .component('appHandelsbanken', {
        templateUrl: 'app/components/stock/handelsbanken/handelsbanken.view.html',
        bindings: {},
        controller: HandelsbankenController
    });

HandelsbankenController.$inject = [];

function HandelsbankenController() {
    var vm = this;

    vm.data = handelsbanken;

    vm.diagram = [];

    vm.data.years.forEach(function(element) {
        vm.diagram.push({label:(element.year + '').substring(2), value1:element.ordinary, value2:element.extra, value3:element.stocks});
    });
}