define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function() {
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            return router.map([
                { route: ['', 'home'], title: 'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'superHeroes*details', title: 'Superheroes', moduleId: 'superHeroes/index', nav: true },
                { route: 'top-story-arcs', title: 'Top Story Arcs', moduleId: 'viewmodels/topStoryArcs', nav: true },
                { route: 'timelines', title: 'Timelines', moduleId: 'viewmodels/timelines', nav: true }
            ]).buildNavigationModel()
              .mapUnknownRoutes('viewmodels/welcome', 'not-found')
              .activate();
        }
    };
});