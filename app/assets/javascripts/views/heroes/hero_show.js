Superhero.Views.HeroShow = Backbone.View.extend({
	template: JST['heros/show'],

	events: {
			"click .close-hero-show": 'closeForm'
	},

	closeForm: function(event){
		event.preventDefault();
		Backbone.history.navigate("#", {trigger: false});
		this.remove();
	},

	render: function() {
		var heroSightings = this.model.sightings.attributes
		var renderedContent = this.template({ 
			hero: this.model,
			sightings: heroSightings
	  })
  	this.$el.html(renderedContent)
  	return this
	},

})
