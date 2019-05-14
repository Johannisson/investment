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
    vm.getChange = TransactionsService.getChange;
    vm.getQuantity = TransactionsService.getQuantity;

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
        holdings: [
            { asset: AssetService.akelius,            price: 343.50        },
            { asset: AssetService.atlas_copco,        price: 249.80        },
            { asset: AssetService.autoliv,            price: 693.40        },
            { asset: AssetService.axfood,             price: 180.80        },
            { asset: AssetService.bmw,                price: 2202.00 / 3   },
            { asset: AssetService.castellum,          price: 178.35        },
            { asset: AssetService.catena_media,       price: 56.80         },
            { asset: AssetService.dustin,             price: 85.35         },
            { asset: AssetService.handelsbanken,      price: 101.65        },
            { asset: AssetService.husqvarna,          price: 85.12         },
            { asset: AssetService.industrivarden_c,   price: 202.70        },
            { asset: AssetService.investor_a,         price: 430.20        },
            { asset: AssetService.kungsleden,         price: 72.25         },
            { asset: AssetService.latour,             price: 129.30        },
            { asset: AssetService.lifco,              price: 457.00        },
            { asset: AssetService.nordea,             price: 72.54         },
            { asset: AssetService.np3,                price: 75.20         },
            { asset: AssetService.pfizer,             price: 392.00        },
            { asset: AssetService.sagax,              price: 35.15         },
            { asset: AssetService.skanska,            price: 161.35        },
            { asset: AssetService.stora_enso,         price: 111.30        },
            { asset: AssetService.swedbank,           price: 145.20        },
            { asset: AssetService.telia,              price: 40.27         },
            { asset: AssetService.tryg,               price: 11819.00 / 40 },
            { asset: AssetService.xact_hogutdelande,  price: 122.34        }
        ]
    }

    vm.data['2019-04'] = {
        description: '',
        forecast: vm.diagram[5].value1,
        goal: 26000,
        outcome: TransactionsService.getSum('2019-04'),
        accumulated: vm.dividend[5].value1,
        loan: 29751,
        holdings: [
            { asset: AssetService.akelius,            price: 349.50        },
            { asset: AssetService.atlas_copco,        price: 270.30        },
            { asset: AssetService.autoliv,            price: 769.80        },
            { asset: AssetService.axfood,             price: 174.25        },
            { asset: AssetService.bmw,                price: 2412.00 / 3   },
            { asset: AssetService.castellum,          price: 170.75        },
            { asset: AssetService.catena_media,       price: 54.00         },
            { asset: AssetService.dustin,             price: 85.10         },
            { asset: AssetService.handelsbanken,      price: 103.65        },
            { asset: AssetService.husqvarna,          price: 86.66         },
            { asset: AssetService.industrivarden_c,   price: 213.60        },
            { asset: AssetService.investor_a,         price: 451.00        },
            { asset: AssetService.kungsleden,         price: 72.10         },
            { asset: AssetService.latour,             price: 134.50        },
            { asset: AssetService.lifco,              price: 452.40        },
            { asset: AssetService.nordea,             price: 74.75         },
            { asset: AssetService.np3,                price: 75.00         },
            { asset: AssetService.pfizer,             price: 382.00        },
            { asset: AssetService.sagax,              price: 35.20         },
            { asset: AssetService.skanska,            price: 165.30        },
            { asset: AssetService.stora_enso,         price: 119.50        },
            { asset: AssetService.swedbank,           price: 154.05        },
            { asset: AssetService.telia,              price: 40.44         },
            { asset: AssetService.tryg,               price: 11627.00 / 40 },
            { asset: AssetService.xact_hogutdelande,  price: 124.32,       }
        ]
    }

    vm.data['2019-03'] = {
        description: '',
        forecast: vm.diagram[4].value1,
        goal: 26000,
        outcome: TransactionsService.getSum('2019-03'),
        accumulated: vm.dividend[4].value1,
        loan: 14410,
        holdings: [
            { asset: AssetService.akelius,            price: 345.50        },
            { asset: AssetService.atlas_copco,        price: 230.10        },
            { asset: AssetService.autoliv,            price: 680.00        },
            { asset: AssetService.axfood,             price: 173.00        },
            { asset: AssetService.bmw,                price: 2143.00 / 3   },
            { asset: AssetService.castellum,          price: 180.35        },
            { asset: AssetService.dustin,             price: 87.20         },
            { asset: AssetService.handelsbanken,      price: 98.10         },
            { asset: AssetService.husqvarna,          price: 75.94         },
            { asset: AssetService.industrivarden_a,   price: 0.00          },
            { asset: AssetService.industrivarden_c,   price: 194.75        },
            { asset: AssetService.investor_a,         price: 418.80        },
            { asset: AssetService.kungsleden,         price: 74.00         },
            { asset: AssetService.latour,             price: 124.50        },
            { asset: AssetService.lifco,              price: 379.00        },
            { asset: AssetService.nordea,             price: 70.75         },
            { asset: AssetService.np3,                price: 75.00         },
            { asset: AssetService.pfizer,             price: 393.00        },
            { asset: AssetService.sagax,              price: 34.70         },
            { asset: AssetService.skanska,            price: 168.90        },
            { asset: AssetService.stora_enso,         price: 114.00        },
            { asset: AssetService.swedbank,           price: 131.35        },
            { asset: AssetService.telia,              price: 41.95         },
            { asset: AssetService.tryg,               price: 10202.00 / 40 },
            { asset: AssetService.xact_hogutdelande,  price: 118.00        }
        ]
    }

    vm.data['2019-02'] = {
        description: '',
        forecast: vm.diagram[3].value1,
        goal: 30000,
        outcome: TransactionsService.getSum('2019-02'),
        accumulated: vm.dividend[3].value1,
        loan: 23953,
        holdings: [
            { asset: AssetService.akelius,            price: 348.50        },
            { asset: AssetService.atlas_copco,        price: 231.80        },
            { asset: AssetService.autoliv,            price: 752.80        },
            { asset: AssetService.axfood,             price: 170.95        },
            { asset: AssetService.bmw,                price: 2353.00 / 3   },
            { asset: AssetService.castellum,          price: 168.25        },
            { asset: AssetService.dustin,             price: 87.40         },
            { asset: AssetService.handelsbanken,      price: 105.35        },
            { asset: AssetService.husqvarna,          price: 75.70         },
            { asset: AssetService.industrivarden_a,   price: 196.10        },
            { asset: AssetService.investor_b,         price: 0.00          },
            { asset: AssetService.investor_a,         price: 407.40        },
            { asset: AssetService.kungsleden,         price: 69.00         },
            { asset: AssetService.latour,             price: 121.50        },
            { asset: AssetService.lifco,              price: 378.00        },
            { asset: AssetService.nordea,             price: 83.76         },
            { asset: AssetService.np3,                price: 69.60         },
            { asset: AssetService.pfizer,             price: 403.00        },
            { asset: AssetService.sagax,              price: 33.70         },
            { asset: AssetService.skanska,            price: 166.60        },
            { asset: AssetService.swedbank,           price: 169.70        },
            { asset: AssetService.tryg,               price: 10104.00 / 40 },
            { asset: AssetService.xact_hogutdelande,  price: 116.62        }
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
        holdings: [
            { asset: AssetService.akelius,            price: 346.50 },
            { asset: AssetService.atlas_copco,        price: 216.10 },
            { asset: AssetService.autoliv,            price: 720.00 },
            { asset: AssetService.axfood,             price: 158.40 },
            { asset: AssetService.bmw,                price: 737.55 },
            { asset: AssetService.castellum,          price: 171.40 },
            { asset: AssetService.dustin,             price: 81.50  },
            { asset: AssetService.handelsbanken,      price: 98.20  },
            { asset: AssetService.husqvarna,          price: 69.00  },
            { asset: AssetService.industrivarden_a,   price: 190.80 },
            { asset: AssetService.investor_b,         price: 397.10 },
            { asset: AssetService.kungsleden,         price: 68.60  },
            { asset: AssetService.latour,             price: 112.20 },
            { asset: AssetService.nordea,             price: 82.17  },
            { asset: AssetService.np3,                price: 63.70  },
            { asset: AssetService.pfizer,             price: 380.00 },
            { asset: AssetService.sagax,              price: 33.00  },
            { asset: AssetService.skanska,            price: 158.15 },
            { asset: AssetService.swedbank,           price: 205.10 },
            { asset: AssetService.tryg,               price: 229.87 },
            { asset: AssetService.xact_hogutdelande,  price: 111.58 }
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
        holdings: [
            { asset: AssetService.akelius,            price: 328.50 },
            { asset: AssetService.atlas_copco,        price: 193.32 },
            { asset: AssetService.autoliv,            price: 629.80 },
            { asset: AssetService.axfood,             price: 151.70 },
            { asset: AssetService.castellum,          price: 163.35 },
            { asset: AssetService.handelsbanken,      price: 98.30  },
            { asset: AssetService.husqvarna,          price: 65.70  },
            { asset: AssetService.industrivarden_a,   price: 183.20 },
            { asset: AssetService.investor_b,         price: 375.60 },
            { asset: AssetService.kungsleden,         price: 62.90  },
            { asset: AssetService.latour,             price: 112.00 },
            { asset: AssetService.np3,                price: 61.00  },
            { asset: AssetService.pfizer,             price: 385.00 },
            { asset: AssetService.sagax,              price: 31.70  },
            { asset: AssetService.skanska,            price: 141.00 },
            { asset: AssetService.swedbank,           price: 197.75 },
            { asset: AssetService.xact_hogutdelande,  price: 105.58 }
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
        holdings: [
            { asset: AssetService.castellum,      price: 159.20 },
            { asset: AssetService.handelsbanken,  price: 100.25 },
            { asset: AssetService.husqvarna,      price: 71.68  },
            { asset: AssetService.investor_b,     price: 398.70 },
            { asset: AssetService.latour,         price: 113.80 },
            { asset: AssetService.sagax,          price: 32.80  },
            { asset: AssetService.swedbank,       price: 211.50 }
        ]
    };

    vm.getHoldings = function(month) {
        return vm.data[month].holdings;
    };

    vm.getDescription = function(month) {
        return vm.data[month].description;
    };

    vm.getAccumulatedDividends = function(month) {
        return vm.data[month].accumulated;
    };

    vm.getLoan = function(month) {
        return vm.data[month].loan;
    };

    vm.getGoal = function(month) {
        return vm.data[month].goal;
    };

    vm.getOutcome = function(month) {
        return vm.data[month].outcome;
    };

    vm.getDescription = function(month) {
        return vm.data[month].description;
    };

    vm.getTotal = function (month) {
        var sum = 0;
        vm.getHoldings(month).forEach(function(holding) {
            sum += holding.quantity * holding.price;
        });
        return sum;
    };

    vm.getYield = function (month) {
        return vm.data[month].forecast / vm.getTotal(month) * 100;
    };

    vm.getForecast = function (month) {
        return vm.data[month].forecast;
    };

    vm.getValue = function (holding) {
        return holding.quantity * holding.price;
    };

    ['2018-11', '2018-12', '2019-01', '2019-01', '2019-02', '2019-03', '2019-04', '2019-05'].forEach(function (month) {
        vm.data[month].holdings.forEach(function(holding) {
            holding.quantity = TransactionsService.getQuantity(month, holding.asset);
        });
    });

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
