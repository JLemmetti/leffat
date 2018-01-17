import DS from 'ember-data';

export default DS.Model.extend({
  movies: DS.hasMany({inverse: null}),
  name: DS.attr('string'),
  email: DS.attr('string')
});
