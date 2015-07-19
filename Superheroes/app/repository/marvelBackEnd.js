define(function (require) {
	return {
		mHeroes: [
			{id: 0, title: "Captain America", image: "app/images/capt.jpg"},
			{id: 1, title: "Iron Man", image: "app/images/iron.jpg"},
			{id: 2, title: "Thor", image: "app/images/thor.jpg"},
			{id: 3, title: "Hulk", image: "app/images/hulk.jpg"},
			{id: 4, title: "Spiderman", image: "app/images/spidey.jpg"}
		],
		
		listMarvelHeroes: function () {
			return this.mHeroes;
		},
	

	}
})