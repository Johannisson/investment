angular
    .module('app')
    .controller('MilestonesController', MilestonesController)
    .component('appMilestones', {
        templateUrl: 'app/components/milestones/milestones.view.html',
        bindings: {},
        controller: MilestonesController
    });

MilestonesController.$inject = [];

function MilestonesController() {
    var vm = this;

    vm.value = [
        { goal: 100000, date: '2018-11-28' },
        { goal: 200000 },
        { goal: 300000 },
        { goal: 400000 },
        { goal: 500000 },
        { goal: 600000 },
        { goal: 700000 },
        { goal: 800000 },
        { goal: 900000 },
        { goal: 1000000 },
    ]

    vm.forecast = [
        { goal:10000 },
        { goal:20000 },
        { goal:30000 },
        { goal:40000 },
        { goal:50000 },
        { goal:60000 },
        { goal:70000 },
        { goal:80000 },
        { goal:90000 },
        { goal:100000 }
    ];

    vm.accumulated = [
        { goal: 50000 },
        { goal: 100000 },
        { goal: 150000 },
        { goal: 200000 },
        { goal: 250000 },
        { goal: 300000 },
        { goal: 350000 },
        { goal: 400000 },
        { goal: 450000 },
        { goal: 500000 },
    ]

    vm.monthly = [
        { goal: 500, months:  [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0] },
        { goal: 1000, months: [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0] },
        { goal: 1500, months: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { goal: 2000, months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { goal: 2500, months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { goal: 3000, months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { goal: 3500, months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { goal: 4000, months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { goal: 4500, months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { goal: 5000, months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ];
    /*

    vm.monthly = [];
    vm.monthly.push({ goal: 500, months:  [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0] });
    vm.monthly.push({ goal: 1000, months: [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0] });
    vm.monthly.push({ goal: 1500, months: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0] });
    vm.monthly.push({ goal: 2000, months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] });
    vm.monthly.push({ goal: 2500, months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] });
    vm.monthly.push({ goal: 3000, months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] });
    vm.monthly.push({ goal: 3500, months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] });
    vm.monthly.push({ goal: 4000, months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] });
    vm.monthly.push({ goal: 4500, months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] });
    vm.monthly.push({ goal: 5000, months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] });*/
}