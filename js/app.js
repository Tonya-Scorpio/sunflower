var app = new Vue({
    el: '#vue-app',
    data: {
        selectedCity: 'Бухарест',
        parts: [{
            name: 'Ранок',
            hours: [{
                time: 14,
                temperature: -2,
                pressure: 10,
                humidity: 40,
                windSpeed: 5,
                probability: 0.2
            }, {
                time: 17,
                temperature: -8,
                pressure: 10,
                humidity: 45,
                windSpeed: 5,
                probability: 0.2
            }]
        }], 
        days: []
    },
    computed: {
    	daysCount: function() {
    		return this.days.length;
    	}
    },
    methods: {
        forecast: function() {
        	// Save a link to the current component root
        	var component = this;
        	// Load a remote data
            fetch('https://api.apixu.com/v1/forecast.json?key=f795a251e1174012b7a125426171604&q=Bucharest&days=7')
                .then(function(response) {
                	// Transform a loaded data into the JSON
                    return response.json();
                })
                .then(function(data) {
                	// Assign loaded and transormed data into the component property                	
                    component.days = data.forecast.forecastday;
                    console.log(component.days);
                });
        }
    }, mounted: function() {
    	// This will be executed when our component is fully ready to work
    	this.forecast();
    }
});
