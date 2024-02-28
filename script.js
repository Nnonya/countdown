// Given sentence with the date
const sentence = "Join us for our Grand Opening on Thursday, March 7, 2024 At 11:30am";

// Regular expression to match the date string
const dateRegex = /([A-Za-z]+), ([A-Za-z]+) (\d{1,2}), (\d{4})/;

// Extract the date string from the sentence
const match = sentence.match(dateRegex);
if (match) {
    const [, dayOfWeek, month, day, year] = match;
    const dateString = `${dayOfWeek}, ${month} ${day}, ${year}`;

    // Convert the date string to a JavaScript Date object
    const initialDate = new Date();
    initialDate.setDate(initialDate.getDate() + 10);

    // Function to update the date every 10 days
    function updateGiveawayDate() {

        // Format the date as desired (e.g., "Thursday, March 17, 2024")
        const formattedDate = initialDate.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        })

        // Display the updated date
        document.getElementById('date-display').textContent = `Join us for our Grand Opening on ${formattedDate} At 11:30am`;
    }

    // Initial call to set the date
    updateGiveawayDate();

    // Call updateGiveawayDate() every 10 days (in milliseconds)
    setInterval(updateGiveawayDate, 10 * 24 * 60 * 60 * 1000);
} else {
    console.log("No valid date found in the sentence.");
}
  
  // Set the initial event date (you can customize this)
  var initialEventDate = new Date("February 26, 2024 11:30:00").getTime();

  // Function to update the countdown timer
  function updateCountdown() {
        // Get the current date and time
        var now = new Date().getTime();

        // Calculate the time remaining until the next event
        var timeUntilNextEvent = initialEventDate - now;
    
        // If the next event has already occurred, set a new event date (e.g., one year later)
        if (timeUntilNextEvent < 0) {
            initialEventDate = new Date(initialEventDate + 10 * 24 * 60 * 60 * 1000).getTime();
            timeUntilNextEvent = initialEventDate - now;
        }
    
        // Time calculations for days, hours, minutes, and seconds
        var hours = Math.floor((timeUntilNextEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeUntilNextEvent % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeUntilNextEvent % (1000 * 60)) / 1000);

        // Format with zero-padding
        var formattedHours = hours.toString().padStart(2, '0');
        var formattedMinutes = minutes.toString().padStart(2, '0');
        var formattedSeconds = seconds.toString().padStart(2, '0');
    
        // Display the result in the element with id="demo"
        document.getElementById("hours").textContent = `${formattedHours}`;
        document.getElementById("minutes").textContent = `${formattedMinutes}`;
        document.getElementById("seconds").textContent = `${formattedSeconds}`;
    
        // Update the countdown every 1 second
        setTimeout(updateCountdown, 1000);
  }

  // Initial call to start the countdown
  updateCountdown();