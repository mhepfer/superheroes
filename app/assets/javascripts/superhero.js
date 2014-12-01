window.Superhero = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Superhero.Routers.Router({
    	$rootEl: $(content),
      $formEl: $(newSightingForm)
    })
    Backbone.history.start();
  }
};
