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
        { goal: 25000 },
        { goal: 50000 },
        { goal: 75000 },
        { goal: 100000 },
        { goal: 125000 },
        { goal: 150000 },
        { goal: 175000 },
        { goal: 200000 },
        { goal: 225000 },
        { goal: 250000 }
    ]

    vm.monthly = [
        { goal: 250,  months: [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0] },
        { goal: 500,  months: [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0] },
        { goal: 750,  months: [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0] },
        { goal: 1000, months: [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0] },
        { goal: 1250, months: [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0] },
        { goal: 1500, months: [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0] },
        { goal: 1750, months: [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0] },
        { goal: 2000, months: [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0] },
        { goal: 2250, months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { goal: 2500, months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ];

    vm.hour = [
        { goal: 1 },
        { goal: 2 },
        { goal: 3 },
        { goal: 4 },
        { goal: 5 },
        { goal: 6 },
        { goal: 7 },
        { goal: 8 },
        { goal: 9 },
        { goal: 10 },
    ]
}