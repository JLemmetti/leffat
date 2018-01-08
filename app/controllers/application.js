import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';

export default Controller.extend({
    email: undefined,
    password: undefined,

    movies: computed.filterBy('model', 'isNew', false),
    newMovies: computed.filterBy('model', 'isNew', true),

    sortProperties: ['watchDate:desc'],
    sortedMovies: computed.sort('movies', 'sortProperties'),

    actions: {
        signIn: function (provider) {

            let email = this.get('email'),
                password = this.get('password');

            // Sign in the user and fetch the user data
            this.get('session').open('firebase', {provider, email, password}).then(() => {
                console.log('Login ok');
            });
        },
        signOut: function () {
            this.get('session').close();
        },
        addNewMovie () {
            this.store.createRecord('movie');
        },
        saveMovie (movie) {
            movie.set('editing', false);
            movie.save();
        },
        editMovie (movie) {
            movie.set('editing', true);
        },
        cancelEdit (movie) {
            if (movie.get('isNew')) {
                movie.deleteRecord();
            } else {
                movie.set('editing', false);
                movie.rollbackAttributes();
            }
        },
        deleteMovie (movie) {
            movie.deleteRecord();
            movie.save();
        }
    }
});
