angular
    .module('app')
    .service('AssetService', AssetService);

AssetService.$inject = ['$http'];

function AssetService($http) {
    var vm = this;
    vm.assets = [];

    $http.get('app/assets/akelius.json').then(function(response) {
        vm.assets.push(vm.akelius = response.data);
    });
    $http.get('app/assets/atlas_copco.json').then(function(response) {
        vm.assets.push(vm.atlas_copco = response.data);
    });
    $http.get('app/assets/autoliv.json').then(function(response) {
        vm.assets.push(vm.autoliv = response.data);
    });
    $http.get('app/assets/axfood.json').then(function(response) {
        vm.assets.push(vm.axfood = response.data);
    });
    $http.get('app/assets/bmw.json').then(function(response) {
        vm.assets.push(vm.bmw = response.data);
    });

    $http.get('app/assets/castellum.json').then(function(response) {
        vm.assets.push(vm.castellum = response.data);
    });
    $http.get('app/assets/catena_media.json').then(function(response) {
        vm.assets.push(vm.catena_media = response.data);
    });
    $http.get('app/assets/dustin_group.json').then(function(response) {
        vm.assets.push(vm.dustin = response.data);
    });
    $http.get('app/assets/handelsbanken.json').then(function(response) {
        vm.assets.push(vm.handelsbanken = response.data);
    });
    $http.get('app/assets/husqvarna.json').then(function(response) {
        vm.assets.push(vm.husqvarna = response.data);
    });
    $http.get('app/assets/industrivarden_a.json').then(function(response) {
        vm.assets.push(vm.industrivarden_a = response.data);
        $http.get('app/assets/industrivarden_c.json').then(function(response) {
            vm.industrivarden_c = angular.copy(vm.industrivarden_a);
            vm.industrivarden_c = angular.merge(vm.industrivarden_c, response.data);
            vm.assets.push(vm.industrivarden_c);
        });
    });
    $http.get('app/assets/indutrade.json').then(function(response) {
        vm.assets.push(vm.indutrade = response.data);
    });
    $http.get('app/assets/investor_a.json').then(function(response) {
        vm.assets.push(vm.investor_a = response.data);
        $http.get('app/assets/investor_b.json').then(function(response) {
            vm.investor_b = angular.copy(vm.investor_a);
            vm.investor_b = angular.merge(vm.investor_b, response.data)
            vm.assets.push(vm.investor_b);
        });
    });
    $http.get('app/assets/kungsleden.json').then(function(response) {
        vm.assets.push(vm.kungsleden = response.data);
    });
    $http.get('app/assets/latour.json').then(function(response) {
        vm.assets.push(vm.latour = response.data);
    });
    $http.get('app/assets/lifco.json').then(function(response) {
        vm.assets.push(vm.lifco = response.data);
    });
    $http.get('app/assets/nordea.json').then(function(response) {
        vm.assets.push(vm.nordea = response.data);
    });
    $http.get('app/assets/np3.json').then(function(response) {
        vm.assets.push(vm.np3 = response.data);
    });
    $http.get('app/assets/peab.json').then(function(response) {
        vm.assets.push(vm.peab = response.data);
    });
    $http.get('app/assets/pfizer.json').then(function(response) {
        vm.assets.push(vm.pfizer = response.data);
    });
    $http.get('app/assets/sagax.json').then(function(response) {
        vm.assets.push(vm.sagax = response.data);
    });
    $http.get('app/assets/sampo.json').then(function(response) {
        vm.assets.push(vm.sampo = response.data);
    });
    $http.get('app/assets/skanska.json').then(function(response) {
        vm.assets.push(vm.skanska = response.data);
    });
    $http.get('app/assets/stora_enso.json').then(function(response) {
        vm.assets.push(vm.stora_enso = response.data);
    });
    $http.get('app/assets/swedbank.json').then(function(response) {
        vm.assets.push(vm.swedbank = response.data);
    });
    $http.get('app/assets/telia.json').then(function(response) {
        vm.assets.push(vm.telia = response.data);
    });
    $http.get('app/assets/tryg.json').then(function(response) {
        vm.assets.push(vm.tryg = response.data);
    });
    $http.get('app/assets/xact_hogutdelande.json').then(function(response) {
        vm.assets.push(vm.xact_hogutdelande = response.data);
    });
}