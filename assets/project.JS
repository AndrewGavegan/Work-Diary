var timeDisplay = $('#currentDay');


// for current date and time display in the jumbotron, using moment.js, updating at the interval of each second //
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplay.text(rightNow);
  }
  setInterval(displayTime, 1000);

//   maybe use submit button widget fromk jquery UI for each hour of the day //

// store each inputs value as the value for a key for each respective hour of the day, requires a print function similar to student mini project//

// need a style.display linked to a before or after current hour of the day to change colour to red or green //

// 