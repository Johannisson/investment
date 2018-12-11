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
    vm.monthly.push({ goal: 5000, months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] });
}