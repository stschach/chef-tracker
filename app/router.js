import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('chefs', function() {
    this.route('chef', {path: ':chef_id'});
    this.route('chef.edit', {path: ':chef_id/edit'});
  });
  this.route('about');
  this.route('training');
  this.route('restaurants', function() {
    this.route('restaurant', {path: ':restaurant_id'});
    this.route('restaurant.edit', {path: ':restaurant_id/edit'});
    });
  });

export default Router;
