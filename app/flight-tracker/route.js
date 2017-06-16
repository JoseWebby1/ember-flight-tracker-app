import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return [
			{
				"id": "MAA",
				"value": "Chennai - MAA"
			},
			{
				"id": "LHR",
				"value": "London - LHR"
			},
			{
				"id": "DXB",
				"value": "Dubai - DXB"
			},
			{
				"id": "SGP",
				"value": "Singapore - SGP"
			}
		];
	}
});
