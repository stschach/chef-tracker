import Component from '@ember/component';

export default Component.extend({
  isOpen: false,
  actions: {
    togglePresence(chef) {
      chef.toggleProperty('isCooking');
    },
    toggleOpen() {
      this.toggleProperty('isOpen');
    },
    removeStudent(chef) {
      if(chef.get('students') > 0) {
        chef.decrementProperty('students');
      }
      chef.save();
    },
    addStudent(chef) {
      chef.incrementProperty('students');
      chef.save();
    }
  }
});
