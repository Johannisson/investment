angular
    .module('app')
    .controller('AssetsController', AssetsController)
    .component('appAssets', {
        templateUrl: 'app/components/assets/assets.view.html',
        bindings: {
            model: '=',
        },
        controller: AssetsController
    });

AssetsController.$inject = [];

function AssetsController() {
    var vm = this;

    vm.assets = assets;
}