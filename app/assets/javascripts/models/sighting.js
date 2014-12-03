Superhero.Models.Sighting = Backbone.Model.extend({
	urlRoot: "api/sightings",
	
	initialize: function(){
		this.visible = true;
	},

	parse: function (response) {
		if (response.superhero) {
			this.superhero = new Superhero.Models.Hero(response.superhero);
			delete response.superhero;
		}
		return response;
	}
});