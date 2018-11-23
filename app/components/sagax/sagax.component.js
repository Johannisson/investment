angular
    .module('app')
    .controller('SagaxController', SagaxController)
    .component('appSagax', {
        templateUrl: 'app/components/sagax/sagax.view.html',
        bindings: {},
        controller: SagaxController
    });

SagaxController.$inject = [];

function SagaxController() {
    var vm = this;

    vm.data = {
        stock: 'Sagax D',
        ticker: 'SAGA D',
        quantity: sagax.quantity,
        homepage: {
            name: 'www.sagax.se' ,
            url: 'https://www.sagax.com/svenska/investor-relations'
        }
    };
}