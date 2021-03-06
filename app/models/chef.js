import DS from 'ember-data';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr('string'),
  isCooking: DS.attr('boolean'),
  students: DS.attr('number', {defaultValue: 0}),
  bio: DS.attr('string'),
  hasDegree: DS.attr('boolean'),
  schoolAttended: DS.attr('string'),
  imageUrl: DS.attr('string'),
  restaurant: DS.belongsTo()
});
