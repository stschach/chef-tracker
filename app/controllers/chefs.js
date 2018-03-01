/*
  NOTE:
  This filename MUST match a route and template file in order to work properly with
  that corresponding route and template!
*/


//import Ember from 'ember';
import Controller from '@ember/controller';
import { alias, filterBy, mapBy, sum } from '@ember/object/computed';
import { set } from '@ember/object';

export default Controller.extend({
  chefTypes: 'chef',
  newChef: null,
  totalChefs: alias('model.length'),
  chefsCooking: filterBy('model', 'isCooking', true),
  listOfStudents: mapBy('model', 'students'),
  // the dependentKey must be referred to as 'model', not 'chefs'
  totalStudents: sum('listOfStudents'),
  /*
    Alternative:
    totalStudents: Ember.computed('model.@each.students', function() {
      let chefs = this.get('model');
      let totalStudents = 0;
      chefs.forEach((chef) => {
        totalStudents = totalStudents + chef.get('students');
      })
      return totalStudents;
    }),
  */
  actions: {
    exitChef(chef) {
      set(chef, 'isCooking', false);
      chef.save();
    },
    enterChef(chef) {
      set(chef, 'isCooking', true);
      chef.save();
    },
    saveChef() {
      if(this.get('newChef')){
        this.store.createRecord('chefs', {
          isCooking: false,
          name: this.get('newChef')
        }).save()
        this.set('newChef', '') // 'newChef' attr to set, '' what it is set to
      }
    },
    fireChef(chef) {
      chef.destroyRecord();
    },
    removeStudent(chef) {
      if(chef.get('students') > 0) {
        chef.decrementProperty('students');
      }
      chef.save();
      // alt method: chef.set('students', chef.get('students') - 1);
    },
    addStudent(chef) {
      chef.incrementProperty('students'); // convenience method awesomeness
      chef.save();
    },
    togglePresence(chef) {
      chef.toggleProperty('isCooking');
    }
  }
});
