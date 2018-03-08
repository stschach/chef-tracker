import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save() {
      this.get('model').save();
      this.transitionToRoute('restaurants.restaurant', this.get('model.id'));
    }
  }
});
