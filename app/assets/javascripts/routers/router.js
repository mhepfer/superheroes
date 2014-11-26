Superhero.Routers.Router = Backbone.Router.extend({

	initialize: function(options) {
		this.$rootEl = options.$rootEl
		this.sightings = new Superhero.Collections.Sightings()
		this.heroes = new Superhero.Collections.Heroes()
	},

	routes:{
		"":"newMap"
	},

	newMap: function() {
		this.sightings.fetch()
		var mapView = new Superhero.Views.MapsIndex({ collection: this.sightings })
		this._swapView(mapView)
		mapView.initialize_map();
		console.log(this.sightings)
	},

	_swapView: function(view){
		if(this.currentView){
			this.currentView.remove()
		}
		this.$rootEl.html(view.render().$el)
		this.currentView = view
	}

});