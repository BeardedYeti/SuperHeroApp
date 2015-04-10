define(['durandal/app', 'knockout', 'repository/superHeroesBackEnd'], function (app, ko, superHeroesBackEnd) {
    
    return {
        displayName: 'Explore Comic Universes',
        universe: ko.observable([]),
        activate: function() {
            this.universe(superHeroesBackEnd.listUniverses());
        }
    };
});