angular
    .module('app')
    .controller('AtlasCopcoController', AtlasCopcoController)
    .component('appAtlasCopco', {
        templateUrl: 'app/components/assets/atlas_copco/atlas_copco.view.html',
        bindings: {},
        controller: AtlasCopcoController
    });

AtlasCopcoController.$inject = [];

function AtlasCopcoController() {
    var vm = this;

    vm.data = atlas_copco;
}