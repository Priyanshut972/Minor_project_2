document.addEventListener("DOMContentLoaded", function() {
    var places = document.querySelectorAll('.place');
    var currentPlaceIndex = 0;
    var delay = 4000;

    function showNextPlace() {
        places[currentPlaceIndex].classList.remove('active');
        currentPlaceIndex = (currentPlaceIndex + 1) % places.length;
        places[currentPlaceIndex].classList.add('active');
    }

    // Show the first place immediately
    places[currentPlaceIndex].classList.add('active');

    // Automatically show the next place after a fixed time period
    setInterval(showNextPlace, delay);
});