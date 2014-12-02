Superhero.Routers.Router = Backbone.Router.extend({

	initialize: function(options) {
		this.$rootEl = options.$rootEl;
		this.$formEl = options.$formEl;
		this.sightings = new Superhero.Collections.Sightings()
	},

	routes:{
		"":"newMap",
		"sightings/new": "newSighting"
	},

	newMap: function(callback) {
		this.sightings.fetch()
		this._mapView = new Superhero.Views.MapsIndex({ 
			collection: this.sightings
		})
		this._swapView(this._mapView)

		this.map = this._mapView.initialize_map();
		new Superhero.Views.MapsIndexItems({ 
			collection: this.sightings,
			model: this.map 
		})

		callback && callback();
	},

	newSighting: function(queryData) {
		if (!this._mapView) {
			this.newMap(this.newSighting.bind(this));
			return;
		}

		this.sighting = new Superhero.Models.Sighting()
		this.sightings.fetch()

		var sightingView = new Superhero.Views.SightingForm({ 
			model: this.sighting, 
			collection: this.sightings
		})

			// heroes: this.heroes
		this.$formEl.html(sightingView.render().$el);
	},

	_swapView: function(view){
		if(this.currentView){
			this.currentView.remove()
			this.$formEl.empty()
		}
		this.$rootEl.html(view.render().$el)
		this.currentView = view
	},

});
