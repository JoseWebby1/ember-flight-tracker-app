import Ember from 'ember';

export default Ember.Component.extend({
	searchResults: null,
	isSortAscending: true,

	actions: {
		sortTable() {
			let sortedData = _.orderBy(this.get('searchResults'), ['price'], [this.get('isSortAscending')?'asc':'desc']);
			(this.get('isSortAscending')) ? this.set('isSortAscending', false) : this.set('isSortAscending', true);
			this.set('searchResults', sortedData);
		}
	}
});
