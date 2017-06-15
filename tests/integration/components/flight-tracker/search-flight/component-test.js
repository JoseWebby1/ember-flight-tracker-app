import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('flight-tracker/search-flight', 'Integration | Component | flight tracker/search flight', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{flight-tracker/search-flight}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#flight-tracker/search-flight}}
      template block text
    {{/flight-tracker/search-flight}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
