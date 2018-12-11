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
        } 
        if (vm.asset === 'axfood') {
            vm.data = axfood;
            vm.scale = 35;
            vm.rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        } 
        if (vm.asset === 'castellum') {
            vm.data = castellum;
            vm.scale = 52;
            vm.rows = [0, 1, 2, 3, 4, 5, 6];
        } 
        if (vm.asset === 'dustin_group') {
            vm.data = dustin_group;
        } 
        if (vm.asset === 'handelsbanken') {
            vm.data = handelsbanken;
            vm.scale = 31;
            vm.rows = [0, 2, 4, 6, 8,  10];
        } 
        if (vm.asset === 'husqvarna') {
            vm.data = husqvarna;
            vm.scale = 125;
            vm.rows = [0, 0.5, 1, 1.5, 2, 2.5];
        } 
        if (vm.asset === 'investor') {
            vm.data = investor;
            vm.scale = 26;
            vm.rows = [0, 2, 4, 6, 8, 10, 12];
        } 
        if (vm.asset === 'kungsleden') {
            vm.data = kungsleden;
        } 
        if (vm.asset === 'latour') {
            vm.data = latour;
            vm.scale = 125;
            vm.rows = [0, 0.5, 1, 1.5, 2, 2.5];
        } 
        if (vm.asset === 'sagax') {
            vm.data = sagax;
        } 
        if (vm.asset === 'skanska') {
            vm.data = skanska;
            vm.scale = 26;
            vm.rows = [0, 2, 4, 6, 8, 10, 12];
        } 
        if (vm.asset === 'swedbank') {
            vm.data = swedbank;
            vm.scale = 21;
            vm.rows = [0, 2.5, 5, 7.5, 10, 12.5, 15]
        } 
        if (vm.asset === 'xact_hogutdelande') {
            vm.data = xact_hogutdelande;
            vm.scale = 52;
            vm.rows = [0, 1, 2, 3, 4, 5, 6];
        }

        vm.diagram = [];

        vm.data.years.forEach(function(element) {
            vm.diagram.push({label:(element.year + '').substring(2), value1:element.ordinary, value2:element.extra, value3:element.stocks});
        });
    };
}