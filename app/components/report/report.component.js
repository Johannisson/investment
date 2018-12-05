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

    vm.order = 'data.name';

    vm.year = 2018;
    vm.month = 'december';

    vm.data = [];
    vm.data['2018-december'] = {
        forecast: 4380,
        accumulated: 0,
        assets: [
            {
                asset: castellum,
                quantity: 50,
                value: 7960
            }, {
                asset: handelsbanken,
                quantity: 60,
                value: 6015
            }, {
                asset: husqvarna,
                quantity: 120,
                value: 8602
            }, {
                asset: investor,
                quantity: 30,
                value: 11961
            }, {
                asset: latour,
                quantity: 220, 
                value: 25036
            }, {
                asset: sagax,
                quantity: 660,
                value: 21648
            }, {
                asset: swedbank,
                quantity: 110,
                value: 23265
            }, {
                asset: xact_hogutdelande,
                quantity: 60,
                value: 0,
                change: 60
            }
        ]
    }
    vm.data['2018-november'] = {
        forecast: 4380,
        accumulated: 0,
        assets: [
            {
                asset: castellum,
                quantity: 50,
                value: 7960,
                change: 50
            }, {
                asset: handelsbanken,
                quantity: 60,
                value: 6015,
                change: 60
            }, {
                asset: husqvarna,
                quantity: 120,
                value: 8602,
                change: 120
            }, {
                asset: investor,
                quantity: 30,
                value: 11961,
                change: 30
            }, {
                asset: latour,
                quantity: 220, 
                value: 25036,
                change: 220
            }, {
                asset: sagax,
                quantity: 660,
                value: 21648,
                change: 660
            }, {
                asset: swedbank,
                quantity: 110,
                value: 23265,
                change: 110
            }
        ]
    };

    vm.getAssets = function(month) {
        return vm.data[month].assets;
    }

    vm.getDescription = function(month) {
        return vm.data[month].description;
    }

    vm.getAccumulatedDividends = function(month) {
        return vm.data[month].accumulated;
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