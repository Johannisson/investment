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

    vm.data = [];
    vm.data['2018-november'] = {
        forecast: 4380,
        assets: [
            {
                data: castellum,
                quantity: 50,
                value: 7960,
                change: 50
            }, {
                data: handelsbanken,
                quantity: 60,
                value: 6015,
                change: 60
            }, {
                data: husqvarna,
                quantity: 120,
                value: 8602,
                change: 120
            }, {
                data: investor,
                quantity: 30,
                value: 11961,
                change: 30
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
    };

    vm.getAssets = function(month) {
        return vm.data[month].assets;
    }

    vm.getTotal = function (month) {
        var sum = 0;
        vm.getAssets(month).forEach(function(asset) {
            sum += asset.value;
        });
        return sum;
    }

    vm.getDividends = function (month) {
        var sum = 0;
        vm.getAssets(month).forEach(function(asset) {
            sum += asset.dividend || 0;
        });
        return sum;
    }

    vm.getYield = function (month) {
        return vm.data[month].forecast / vm.getTotal(month) * 100;
    }

    vm.getForecast = function (month) {
        return vm.data[month].forecast;
    }
}