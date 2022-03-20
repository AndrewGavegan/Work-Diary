var timeDisplay = $('#currentDay');


// for current date and time display in the jumbotron, using moment.js, updating at the interval of each second //
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplay.text(rightNow);
  }
  setInterval(displayTime, 1000);

//   maybe use submit button widget fromk jquery UI for each hour of the day //

// store each inputs value as the value for a key for each respective hour of the day, requires a print function similar to student mini project//
 var morning9 = moment().hour(9);
 var morning10 = moment().hour(10);
 var morning11 = moment().hour(11);
 var midday12 = moment().hour(12);
 var afternoon13 = moment().hour(13);
 var afternoon14 = moment().hour(14);
 var afternoon15 = moment().hour(15);
 var afternoon16 = moment().hour(16);
 var afternoon17 = moment().hour(17);

 var hours = [morning9, morning10, morning11, midday12, afternoon13, afternoon14, afternoon15, afternoon16, afternoon17]

var events9 = JSON.parse(localStorage.getItem('morning9')) || "";
var events10 = JSON.parse(localStorage.getItem('morning10')) || "";
var events11 = JSON.parse(localStorage.getItem('morning11')) || "";
var events12 = JSON.parse(localStorage.getItem('midday12')) || "";
var events13 = JSON.parse(localStorage.getItem('afternoon13')) || "";
var events14 = JSON.parse(localStorage.getItem('afternoon14')) || "";
var events15 = JSON.parse(localStorage.getItem('afternoon15')) || "";
var events16 = JSON.parse(localStorage.getItem('afternoon16')) || "";
var events17 = JSON.parse(localStorage.getItem('afternoon17')) || "";

// Generate rows no style yet //
$.each(hours, function (index, value) {
    events = [events9, events10, events11, events12, events13, events14, events15, events16, events17]
    $(".container").append("<div class='row'><div class='col-2 hour text-right' id='hour" +
        (index + 9) + "'><span>" + value.format("h A") + "</span></div><div class='col-8 event-group' id='timeblock" +
        (index + 9) + "'><textarea class='events col-12' id='eventblock" + (index + 9) + "'>" + events[index] + "</textarea></div>" +
        "<div class='col-2 save-delete' id='save-delete" + (index + 9) + "'><i class='fas fa-save' title='Save Event'></i> <i class='fas fa-trash' title='Remove Event'></i></div></div></div>");
});

// need a style.display linked to a before or after current hour of the day to change colour to red or green //

// 