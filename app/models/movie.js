import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  link: DS.attr('string'),
  notes: DS.attr('string'),
  watchDate: DS.attr('date', {defaultValue: Date.now()}),
  editing: DS.attr('boolean', {defaultValue: false})
});
