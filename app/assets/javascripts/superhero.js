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
      $sightingsEl: $(sightingsIndex),
      $heroEl: $(heroView),
      $heroFormEl: $(heroForm)
    })
    Backbone.history.start();
  }
};
