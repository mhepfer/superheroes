window.Superhero = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Superhero.Routers.Router({
    	$rootEl: $(content),
      $formEl: $(newSightingForm),
      $footEl: $(footer)
    })
    Backbone.history.start();
  }
};
