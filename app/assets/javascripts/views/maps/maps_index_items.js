Superhero.Views.MapsIndexItems = Backbone.View.extend({

	template: JST['maps/indexItem'],

	initialize: function(){
		this.map = this.model
		this.markers = this.collection
		this.listenTo(this.collection, "sync", this.placeMarkers)
    // this.listenTo(this.collection, "add", this.placeMarker)
	},

  placeMarkers: function(markers) {
  	var that = this;

  // Loop through our markers & place each one on the map  
  	this.markers.each( function(marker) {

      this.placeMarker(marker);
        
  	}.bind(this))
 	},

  placeMarker: function(marker){
    var that = this;
    console.log(marker)
    var lat = marker.get('latitude')
    var longitude = marker.get('longitude')

    var position = new google.maps.LatLng(lat, longitude);
    var gMarker = new google.maps.Marker({
      position: position,
      map: that.map,
    });

    that.content = that.template({ marker: marker })

    gMarker.info = new google.maps.InfoWindow({ content: that.content })

    google.maps.event.addListener(gMarker, 'click', function() {
      gMarker.info.open(that.map, gMarker);
    });
  }

})