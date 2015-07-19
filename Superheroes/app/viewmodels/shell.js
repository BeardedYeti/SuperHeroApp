define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function() {
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: ['', 'home'], title: 'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'superheroes*details', title: 'Superheroes', moduleId: 'superHeroes/index', nav: true },
                { route: 'top-story-arcs', title: 'Top Story Arcs', moduleId: 'viewmodels/topStoryArcs', nav: true },
                { route: 'timelines', title: 'Timelines', moduleId: 'viewmodels/timelines', nav: true },
                { route: 'marvel-heroes', title: 'Marvel Heroes', moduleId: 'viewmodels/marvelHeroes', nav: true },
                { route: 'test',. title: 'Test', moduleId: 'viewmodels/test', nav: true }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});