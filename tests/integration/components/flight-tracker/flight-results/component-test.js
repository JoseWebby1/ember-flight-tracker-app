import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('flight-tracker/flight-results', 'Integration | Component | flight tracker/flight results', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{flight-tracker/flight-results}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#flight-tracker/flight-results}}
      template block text
    {{/flight-tracker/flight-results}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
