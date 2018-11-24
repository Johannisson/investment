angular
    .module('app')
    .controller('PortfolioController', PortfolioController)
    .component('appPortfolio', {
        templateUrl: 'app/components/portfolio/portfolio.view.html',
        bindings: {},
        controller: PortfolioController
    });

PortfolioController.$inject = [];

function PortfolioController() {
    var vm = this;
}