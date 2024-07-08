document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("trip-form");
    const itinerarySection = document.getElementById("generated-itinerary");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get user input values
        const duration = parseInt(document.getElementById("duration").value);
        const location = document.getElementById("location").value;

        // Call a function to generate itinerary based on input values
        const itinerary = generateItinerary(duration, location);

        // Display the generated itinerary
        displayItinerary(itinerary);
    });

    function generateItinerary(duration, location) {
        // Logic to generate the itinerary based on duration and location
        // This could involve fetching data from a database or API and processing it
        // For now,a dummy itinerary
        const dummyItinerary = [];

        for (let i = 1; i <= duration; i++) {
            dummyItinerary.push({
                day: i,
                places: [`Place 1 on Day ${i}`, `Place 2 on Day ${i}`, `Place 3 on Day ${i}`]
            });
        }

        return dummyItinerary;
    }

    function displayItinerary(itinerary) {
        // Clear existing itinerary content
        itinerarySection.innerHTML = "";

        // Create HTML elements to display itinerary
        itinerary.forEach(day => {
            const dayHeader = document.createElement("h3");
            dayHeader.textContent = `Day ${day.day}`;

            const placesList = document.createElement("ul");
            day.places.forEach(place => {
                const placeItem = document.createElement("li");
                placeItem.textContent = place;
                placesList.appendChild(placeItem);
            });

            const daySection = document.createElement("section");
            daySection.appendChild(dayHeader);
            daySection.appendChild(placesList);
            itinerarySection.appendChild(daySection);
        });
    }
});
