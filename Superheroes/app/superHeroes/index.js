define(['durandal/app', 'knockout', 'plugins/router'], function (app, ko, router) {
    
    var childRouter = router.createChildRouter()
        .makeRelative({
            moduleId:'superHeroes',
            fromParent:true
        }).map([
            { route: 'marvelHeroes',  moduleId: 'marvelHeroes/index',   title: 'Marvel Comics',   image: "app/images/marvelbanner.jpg",    type: 'universe',  nav: true },
            { route: 'dcHeroes',            moduleId: 'dcHeroes/index',       title: 'DC Comics',       image: "app/images/dcbanner.jpg",        type: 'universe',  nav: true }
        ]).buildNavigationModel();

    return {
        router: childRouter,
        displayName: 'Explore Comic Universes',
        comicUniverses: ko.computed(function() {
            return ko.utils.arrayFilter(childRouter.navigationModel(), function(route) {
                return route.type == 'universe';
            });
        }),


    };
});