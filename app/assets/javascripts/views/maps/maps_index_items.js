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
  	// this.createWindowContent();
  	// this.infoWindow = new google.maps.InfoWindow({ content: this.contentString });

  // Loop through our array of markers & place each one on the map  
  	for( i = 0; i < this.markers.length; i++ ) {
      var position = new google.maps.LatLng(this.markers[i][1], this.markers[i][2]);
        marker = new google.maps.Marker({
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

 	createWindowContent: function( marker, i ) {
 		var content = this.template({ marker: marker, counter: i })
 		this.infoWindow = new google.maps.InfoWindow({ content: content });
 	},

 	// createWindowContent: function() {
 	// 	this.contentString ='<div class="info_content">' +
  //     '<h3>London Eye</h3>' +
  //     '<p>The London Eye is a giant Ferris wheel situated on the banks of the River Thames. The entire structure is 135 metres (443 ft) tall and the wheel has a diameter of 120 metres (394 ft).</p>' + '</div>'
  //     '<div class="info_content">' +
  //     '<h3>Palace of Westminster</h3>' +
  //     '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
  //     '</div>'
 	// },



})