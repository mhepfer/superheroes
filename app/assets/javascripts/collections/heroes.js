Superhero.Collections.Heroes = Backbone.Collection.extend({
	url: "api/heroes",
  model: Superhero.Models.Hero

});

if (!Superhero.Collections.heroes) {
  Superhero.Collections.heroes = new Superhero.Collections.Heroes();
  Superhero.Collections.heroes.fetch();
}