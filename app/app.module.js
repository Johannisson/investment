var app = angular.module('app', ['ngRoute', 'ngSanitize']);

app.run(["$locale", function ($locale) {
    $locale.NUMBER_FORMATS.GROUP_SEP = " ";
    $locale.NUMBER_FORMATS.DECIMAL_SEP = ",";
}]);