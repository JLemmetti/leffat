import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  actions: {
    setRating(movie, rating) {
      this.sendAction('setRating', movie, rating);
    },
    saveMovie(movie) {
      this.sendAction('saveMovie', movie);
    },
    deleteMovie(movie) {
      this.sendAction('deleteMovie', movie);
    },
    cancelEdit(movie) {
      this.sendAction('cancelEdit', movie);
    }
  }
});
