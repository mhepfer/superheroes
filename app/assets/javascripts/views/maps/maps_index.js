Superhero.Views.MapsIndex = Backbone.View.extend({

  template: JST['maps/index'],

  initialize: function() {
  	this.sightings = this.collection
  },

  render: function() {
  	var newTemplate = this.template();
  	this.$el.html(newTemplate);
  	return this
  },

  initialize_map: function() {
  	var center = new google.maps.LatLng(42.909022, -85.763293);
  	var styles = [{ 
  		elementType: "geometry", 
  		stylers: [ 
  			{ lightness: 33 },
  			{ saturation: -90 }
  		]
  	}]

  	var mapOptions = {
  		zoom: 9,
  		mapTypeId: google.maps.MapTypeId.ROADMAP,
  		center: center,
  		styles: styles
  	}

  	this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions)
  	
  	for (var i = 0; i < this.sightings.length; i++) {
  		console.log(this.sightings[i])
  	};

  	return this.map
  }

});
