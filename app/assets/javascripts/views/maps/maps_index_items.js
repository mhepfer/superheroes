Superhero.Views.MapsIndexItems = Backbone.View.extend({

	template: JST['maps/indexItem'],

	initialize: function(options){
		this.map = options.map;
		this.markers = this.collection
    this.addListener();
    this.listenTo(this.collection, "add", this.placeMarker);
    this.listenTo(this.collection, "visibilityChanged", this.updateVisibleMarkers);
    this.gMarkers = []
    this.placeMarkers(this.markers);
	},

  //iterate through entire collection, update visibility of markers for sightings
  updateVisibleMarkers: function(){
    // alert('updating visibility');
    this.gMarkers.forEach(function(gMarker){
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

    var url = marker.superhero.get('filepicker_url_icon')

    if(url === null){
      url = 'http://www.officialavengerscostumes.com/~/media/products/oc/captain-america-costumes/captain-america-costume-accessories/8818346-captain-america-shield-000.ashx?w=50&h=50&bc=ffffff'
    }

    var icon = {
            url: url, //url
            scaledSize: new google.maps.Size(40, 40), // size
            origin: new google.maps.Point(0,0), // origin
            // anchor: new google.maps.Point(anchor_left, anchor_top)
            } //anchor 

    var position = new google.maps.LatLng(lat, longitude);
    var gMarker = new google.maps.Marker({
      position: position,
      map: that.map,
      heroId: heroId,
      sightingId: marker.id,
      icon: icon
    });

    this.gMarkers.push(gMarker);

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