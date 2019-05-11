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

AssetsController.$inject = ['AssetService'];

function AssetsController(AssetService) {
    var vm = this;

    vm.assets = AssetService.assets;
}