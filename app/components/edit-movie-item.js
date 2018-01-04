import Component from '@ember/component';

export default Component.extend({
    actions: {
        showCalendar: false,

        toggleCalendar () {
            this.toggleProperty('showCalendar');
        },
        setWatchDate (date) {
            this.set('showCalendar', false);
        },
        saveMovie (movie) {
            this.sendAction('saveMovie', movie);
        },
        cancelEdit (movie) {
            this.sendAction('cancelEdit', movie);
        }
    }
});
