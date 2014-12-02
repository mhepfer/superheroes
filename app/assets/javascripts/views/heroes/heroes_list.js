Superhero.Views.HeroesList = Backbone.View.extend({

  template: JST['heros/list'],

  initialize: function() {
  	this.listenTo(Superhero.Collections.heroes, "sync", this.render)
  },

  events:{
    "change select": "filterMarkers"
  },

  render: function() {
  	var newTemplate = this.template({ heroes: Superhero.Collections.heroes });
  	this.$el.html(newTemplate);
  	return this
  },

  filterMarkers: function() {
  	console.log("change heard")

  	this.selection = $('#heroPicker').val();
    this.selection = parseInt( this.selection )

    var that = this

    if(this.selection !== "All"){
      _.each( gMarkers, function(gMarker) {
        if(gMarker.heroId === that.selection){
          gMarker.setVisible(true);
        } else {
          gMarker.setVisible(false);
        }
      })
    } else {
      _.each( gMarkers, function(gMarker) {
        gMarker.setVisible(true);
      })
    }
  }

});