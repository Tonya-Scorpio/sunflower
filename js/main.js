var days = document.getElementsByClassName("days");
var today = document.getElementById("today");

function loadDay(day) {
	switch (day) {
		default: break;
	}
}

function onItemClicked(event) {
	event.preventDefault();
	today.classList.add('expanded');
}

if (days && days.length > 0) {
	days = days[0].children;
	for (var i = 0; i < days.length; i++) {
		var link = days[i].children[0];
		link.onclick = onItemClicked;
	}
}

today.onclick = function() {
	today.classList.remove('expanded'); 
};


//*var newDiv = document.createElement('div')

//newDiv.className = 'my-class'

//newDiv.id = 'my-id'

//newDiv.style.backgroundColor = 'red'

 

//newDiv.innerHTML = 'Привет, мир!'**//

var part = {
	name: 'День',
	hours: [
		{
			time: 14,
			temperature: '50 45',
			pressure: 10,
			humidity: 40,
			windSpeed: 5,
			probability: 0.2
		},
		{
			time: 17,
			temperature: -20,
			pressure: 10, 
			humidity: 45,
			windSpeed: 5,
			probability: 0.2
		}
	]
};

function makeTag(tag, className) {
	var result = document.createElement(tag);
	if (className) {
		result.className = className;
	}
	return result;
}

function makeEntry(className, parent, content) {
	var result = makeTag('div', 'entry ' + className);
	result.textContent = content;
	parent.append(result);
	return result;
}

function makeBoxDiv(hoursData, parent) {
	var box = makeTag('div', 'box');
	parent.append(box);

	var timeDiv = makeTag('div', 'time');
	timeDiv.textContent = hoursData.time + ':00';
	box.append(timeDiv);

	var icon = makeTag('i', 'wi wi-day-sleet');
	box.append(icon);

	var firstDiv = makeTag('div', 'entries');
	box.append(firstDiv);

	makeEntry('temperature', firstDiv, hoursData.temperature);

	makeEntry('pressure', firstDiv, hoursData.pressure);

	makeEntry('humidity', firstDiv, hoursData.humidity);
	
	makeEntry('wind', firstDiv, hoursData.windSpeed);

	makeEntry('probability', firstDiv, hoursData.probability);
}

function generateView(data, parent) {
	var partRoot = makeTag('div', 'weather-table ' + data.name);

	var nameDiv = makeTag('div', 'name');
	partRoot.append(nameDiv);

	var span = document.createElement('span');
	span.textContent = data.name; 
	switch (span.textContent) {
		case 'night': span.textContent = 'Ніч';
		break;
		case 'morning': span.textContent = 'Ранок';
		break;
		case 'day': span.textContent = 'День';
		break;
		case 'evening': span.textContent = 'Вечір';
		break;
	}
	  
	nameDiv.append(span);

	var okDiv = makeTag('div', 'ok');
	partRoot.append(okDiv);

	for (var i = 0; i < part.hours.length; i++) { 
	   makeBoxDiv(part.hours[i], okDiv); 
	}

	var parentRoot = document.getElementById(parent);
	parentRoot.append(partRoot);
}

// data simulation

// TODO: Load actual data

part.name = 'morning';
generateView(part, 'today');

part.name = 'day';
generateView(part, 'today');

part.name = 'evening';
generateView(part, 'today');


function makeDasheDiv(numberData, parent) {
	var dashe = makeTag('div', 'dashe');
	parent.append(dashe);

	var hr = document.createElement('hr');
	dashe.append(hr);

	var number = makeTag('div', 'number');
	number.textContent = numberData;
	dashe.append(number);
}

var scaleParent = document.getElementById('scale');
for (var i = 40; i >= -40; i -= 20) {
	makeDasheDiv(i, scaleParent); 
}


function getWeather(cityName) {
	var places = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyAg28vdO4NKLMmGtSpViF1eAH_hsHBut1s&input=%D0%B2%D1%96%D0%BD%D0%BD%D0%B8%D1%86%D1%8F&type=(cities)';
	var weather = 'https://api.apixu.com/v1/forecast.json?key=f795a251e1174012b7a125426171604&q=Bucharest&days=7';

	fetch(places)
		.then(function(response) {
			return response.json(); 
		})
		.then(function(data) {
			console.log(data);
			// TODO: Process data
		});
}

getWeather("", "");