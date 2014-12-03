Superhero.Views.HeroesList = Backbone.View.extend({

  template: JST['heros/list'],

  initialize: function() {
  	this.listenTo(Superhero.Collections.heroes, "sync", this.render);
    this.listenTo(this.collection, "sync", this.filterMarkers)
  },

  events:{
    "change select": "filterMarkers"
  },

  render: function() {
  	var newTemplate = this.template({ 
      heroes: Superhero.Collections.heroes 
    });
  	this.$el.html(newTemplate);
  	return this
  },

  updateVisibility: function(sighting){
    if(this.selection === "All"){
      sighting.selectedHero = true
    } else {
      sighting.selectedHero = sighting.get('heroId') == this.selection;
    }
  },

  filterMarkers: function() {
    // console.log('triggered change select');

    //get the new visible hero id
    this.selection = this.$('select').val();
    //update visibility for each sighting
    this.collection.each(this.updateVisibility.bind(this))
    //trigger visibility event so interested parties can update their display
    this.collection.trigger("visibilityChanged");
  }

});