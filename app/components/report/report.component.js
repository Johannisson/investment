angular
    .module('app')
    .controller('ReportController', ReportController)
    .component('appReport', {
        templateUrl: 'app/components/report/report.view.html',
        bindings: {},
        controller: ReportController
    });

ReportController.$inject = ['TransactionsService', 'AssetService', 'DividendsService'];

function ReportController(TransactionsService, AssetService, DividendsService) {
    var vm = this;

    vm.order = 'data.name';
    vm.expense = 5192;

    vm.year = '2019';
    vm.month = '05';
    vm.currency = currency;
    vm.getDividend = DividendsService.getDividend;
    vm.getDividends = DividendsService.getDividends;
    vm.getArbitrages = DividendsService.getArbitrages;

    vm.diagram = [];
    vm.diagram.push({ label: 'Nov',    value1: 4380  });
    vm.diagram.push({ label: 'Dec',    value1: 6181  });
    vm.diagram.push({ label: '2019',   value1: 7830  });
    vm.diagram.push({ label: 'Feb',    value1: 9533  });
    vm.diagram.push({ label: 'Mars',   value1: 10598 });
    vm.diagram.push({ label: 'April',  value1: 11478 });
    vm.diagram.push({ label: 'Maj',    value1: 12189 });
    vm.diagram.push({ label: 'Juni',   value1: 0     });
    vm.diagram.push({ label: 'Juli',   value1: 0     });
    vm.diagram.push({ label: 'Aug',    value1: 0     });
    vm.diagram.push({ label: 'Sept',   value1: 0     });
    vm.diagram.push({ label: 'Okt',    value1: 0     });
    vm.diagram.push({ label: 'Nov',    value1: 0     });
    vm.diagram.push({ label: 'Dec',    value1: 0     });

    vm.dividend = [];
    vm.dividend.push({ label: 'Nov',    value1: 0 });
    vm.dividend.push({ label: 'Dec',    value1: 0 });
    vm.dividend.push({ label: '2019',   value1: 11 + 200 + 27 });
    vm.dividend.push({ label: 'Feb',    value1: 238 + 50 + 137 });
    vm.dividend.push({ label: 'Mars',   value1: 425 + 23 + 693 + 274 + 56 + 33 });
    vm.dividend.push({ label: 'April',  value1: 1504 + 660 + 718 + 200 + 60 + 2201 + 105 + 95 + 118 + 178 });
    vm.dividend.push({ label: 'Maj',    value1: 5839 + 47 + 16 + 55 + 136 + 623 });
    vm.dividend.push({ label: 'Juni',   value1: 0 });
    vm.dividend.push({ label: 'Juli',   value1: 0 });
    vm.dividend.push({ label: 'Aug',    value1: 0 });
    vm.dividend.push({ label: 'Sept',   value1: 0 });
    vm.dividend.push({ label: 'Okt',    value1: 0 });
    vm.dividend.push({ label: 'Nov',    value1: 0 });
    vm.dividend.push({ label: 'Dec',    value1: 0 });

    vm.data = [];
    vm.data['2019-05'] = {
        description: '',
        forecast: vm.diagram[6].value1,
        goal: 15000,
        outcome: TransactionsService.getSum('2019-05'),
        accumulated: vm.dividend[6].value1,
        loan: 29378,
        assets: [
            { asset: AssetService.akelius,            quantity: 10,   price: 343.50,         change: 0  },
            { asset: AssetService.atlas_copco,        quantity: 15,   price: 255.10,         change: 0  },
            { asset: AssetService.autoliv,            quantity: 4,    price: 707.00,         change: 0  },
            { asset: AssetService.axfood,             quantity: 109,  price: 177.20,         change: 0  },
            { asset: AssetService.bmw,                quantity: 3,    price: 2247.00 / 3,    change: 0  },
            { asset: AssetService.castellum,          quantity: 115,  price: 174.10,         change: 0  },
            { asset: AssetService.catena_media,       quantity: 27,   price: 58.65,          change: 0  },
            { asset: AssetService.dustin,             quantity: 107,  price: 85.05,          change: 0  },
            { asset: AssetService.handelsbanken,      quantity: 143,  price: 101.15,         change: 0  },
            { asset: AssetService.husqvarna,          quantity: 140,  price: 86.02,          change: 0  },
            { asset: AssetService.industrivarden_c,   quantity: 41,   price: 203.10,         change: 10 },
            { asset: AssetService.investor_a,         quantity: 65,   price: 428.80,         change: 9  },
            { asset: AssetService.kungsleden,         quantity: 28,   price: 71.50,          change: 0  },
            { asset: AssetService.latour,             quantity: 249,  price: 130.30,         change: 0  },
            { asset: AssetService.lifco,              quantity: 12,   price: 443.60,         change: 0  },
            { asset: AssetService.nordea,             quantity: 100,  price: 73.68,          change: 0  },
            { asset: AssetService.np3,                quantity: 91,   price: 77.00,          change: 0  },
            { asset: AssetService.pfizer,             quantity: 19,   price: 384.00,         change: 0  },
            { asset: AssetService.sagax,              quantity: 417,  price: 34.65,          change: 17 },
            { asset: AssetService.skanska,            quantity: 10,   price: 160.10,         change: 0  },
            { asset: AssetService.stora_enso,         quantity: 74,   price: 114.30,         change: 5  },
            { asset: AssetService.swedbank,           quantity: 155,  price: 146.65,         change: 0  },
            { asset: AssetService.telia,              quantity: 100,  price: 40.40,          change: 0  },
            { asset: AssetService.tryg,               quantity: 40,   price: 11817.00 / 40,  change: 0  },
            { asset: AssetService.xact_hogutdelande,  quantity: 290,  price: 122.66,         change: 12 },
        ]
    }

    vm.data['2019-04'] = {
        description: '',
        forecast: vm.diagram[5].value1,
        goal: 26000,
        outcome: TransactionsService.getSum('2019-04'),
        accumulated: vm.dividend[5].value1,
        loan: 29751,
        assets: [
            { asset: AssetService.akelius,            quantity: 10,   price: 349.50,         change: 0  },
            { asset: AssetService.atlas_copco,        quantity: 15,   price: 270.30,         change: 0  },
            { asset: AssetService.autoliv,            quantity: 4,    price: 769.80,         change: 0  },
            { asset: AssetService.axfood,             quantity: 109,  price: 174.25,         change: 0  },
            { asset: AssetService.bmw,                quantity: 3,    price: 2412.00 / 3,    change: 0  },
            { asset: AssetService.castellum,          quantity: 115,  price: 170.75,         change: 25 },
            { asset: AssetService.catena_media,       quantity: 27,   price: 54.00,          change: 27 },
            { asset: AssetService.dustin,             quantity: 107,  price: 85.10,          change: 18 },
            { asset: AssetService.handelsbanken,      quantity: 143,  price: 103.65,         change: 23 },
            { asset: AssetService.husqvarna,          quantity: 140,  price: 86.66,          change: 7  },
            { asset: AssetService.industrivarden_c,   quantity: 31,   price: 213.60,         change: 11 },
            { asset: AssetService.investor_a,         quantity: 56,   price: 451.00,         change: 3  },
            { asset: AssetService.kungsleden,         quantity: 28,   price: 72.10,          change: 0  },
            { asset: AssetService.latour,             quantity: 249,  price: 134.50,         change: 11 },
            { asset: AssetService.lifco,              quantity: 12,   price: 452.40,         change: 0  },
            { asset: AssetService.nordea,             quantity: 100,  price: 74.75,          change: 0  },
            { asset: AssetService.np3,                quantity: 91,   price: 75.00,          change: 13 },
            { asset: AssetService.pfizer,             quantity: 19,   price: 382.00,         change: 4  },
            { asset: AssetService.sagax,              quantity: 400,  price: 35.20,          change: 0  },
            { asset: AssetService.skanska,            quantity: 10,   price: 165.30,         change: 0  },
            { asset: AssetService.stora_enso,         quantity: 69,   price: 119.50,         change: 38 },
            { asset: AssetService.swedbank,           quantity: 155,  price: 154.05,         change: 0  },
            { asset: AssetService.telia,              quantity: 100,  price: 40.44,          change: 0  },
            { asset: AssetService.tryg,               quantity: 40,   price: 11627.00 / 40,  change: 0  },
            { asset: AssetService.xact_hogutdelande,  quantity: 278,  price: 124.32,         change: 21 }
        ]
    }

    vm.data['2019-03'] = {
        description: '',
        forecast: vm.diagram[4].value1,
        goal: 26000,
        outcome: TransactionsService.getSum('2019-03'),
        accumulated: vm.dividend[4].value1,
        loan: 14410,
        assets: [
            { asset: AssetService.akelius,            quantity: 10,   price: 345.50,         change: 0   },
            { asset: AssetService.atlas_copco,        quantity: 15,   price: 230.10,         change: 0   },
            { asset: AssetService.autoliv,            quantity: 4,    price: 680.00,         change: 0   },
            { asset: AssetService.axfood,             quantity: 109,  price: 173.00,         change: 10  },
            { asset: AssetService.bmw,                quantity: 3,    price: 2143.00 / 3,    change: 0   },
            { asset: AssetService.castellum,          quantity: 90,   price: 180.35,         change: 0   },
            { asset: AssetService.dustin,             quantity: 89,   price: 87.20,          change: 37  },
            { asset: AssetService.handelsbanken,      quantity: 120,  price: 98.10,          change: 0   },
            { asset: AssetService.husqvarna,          quantity: 133,  price: 75.94,          change: 13  },
            { asset: AssetService.industrivarden_a,   quantity: 0,    price: 0.00,           change: -10 },
            { asset: AssetService.industrivarden_c,   quantity: 20,   price: 194.75,         change: 20  },
            { asset: AssetService.investor_a,         quantity: 53,   price: 418.80,         change: 3   },
            { asset: AssetService.kungsleden,         quantity: 28,   price: 74.00,          change: 0   },
            { asset: AssetService.latour,             quantity: 238,  price: 124.50,         change: 18  },
            { asset: AssetService.lifco,              quantity: 12,   price: 379.00,         change: 5   },
            { asset: AssetService.nordea,             quantity: 100,  price: 70.75,          change: 0   },
            { asset: AssetService.np3,                quantity: 78,   price: 75.00,          change: 8   },
            { asset: AssetService.pfizer,             quantity: 15,   price: 393.00,         change: 0   },
            { asset: AssetService.sagax,              quantity: 400,  price: 34.70,          change: 0   },
            { asset: AssetService.skanska,            quantity: 10,   price: 168.90,         change: 0   },
            { asset: AssetService.stora_enso,         quantity: 31,   price: 114.00,         change: 31  },
            { asset: AssetService.swedbank,           quantity: 155,  price: 131.35,         change: 0   },
            { asset: AssetService.telia,              quantity: 100,  price: 41.95,          change: 100 },
            { asset: AssetService.tryg,               quantity: 40,   price: 10202.00 / 40,  change: 0   },
            { asset: AssetService.xact_hogutdelande,  quantity: 257,  price: 118.00,         change: 50  }
        ]
    }

    vm.data['2019-02'] = {
        description: '',
        forecast: vm.diagram[3].value1,
        goal: 30000,
        outcome: TransactionsService.getSum('2019-02'),
        accumulated: vm.dividend[3].value1,
        loan: 23953,
        assets: [
            { asset: AssetService.akelius,            quantity: 10,   price: 348.50,         change: 0   },
            { asset: AssetService.atlas_copco,        quantity: 15,   price: 231.80,         change: 0   },
            { asset: AssetService.autoliv,            quantity: 4,    price: 752.80,         change: 0   },
            { asset: AssetService.axfood,             quantity: 99,   price: 170.95,         change: 22  },
            { asset: AssetService.bmw,                quantity: 3,    price: 2353.00 / 3,    change: 0   },
            { asset: AssetService.castellum,          quantity: 90,   price: 168.25,         change: 10  },
            { asset: AssetService.dustin,             quantity: 52,   price: 87.40,          change: 39  },
            { asset: AssetService.handelsbanken,      quantity: 120,  price: 105.35,         change: 10  },
            { asset: AssetService.husqvarna,          quantity: 120,  price: 75.70,          change: 0   },
            { asset: AssetService.industrivarden_a,   quantity: 10,   price: 196.10,         change: 0   },
            { asset: AssetService.investor_b,         quantity: 0,    price: 0.00,           change: -50 },
            { asset: AssetService.investor_a,         quantity: 50,   price: 407.40,         change: 50  },
            { asset: AssetService.kungsleden,         quantity: 28,   price: 69.00,          change: 8   },
            { asset: AssetService.latour,             quantity: 220,  price: 121.50,         change: 0   },
            { asset: AssetService.lifco,              quantity: 7,    price: 378.00,         change: 7   },
            { asset: AssetService.nordea,             quantity: 100,  price: 83.76,          change: 26  },
            { asset: AssetService.np3,                quantity: 70,   price: 69.60,          change: 35  },
            { asset: AssetService.pfizer,             quantity: 15,   price: 403.00,         change: 5   },
            { asset: AssetService.sagax,              quantity: 400,  price: 33.70,          change: 0   },
            { asset: AssetService.skanska,            quantity: 10,   price: 166.60,         change: 0   },
            { asset: AssetService.swedbank,           quantity: 155,  price: 169.70,         change: 45  },
            { asset: AssetService.tryg,               quantity: 40,   price: 10104.00 / 40,  change: 16  },
            { asset: AssetService.xact_hogutdelande,  quantity: 203,  price: 116.62,         change: 0   }
        ]
    }

    vm.data['2019-01'] = {
        description: '<b>Dividend Carpet Bombing</b><br>' +
                     'Även om det i praktiken inte spelar någon roll så är det ganska roligt med löpande utdelningar i portföljen. ' +
                     'Kassaflödet gör att jag löpande får lite mer slantar att återinvestera utöver det jag sparar. ' +
                     'Även om inte målet är att få utdelningar varje månad så har det redan blivit så att jag kommer få utdelning varje månad. ' +
                     'Under <a href="utdelningskalender">utdelningskalender</a> kan man få en tydlig överblick över utdelningarna för respektive månad.',
        forecast: vm.diagram[2].value1,
        goal: 30000,
        outcome: TransactionsService.getSum('2019-01'),
        accumulated: vm.dividend[2].value1,
        loan: 16945,
        assets: [
            { asset: AssetService.akelius,            quantity: 10,   price: 346.50,  change: 0  },
            { asset: AssetService.atlas_copco,        quantity: 15,   price: 216.10,  change: 5  },
            { asset: AssetService.autoliv,            quantity: 4,    price: 720.00,  change: 2  },
            { asset: AssetService.axfood,             quantity: 77,   price: 158.40,  change: 33 },
            { asset: AssetService.bmw,                quantity: 3,    price: 737.55,  change: 3  },
            { asset: AssetService.castellum,          quantity: 80,   price: 171.40,  change: 30 },
            { asset: AssetService.dustin,             quantity: 13,   price: 81.50,   change: 13 },
            { asset: AssetService.handelsbanken,      quantity: 110,  price: 98.20,   change: 10 },
            { asset: AssetService.husqvarna,          quantity: 120,  price: 69.00,   change: 0  },
            { asset: AssetService.industrivarden_a,   quantity: 10,   price: 190.80,  change: 0  },
            { asset: AssetService.investor_b,         quantity: 50,   price: 397.10,  change: 4  },
            { asset: AssetService.kungsleden,         quantity: 20,   price: 68.60,   change: 0  },
            { asset: AssetService.latour,             quantity: 220,  price: 112.20,  change: 0  },
            { asset: AssetService.nordea,             quantity: 74,   price: 82.17,   change: 74 },
            { asset: AssetService.np3,                quantity: 35,   price: 63.70,   change: 15 },
            { asset: AssetService.pfizer,             quantity: 10,   price: 380.00,  change: 7  },
            { asset: AssetService.sagax,              quantity: 400,  price: 33.00,   change: 0  },
            { asset: AssetService.skanska,            quantity: 10,   price: 158.15,  change: 0  },
            { asset: AssetService.swedbank,           quantity: 110,  price: 205.10,  change: 0  },
            { asset: AssetService.tryg,               quantity: 24,   price: 229.87,  change: 24 },
            { asset: AssetService.xact_hogutdelande,  quantity: 203,  price: 111.58,  change: 0  }
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
        forecast: vm.diagram[1].value1,
        goal: 43000,
        outcome: TransactionsService.getSum('2018-12'),
        accumulated: vm.dividend[1].value1,
        loan: 13527,
        assets: [
            { asset: AssetService.akelius,            quantity: 10,   price: 328.50,  change: 10   },
            { asset: AssetService.atlas_copco,        quantity: 10,   price: 193.32,  change: 10   },
            { asset: AssetService.autoliv,            quantity: 2,    price: 629.80,  change: 2    },
            { asset: AssetService.axfood,             quantity: 44,   price: 151.70,  change: 44   },
            { asset: AssetService.castellum,          quantity: 50,   price: 163.35,  change: 0    },
            { asset: AssetService.handelsbanken,      quantity: 100,  price: 98.30,   change: 40   },
            { asset: AssetService.husqvarna,          quantity: 120,  price: 65.70,   change: 0    },
            { asset: AssetService.industrivarden_a,   quantity: 10,   price: 183.20,  change: 10   },
            { asset: AssetService.investor_b,         quantity: 46,   price: 375.60,  change: 16   },
            { asset: AssetService.kungsleden,         quantity: 20,   price: 62.90,   change: 20   },
            { asset: AssetService.latour,             quantity: 220,  price: 112.00,  change: 0    },
            { asset: AssetService.np3,                quantity: 20,   price: 61.00,   change: 0    },
            { asset: AssetService.pfizer,             quantity: 3,    price: 385.00,  change: 3    },
            { asset: AssetService.sagax,              quantity: 400,  price: 31.70,   change: -260 },
            { asset: AssetService.skanska,            quantity: 10,   price: 141.00,  change: 0    },
            { asset: AssetService.swedbank,           quantity: 110,  price: 197.75,  change: 0    },
            { asset: AssetService.xact_hogutdelande,  quantity: 203,  price: 105.58,  change: 203  }
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
        forecast: vm.diagram[0].value1,
        goal: 100000,
        outcome: TransactionsService.getSum('2018-11'),
        accumulated: vm.dividend[0].value1,
        loan: 0,
        assets: [
            { asset: AssetService.castellum,      quantity: 50,   price: 159.20,  change: 50  },
            { asset: AssetService.handelsbanken,  quantity: 60,   price: 100.25,  change: 60  },
            { asset: AssetService.husqvarna,      quantity: 120,  price: 71.68,   change: 120 },
            { asset: AssetService.investor_b,     quantity: 30,   price: 398.70,  change: 30  },
            { asset: AssetService.latour,         quantity: 220,  price: 113.80,  change: 220 },
            { asset: AssetService.sagax,          quantity: 660,  price: 32.80,   change: 660 },
            { asset: AssetService.swedbank,       quantity: 110,  price: 211.50,  change: 110 }
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

    vm.getYield = function (month) {
        return vm.data[month].forecast / vm.getTotal(month) * 100;
    }

    vm.getForecast = function (month) {
        return vm.data[month].forecast;
    }

    vm.getValue = function (asset) {
        return asset.quantity * asset.price;
    }

    vm.value = [];
    vm.value.push({ label: 'Nov',    value1: Math.floor(vm.getTotal('2018-11')) });
    vm.value.push({ label: 'Dec',    value1: Math.floor(vm.getTotal('2018-12')) });
    vm.value.push({ label: '2019',   value1: Math.floor(vm.getTotal('2019-01')) });
    vm.value.push({ label: 'Feb',    value1: Math.floor(vm.getTotal('2019-02')) });
    vm.value.push({ label: 'Mars',   value1: Math.floor(vm.getTotal('2019-03')) });
    vm.value.push({ label: 'April',  value1: Math.floor(vm.getTotal('2019-04')) });
    vm.value.push({ label: 'Maj',    value1: Math.floor(vm.getTotal('2019-05')) });
    vm.value.push({ label: 'Juni',   value1: 0      });
    vm.value.push({ label: 'Juli',   value1: 0      });
    vm.value.push({ label: 'Aug',    value1: 0      });
    vm.value.push({ label: 'Sept',   value1: 0      });
    vm.value.push({ label: 'Okt',    value1: 0      });
    vm.value.push({ label: 'Nov',    value1: 0      });
    vm.value.push({ label: 'Dec',    value1: 0      });
}
