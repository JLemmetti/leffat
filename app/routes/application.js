import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),

  beforeModel() {
    return this.get('session').fetch().catch(function () {
      console.log('User not signed in');
    });
  }
});
