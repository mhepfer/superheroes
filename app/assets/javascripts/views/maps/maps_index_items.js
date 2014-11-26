Superhero.Views.MapsIndexItems = Backbone.View.extend({

	template: JST['maps/indexItem'],

	initialize: function(){
		this.map = this.model
		this.markers = this.collection
		this.addPins()
	},

	addPins: function() {
  	this.createMarkers();
  	this.placeMarkers();
	},

	createMarkers: function() {
  	this.markers = [
      ['London Eye, London', 51.503454,-0.119562],
      ['Palace of Westminster, London', 51.499633,-0.124755]
  	];
  },

  placeMarkers: function() {

  // Loop through our array of markers & place each one on the map  
  	for( i = 0; i < this.markers.length; i++ ) {
      var position = new google.maps.LatLng(this.markers[i][1], this.markers[i][2]);
        var marker = new google.maps.Marker({
          position: position,
          map: this.map,
          title: this.markers[i][0]
        });
        
        this.createWindowContent(marker, i)

        google.maps.event.addListener(marker, 'click', function() {
    			this.infoWindow.open(this.map, marker);
  			}.bind(this));
  		}
 	},

 	createWindowContent: function( marker ) {
 		var content = this.template({ marker: marker })
 		this.infoWindow = new google.maps.InfoWindow({ content: content });
 	},


})