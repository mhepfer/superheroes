Superhero.Views.MapsIndex = Backbone.View.extend({

  template: JST['maps/index'],

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
  	var infoWindow = new google.maps.InfoWindow(), marker, i;
  
  // Loop through our array of markers & place each one on the map  
  	for( i = 0; i < this.markers.length; i++ ) {
      var position = new google.maps.LatLng(this.markers[i][1], this.markers[i][2]);
        marker = new google.maps.Marker({
          position: position,
          map: this.map,
          title: this.markers[i][0]
        });
  		}
 		}

 		// // Allow each marker to have an info window
	  // google.maps.event.addListener(marker, 'click', (function(marker, i) {
	  //   return function() {
	  //       infoWindow.setContent(infoWindowContent[i][0]);
	  //       infoWindow.open(map, marker);
	  //   }
	  // })(marker, i));


    // // Info Window Content
    // var infoWindowContent = [
    //     ['<div class="info_content">' +
    //     '<h3>London Eye</h3>' +
    //     '<p>The London Eye is a giant Ferris wheel situated on the banks of the River Thames. The entire structure is 135 metres (443 ft) tall and the wheel has a diameter of 120 metres (394 ft).</p>' +        '</div>'],
    //     ['<div class="info_content">' +
    //     '<h3>Palace of Westminster</h3>' +
    //     '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
    //     '</div>']
    // ];

});
