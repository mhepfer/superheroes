Superhero.Views.SightingsIndex = Backbone.View.extend({

	initialize: function() {
		this.map = this.model
		this.sightings = this.collection
		//move to map land
		google.maps.event.addListener(this.map, 'idle', this.render.bind(this) );
		this.listenTo(this.collection, 'sync visibilityChanged', this.render)
		// this.listenTo(this.collection, "visibilityChanged", this.updateVisibleSightings)
	},
	//only show models that are 'visible' in the index
	updateVisibleSightings: function(){
	},

	//for list of markers which runs down the left of the map - displays marker info for points which are currently visible on the map
  template: JST['sightings/index'],

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
			// var latitude = sighting.get('latitude')
   //  	var longitude = sighting.get('longitude')
		 //  var position = new google.maps.LatLng(latitude, longitude);
			
			// if((that.map.getBounds().contains(position)) && that.isVisible(sighting)){
			// 	visibleSightings.push(sighting)
			// }
			if(sighting.visible()){
				visibleSightings.push(sighting);
			}
		})

		return visibleSightings
	},

	// isVisible: function(sighting) {
	// 	var selection = $('#heroPicker').val();

	// 	if ( selection === "All"){
	// 		return true
	// 	} else if ( parseInt( selection ) === sighting.get( 'heroId' )){
	// 		return true
	// 	} 
	// 	return false
	// }

});
