Superhero.Models.Hero = Backbone.Model.extend({
	urlRoot: "api/heroes",

	parse: function (response) {
		if (response.sighting) {
			this.sighting = new Superhero.Models.Sighting(response.sighting);
			delete response.sighting;
		}
		return response;
	}
});
