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
    vm.month = 4;
    vm.currency = currency;

    vm.value = [];
    vm.value.push({ label: 'Nov',    value1: 104487 });
    vm.value.push({ label: 'Dec',    value1: 143692 });
    vm.value.push({ label: '2019',   value1: 183289 });
    vm.value.push({ label: 'Feb',    value1: 218823 });
    vm.value.push({ label: 'Mars',   value1: 241838 });
    vm.value.push({ label: 'April',  value1: 256597 });
    vm.value.push({ label: 'Maj',    value1: 0      });
    vm.value.push({ label: 'Juni',   value1: 0      });
    vm.value.push({ label: 'Juli',   value1: 0      });
    vm.value.push({ label: 'Aug',    value1: 0      });
    vm.value.push({ label: 'Sept',   value1: 0      });
    vm.value.push({ label: 'Okt',    value1: 0      });
    vm.value.push({ label: 'Nov',    value1: 0      });
    vm.value.push({ label: 'Dec',    value1: 0      });

    vm.diagram = [];
    vm.diagram.push({ label: 'Nov',    value1: 4380  });
    vm.diagram.push({ label: 'Dec',    value1: 6181  });
    vm.diagram.push({ label: '2019',   value1: 7830  });
    vm.diagram.push({ label: 'Feb',    value1: 9533  });
    vm.diagram.push({ label: 'Mars',   value1: 10598 });
    vm.diagram.push({ label: 'April',  value1: 10969 });
    vm.diagram.push({ label: 'Maj',    value1: 0     });
    vm.diagram.push({ label: 'Juni',   value1: 0     });
    vm.diagram.push({ label: 'Juli',   value1: 0     });
    vm.diagram.push({ label: 'Aug',    value1: 0     });
    vm.diagram.push({ label: 'Sept',   value1: 0     });
    vm.diagram.push({ label: 'Okt',    value1: 0     });
    vm.diagram.push({ label: 'Nov',    value1: 0     });
    vm.diagram.push({ label: 'Dec',    value1: 0     });

    vm.dividend = [];
    vm.dividend.push({ label: 'Nov',    value1: 0,     value2: 0    });
    vm.dividend.push({ label: 'Dec',    value1: 0,     value2: 0    });
    vm.dividend.push({ label: '2019',   value1: 238,   value2: 0    });
    vm.dividend.push({ label: 'Feb',    value1: 238,   value2: 187  });
    vm.dividend.push({ label: 'Mars',   value1: 425,   value2: 1080 });
    vm.dividend.push({ label: 'April',  value1: 1505,  value2: 3839 });
    vm.dividend.push({ label: 'Maj',    value1: 0,     value2: 0    });
    vm.dividend.push({ label: 'Juni',   value1: 0,     value2: 0    });
    vm.dividend.push({ label: 'Juli',   value1: 0,     value2: 0    });
    vm.dividend.push({ label: 'Aug',    value1: 0,     value2: 0    });
    vm.dividend.push({ label: 'Sept',   value1: 0,     value2: 0    });
    vm.dividend.push({ label: 'Okt',    value1: 0,     value2: 0    });
    vm.dividend.push({ label: 'Nov',    value1: 0,     value2: 0    });
    vm.dividend.push({ label: 'Dec',    value1: 0,     value2: 0    });


    vm.data = [];
    vm.data['2019-4'] = {
        description: '',
        forecast: 10969,
        goal: 26000,
        outcome: 11560,
        accumulated: 1504 + 660 + 718 + 200 + 60 + 2201,
        loan: 23502,
        assets: [
            { asset: akelius,            quantity: 10,   price: 348.00,         change: 0,    dividend: 0    },
            { asset: atlas_copco,        quantity: 15,   price: 250.90,         change: 0,    dividend: 0    },
            { asset: autoliv,            quantity: 4,    price: 752.80,         change: 0,    dividend: 0    },
            { asset: axfood,             quantity: 109,  price: 174.00,         change: 0,    dividend: 0    },
            { asset: bmw,                quantity: 3,    price: 2307.00 / 3,    change: 0,    dividend: 0    },
            { asset: castellum,          quantity: 95,   price: 178.20,         change: 5,    dividend: 0    },
            { asset: catena_media,       quantity: 17,   price: 59.75,          change: 17,   dividend: 0    },
            { asset: dustin,             quantity: 89,   price: 86.45,          change: 0,    dividend: 0    },
            { asset: handelsbanken,      quantity: 126,  price: 103.95,         change: 6,    dividend: 660  },
            { asset: husqvarna,          quantity: 140,  price: 79.98,          change: 7,    dividend: 0    },
            { asset: industrivarden_c,   quantity: 20,   price: 208.40,         change: 11,   dividend: 0    },
            { asset: investor_a,         quantity: 53,   price: 428.00,         change: 0,    dividend: 0    },
            { asset: kungsleden,         quantity: 28,   price: 73.50,          change: 0,    dividend: 0    },
            { asset: latour,             quantity: 249,  price: 128.20,         change: 11,   dividend: 0    },
            { asset: lifco,              quantity: 12,   price: 399.40,         change: 0,    dividend: 0    },
            { asset: nordea,             quantity: 100,  price: 76.54,          change: 0,    dividend: 718  },
            { asset: np3,                quantity: 78,   price: 74.70,          change: 0,    dividend: 0    },
            { asset: pfizer,             quantity: 15,   price: 392.00,         change: 0,    dividend: 0    },
            { asset: sagax,              quantity: 400,  price: 34.50,          change: 0,    dividend: 200  },
            { asset: skanska,            quantity: 10,   price: 176.06,         change: 0,    dividend: 60   },
            { asset: stora_enso,         quantity: 42,   price: 122.80,         change: 22,   dividend: 0    },
            { asset: swedbank,           quantity: 155,  price: 148.15,         change: 0,    dividend: 2201 },
            { asset: telia,              quantity: 100,  price: 41.23,          change: 0,    dividend: 0    },
            { asset: tryg,               quantity: 40,   price: 11043.00 / 40,  change: 0,    dividend: 0    },
            { asset: xact_hogutdelande,  quantity: 257,  price: 121.80,         change: 0,    dividend: 0    },
        ]
    }

    vm.data['2019-3'] = {
        description: '',
        forecast: 10598,
        goal: 26000,
        outcome: 27545,
        accumulated: 425 + 23 + 693 + 274 + 56 + 33,
        loan: 14410,
        assets: [
            { asset: akelius,            quantity: 10,   price: 345.50,         change: 0,    dividend: 0      },
            { asset: atlas_copco,        quantity: 15,   price: 230.10,         change: 0,    dividend: 0      },
            { asset: autoliv,            quantity: 4,    price: 680.00,         change: 0,    dividend: 22.99  },
            { asset: axfood,             quantity: 109,  price: 173.00,         change: 10,   dividend: 693.00 },
            { asset: bmw,                quantity: 3,    price: 2143.00 / 3,    change: 0,    dividend: 0      },
            { asset: castellum,          quantity: 90,   price: 180.35,         change: 0,    dividend: 274.50 },
            { asset: dustin,             quantity: 89,   price: 87.20,          change: 37,   dividend: 0      },
            { asset: handelsbanken,      quantity: 120,  price: 98.10,          change: 0,    dividend: 0      },
            { asset: husqvarna,          quantity: 133,  price: 75.94,          change: 13,   dividend: 0      },
            { asset: industrivarden_a,   quantity: 0,    price: 0.00,           change: -10,  dividend: 0      },
            { asset: industrivarden_c,   quantity: 20,   price: 194.75,         change: 20,   dividend: 56.00,    flags: 'A' },
            { asset: investor_a,         quantity: 53,   price: 418.80,         change: 3,    dividend: 0      },
            { asset: kungsleden,         quantity: 28,   price: 74.00,          change: 0,    dividend: 0      },
            { asset: latour,             quantity: 238,  price: 124.50,         change: 18,   dividend: 0      },
            { asset: lifco,              quantity: 12,   price: 379.00,         change: 5,    dividend: 0      },
            { asset: nordea,             quantity: 100,  price: 70.75,          change: 0,    dividend: 0      },
            { asset: np3,                quantity: 78,   price: 75.00,          change: 8,    dividend: 0      },
            { asset: pfizer,             quantity: 15,   price: 393.00,         change: 0,    dividend: 33.32  },
            { asset: sagax,              quantity: 400,  price: 34.70,          change: 0,    dividend: 0      },
            { asset: skanska,            quantity: 10,   price: 168.90,         change: 0,    dividend: 0      },
            { asset: stora_enso,         quantity: 31,   price: 114.00,         change: 31,   dividend: 0      },
            { asset: swedbank,           quantity: 155,  price: 131.35,         change: 0,    dividend: 0      },
            { asset: telia,              quantity: 100,  price: 41.95,          change: 100,  dividend: 0      },
            { asset: tryg,               quantity: 40,   price: 10202.00 / 40,  change: 0,    dividend: 0      },
            { asset: xact_hogutdelande,  quantity: 257,  price: 118.00,         change: 50,   dividend: 0      }
        ]
    }

    vm.data['2019-2'] = {
        description: '',
        forecast: 9533,
        goal: 30000,
        outcome: 30461,
        accumulated: 238 + 50 + 137,
        loan: 23953,
        assets: [
            { asset: akelius,            quantity: 10,   price: 348.50,         change: 0,    dividend: 50.00,  },
            { asset: atlas_copco,        quantity: 15,   price: 231.80,         change: 0,    dividend: 0,      },
            { asset: autoliv,            quantity: 4,    price: 752.80,         change: 0,    dividend: 0,      },
            { asset: axfood,             quantity: 99,   price: 170.95,         change: 22,   dividend: 0,      },
            { asset: bmw,                quantity: 3,    price: 2353.00 / 3,    change: 0,    dividend: 0,      },
            { asset: castellum,          quantity: 90,   price: 168.25,         change: 10,   dividend: 0,      },
            { asset: dustin,             quantity: 52,   price: 87.40,          change: 39,   dividend: 0,      },
            { asset: handelsbanken,      quantity: 120,  price: 105.35,         change: 10,   dividend: 0,      },
            { asset: husqvarna,          quantity: 120,  price: 75.70,          change: 0,    dividend: 0,      },
            { asset: industrivarden_a,   quantity: 10,   price: 196.10,         change: 0,    dividend: 0,      },
            { asset: investor_a,         quantity: 50,   price: 407.40,         change: 50,   dividend: 137.00,     flags: 'A' },
            { asset: investor_b,         quantity: 0,    price: 0.00,           change: -50,  dividend: 0,      },
            { asset: kungsleden,         quantity: 28,   price: 69.00,          change: 8,    dividend: 0,      },
            { asset: latour,             quantity: 220,  price: 121.50,         change: 0,    dividend: 0,      },
            { asset: lifco,              quantity: 7,    price: 378.00,         change: 7,    dividend: 0,      },
            { asset: nordea,             quantity: 100,  price: 83.76,          change: 26,   dividend: 0,      },
            { asset: np3,                quantity: 70,   price: 69.60,          change: 35,   dividend: 0,      },
            { asset: pfizer,             quantity: 15,   price: 403.00,         change: 5,    dividend: 0,      },
            { asset: sagax,              quantity: 400,  price: 33.70,          change: 0,    dividend: 0,      },
            { asset: skanska,            quantity: 10,   price: 166.60,         change: 0,    dividend: 0,      },
            { asset: swedbank,           quantity: 155,  price: 169.70,         change: 45,   dividend: 0,      },
            { asset: tryg,               quantity: 40,   price: 10104.00 / 40,  change: 16,   dividend: 0,      },
            { asset: xact_hogutdelande,  quantity: 203,  price: 116.62,         change: 0,    dividend: 0,      }
        ]
    }

    vm.data['2019-1'] = {
        description: '<b>Dividend Carpet Bombing</b><br>' +
                     'Även om det i praktiken inte spelar någon roll så är det ganska roligt med löpande utdelningar i portföljen. ' + 
                     'Kassaflödet gör att jag löpande får lite mer slantar att återinvestera utöver det jag sparar. ' +
                     'Även om inte målet är att få utdelningar varje månad så har det redan blivit så att jag kommer få utdelning varje månad. ' +
                     'Under <a href="utdelningsprognos">utdelningsprognos</a> kan man få en tydlig överblick över utdelningarna för respektive månad.',
        forecast: 7830,
        goal: 30000,
        outcome: 33921,
        accumulated: 11 + 200 + 27,
        loan: 16945,
        assets: [
            { asset: akelius,            quantity: 10,   price: 346.50,  change: 0,   dividend: 0      },
            { asset: atlas_copco,        quantity: 15,   price: 216.10,  change: 5,   dividend: 0      },
            { asset: autoliv,            quantity: 4,    price: 720.00,  change: 2,   dividend: 0      },
            { asset: axfood,             quantity: 77,   price: 158.40,  change: 33,  dividend: 0      },
            { asset: bmw,                quantity: 3,    price: 737.55,  change: 3,   dividend: 0      },
            { asset: castellum,          quantity: 80,   price: 171.40,  change: 30,  dividend: 0      },
            { asset: dustin,             quantity: 13,   price: 81.50,   change: 13,  dividend: 0      },
            { asset: handelsbanken,      quantity: 110,  price: 98.20,   change: 10,  dividend: 0      },
            { asset: husqvarna,          quantity: 120,  price: 69.00,   change: 0,   dividend: 0      },
            { asset: industrivarden_a,   quantity: 10,   price: 190.80,  change: 0,   dividend: 0      },
            { asset: investor_b,         quantity: 50,   price: 397.10,  change: 4,   dividend: 0      },
            { asset: kungsleden,         quantity: 20,   price: 68.60,   change: 0,   dividend: 11.00  },
            { asset: latour,             quantity: 220,  price: 112.20,  change: 0,   dividend: 0      },
            { asset: nordea,             quantity: 74,   price: 82.17,   change: 74,  dividend: 0      },
            { asset: np3,                quantity: 35,   price: 63.70,   change: 15,  dividend: 0      },
            { asset: pfizer,             quantity: 10,   price: 380.00,  change: 7,   dividend: 0      },
            { asset: sagax,              quantity: 400,  price: 33.00,   change: 0,   dividend: 200.00 },
            { asset: skanska,            quantity: 10,   price: 158.15,  change: 0,   dividend: 0      },
            { asset: swedbank,           quantity: 110,  price: 205.10,  change: 0,   dividend: 0      },
            { asset: tryg,               quantity: 24,   price: 229.87,  change: 24,  dividend: 27.36  },
            { asset: xact_hogutdelande,  quantity: 203,  price: 111.58,  change: 0,   dividend: 0      }
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
            { asset: akelius,            quantity: 10,   price: 328.50,  change: 10   },
            { asset: atlas_copco,        quantity: 10,   price: 193.32,  change: 10   },
            { asset: autoliv,            quantity: 2,    price: 629.80,  change: 2    },
            { asset: axfood,             quantity: 44,   price: 151.70,  change: 44   },
            { asset: castellum,          quantity: 50,   price: 163.35,  change: 0    },
            { asset: handelsbanken,      quantity: 100,  price: 98.30,   change: 40   },
            { asset: husqvarna,          quantity: 120,  price: 65.70,   change: 0    },
            { asset: industrivarden_a,   quantity: 10,   price: 183.20,  change: 10   },
            { asset: investor_b,         quantity: 46,   price: 375.60,  change: 16   },
            { asset: kungsleden,         quantity: 20,   price: 62.90,   change: 20   },
            { asset: latour,             quantity: 220,  price: 112.00,  change: 0    },
            { asset: np3,                quantity: 20,   price: 61.00,   change: 0    },
            { asset: pfizer,             quantity: 3,    price: 385.00,  change: 3    },
            { asset: sagax,              quantity: 400,  price: 31.70,   change: -260 },
            { asset: skanska,            quantity: 10,   price: 141.00,  change: 0    },
            { asset: swedbank,           quantity: 110,  price: 197.75,  change: 0    },
            { asset: xact_hogutdelande,  quantity: 203,  price: 105.58,  change: 203  }
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
            { asset: castellum,      quantity: 50,   price: 159.20,  change: 50  },
            { asset: handelsbanken,  quantity: 60,   price: 100.25,  change: 60  },
            { asset: husqvarna,      quantity: 120,  price: 71.68,   change: 120 },
            { asset: investor_b,     quantity: 30,   price: 398.70,  change: 30  },
            { asset: latour,         quantity: 220,  price: 113.80,  change: 220 },
            { asset: sagax,          quantity: 660,  price: 32.80,   change: 660 },
            { asset: swedbank,       quantity: 110,  price: 211.50,  change: 110 }
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
            if (!(asset.flags || '').includes('A'))
            sum += asset.dividend || 0;
        });
        return sum;
    }

    vm.getArbitrages = function (month) {
        var sum = 0;
        vm.getAssets(month).forEach(function(asset) {
            if ((asset.flags || '').includes('A')) {
                sum += asset.dividend || 0;
            }
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

    vm.getDividend = function (asset) {
        return asset.dividend || 0;
    }
}
