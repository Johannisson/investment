angular
    .module('app')
    .controller('CastellumController', CastellumController)
    .component('appCastellum', {
        templateUrl: 'app/components/castellum/castellum.view.html',
        bindings: {},
        controller: CastellumController
    });

CastellumController.$inject = [];

function CastellumController() {
    var vm = this;

    vm.data = {
        stock: 'Castellum',
        ticker: 'CAST',
        quantity: castellum.quantity,
        homepage: {
            name: 'www.castellum.se' ,
            url: 'https://www.castellum.se/'
        }
    };
}