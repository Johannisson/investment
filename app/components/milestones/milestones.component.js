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

    vm.milestones = [
        { date: '2018-11-07', description: 'Kontot öppnas' },
        { date: '2018-11-07', description: 'Första köpet', asset: latour },
        { date: '2018-11-28', description: 'Värde 100 000 kr'},
    ]
}