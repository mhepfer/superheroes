Superhero.Models.Sighting = Backbone.Model.extend({
	urlRoot: "api/sightings",

	initialize: function(){
		this.onMap = true;
		this.selectedHero = true;
	},

	visible: function(){
		return this.onMap && this.selectedHero;
	},

	parse: function (response) {
		if (response.superhero) {
			this.superhero = new Superhero.Models.Hero(response.superhero);
			delete response.superhero;
		}
		return response;
	}
});