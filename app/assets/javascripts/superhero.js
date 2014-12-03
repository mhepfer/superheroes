window.Superhero = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Superhero.Routers.Router({
    	$rootEl: $(content),
      $formEl: $(newSightingForm),
      $footEl: $(footer),
      $sightingsEl: $(sightingsIndex)
    })
    Backbone.history.start();
  }
};
