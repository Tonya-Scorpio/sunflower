var days = document.getElementsByClassName("days");
var today = document.getElementById("today");

function loadDay(day) {
    switch (day) {
    default:
        break;
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