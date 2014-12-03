Superhero.Views.SightingsIndex = Backbone.View.extend({

	initialize: function() {
		this.map = this.model
		this.sightings = this.collection
		//move to map land
		google.maps.event.addListener(this.map, 'idle', this.render.bind(this) );
		this.listenTo(this.collection, 'sync visibilityChanged', this.render)
	},
	//for list of markers which runs down the left of the map - displays marker info for points which are currently visible on the map
  template: JST['sightings/index'],

  events: {
  	"click .index-back-link": 'closeIndex'
  },

  closeIndex: function(event){
    event.preventDefault();
    Backbone.history.navigate("#", {trigger: false});
    this.remove();
  },

  render: function() {
  	var visibleSightings = this.getSightings()
		var renderedContent = this.template({ sightings: visibleSightings })
		this.$el.html(renderedContent)
		return this
	},

	getSightings: function() {
		var that = this
		var visibleSightings = []
		
		this.sightings.each( function(sighting){ 
			if(sighting.visible()){
				visibleSightings.push(sighting);
			}
		})

		return visibleSightings
	},
});
