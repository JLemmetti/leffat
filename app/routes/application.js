import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel () {
        return this.get('session').fetch().catch(function() {});
    },
    model () {
        return this.store.findAll('movie');
    }
});
