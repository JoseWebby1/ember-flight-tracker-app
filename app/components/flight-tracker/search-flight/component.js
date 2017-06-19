import Ember from 'ember';

export default Ember.Component.extend({

	init() {
		this._super(...arguments);
		this.initializeValues();
	},

	initializeValues() {
		this.setProperties({
			source: null,
			destination: null,
			showResultTable: false,
			searchResults: []
		})
	},

	getAllFlightDetials () {
		/* this will be a service call to pull all data */
		return [
			{
				"id": "MAA-LHR",
				"flights": [
					{
						"airlinesNo": "BA001",
						"airlinesName": "British Airways",
						"source": "Chennai",
						"destination": "London",
						"departureDate": "2017-06-16",
						"arrivalDate": "2017-06-16",
						"departureTime": "08.00",
						"arrivalTime": "16.00",
						"price": "$450"
					},
					{
						"airlinesNo": "BA001",
						"airlinesName": "British Airways",
						"source": "Chennai",
						"destination": "London",
						"departureDate": "2017-06-17",
						"arrivalDate": "2017-06-17",
						"departureTime": "08.00",
						"arrivalTime": "16.00",
						"price": "$480"
					},
					{
						"airlinesNo": "BA002",
						"airlinesName": "British Airways",
						"source": "Chennai",
						"destination": "London",
						"departureDate": "2017-06-17",
						"arrivalDate": "2017-06-18",
						"departureTime": "23.00",
						"arrivalTime": "05.00",
						"price": "$520"
					},
					{
						"airlinesNo": "BA003",
						"airlinesName": "British Airways",
						"source": "Chennai",
						"destination": "London",
						"departureDate": "2017-06-17",
						"arrivalDate": "2017-06-18",
						"departureTime": "23.00",
						"arrivalTime": "08.00",
						"price": "$500"
					},
					{
						"airlinesNo": "BA001",
						"airlinesName": "British Airways",
						"source": "Chennai",
						"destination": "London",
						"departureDate": "2017-06-18",
						"arrivalDate": "2017-06-19",
						"departureTime": "23.00",
						"arrivalTime": "05.00",
						"price": "$570"
					},
					{
						"airlinesNo": "BA002",
						"airlinesName": "British Airways",
						"source": "Chennai",
						"destination": "London",
						"departureDate": "2017-06-19",
						"arrivalDate": "2017-06-20",
						"departureTime": "23.00",
						"arrivalTime": "05.00",
						"price": "$600"
					}
				]
			},
			{
				"id": "MAA-DXB",
				"flights": [
					{
						"airlinesNo": "EM001",
						"airlinesName": "Emirates",
						"source": "Chennai",
						"destination": "Dubai",
						"departureDate": "2017-06-16",
						"arrivalDate": "2017-06-16",
						"departureTime": "08.00",
						"arrivalTime": "16.00",
						"price": "$250"
					},
					{
						"airlinesNo": "EM001",
						"airlinesName": "Emirates",
						"source": "Chennai",
						"destination": "Dubai",
						"departureDate": "2017-06-17",
						"arrivalDate": "2017-06-17",
						"departureTime": "08.00",
						"arrivalTime": "16.00",
						"price": "$280"
					},
					{
						"airlinesNo": "EM002",
						"airlinesName": "Emirates",
						"source": "Chennai",
						"destination": "Dubai",
						"departureDate": "2017-06-17",
						"arrivalDate": "2017-06-18",
						"departureTime": "23.00",
						"arrivalTime": "01.00",
						"price": "$220"
					},
					{
						"airlinesNo": "EM003",
						"airlinesName": "Emirates",
						"source": "Chennai",
						"destination": "Dubai",
						"departureDate": "2017-06-18",
						"arrivalDate": "2017-06-19",
						"departureTime": "23.00",
						"arrivalTime": "01.00",
						"price": "$300"
					},
					{
						"airlinesNo": "EM002",
						"airlinesName": "Emirates",
						"source": "Chennai",
						"destination": "Dubai",
						"departureDate": "2017-06-19",
						"arrivalDate": "2017-06-20",
						"departureTime": "23.00",
						"arrivalTime": "01.00",
						"price": "$285"
					}
				]
			},
			{
				"id": "MAA-SGP",
				"flights": [
					{
						"airlinesNo": "SG001",
						"airlinesName": "Singapore airlines",
						"source": "Chennai",
						"destination": "Singapore",
						"departureDate": "2017-06-17",
						"arrivalDate": "2017-06-17",
						"departureTime": "08.00",
						"arrivalTime": "12.00",
						"price": "$150"
					},
					{
						"airlinesNo": "SG002",
						"airlinesName": "Singapore airlines",
						"source": "Chennai",
						"destination": "Singapore",
						"departureDate": "2017-06-17",
						"arrivalDate": "2017-06-17",
						"departureTime": "23.00",
						"arrivalTime": "01.00",
						"price": "$260"
					},
					{
						"airlinesNo": "SG003",
						"airlinesName": "Singapore airlines",
						"source": "Chennai",
						"destination": "Singapore",
						"departureDate": "2017-06-17",
						"arrivalDate": "2017-06-17",
						"departureTime": "02.00",
						"arrivalTime": "12.00",
						"price": "$520"
					},
					{
						"airlinesNo": "SG001",
						"airlinesName": "Singapore airlines",
						"source": "Chennai",
						"destination": "Singapore",
						"departureDate": "2017-06-18",
						"arrivalDate": "2017-06-18",
						"departureTime": "23.00",
						"arrivalTime": "01.00",
						"price": "$220"
					},
					{
						"airlinesNo": "SG002",
						"airlinesName": "Singapore airlines",
						"source": "Chennai",
						"destination": "Singapore",
						"departureDate": "2017-06-18",
						"arrivalDate": "2017-06-18",
						"departureTime": "23.00",
						"arrivalTime": "01.00",
						"price": "$290"
					},
					{
						"airlinesNo": "SG002",
						"airlinesName": "Singapore airlines",
						"source": "Chennai",
						"destination": "Singapore",
						"departureDate": "2017-06-18",
						"arrivalDate": "2017-06-18",
						"departureTime": "23.00",
						"arrivalTime": "01.00",
						"price": "$220"
					},
					{
						"airlinesNo": "SG001",
						"airlinesName": "Singapore airlines",
						"source": "Chennai",
						"destination": "Singapore",
						"departureDate": "2017-06-19",
						"arrivalDate": "2017-06-19",
						"departureTime": "23.00",
						"arrivalTime": "01.00",
						"price": "$245"
					}
				]
			},
			{
				"id": "DXB-SGP",
				"flights": [
					{
						"airlinesNo": "SG001",
						"airlinesName": "Singapore airlines",
						"source": "Dubai",
						"destination": "Singapore",
						"departureDate": "2017-06-18",
						"arrivalDate": "2017-06-18",
						"departureTime": "08.00",
						"arrivalTime": "12.00",
						"price": "$150"
					},
					{
						"airlinesNo": "SG002",
						"airlinesName": "Singapore airlines",
						"source": "Dubai",
						"destination": "Singapore",
						"departureDate": "2017-06-19",
						"arrivalDate": "2017-06-19",
						"departureTime": "23.00",
						"arrivalTime": "01.00",
						"price": "$260"
					},
					{
						"airlinesNo": "SG003",
						"airlinesName": "Singapore airlines",
						"source": "Dubai",
						"destination": "Singapore",
						"departureDate": "2017-06-19",
						"arrivalDate": "2017-06-19",
						"departureTime": "02.00",
						"arrivalTime": "12.00",
						"price": "$520"
					},
					{
						"airlinesNo": "SG001",
						"airlinesName": "Singapore airlines",
						"source": "Dubai",
						"destination": "Singapore",
						"departureDate": "2017-06-20",
						"arrivalDate": "2017-06-20",
						"departureTime": "23.00",
						"arrivalTime": "01.00",
						"price": "$220"
					},
					{
						"airlinesNo": "SG002",
						"airlinesName": "Singapore airlines",
						"source": "Dubai",
						"destination": "Singapore",
						"departureDate": "2017-06-20",
						"arrivalDate": "2017-06-20",
						"departureTime": "23.00",
						"arrivalTime": "01.00",
						"price": "$290"
					},
					{
						"airlinesNo": "SG002",
						"airlinesName": "Singapore airlines",
						"source": "Dubai",
						"destination": "Singapore",
						"departureDate": "2017-06-21",
						"arrivalDate": "2017-06-21",
						"departureTime": "23.00",
						"arrivalTime": "01.00",
						"price": "$220"
					},
					{
						"airlinesNo": "SG001",
						"airlinesName": "Singapore airlines",
						"source": "Dubai",
						"destination": "Singapore",
						"departureDate": "2017-06-21",
						"arrivalDate": "2017-06-21",
						"departureTime": "23.00",
						"arrivalTime": "01.00",
						"price": "$222"
					}
				]
			},
			{
				"id": "LHR-MAA",
				"flights": [
					{
						"airlinesNo": "BA001",
						"airlinesName": "British Airways",
						"source": "London",
						"destination": "Chennai",
						"departureDate": "2017-06-17",
						"arrivalDate": "2017-06-17",
						"departureTime": "08.00",
						"arrivalTime": "16.00",
						"price": "$450"
					},
					{
						"airlinesNo": "BA002",
						"airlinesName": "British Airways",
						"source": "London",
						"destination": "Chennai",
						"departureDate": "2017-06-17",
						"arrivalDate": "2017-06-17",
						"departureTime": "23.00",
						"arrivalTime": "05.00",
						"price": "$500"
					},
					{
						"airlinesNo": "BA001",
						"airlinesName": "British Airways",
						"source": "London",
						"destination": "Chennai",
						"departureDate": "2017-06-18",
						"arrivalDate": "2017-06-17",
						"departureTime": "08.00",
						"arrivalTime": "16.00",
						"price": "$480"
					},
					{
						"airlinesNo": "BA002",
						"airlinesName": "British Airways",
						"source": "London",
						"destination": "Chennai",
						"departureDate": "2017-06-18",
						"arrivalDate": "2017-06-18",
						"departureTime": "23.00",
						"arrivalTime": "05.00",
						"price": "$520"
					},
					{
						"airlinesNo": "BA003",
						"airlinesName": "British Airways",
						"source": "London",
						"destination": "Chennai",
						"departureDate": "2017-06-19",
						"arrivalDate": "2017-06-19",
						"departureTime": "23.00",
						"arrivalTime": "08.00",
						"price": "$500"
					}
				]
			},
			{
				"id": "SGP-LHR",
				"flights": [
					{
						"airlinesNo": "SG001",
						"airlinesName": "Singapore airlines",
						"source": "Singapore",
						"destination": "London",
						"departureDate": "2017-06-17",
						"arrivalDate": "2017-06-17",
						"departureTime": "08.00",
						"arrivalTime": "12.00",
						"price": "$150"
					},
					{
						"airlinesNo": "SG002",
						"airlinesName": "Singapore airlines",
						"source": "Singapore",
						"destination": "London",
						"departureDate": "2017-06-17",
						"arrivalDate": "2017-06-17",
						"departureTime": "23.00",
						"arrivalTime": "01.00",
						"price": "$260"
					},
					{
						"airlinesNo": "SG003",
						"airlinesName": "Singapore airlines",
						"source": "Singapore",
						"destination": "London",
						"departureDate": "2017-06-18",
						"arrivalDate": "2017-06-18",
						"departureTime": "02.00",
						"arrivalTime": "12.00",
						"price": "$520"
					},
					{
						"airlinesNo": "SG001",
						"airlinesName": "Singapore airlines",
						"source": "Singapore",
						"destination": "London",
						"departureDate": "2017-06-18",
						"arrivalDate": "2017-06-18",
						"departureTime": "23.00",
						"arrivalTime": "01.00",
						"price": "$220"
					},
					{
						"airlinesNo": "SG002",
						"airlinesName": "Singapore airlines",
						"source": "Singapore",
						"destination": "London",
						"departureDate": "2017-06-19",
						"arrivalDate": "2017-06-19",
						"departureTime": "23.00",
						"arrivalTime": "01.00",
						"price": "$290"
					},
					{
						"airlinesNo": "SG002",
						"airlinesName": "Singapore airlines",
						"source": "Singapore",
						"destination": "London",
						"departureDate": "2017-06-19",
						"arrivalDate": "2017-06-19",
						"departureTime": "23.00",
						"arrivalTime": "01.00",
						"price": "$220"
					}
				]
			}
		];
	},

	filterSearchResults(routeId, departureDate) {
		let allFlightDetials = this.getAllFlightDetials(),
				routeDetails = _.filter(allFlightDetials, ['id', routeId]),
				formattedDepartureDate = moment(departureDate).format('YYYY-MM-DD');

		if(!routeDetails.length) {
			return [];
		}

		if(departureDate) {
			routeDetails = _.filter(routeDetails[0].flights, ['departureDate', formattedDepartureDate]);
			return routeDetails;
		}
		return routeDetails[0].flights;
	},

	actions: {
		onSelectFrom(source) {
			this.set('source', source);
		},
		onSelectTo(destination) {
			this.set('destination', destination);
		},

		loadData() {
			let source = this.get('source'),
					destination = this.get('destination'),
					routeId = `${source}-${destination}`,
					departureDate = this.get('departureDate'),
					searchResults = this.filterSearchResults(routeId, departureDate);

			this.setProperties({
				'searchResults': searchResults,
				'showResultTable': true
			});
		}
	}
});
