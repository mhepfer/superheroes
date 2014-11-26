Superhero.Views.MapsIndexItems = Backbone.View.extend({

	template: JST['maps/indexItem'],

	initialize: function(){
		this.map = this.model
		this.markers = this.collection
		this.listenTo(this.collection, "sync", this.placeMarkers)
	},

  placeMarkers: function(markers) {

  	var that = this;

  // Loop through our markers & place each one on the map  
  	this.markers.each( function(marker) {
  		var pos = marker.get('location')
  		pos = pos.substring(1, pos.length - 1)
  		pos = pos.split(",")
      var position = new google.maps.LatLng(pos[0], pos[1]);
        var gmarker = new google.maps.Marker({
          position: position,
          map: that.map,
        });
        
        that.createWindowContent(marker)

        google.maps.event.addListener(gmarker, 'click', function() {
    			that.infoWindow.open(this.map, gmarker);
  			});
  		})
 	},

 	createWindowContent: function( marker ) {
 		var content = this.template({ marker: marker })
 		this.infoWindow = new google.maps.InfoWindow({ content: content });
 	},


})