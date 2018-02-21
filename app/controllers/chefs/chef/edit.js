import Controller from '@ember/controller';
import { alias, filterBy, mapBy, sum } from '@ember/object/computed';
import { set } from '@ember/object';

export default Controller.extend({
  actions: {
    save() {
      this.get('model').save();
      this.transitionToRoute('chefs.chef', this.get('model.id'));
    }
  }
});
