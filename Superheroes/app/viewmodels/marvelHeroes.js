define(['durandal/app', 'knockout', 'repository/marvelBackEnd'], function (app, ko, marvelBackEnd) {
    
    return {
        displayName: 'Explore Superheroes',
        universeName: 'Marvel Universe',
        superheroes: ko.observableArray([]),
        activate: function() {
            this.superheroes(marvelBackEnd.listMarvelHeroes());
        }
    };
});



