import Controller from '@ember/controller';

export default Controller.extend({
    movie: undefined,
    link: undefined,
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
        saveMovie () {
            let movie = this.store.createRecord('movie', {
                title: this.movie,
                link: this.link
            })

            movie.save();
        }
    }
});
