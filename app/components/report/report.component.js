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
        forecast: 5237,
        accumulated: 0,
        loan: 0,
        assets: [
            {
                asset: akelius,
                quantity: 10,
                change: 10,
                price: 330.00
            }, {
                asset: axfood,
                quantity: 11,
                change: 11,
                price: 159.00
            }, {
                asset: castellum,
                quantity: 50,
                price: 159.90
            }, {
                asset: handelsbanken,
                quantity: 60,
                price: 98.78
            }, {
                asset: husqvarna,
                quantity: 120,
                price: 66.94
            }, {
                asset: investor,
                quantity: 33,
                change: 3,
                price: 390.50
            }, {
                asset: kungsleden,
                quantity: 20,
                change: 20,
                price: 62.65
            }, {
                asset: latour,
                quantity: 220, 
                price: 112.40
            }, {
                asset: sagax,
                quantity: 660,
                price: 33.30
            }, {
                asset: swedbank,
                quantity: 110,
                price: 206.70
            }, {
                asset: xact_hogutdelande,
                quantity: 60,
                change: 60,
                price: 109.30
            }
        ]
    }
    vm.data['2018-november'] = {
        forecast: 4380,
        accumulated: 0,
        loan: 0,
        assets: [
            {
                asset: castellum,
                quantity: 50,
                change: 50,
                price: 159.20
            }, {
                asset: handelsbanken,
                quantity: 60,
                change: 60,
                price: 100.25
            }, {
                asset: husqvarna,
                quantity: 120,
                change: 120,
                price: 71.68
            }, {
                asset: investor,
                quantity: 30,
                change: 30,
                price: 398.70
            }, {
                asset: latour,
                quantity: 220, 
                change: 220,
                price: 113.80
            }, {
                asset: sagax,
                quantity: 660,
                change: 660,
                price:32.80
            }, {
                asset: swedbank,
                quantity: 110,
                change: 110,
                price: 211.50
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

    vm.getLoan = function(month) {
        return vm.data[month].loan;
    }

    vm.getTotal = function (month) {
        var sum = 0;
        vm.getAssets(month).forEach(function(asset) {
            sum += asset.quantity * asset.price;
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
