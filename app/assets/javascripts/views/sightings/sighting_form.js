Superhero.Views.SightingForm = Backbone.View.extend({
	tagName: 'form',

	template: JST["sightings/form"],

	events: {
		"click button": "submit"
	},

	render: function() {
		var renderedContent = this.template({ sighting: this.model })
		this.$el.html(renderedContent)
		return this
	},

	submit: function(event) {
		event.preventDefault();
		var attrs = this.$el.serializeJSON();
		this.model.set(attrs);

		function success() {
			Backbone.history.navigate( "", { trigger: true })
		}

		if(this.model.isNew()){
			this.collection.create(this.model, { success: success })
		} else {
			this.model.save({}, { success: success })
		}
		//remove form from page...?
	}
})