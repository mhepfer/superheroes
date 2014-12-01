Superhero.Routers.Router = Backbone.Router.extend({

	initialize: function(options) {
		this.$rootEl = options.$rootEl
		this.sightings = new Superhero.Collections.Sightings()
		this.heroes = new Superhero.Collections.Heroes()
	},

	routes:{
		"":"newMap",
		"sightings/new": "newSighting"
	},

	newMap: function() {
		this.sightings.fetch()
		var mapView = new Superhero.Views.MapsIndex({ 
			collection: this.sightings
		})
		this._swapView(mapView)
		this.map = mapView.initialize_map();
		new Superhero.Views.MapsIndexItems({ 
			collection: this.sightings,
			model: this.map 
		})

		// this.newSighting()
	},

	newSighting: function() {
		this.sighting = new Superhero.Models.Sighting()
		this.sightings.fetch()
		var sightingView = new Superhero.Views.SightingForm({ 
			model: this.sighting, 
			collection: this.sightings
		})
		this.$rootEl.append(sightingView.render().$el)
	},

	_swapView: function(view){
		if(this.currentView){
			this.currentView.remove()
		}
		this.$rootEl.html(view.render().$el)
		this.currentView = view
	},

});
