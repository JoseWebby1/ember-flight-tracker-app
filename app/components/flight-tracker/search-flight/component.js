import Ember from 'ember';

export default Ember.Component.extend({

	init() {
		this._super(...arguments);
		this.initializeValues();
	},

	initializeValues() {
		this.setProperties({
			searchResults: []
		})
	},

	getAllFlightDetials () {
		return [
			{
				"id": "LHR",
				"flights": [
					{
						"airlinesNo": "BA001",
						"airlinesName": "British Airways",
						"source": "Chennai",
						"destination": "London",
						"departureDate": "2017-06-15",
						"arrivalDate": "2017-06-15",
						"departureTime": "08.00",
						"arrivalTime": "16.00",
						"price": "450"
					},
					{
						"airlinesNo": "BA002",
						"airlinesName": "British Airways",
						"source": "Chennai",
						"destination": "London",
						"departureDate": "2017-06-15",
						"arrivalDate": "2017-06-16",
						"departureTime": "23.00",
						"arrivalTime": "05.00",
						"price": "500"
					},
					{
						"airlinesNo": "BA001",
						"airlinesName": "British Airways",
						"source": "Chennai",
						"destination": "London",
						"departureDate": "2017-06-16",
						"arrivalDate": "2017-06-16",
						"departureTime": "08.00",
						"arrivalTime": "16.00",
						"price": "480"
					},
					{
						"airlinesNo": "BA002",
						"airlinesName": "British Airways",
						"source": "Chennai",
						"destination": "London",
						"departureDate": "2017-06-16",
						"arrivalDate": "2017-06-17",
						"departureTime": "23.00",
						"arrivalTime": "05.00",
						"price": "520"
					}
				]
			},
			{
				"id": "DXB",
				"flights": [
					{
						"airlinesNo": "EM001",
						"airlinesName": "Emirates",
						"source": "Chennai",
						"destination": "Dubai",
						"departureDate": "2017-06-15",
						"arrivalDate": "2017-06-15",
						"departureTime": "08.00",
						"arrivalTime": "16.00",
						"price": "250"
					},
					{
						"airlinesNo": "EM002",
						"airlinesName": "Emirates",
						"source": "Chennai",
						"destination": "Dubai",
						"departureDate": "2017-06-15",
						"arrivalDate": "2017-06-16",
						"departureTime": "23.00",
						"arrivalTime": "01.00",
						"price": "200"
					},
					{
						"airlinesNo": "EM001",
						"airlinesName": "Emirates",
						"source": "Chennai",
						"destination": "Dubai",
						"departureDate": "2017-06-16",
						"arrivalDate": "2017-06-16",
						"departureTime": "08.00",
						"arrivalTime": "16.00",
						"price": "280"
					},
					{
						"airlinesNo": "EM002",
						"airlinesName": "Emirates",
						"source": "Chennai",
						"destination": "Dubai",
						"departureDate": "2017-06-16",
						"arrivalDate": "2017-06-17",
						"departureTime": "23.00",
						"arrivalTime": "01.00",
						"price": "220"
					}
				]
			}
		];
	},

	filterSearchResults(routeId, departureDate) {
		console.log(`Route - ${routeId} :: Date - ${departureDate}`);
		let allFlightDetials = this.getAllFlightDetials(),
				routeDetails = _.filter(allFlightDetials, ['id', routeId]);
		if(departureDate) {
			routeDetails = _.filter(routeDetails[0].flights, ['departureDate', departureDate]);
			return routeDetails;
		}
		return routeDetails[0].flights;
	},

	actions: {
		loadData() {
			let routeId = this.get('source'),
					departureDate = this.get('departureDate'),
					searchResults = this.filterSearchResults(routeId, departureDate);

			this.set('searchResults', searchResults);
		}
	}
});
