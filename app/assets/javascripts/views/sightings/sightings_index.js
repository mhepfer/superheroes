Superhero.Views.SightingsIndex = Backbone.View.extend({

	initialize: function() {
		this.map = this.model
		this.sightings = this.collection
		google.maps.event.addListener(this.map, 'bounds_changed', this.render.bind(this) );
		this.listenTo(this.collection, 'sync', this.render)
	},

	//for list of markers which runs down the left of the map - displays marker info for points which are currently visible on the map
  template: JST['sightings/index'],

  render: function() {
  	console.log("render")
  	var visibleSightings = this.getSightings()
		var renderedContent = this.template({ sightings: visibleSightings })
		this.$el.html(renderedContent)
		return this
	},

	getSightings: function() {
		var that = this
		var visibleSightings = []

		this.sightings.each( function(sighting){ 
			var latitude = sighting.get('latitude')
    	var longitude = sighting.get('longitude')
		  var position = new google.maps.LatLng(latitude, longitude);
			
			if((that.map.getBounds().contains(position)) && that.isVisible(sighting)){
				visibleSightings.push(sighting)
			}
		})

		return visibleSightings
	},

	isVisible: function(sighting) {
		var selection = $('#heroPicker').val();

		if ( selection === "All"){
			return true
		} else if ( parseInt( selection ) === sighting.get( 'heroId' )){
			return true
		} 
		return false
	}

});
