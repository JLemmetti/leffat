import Component from '@ember/component';

export default Component.extend({
    actions: {
        saveMovie (movie) {
            this.sendAction('saveMovie', movie);
        },
        cancelEdit (movie) {
            this.sendAction('cancelEdit', movie);
        }
    }
});
