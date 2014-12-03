Superhero.Views.SightingForm = Backbone.View.extend({
	tagName: 'form',

	initialize: function(options) {
		this.model = options.model,
		this.collection = options.collection
		this.listenTo(Superhero.Collections.heroes, "sync", this.render)
	},

	template: JST["sightings/form"],

	events: {
		"click button": "submit",
		"click .back-link": 'closeForm'
	},

	closeForm: function(event){
		event.preventDefault();
		Backbone.history.navigate("#", {trigger: false});
		this.remove();
	},

	render: function() {
		var renderedContent = this.template({ 
			sighting: this.model, 
			heroes: Superhero.Collections.heroes 
		})
		// this.addSearchBox()
		this.$el.html(renderedContent)
		return this
	},



  addSearchBox: function() {
    var that = this
    // Create the search box and link it to the UI element.
	  var input = /** @type {HTMLInputElement} */(
	      document.getElementById('pac-input'));
	  this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

	  var searchBox = new google.maps.places.SearchBox(
	    /** @type {HTMLInputElement} */(input));

	  // [START region_getplaces]
	  // Listen for the event fired when the user selects an item from the
	  // pick list. Retrieve the matching places for that item.
	  google.maps.event.addListener(searchBox, 'places_changed', function() {
	    var places = searchBox.getPlaces();

	    if (places.length == 0) {
	      return;
	    }
	    for (var i = 0, marker; marker = markers[i]; i++) {
	      marker.setMap(null);
	    }

	    // For each place, get the icon, place name, and location.
	    markers = [];
	    var bounds = new google.maps.LatLngBounds();
	    for (var i = 0, place; place = places[i]; i++) {
	      var image = {
	        url: place.icon,
	        size: new google.maps.Size(71, 71),
	        origin: new google.maps.Point(0, 0),
	        anchor: new google.maps.Point(17, 34),
	        scaledSize: new google.maps.Size(25, 25)
	      };

	      // Create a marker for each place.
	      var marker = new google.maps.Marker({
	        map: map,
	        icon: image,
	        title: place.name,
	        position: place.geometry.location
	      });

	      markers.push(marker);

	      bounds.extend(place.geometry.location);
	    }

	    map.fitBounds(bounds);
	  });
	  // [END region_getplaces]

	  // Bias the SearchBox results towards places that are within the bounds of the
	  // current map's viewport.
	  google.maps.event.addListener(this.map, 'bounds_changed', function() {
	    var bounds = that.map.getBounds();
	    searchBox.setBounds(bounds);
	  });

  },


	submit: function(event) {
		event.preventDefault();
		var attrs = this.$el.serializeJSON();
		this.model.set(attrs);

		function success() {
			console.log('success')
			Backbone.history.navigate( "", { trigger: false })
			that.remove();
		}

		function errors (model, response) {

			$('.errors').empty();
			_.each( response.responseJSON, function(error) {
				var li = $('<li></li>')
				li.html(error);
				$('.errors').append(li);
			})
		}

		var that = this;
		if(this.model.isNew()){
			this.model.save({}, 
				{ 
					success: function(model){
									 success(); 
									 that.collection.add(model);
									},
					error: errors.bind(this)
				}
		  )
		} else {
			this.model.save({}, { success: success })
		}
	}
})