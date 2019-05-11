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

AssetController.$inject = ['$locale', 'AssetService'];

function AssetController($locale, AssetService) {
    var vm = this;

    vm.$onInit = function() {
        vm.data = eval('AssetService.' + vm.asset.replace(/\-/g, '_'));

        if (vm.asset == 'akelius')           {}
        if (vm.asset == 'atlas_copco')       { vm.rows = [0, 1, 2, 3, 4, 5, 6, 7]; }
        if (vm.asset == 'autoliv')           { vm.rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; }
        if (vm.asset == 'axfood')            { vm.rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; }
        if (vm.asset == 'bmw')               { vm.rows = [0, 1, 2, 3, 4, 5]; }
        if (vm.asset == 'castellum')         { vm.rows = [0, 1, 2, 3, 4, 5, 6]; }
        if (vm.asset == 'catena-media')      { vm.rows = [0, 1, 2, 3, 4, 5, 6]; }
        if (vm.asset == 'dustin')            { vm.rows = [0, 1, 2, 3, 4]; }
        if (vm.asset == 'handelsbanken')     { vm.rows = [0, 2, 4, 6, 8,  10]; }
        if (vm.asset == 'husqvarna')         { vm.rows = [0, 0.5, 1, 1.5, 2, 2.5]; }
        if (vm.asset == 'industrivarden-a')  { vm.rows = [0, 1, 2, 3, 4, 5, 6, 7]; }
        if (vm.asset == 'industrivarden-c')  { vm.rows = [0, 1, 2, 3, 4, 5, 6, 7]; }
        if (vm.asset == 'investor-a')        { vm.rows = [0, 2, 4, 6, 8, 10, 12, 14]; }
        if (vm.asset == 'investor-b')        { vm.rows = [0, 2, 4, 6, 8, 10, 12, 14]; }
        if (vm.asset == 'kungsleden')        { vm.rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; }
        if (vm.asset == 'latour')            { vm.rows = [0, 0.5, 1, 1.5, 2, 2.5]; }
        if (vm.asset == 'peab')              { vm.rows = [0, 1, 2, 3, 4]; }
        if (vm.asset == 'pfizer')            { vm.rows = [0, 0.5, 1, 1.5, 2, 2.5]; }
        if (vm.asset == 'np3')               { vm.rows = [0, 0.5, 1, 1.5, 2, 2.5, 3]; }
        if (vm.asset == 'nordea')            { vm.rows = [0, 0.25, 0.5, 0.75]; }
        if (vm.asset == 'sagax')             { vm.rows = [0]; }
        if (vm.asset == 'skanska')           { vm.rows = [0, 2, 4, 6, 8, 10, 12]; }
        if (vm.asset == 'swedbank')          { vm.rows = [0, 2.5, 5, 7.5, 10, 12.5, 15] }
        if (vm.asset == 'telia')             { vm.rows = [0, 1, 2, 3, 4, 5, 6, 7] }
        if (vm.asset == 'tryg')              { vm.rows = [0, 2.5, 5, 7.5, 10, 12.5, 15] }
        if (vm.asset == 'xact_hogutdelande') { vm.rows = [0, 1, 2, 3, 4, 5, 6]; }

        vm.diagram = [];

        vm.data.years.forEach(function(element) {
            vm.diagram.push({label:(element.year + '').substring(2), value1:element.ordinary, value2:element.extra, value3:element.stocks, value4:element.redemption});
        });
    };
}