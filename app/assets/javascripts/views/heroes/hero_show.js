Superhero.Views.HeroShow = Backbone.View.extend({
	template: JST['heros/show'],

	initialize: function () {
		this.listenTo(this.model, 'sync', this.render);
	},

	events: {
			"click .close-hero-show": 'closeForm'
	},

	closeForm: function(event){
		event.preventDefault();
		Backbone.history.navigate("#", {trigger: false});
		this.remove();
	},

	render: function() {
		var heroSightings = this.model.sightings
		var renderedContent = this.template({ 
			hero: this.model,
			sightings: heroSightings
	  })
  	this.$el.html(renderedContent)
  	return this
	},

})
