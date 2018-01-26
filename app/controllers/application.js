import Controller from '@ember/controller';

export default Controller.extend({
  chefTypes: 'chef',
  chefs: [
    {name: 'Gordon Ramsay', isCooking: true},
    {name: 'Anthony Bourdain', isCooking: false},
    {name: 'Rachael Ray', isCooking: true},
    {name: 'Jamie Oliver', isCooking: false},
    {name: 'Guy Fieri', isCooking: true}]
});
/*
  this controller file must have the same name
  as a template in order to be bound properly!!
*/
