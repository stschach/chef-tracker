import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('chef') // 'chef' matches the name of the model,
    // not necessarily the firebase JSON object name
  }
});
