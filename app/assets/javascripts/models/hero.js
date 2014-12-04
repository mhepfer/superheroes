Superhero.Models.Hero = Backbone.Model.extend({
	urlRoot: "api/heroes",

	parse: function (response) {
		if (response.sightings) {
			this.sightings = new Superhero.Models.Sighting(response.sightings);
			delete response.sightings;
		}
		return response;
	}

});
