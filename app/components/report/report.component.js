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
                    delta: 50
                }, {
                    data: handelsbanken,
                    quantity: 60,
                    delta: 60
                }, {
                    data: husqvarna,
                    quantity: 120,
                    delta: 120
                }, {
                    data: investor,
                    quantity: 30,
                    delta: 30
                }, {
                    data: latour,
                    quantity: 220
                }, {
                    data: sagax,
                    quantity: 660
                }, {
                    data: swedbank,
                    quantity: 110
                }
            ]
        }
    };
}