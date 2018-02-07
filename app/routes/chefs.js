import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('chefs') // 'chefs' matches the firebase JSON name
  }
});
