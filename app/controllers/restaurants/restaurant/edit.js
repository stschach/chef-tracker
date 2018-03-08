import Controller from '@ember/controller';

export default Controller.extend({
  otherChefs: Ember.computed.setDiff('model.chefs', 'model.restaurant.chefs'),
  // 'subtracts' restaurant.chefs from model.chefs (all chefs)
  actions: {
    save() {
      this.get('model.restaurant').save();
      this.get('model.chefs').save(); // saves the chef models affiliated with the restaurant
      this.transitionToRoute('restaurants.restaurant', this.get('model.restaurant.id'));
    },
    relocateChef(chef) {
      let restaurant = this.get('model.restaurant');
      restaurant.get('chefs').removeObject(chef);
      chef.save().then(() => {
        restaurant.save();
      })
    },
    hireChef(chef) {
      let restaurant = this.get('model.restaurant');
      restaurant.get('chefs').addObject(chef);
      chef.save().then(() => {
        restaurant.save();
      })
    }
  }
});
