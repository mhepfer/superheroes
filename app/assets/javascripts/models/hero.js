Superhero.Models.Hero = Backbone.Model.extend({
	urlRoot: "api/heroes",

	parse: function (response) {
		if (response.sightings) {
			this.sightings = new Superhero.Collections.Sightings(response.sightings);
			delete response.sightings;
		}
		return response;
	}

});
