define(['durandal/app', 'knockout', 'plugins/router'], function (app, ko, router) {
    
    var childRouter = router.createChildRouter()
        .makeRelative({
            moduleId:'superHeroes',
            fromParent:true,
            dynamicHash: ':id'
        }).map([
            { route: 'app/viewmodels/marvelHeroes', moduleId: 'marvelHeroes', title: 'Marvel Comics', image: "app/images/marvelbanner.jpg", hash: '#marvelHeroes', nav: true },
            { route: 'app/viewmodels/dcHeroes', moduleId: 'dcHeroes', title: 'DC Comics', image: "app/images/dcbanner.jpg", hash: '#dcHeroes', nav: true }
        ]).buildNavigationModel();

    return {
        router: childRouter,
        displayName: 'Explore Comic Universes'
    };
});