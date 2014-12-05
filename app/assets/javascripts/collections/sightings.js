Superhero.Collections.Sightings = Backbone.Collection.extend({
	url: "api/sightings",
	
  model: Superhero.Models.Sighting,

  comparator: function(sighting) {
  	return sighting.get('time');
  }

});
