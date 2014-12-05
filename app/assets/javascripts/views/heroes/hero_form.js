Superhero.Views.HeroForm = Backbone.View.extend({
	tagName: 'form',

	initialize: function(options) {
		this.model = options.model,
		this.heroes = Superhero.Collections.heroes
		this.listenTo(this.model, "change", this.render)
	},

	template: JST["heros/form"],

	events: {
		"click #createSighting": "submit",
		"click .hero-back-link": 'closeForm',
		"click #filepicker-button": 'openFilePicker'
	},

	closeForm: function(event){
		event.preventDefault();
		Backbone.history.navigate("#", {trigger: false});
		this.remove();
	},

	render: function() {
		var renderedContent = this.template({ 
			hero: this.model, 
			heroes: this.heroes 
		})
		this.$el.html(renderedContent)
		return this
	},

	openFilePicker: function(event) {
		var that = this
		event.preventDefault()
		filepicker.pick(
		  function(Blob){
		    console.log(Blob.url);
		    that.model.set('filepicker_url_icon', Blob.url)
		  }
		);
	},


	submit: function(event) {
		event.preventDefault();
		var attrs = this.$el.serializeJSON();
		this.model.set(attrs);

		function success() {
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
									 that.heroes.add(that.model);
									},
					error: errors.bind(this)
				}
		  )
		} else {
			this.model.save({}, { success: success })
		}
	}
})