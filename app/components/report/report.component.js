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
    vm.month = 12;

    vm.data = [];
    vm.data['2018-12'] = {
        description: '<b>Bevakningsposter</b><br>' +
                     'Under november månad har jag fokuserat på att köpa mindre bevakningsposter i bolag som jag finner extra intressanta ur ett utdelningsperspektiv. ' + 
                     'Bolagen ska vara stabila utdelningshöjare eller generera löpande kassaflöde för att på så sätt alltid ge lite mer pengar att återinvestera.' +
                     '<br><br>' + 
                     '<b>Belåning</b><br>' +
                     'Jag har introducerat belåning som bör ligga kring 10% av portföljens totala värde. ' +
                     'Belåningen ska användas till köp av <a href="portfoljbolag/xact-hogutdelande">Xact&nbsp;Högutdelande</a> för att skapa riskspridning i kombination med stabil utdelning. ' +
                     'Anledningen är att jag begränsar mig till 10% belåning är att jag ser det som en sund nivå av hävstång i portföljen samt att Avanza erbjuder 0% ränta vi den belåningensgraden. ' +
                     'Målet är att fonden ska utgöra cirka 20% av portföljens total värde.',
        forecast: 5237,
        goal: 43000,
        outcome: 18442.30,
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
                quantity: 100,
                change: 100,
                price: 109.30
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
                     'Byte av courtageklass från Avanza small till mini har gjorts för att jag kan handla mer regelbundet och till mindre summor.' +
                     'Trots ganska hög köptakt beräknar jag att mina kostnader för courtage inte bör överstiga 100 kr per månad.' +
                     'Skulle jag använda Avanza small skulle samma kostnad bara räcka till i snitt 2,5 affärer per månad.',
        forecast: 4380,
        goal: 100000,
        outcome: 101669.60,
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
