angular
    .module('app')
    .controller('WatchlistController', WatchlistController)
    .component('appWatchlist', {
        templateUrl: 'app/components/watchlist/watchlist.view.html',
        bindings: {},
        controller: WatchlistController
    });

WatchlistController.$inject = [];

function WatchlistController() {
    var vm = this;
}