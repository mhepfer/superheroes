Superhero.Collections.Heroes = Backbone.Collection.extend({
	url: "api/heroes",
  model: Superhero.Models.Hero,

  getOrFetch: function(id) {
  	var hero = this.get(id)
  	var heroes = this
  	if(!hero){
  		hero = new Superhero.Models.Hero({ id: id })
  		hero.fetch({
  			success: function(){
  				heroes.add(hero)
  			}
  		})
  	} else {
  		hero.fetch()
  	}

  	return hero
  }


});

  Superhero.Collections.heroes = new Superhero.Collections.Heroes();
  Superhero.Collections.heroes.fetch();
