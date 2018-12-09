angular
    .module('app')
    .controller('DustinGroupController', DustinGroupController)
    .component('appDustinGroup', {
        templateUrl: 'app/components/assets/dustin_group/dustin_group.view.html',
        bindings: {},
        controller: DustinGroupController
    });

DustinGroupController.$inject = [];

function DustinGroupController() {
    var vm = this;

    vm.data = dustin_group;

    vm.diagram = [];

    vm.data.years.forEach(function(element) {
        vm.diagram.push({label:(element.year + '').substring(2), value1:element.ordinary, value2:element.extra, value3:element.stocks});
    });
}