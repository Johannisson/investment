angular
    .module('app')
    .controller('AssetController', AssetController)
    .component('appAsset', {
        templateUrl: 'app/components/asset/asset.view.html',
        bindings: {
            asset: '@'
        },
        controller: AssetController
    });

AssetController.$inject = ['$locale'];

function AssetController($locale) {
    var vm = this;

    vm.$onInit = function() {
        if (vm.asset === 'akelius') {
            vm.data = akelius;
        } 
        if (vm.asset === 'atlas_copco') {
            vm.data = atlas_copco;
            vm.rows = [0, 1, 2, 3, 4, 5, 6, 7];
        } 
        if (vm.asset === 'autoliv') {
            vm.data = autoliv;
            vm.rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        }
        if (vm.asset === 'axfood') {
            vm.data = axfood;
            vm.rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        } 
        if (vm.asset === 'bmw') {
            vm.data = bmw;
            vm.rows = [0, 1, 2, 3, 4, 5];
        } 
        if (vm.asset === 'castellum') {
            vm.data = castellum;
            vm.rows = [0, 1, 2, 3, 4, 5, 6];
        } 
        if (vm.asset === 'dustin') {
            vm.data = dustin;
            vm.rows = [0, 1, 2, 3, 4];
        } 
        if (vm.asset === 'handelsbanken') {
            vm.data = handelsbanken;
            vm.rows = [0, 2, 4, 6, 8,  10];
        } 
        if (vm.asset === 'husqvarna') {
            vm.data = husqvarna;
            vm.rows = [0, 0.5, 1, 1.5, 2, 2.5];
        } 
        if (vm.asset === 'industrivarden') {
            vm.data = industrivarden;
            vm.rows = [0, 1, 2, 3, 4, 5, 6, 7];
        }
        if (vm.asset === 'investor-a') {
            vm.data = investor_a;
            vm.rows = [0, 2, 4, 6, 8, 10, 12, 14];
        }
        if (vm.asset === 'investor-b') {
            vm.data = investor_b;
            vm.rows = [0, 2, 4, 6, 8, 10, 12, 14];
        }
        if (vm.asset === 'kungsleden') {
            vm.data = kungsleden;
        } 
        if (vm.asset === 'latour') {
            vm.data = latour;
            vm.rows = [0, 0.5, 1, 1.5, 2, 2.5];
        }
        if (vm.asset === 'peab') {
            vm.data = peab;
            vm.rows = [0, 1, 2, 3, 4];
        }
        if (vm.asset === 'pfizer') {
            vm.data = pfizer;
            vm.rows = [0, 0.5, 1, 1.5, 2, 2.5];
        }
        if (vm.asset === 'np3') {
            vm.data = np3;
            vm.rows = [0, 0.5, 1, 1.5, 2, 2.5, 3];
        }
        if (vm.asset === 'nordea') {
            vm.data = nordea;
            vm.rows = [0, 0.25, 0.5, 0.75];
        }
        if (vm.asset === 'sagax') {
            vm.data = sagax;
            vm.rows = [0];
        } 
        if (vm.asset === 'skanska') {
            vm.data = skanska;
            vm.rows = [0, 2, 4, 6, 8, 10, 12];
        } 
        if (vm.asset === 'swedbank') {
            vm.data = swedbank;
            vm.rows = [0, 2.5, 5, 7.5, 10, 12.5, 15]
        } 
        if (vm.asset === 'telia') {
            vm.data = telia;
            vm.rows = [0, 2.5, 5, 7.5, 10, 12.5, 15]
        } 
        if (vm.asset === 'tryg') {
            vm.data = tryg;
            vm.rows = [0, 2.5, 5, 7.5, 10, 12.5, 15]
        } 
        if (vm.asset === 'xact_hogutdelande') {
            vm.data = xact_hogutdelande;
            vm.rows = [0, 1, 2, 3, 4, 5, 6];
        }

        vm.diagram = [];

        vm.data.years.forEach(function(element) {
            vm.diagram.push({label:(element.year + '').substring(2), value1:element.ordinary, value2:element.extra, value3:element.stocks});
        });
    };
}