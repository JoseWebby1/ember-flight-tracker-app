import Ember from 'ember';

export default Ember.Component.extend({

	didInsertElement() {
		this._super(...arguments);
		/*this.$('#result-table').DataTable({
			data: this.get('searchResults'),
			columns: [
				{title: "Airlines No"},
				{title: "Airlines Name"},
				{title: "From"},
				{title: "To"},
				{title: "Departure Date"},
				{title: "Arrival Date"},
				{title: "Departure Time"},
				{title: "Arrival Time"},
				{title: "Price"} 
			]
		});*/
		/*this.$('#result-table').DataTable();*/
		/*Ember.run.scheduleOnce('afterRender', this, function() {
			this.$('#result-table').DataTable();
		});*/

	}

});
