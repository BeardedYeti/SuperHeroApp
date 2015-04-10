define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function() {
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: '', title:'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'Superheroes', moduleId: 'viewmodels/superHeroes', nav: true },
                { route: 'Top Story Arcs', moduleId: 'viewmodels/topStoryArcs', nav: true },
                { route: 'Timelines', moduleId: 'viewmodels/timelines', nav: true },
                { route: 'Marvel Heroes', moduleId: 'viewmodels/marvelHeroes', nav: true },
                { route: 'Test', moduleId: 'viewmodels/test', nav: true }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});