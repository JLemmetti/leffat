import { filterBy, sort } from '@ember/object/computed';
import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';

export default Controller.extend({
    movies: filterBy('model.movies', 'isNew', false),
    newMovies: filterBy('model.movies', 'isNew', true),

    sortProperties: ['watchDate:desc'],
    sortedMovies: sort('movies', 'sortProperties'),

    actions: {
        addNewMovie () {
            let movie = this.store.createRecord('movie');
            let user = this.store.findRecord('user', this.get('session.uid')).then(user => {
                user.get('movies').pushObject(movie);
            });
        },
        saveMovie (movie) {
            movie.set('editing', false);

            movie.save().then(movie => {
                let user = this.store.findRecord('user', this.get('session.uid')).then(user => {
                    user.get('movies').pushObject(movie);
                    user.save();
                });
            });
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
