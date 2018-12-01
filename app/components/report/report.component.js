angular
    .module('app')
    .controller('ReportController', ReportController)
    .component('appReport', {
        templateUrl: 'app/components/report/report.view.html',
        bindings: {},
        controller: ReportController
    });

ReportController.$inject = [];

function ReportController() {
    var vm = this;

    vm.year2018 = {
        november: {
            forecast: 4380,
            stocks: [
                {
                    data: castellum,
                    quantity: 50,
                    value: 7960,
                    delta: 50
                }, {
                    data: handelsbanken,
                    quantity: 60,
                    value: 6015,
                    delta: 60
                }, {
                    data: husqvarna,
                    quantity: 120,
                    value: 8602,
                    delta: 120
                }, {
                    data: investor,
                    quantity: 30,
                    value: 11961,
                    delta: 30
                }, {
                    data: latour,
                    quantity: 220,
                    value: 25036
                }, {
                    data: sagax,
                    quantity: 660,
                    value: 21648,
                }, {
                    data: swedbank,
                    quantity: 110,
                    value: 23265,
                }
            ]
        }
    };

    vm.getTotal = function () {
        var sum = 0;
        vm.year2018.november.stocks.forEach(function(stock) {
            sum += stock.value;
        });
        return sum;
    }
}