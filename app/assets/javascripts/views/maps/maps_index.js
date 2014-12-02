Superhero.Views.MapsIndex = Backbone.View.extend({

  template: JST['maps/index'],

  initialize: function() {
  	this.sightings = this.collection
    if (!Superhero.Collections.heroes) {
      Superhero.Collections.heroes = new Superhero.Collections.Heroes();
      Superhero.Collections.heroes.fetch();
    }
  },
  
  render: function() {
  	var newTemplate = this.template();
  	this.$el.html(newTemplate);
  	return this
  },

  initialize_map: function() {
  	var center = new google.maps.LatLng(34, -41);
  	var styles = this.createStyles()

  	var mapOptions = {
  		zoom: 2,
  		mapTypeId: google.maps.MapTypeId.ROADMAP,
  		center: center,
  		styles: styles
  	}

  	this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions)

    var that = this

    google.maps.event.addListener(that.map, 'click', function(event) {
      var lat = event.latLng.lat(); //Function to extract latitude
      var longitude = event.latLng.lng(); //Function to extract longitude
      var position = new google.maps.LatLng(lat, longitude)

      var gMarker = new google.maps.Marker({
        position: position,
        map: that.map,
      });

      that.map.addOverlay(gMarker); //adding the marker to the map
      //JQuery function to assign the lat and long to the values of textboxes.
      $('#latitude').val(lat);
      $('#longitude').val(longitude);
    })

    return this.map
  },

  createStyles: function() {
    return  [
  {
    "featureType": "landscape",
    "stylers": [
      { "color": "#08304b" },
    ]
  },
  {
    "featureType": "road.highway",
    "stylers": [
      { "hue": "#00FEFF" },
      { "saturation": -33.33333333333334 },
      { "lightness": 41.400000000000006 },
      { "gamma": 1 }
    ]
  },
  {
    "featureType": "road.arterial",
    "stylers": [
      { "color": "#000000" }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      { "hue": "#00FEFF" },
      { "saturation": -53.84615384615387 },
      { "lightness": -34.66666666666667 },
      { "gamma": 1 }
    ]
  },
  {
    "featureType": "water",
    "stylers": [
      { "color": "#364C5A" },
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      { "color":"36150A" }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#000000" }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#144b53" },
      { "lightness": 14 },
      { "weight": 1.4 }
    ]
  }
  
  ]

  },

});
