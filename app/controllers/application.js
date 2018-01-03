import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';

export default Controller.extend({
    title: undefined,
    link: undefined,
    notes: undefined,
    watchDate: undefined,
    storedWatchDate: undefined,

    email: undefined,
    password: undefined,

    actions: {
        signIn: function (provider) {

            let email = this.get('email'),
                password = this.get('password');

            // Sign in the user, fetch the user data and set the user as the model for application route
            this.get('session').open('firebase', {provider, email, password}).then(() => {
                console.log('Login ok');
            });
        },
        signOut: function () {
            this.get('session').close();
        },
        saveMovie (movie) {

            if (movie) {
                movie.set('editing', false);
                movie.set('watchDate', this.storedWatchDate);
                movie.save();
            } else {
               let newMovie = this.store.createRecord('movie', {
                   title: this.title,
                   link: this.link,
                   notes: this.notes,
                   watchDate: this.storedWatchDate
                });

               newMovie.save();

               this.set('title', '');
               this.set('link', '');
               this.set('notes', '');
            }
        },
        editMovie (movie) {
            movie.set('editing', true);
        },
        cancelEdit (movie) {
            movie.set('editing', false);
        },
        deleteMovie (movie) {
            movie.deleteRecord();
            movie.save();
        },
        setWatchDate (date) {
            this.set('storedWatchDate', date);
        }
    }
});
