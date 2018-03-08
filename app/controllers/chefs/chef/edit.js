import Controller from '@ember/controller';
import { alias, filterBy, mapBy, sum } from '@ember/object/computed';
import { set } from '@ember/object';

export default Controller.extend({
  actions: {
    save() {
      this.get('model.chef').save();
      this.transitionToRoute('chefs.chef', this.get('model.chef.id'));
    },
    selectRestaurant(selection) {
      let chef = this.get('model.chef');
      chef.get('restaurant').then((restaurant) =>{
        chef.set('restaurant', selection);
        selection.save();
        restaurant.save();
      })
    }
  }
});
