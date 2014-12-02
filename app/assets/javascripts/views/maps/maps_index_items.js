Superhero.Views.MapsIndexItems = Backbone.View.extend({

	template: JST['maps/indexItem'],

	initialize: function(){
		this.map = this.model
		this.markers = this.collection
    this.addListener();
    this.$footer = window.$(footer)
    this.listenTo(this.collection, "add", this.placeMarker);
    this.placeMarkers();

	},

  filterMarkers: function() {
    this.selection = $('#hero-picker').val();

    if(this.selection !== "All"){
      this.markers.each( function(marker) {
        if(marker.attributes.heroId === this.selection){
          marker.setVisible(true);
        } else {
          marker.setVisible(false);
        }
      })
    }
  },

  placeMarkers: function(selectedMarkers) {

  	var that = this;

  // Loop through our markers & place each one on the map  
  	this.markers.each( function(marker) {

      this.placeMarker(marker);
        
  	}.bind(this))
 	},

  placeMarker: function(marker){
    console.log('placingMarker')
    var that = this;
    var lat = marker.get('latitude')
    var longitude = marker.get('longitude')
    var heroId = marker.get('heroId')

    var position = new google.maps.LatLng(lat, longitude);
    var gMarker = new google.maps.Marker({
      position: position,
      map: that.map,
      heroId: heroId
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
      Backbone.history.navigate( "/sightings/new", { trigger: true })
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