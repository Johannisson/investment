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
    vm.monthly.push({ goal: 500, months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] });
    vm.monthly.push({ goal: 1000, months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] });
    vm.monthly.push({ goal: 1500, months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] });
    vm.monthly.push({ goal: 2000, months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] });
}