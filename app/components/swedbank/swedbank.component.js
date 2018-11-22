angular
    .module('app')
    .controller('SwedbankController', SwedbankController)
    .component('appSwedbank', {
        templateUrl: 'app/components/swedbank/swedbank.view.html',
        bindings: {},
        controller: SwedbankController
    });

SwedbankController.$inject = [];

function SwedbankController() {
    var vm = this;

    vm.data = {
        stock: 'Swedbank A',
        ticker: 'SWED A',
        quantity: 110,
        homepage: {
            name: 'www.swedbank.se' ,
            url: 'https://www.swedbank.com/svenska/investor-relations'
        }
    };
}