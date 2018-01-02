import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('edit-movie-item', 'Integration | Component | edit movie item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{edit-movie-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#edit-movie-item}}
      template block text
    {{/edit-movie-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
