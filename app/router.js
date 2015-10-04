import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('musicians', function() {
    this.route('new');
    this.route('show', {path: "/:id"}, function () {
      this.route('tracks');
    });
  });
});

export default Router;
