angular
    .module('app')
    .controller('StrategyController', StrategyController)
    .component('appStrategy', {
        templateUrl: 'app/components/strategy/strategy.view.html',
        bindings: {},
        controller: StrategyController
    });

StrategyController.$inject = [];

function StrategyController() {
    var vm = this;
}