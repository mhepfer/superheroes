Superhero.Views.HeroesList = Backbone.View.extend({

  template: JST['heros/list'],

  initialize: function() {
  	this.listenTo(Superhero.Collections.heroes, "sync", this.render)
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
    sighting.selectedHero = sighting.get('heroId') == this.selection;
  },

  filterMarkers: function() {
    // console.log('triggered change select');

    //get the new visible hero id
    this.selection = $('#heroPicker').val();
    //update visibility for each sighting
    this.collection.each(this.updateVisibility.bind(this))
    //trigger visibility event so interested parties can update their display
    this.collection.trigger("visibilityChanged");

    // var that = this
    // if(this.selection !== "All"){
    // 	this.selection = parseInt( this.selection )
    //   _.each( gMarkers, function(gMarker) {
    //     if(gMarker.heroId === that.selection){
    //       gMarker.setVisible(true);
    //     } else {
    //       gMarker.setVisible(false);
    //     }
    //   })
    // } else {
    //   _.each( gMarkers, function(gMarker) {
    //     gMarker.setVisible(true);
    //   })
    // }
  }

});