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
        november: [
            {
                data: castellum,
                quantity: 50
            }, {
                data: husqvarna,
                quantity: 120
            }, {
                data: investor,
                quantity: 30,
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
    };
}