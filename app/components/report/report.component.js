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

    vm.year = 2019;
    vm.month = 1;

    vm.data = [];
    vm.data['2019-1'] = {
        description: '',
        forecast: 6284,
        goal: 28000,
        outcome: 0,
        accumulated: 0,
        loan: 13527,
        assets: [
            {
                asset: akelius,
                quantity: 10,
                price: 328.50
            }, {
                asset: atlas_copco,
                quantity: 10,
                price: 193.32
            }, {
                asset: autoliv,
                quantity: 2,
                price: 629.80
            }, {
                asset: axfood,
                quantity: 44,
                price: 151.70
            }, {
                asset: castellum,
                quantity: 50,
                price: 163.35
            }, {
                asset: handelsbanken,
                quantity: 100,
                change: 10,
                price: 98.30
            }, {
                asset: husqvarna,
                quantity: 120,
                price: 65.70
            }, {
                asset: industrivarden,
                quantity: 10,
                price: 183.20
            }, {
                asset: investor,
                quantity: 50,
                change: 4,
                price: 375.60
            }, {
                asset: kungsleden,
                quantity: 20,
                price: 62.90
            }, {
                asset: latour,
                quantity: 220, 
                price: 112.00
            }, {
                asset: np3,
                quantity: 20, 
                price: 61.00
            }, {
                asset: pfizer,
                quantity: 3,
                price: 385.00
            }, {
                asset: sagax,
                quantity: 400,
                price: 31.70
            }, {
                asset: skanska,
                quantity: 10,
                price: 141.00
            }, {
                asset: swedbank,
                quantity: 110,
                price: 197.75
            }, {
                asset: xact_hogutdelande,
                quantity: 203,
                price: 105.58
            }
        ]
    }
    vm.data['2018-12'] = {
        description: '<b>Bevakningsposter</b><br>' +
                     'Under november månad har jag fokuserat på att köpa mindre bevakningsposter i bolag som jag finner extra intressanta ur ett utdelningsperspektiv. ' + 
                     'Bolagen ska vara stabila utdelningshöjare eller generera löpande kassaflöde för att på så sätt alltid ge lite mer pengar att återinvestera.' +
                     '<br><br>' + 
                     '<b>Belåning</b><br>' +
                     'Jag har introducerat belåning i portföljen. ' +
                     'Tanken är att den bör ligga kring 10% av portföljens totala värde. ' +
                     'Belåningen ska användas till köp av <a href="portfoljbolag/xact-hogutdelande">Xact&nbsp;Högutdelande</a> för att skapa riskspridning i kombination med stabil utdelning. ' +
                     'Anledningen att jag begränsar mig till 10% belåning är att jag ser det som en sund nivå på hävstång i portföljen. ' +
                     'Målet är att fonden ska utgöra cirka 20% av portföljens total värde.',
        forecast: 6181,
        goal: 43000,
        outcome: 43899,
        accumulated: 0,
        loan: 13527,
        assets: [
            {
                asset: akelius,
                quantity: 10,
                change: 10,
                price: 328.50
            }, {
                asset: atlas_copco,
                quantity: 10,
                change: 10,
                price: 193.32
            }, {
                asset: autoliv,
                quantity: 2,
                change: 2,
                price: 629.80
            }, {
                asset: axfood,
                quantity: 44,
                change: 44,
                price: 151.70
            }, {
                asset: castellum,
                quantity: 50,
                price: 163.35
            }, {
                asset: handelsbanken,
                quantity: 100,
                change: 40,
                price: 98.30
            }, {
                asset: husqvarna,
                quantity: 120,
                price: 65.70
            }, {
                asset: industrivarden,
                quantity: 10,
                change: 10,
                price: 183.20
            }, {
                asset: investor,
                quantity: 46,
                change: 16,
                price: 375.60
            }, {
                asset: kungsleden,
                quantity: 20,
                change: 20,
                price: 62.90
            }, {
                asset: latour,
                quantity: 220, 
                price: 112.00
            }, {
                asset: np3,
                quantity: 20, 
                price: 61.00
            }, {
                asset: pfizer,
                quantity: 3,
                change: 3, 
                price: 385.00
            }, {
                asset: sagax,
                quantity: 400,
                change: -260,
                price: 31.70
            }, {
                asset: skanska,
                quantity: 10,
                price: 141.00
            }, {
                asset: swedbank,
                quantity: 110,
                price: 197.75
            }, {
                asset: xact_hogutdelande,
                quantity: 203,
                change: 203,
                price: 105.58
            }
        ]
    }
    vm.data['2018-11'] = {
        description: '<b>Utdelningsportföljen</b><br>' +
                     'Jag har beslutat att bygga en utdelningsportfölj som komplement till min ordinarie fondportfölj. ' + 
                     'Målet med portföljen är att byta investeringsfokus från kapitaltillväxt till utdelningstilväxt. ' +
                     'På så sätt kan jag fokusera på långisktigt värdeskapande i portföljen snarare än dagliga aktiekurser. ' +
                     'Primära målet med portföljen kommer vara utdelningstillväxt, och fokus kommer att ligga på bolag som har stadigt stigande utdelning.' +
                     '<br><br>' +
                     '<b>Courtageklass</b><br>' +
                     'Byte av courtageklass från Avanza small till mini har gjorts för att jag kan handla mer regelbundet och till mindre summor. ' +
                     'Trots ganska hög köptakt beräknar jag att mina kostnader för courtage inte bör överstiga 100 kr per månad.' +
                     'Skulle jag använda Avanza small skulle samma kostnad bara räcka till i snitt 2,5 affärer per månad.',
        forecast: 4380,
        goal: 100000,
        outcome: 101669,
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

    vm.getGoal = function(month) {
        return vm.data[month].goal;
    }

    vm.getOutcome = function(month) {
        return vm.data[month].outcome;
    }

    vm.getDescription = function(month) {
        return vm.data[month].description;
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
