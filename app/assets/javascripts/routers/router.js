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
		var mapView = new Superhero.Views.MapsIndex({ collection: this.heroes })
		this._swapView(mapView)
		mapView.initialize_map();
	},

	_swapView: function(view){
		if(this.currentView){
			this.currentView.remove()
		}
		this.$rootEl.html(view.render().$el)
		this.currentView = view
	}

});
