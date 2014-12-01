Superhero.Views.MapsIndex = Backbone.View.extend({

  template: JST['maps/index'],

  initialize: function() {
  	this.sightings = this.collection
    this.$rootEl = this.$root
  },

  events: {
   "click .showForm": "newSighting"
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
  	
  	for (var i = 0; i < this.sightings.length; i++) {
  		console.log(this.sightings[i])
  	};

    // Create the search box and link it to the UI element.
    // var input = /** @type {HTMLInputElement} */(
    //     document.getElementById('pac-input'));
    // this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // var searchBox = new google.maps.places.SearchBox(
    //   /** @type {HTMLInputElement} */(input));

    // Listen for the event fired when the user selects an item from the
    // pick list. Retrieve the matching places for that item.

    // google.maps.event.addListener(searchBox, 'places_changed', function() {
    //   var places = searchBox.getPlaces();

    //   if (places.length == 0) {
    //     return;
    //   }
    //   for (var i = 0, marker; marker = markers[i]; i++) {
    //     marker.setMap(null);
    //   }

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

  // newSighting: function() {
  //  this.sighting = new Superhero.Models.Sighting()
  //  this.sightings.fetch()
  //  var sightingView = new Superhero.Views.SightingForm({ 
  //    model: this.sighting, 
  //    collection: this.sightings
  //  })
  //  this.$el.append(sightingView.render().$el)
  // },

});
