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

    vm.last = function() {
        return vm.diagram[vm.diagram.length - 1].value1;
    }

    vm.rows = [0, 1000, 2000, 3000, 4000, 5000, 6000];
    vm.diagram = [];
    vm.diagram.push({value1: 341});
    vm.diagram.push({value1: vm.last() + 50});
    vm.diagram.push({value1: vm.last() + 2177});
    vm.diagram.push({value1: vm.last() + 503});
    vm.diagram.push({value1: vm.last() + 1440});
    vm.diagram.push({value1: vm.last() + 11});
    vm.diagram.push({value1: vm.last() + 341});
    vm.diagram.push({value1: vm.last() + 50});
    vm.diagram.push({value1: vm.last() + 144});
    vm.diagram.push({value1: vm.last() + 431});
    vm.diagram.push({value1: vm.last() + 182});
    vm.diagram.push({value1: vm.last() + 11});
}