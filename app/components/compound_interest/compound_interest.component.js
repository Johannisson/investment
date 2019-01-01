angular
    .module('app')
    .controller('CompoundInterestController', CompoundInterestController)
    .component('appCompoundInterest', {
        templateUrl: 'app/components/compound_interest/compound_interest.view.html',
        bindings: {
            CompoundInterest: '@'
        },
        controller: CompoundInterestController
    });

CompoundInterestController.$inject = ['$locale'];

function CompoundInterestController($locale) {
    var vm = this;

    vm.month = 1000;
    vm.interest = 8;
    vm.start = 100000;
    vm.years = 25;

    vm.$onInit = function() {
        vm.rows = [];
        vm.diagram = [];
        vm.update();
    };

    vm.update = function() {
        vm.diagram.length = 0;
        vm.diagram.push({
            label: 0,
            value1:vm.start,
            value2:0,
            visibility1: 'hidden',
            visibility2: 'hidden',
            visibility3: 'hidden'
        });
        var value1 = vm.start;
        var value2 = 0;
        for (var year = 1; year <= vm.years; year++)
        {
            value1 += vm.month * 12;
            var ret = Math.round((value1 + value2) * (vm.interest / 100));
            value2 += ret;
            vm.diagram.push({
                label: year,
                value1:value1,
                value2:value2,
                ret: ret,
                visibility1: 'hidden',
                visibility2: 'hidden',
                visibility3: 'hidden'
            });
        }
        var sum = value1 + value2
        var step = sum / 10;
        vm.rows.length = 0;
        if (step < 10000) { step = 10000; }
        else if (step < 20000) { step = 20000; }
        else if (step < 50000) { step = 50000; }
        else if (step < 100000) { step = 100000; }
        else if (step < 200000) { step = 200000; }
        else if (step < 500000) { step = 500000; }
        else if (step < 1000000) { step = 1000000; }
        else if (step < 2000000) { step = 2000000; }
        else if (step < 5000000) { step = 5000000; }
        else if (step < 10000000) { step = 10000000; }
        else if (step < 20000000) { step = 20000000; }
        else if (step < 50000000) { step = 50000000; }
        for (i = 0; i <= sum; i += step) {
            vm.rows.push(i);
        }
        vm.rows.push(i);
    }
}