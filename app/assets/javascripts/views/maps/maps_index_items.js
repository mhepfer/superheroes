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
  		//wishlist- marker.get('latitude'), marker.get('longitude')
      var position = new google.maps.LatLng(pos[0], pos[1]);
        var gMarker = new google.maps.Marker({
          position: position,
          map: that.map,
        });

        that.content = that.template({ marker: marker })
        that.infoWindow = new google.maps.InfoWindow({ content: that.content })

        google.maps.event.addListener(gMarker, 'click', function() {
        	console.log("click!")
        	console.log(gMarker)
          that.infoWindow.open(that.map, gMarker);
    		});
        
  		})
 	},


})