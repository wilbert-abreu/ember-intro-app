App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function(e) {
    return ['red', 'yellow', 'blue'];
  }
});

App.Router.map( function () {
	this.route('about');
});
