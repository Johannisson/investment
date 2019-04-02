angular
    .module('app')
    .controller('DiagramController', DiagramController)
    .component('appDiagram', {
        templateUrl: 'app/components/diagram/diagram.view.html',
        bindings: {
            data: '=',
            rows: '=',
            width: '=',
            height: '=',
            suffix: '@',
            label1: '@',
            label2: '@',
            label3: '@',
            label4: '@',
        },
        controller: DiagramController
    });

DiagramController.$inject = [];

function DiagramController() {
    var vm = this;

    vm.color1 = '#FF674A';
    vm.color2 = '#234A59';
    vm.color3 = '#CFE2F3';
    vm.color4 = '#0072A8';

    vm.step = function(index, offset) {
        return Math.floor(index * ((vm.width - 20) / vm.data.length) * 0.92 + offset);
    };

    vm.pixel = function(value) {
        return Math.floor(value) + 0.5;
    }

    vm.scale = function() {
        return 1 / Math.max.apply(null, vm.rows) * 300;
    }

    vm.regenerate = function() {
        vm.decimals = undefined;
        vm.data.forEach(function (element) {
            element.visibility1 = 'hidden';
            element.visibility2 = 'hidden';
            element.visibility3 = 'hidden';
            element.visibility4 = 'hidden';
        });
    }

    vm.showLabel1 = function() {
        if (!vm.label1) {
            return false;
        }
        for (i in vm.data) {
            if (vm.data[i].value1) {
                return true;
            }
        }
        return false;
    }


    vm.showLabel2 = function() {
        if (!vm.label2) {
            return false;
        }
        for (i in vm.data) {
            if (vm.data[i].value2) {
                return true;
            }
        }
        return false;
    }

    vm.offsetLabel2 = function() {
        var result = 0;
        if (vm.showLabel1()) {
            result += 150;
        }
        return result;
    }

    vm.showLabel3 = function() {
        if (!vm.label3) {
            return false;
        }
        for (i in vm.data) {
            if (vm.data[i].value3) {
                return true;
            }
        }
        return false;
    }

    vm.offsetLabel3 = function() {
        var result = 0;
        if (vm.showLabel1()) {
            result += 150;;
        }
        if (vm.showLabel2()) {
            result += 150;;
        }
        return result;
    }

    vm.showLabel4 = function() {
        if (!vm.label4) {
            return false;
        }
        for (i in vm.data) {
            if (vm.data[i].value4) {
                return true;
            }
        }
        return false;
    }

    vm.offsetLabel4 = function() {
        var result = 0;
        if (vm.showLabel1()) {
            result += 150;;
        }
        if (vm.showLabel2()) {
            result += 150;;
        }
        if (vm.showLabel3()) {
            result += 150;;
        }
        return result;
    }

    vm.$onInit = function() {
        vm.regenerate();
    }
}