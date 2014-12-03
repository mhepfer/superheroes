Superhero.Views.MapsIndexItems = Backbone.View.extend({

	template: JST['maps/indexItem'],

	initialize: function(){
		this.map = this.model
		this.markers = this.collection
    this.addListener();
    this.$footer = window.$(footer)
    this.listenTo(this.collection, "add", this.placeMarker);
    this.listenTo(this.collection, "visibilityChanged", this.updateVisibleMarkers);
    gMarkers = []
    this.placeMarkers(this.markers);
	},

  //iterate through entire collection, update visibility of markers for sightings
  updateVisibleMarkers: function(){
    // alert('updating visibility');
    gMarkers.forEach(function(gMarker){
      var sightingForMarker = this.collection.get(gMarker.sightingId);
      gMarker.setVisible(sightingForMarker.visible());
    }.bind(this))
  },

  placeMarkers: function(selectedMarkers) {

  	var that = this; 
  	this.markers.each( function(marker) {
      this.placeMarker(marker);  
  	}.bind(this))
 	},

  placeMarker: function(marker){

    var that = this;
    var lat = marker.get('latitude')
    var longitude = marker.get('longitude')
    var heroId = marker.get('heroId')
    var icons = {
      1: {icon: "http://www.officialavengerscostumes.com/~/media/products/oc/captain-america-costumes/captain-america-costume-accessories/8818346-captain-america-shield-000.ashx?w=50&h=50&bc=ffffff"},
      2: {icon: "http://seeclickfix.com/files/user_images/0000/1525/Batman_logo_small_square.jpg"},
      3: {icon: "http://www.creativecrash.com/system/photos/000/078/191/78191/activity/superman-logo-t-shirt-logo.gif?1264253040"},
      4: {icon: "http://www.adiumxtras.com/images/thumbs/the_flash_duck_1_16711_6170_thumb.png"},
      5: {icon: "http://wscont2.apps.microsoft.com/winstore/1x/7ddfab4e-0dbc-476d-9dea-43abaa936af4/Icon.343718.png"}
    }

    var position = new google.maps.LatLng(lat, longitude);
    var gMarker = new google.maps.Marker({
      position: position,
      map: that.map,
      heroId: heroId,
      sightingId: marker.id,
      icon: icons[marker.get('heroId')].icon
    });

    gMarkers.push(gMarker);

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