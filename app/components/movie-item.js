import Component from '@ember/component';

export default Component.extend({
    tagName: '',
    actions: {
        editMovie (movie) {
            this.sendAction('editMovie', movie);
        }
    }
});
