import Controller from '@ember/controller';
import { alias, filterBy, mapBy, sum } from '@ember/object/computed';
import { set } from '@ember/object';

export default Controller.extend({
  actions: {
    fireChef(chef) {
      chef.destroyRecord();
      this.transitionToRoute('chefs');
    }
  }
});
