angular
    .module('app')
    .controller('AxfoodController', AxfoodController)
    .component('appAxfood', {
        templateUrl: 'app/components/assets/axfood/axfood.view.html',
        bindings: {},
        controller: AxfoodController
    });

AxfoodController.$inject = [];

function AxfoodController() {
    var vm = this;

    vm.data = axfood;

    vm.diagram = [];

    vm.data.years.forEach(function(element) {
        vm.diagram.push({label:(element.year + '').substring(2), value1:element.ordinary, value2:element.extra, value3:element.stocks});
    });
}