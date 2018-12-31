angular
    .module('app')
    .controller('YearController', YearController)
    .component('appYear', {
        templateUrl: 'app/components/year/year.view.html',
        bindings: {},
        controller: YearController
    });

YearController.$inject = [];

function YearController() {
    var vm = this;

    vm.year = 2018;
}
