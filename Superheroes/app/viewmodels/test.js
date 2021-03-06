﻿define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    
    return {
        displayName: 'Explore Superheroes',
        images: ko.observableArray([]),
        activate: function () {
            
            if (this.images().length > 0) {
                return;
            }

            var that = this;
            return http.jsonp('http://api.flickr.com/services/feeds/photos_public.gne', { tags: 'mount ranier', tagmode: 'any', format: 'json' }, 'jsoncallback').then(function(response) {
                that.images(response.items);
            });
        },
        select: function(item) {
            
            item.viewUrl = 'views/detail';
            app.showDialog(item);
        },
        canDeactivate: function () {
            
            return app.showMessage('Are you sure you want to leave this page?', 'Navigate', ['Yes', 'No']);
        }
    };
});