angular
    .module('app')
    .controller('IndexController', IndexController)
    .component('appIndex', {
        templateUrl: 'app/components/index/index.view.html',
        bindings: {},
        controller: IndexController
    });

IndexController.$inject = ['$locale'];

function IndexController() {
    var vm = this;
}