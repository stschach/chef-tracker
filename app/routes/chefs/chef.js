import Route from '@ember/routing/route';

export default Route.extend({
  //same as default (empty chef.js route file)
  model(params) {
    return this.store.findRecord('chef', params.chef_id);
  }
});
