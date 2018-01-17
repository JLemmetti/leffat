import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    session: service(),
    email: undefined,
    password: undefined,

    actions: {
        signIn (provider) {
            // Sign in the user and fetch the user data
            this.get('session').open('firebase', {provider}).then((session) => {
                console.log(session);
            });
        },
        signOut () {
            this.get('session').close();
        }
    }
});
