import Component from '@ember/component';

export default Component.extend({
    actions: {
        editMovie (movie) {
            this.sendAction('editMovie', movie);
        },
        deleteMovie (movie) {
            this.sendAction('deleteMovie', movie);
        }
    }
});
