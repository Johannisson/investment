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
        quantity: 170,
        homepage: {
            name: 'www.husqvarna.com' ,
            url: 'https://www.husqvarna.com/se/'
        }
    };
}