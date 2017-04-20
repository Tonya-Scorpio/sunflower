var app = new Vue({
    el: '#vue-app',
    data: {
        selectedCity: 'Бухарест',
        parts: [{
            name: 'День',
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
        }]
    }
});
