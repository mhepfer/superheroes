Superhero.Collections.Heroes = Backbone.Collection.extend({
	url: "api/heroes",
  model: Superhero.Models.Hero

});

  Superhero.Collections.heroes = new Superhero.Collections.Heroes();
  Superhero.Collections.heroes.fetch();
