define(function (require) {
	return {
		comicUniverse: [
			{id: "app/viewmodels/marvelHeroes", title: "Marvel Comics", image: "app/images/marvelbanner.jpg"},
			{id: "app/viewmodels/dcHeroes", title: "DC Comics", image: "app/images/dcbanner.jpg"}
		],
		
		listUniverses: function () {
			return this.comicUniverse;
		},
	}
})