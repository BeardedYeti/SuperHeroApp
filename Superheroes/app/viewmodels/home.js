define(function(require) {
    var self = this;
    self.router = require('durandal/plugins/router');
    self.system = require('durandal/system');
    self.app = require('durandal/app');
    self.Person = require('viewmodels/person');
    self.people = ko.observableArray([]);
    self.viewPersonModal = function(person, element) {
        var p = person;
        self.app.showModal(p);
    };
    return {
        activate: function () {
            self.system.log('home activated...yeah!');
            self.people.push(new Person('Steve,' 'Superhero');

        },
        people: people,
        viewPersonModal:viewPersonModal
    };
}); 
