Superhero.Routers.Router = Backbone.Router.extend({

	initialize: function(options) {
		this.$rootEl = options.$rootEl;
		this.$formEl = options.$formEl;
		this.$filterEl = options.$filterEl;
		this.$sightingsEl = options.$sightingsEl;
		this.$heroEl = options.$heroEl;
		this.$heroFormEl = options.$heroFormEl;
		this.sightings = new Superhero.Collections.Sightings()

		this.addHeroList()
	},

	routes:{
		"":"newMap",
		"heroes/new": "newHero",
		"sightings/new": "newSighting",
		"sightings/index": "sightingsIndex",
		"heroes/:id": "heroShow"
	},

	newMap: function(callback) {
		this.sightings.fetch()
		this._mapView = new Superhero.Views.MapsIndex({ 
			collection: this.sightings
		})
		this._swapView(this._mapView);
		this._mapView.initializeMap();
		this.map = this._mapView.map;
		new Superhero.Views.MapsIndexItems({ 
			collection: this.sightings,
			map: this.map 
		})

		callback && callback();
	},

	newSighting: function() {
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

		this.$formEl.html(sightingView.render().$el);
	},

	newHero: function() {
		if (!this._mapView) {
			this.newMap(this.newHero.bind(this));
			return;
		}
		this.hero = new Superhero.Models.Hero()
		var heroFormView = new Superhero.Views.HeroForm({
			model: this.hero
		})

		this.$heroFormEl.html(heroFormView.render().$el)
	},

	sightingsIndex: function() {
		if (!this._mapView) {
			this.newMap(this.sightingsIndex.bind(this));
			return;
		}

		var sightingsView = new Superhero.Views.SightingsIndex({ 
			model: this.map,
			collection: this.sightings
	  })
		this.$sightingsEl.html(sightingsView.render().$el);
	},

	addHeroList: function() {
		var heroListView = new Superhero.Views.HeroesList({
			collection: this.sightings
		})
		this.$filterEl.html(heroListView.render().$el)
	},

	heroShow: function(id) {
		if (!this._mapView) {
			this.newMap(this.heroShow.bind(this, id));
			return;
		}
		var hero = Superhero.Collections.heroes.getOrFetch(id);
		var heroView = new Superhero.Views.HeroShow({ 
			model: hero,
			collection: this.sightings
	 	})
	 	this.$heroEl.html(heroView.render().$el)
	},

	_swapView: function(view){
		if(this.currentView){
			this.currentView.remove()
		}
		this.$rootEl.html(view.render().$el)
		this.currentView = view
	},

});
