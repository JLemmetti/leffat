import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  title: DS.attr('string'),
  link: DS.attr('string'),
  notes: DS.attr('string'),
  watchDate: DS.attr('date', {defaultValue: Date.now()})
});
