import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      restaurant: this.store.findRecord('restaurant', params.restaurant_id),
      chefs: this.store.findAll('chef') // returns chefs affiliated w/ restaurant
    })
  }
});
