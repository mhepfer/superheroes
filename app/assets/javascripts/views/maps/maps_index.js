Superhero.Views.MapsIndex = Backbone.View.extend({

  template: JST['maps/index'],

  initialize: function() {
  	this.sightings = this.collection;
  },
  
  render: function() {
  	var newTemplate = this.template();
  	this.$el.html(newTemplate);
  	return this
  },

  initializeMap: function() {
  	var center = new google.maps.LatLng(34, -41);

  	var mapOptions = {
  		zoom: 2,
  		mapTypeId: google.maps.MapTypeId.ROADMAP,
  		center: center,
  		styles: MAP_STYLE
  	}

  	this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions)
    google.maps.event.addListener(this.map, 'idle', this.updateVisibility.bind(this) );

    return this.map
  },

  //iterate through all sightings
  //updating their 'onMap' property
  updateVisibility: function(){
    var that = this;
    var bounds = this.map.getBounds();
    this.sightings.each( function(sighting){ 
      var latitude = sighting.get('latitude');
      var longitude = sighting.get('longitude');
      var position = new google.maps.LatLng(latitude, longitude);

      sighting.onMap = bounds.contains(position);
    });
    this.sightings.trigger('visibilityChanged');
  },

});
