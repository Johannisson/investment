angular
    .module('app')
    .controller('IndexController', IndexController)
    .component('appIndex', {
        templateUrl: 'app/components/index/index.view.html',
        bindings: {},
        controller: IndexController
    });

IndexController.$inject = ['$locale'];

function IndexController($locale) {
    var vm = this;

    $locale.NUMBER_FORMATS.GROUP_SEP = ' ';
    $locale.NUMBER_FORMATS.DECIMAL_SEP = ',';

    vm.assets = assets;
}