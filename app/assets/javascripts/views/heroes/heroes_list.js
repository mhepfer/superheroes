Superhero.Views.HeroesList = Backbone.View.extend({

  template: JST['heros/list'],

  render: function() {
  	var newTemplate = this.template({ heroes: Superhero.Collections.heroes });
  	this.$el.html(newTemplate);
  	return this
  }

});