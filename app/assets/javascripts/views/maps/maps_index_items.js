Superhero.Views.MapsIndexItems = Backbone.View.extend({

	template: JST['maps/indexItem'],

	initialize: function(){
		this.map = this.model
		this.markers = this.collection
		this.listenTo(this.collection, "sync", this.placeMarkers)
    this.addListener();
    // this.listenTo(this.collection, "add", this.placeMarker)
	},

  placeMarkers: function() {
  	var that = this;

  // Loop through our markers & place each one on the map  
  	this.markers.each( function(marker) {

      this.placeMarker(marker);
        
  	}.bind(this))
 	},

  placeMarker: function(marker){
    var that = this;
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
  },

  addListener: function() {
    var that = this

    google.maps.event.addListener(that.map, 'click', function(event) {
      var lat = event.latLng.lat(); //Function to extract latitude
      var longitude = event.latLng.lng(); //Function to extract longitude
      var position = new google.maps.LatLng(lat, longitude)
      if(!this.gMarker){
        this.gMarker = new google.maps.Marker({
          position: position,
          map: that.map,
        });
      } else {
        this.gMarker.setPosition(position)
      }
      if(that.map.zoom < 6){
        that.map.setZoom(6);
      }
      that.map.setCenter(position);

      // that.map.addOverlay(gMarker); //adding the marker to the map
      //JQuery function to assign the lat and long to the values of textboxes.
      $('#latitude').val(lat);
      $('#longitude').val(longitude);
    })
  }

})