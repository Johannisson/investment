angular
    .module('app')
    .controller('HusqvarnaController', HusqvarnaController)
    .component('appHusqvarna', {
        templateUrl: 'app/components/husqvarna/husqvarna.view.html',
        bindings: {},
        controller: HusqvarnaController
    });

HusqvarnaController.$inject = [];

function HusqvarnaController() {
    var vm = this;

    vm.data = {
        stock: 'Husqvarna B',
        ticker: 'HUSQ B',
        quantity: husqvarna.quantity,
        homepage: {
            name: 'www.husqvarna.com' ,
            url: 'https://www.husqvarna.com/se/'
        }
    };
}