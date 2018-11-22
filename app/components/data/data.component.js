angular
    .module('app')
    .controller('DataController', DataController)
    .component('appData', {
        templateUrl: 'app/components/data/data.view.html',
        bindings: {
            model: '=',
        },
        controller: DataController
    });

DataController.$inject = [];

function DataController() {
    var vm = this;
}