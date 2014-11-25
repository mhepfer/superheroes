Superhero.Views.MapsIndex = Backbone.View.extend({

  template: JST['maps/index'],

  render: function() {
  	var newTemplate = this.template()
  	this.$el.html(newTemplate)
  	return this
  }

});
