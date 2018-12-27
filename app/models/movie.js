import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  title: DS.attr('string'),
  link: DS.attr('string'),
  rating: DS.attr('string'),
  notes: DS.attr('string'),
  watchDate: DS.attr('date', {defaultValue: Date.now()}),

  readableRating: computed('rating', function() {
    switch (this.rating) {
      case 'good':
        return 'Hyvä 👍';
      break;
      case 'meh':
        return 'Meh 😒';
      break;
      case 'bad':
        return 'Huono 👎';
      break;
      default:
        return '-';
    }
  })
});
