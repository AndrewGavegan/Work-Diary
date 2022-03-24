var timeDisplay = $('#currentDay');


// for current date and time display in the jumbotron, using moment.js, updating at the interval of each second //
function displayTime() {
    var rightNow = moment().format('[Today is the] Do MMM, YYYY [and the time is] hh:mm:ss a');
    timeDisplay.text(rightNow);
  }
  setInterval(displayTime, 1000);

// creating a variable for each actual time of the day //
 var morning9 = moment().hour(9);
 var morning10 = moment().hour(10);
 var morning11 = moment().hour(11);
 var midday12 = moment().hour(12);
 var afternoon13 = moment().hour(13);
 var afternoon14 = moment().hour(14);
 var afternoon15 = moment().hour(15);
 var afternoon16 = moment().hour(16);
 var afternoon17 = moment().hour(17);
 var afternoon18 = moment().hour(18);

//  create an array of the above variable to index through them in later function //
 var hours = [morning9, morning10, morning11, midday12, afternoon13, afternoon14, afternoon15, afternoon16, afternoon17]

//  creating a variable that grabs the local storage of each time of the hour, if there is anything in it, and these will be used in a jQuery append and create element style function //
var events9 = JSON.parse(localStorage.getItem('morning9')) || "";
var events10 = JSON.parse(localStorage.getItem('morning10')) || "";
var events11 = JSON.parse(localStorage.getItem('morning11')) || "";
var events12 = JSON.parse(localStorage.getItem('midday12')) || "";
var events13 = JSON.parse(localStorage.getItem('afternoon13')) || "";
var events14 = JSON.parse(localStorage.getItem('afternoon14')) || "";
var events15 = JSON.parse(localStorage.getItem('afternoon15')) || "";
var events16 = JSON.parse(localStorage.getItem('afternoon16')) || "";
var events17 = JSON.parse(localStorage.getItem('afternoon17')) || "";

// Generate rows and columns and give them classes with jQuery //
$.each(hours, function (index, value) {
    events = [events9, events10, events11, events12, events13, events14, events15, events16, events17]
    $(".container").append("<div class='row'><div class='col-2 hour text-right' id='hour" +
        (index + 9) + "'><span>" + value.format("h A") + "</span></div><div class='col-8 event-group' id='row" +
        (index + 9) + "'><textarea class='events col-12' id='eventblock" + (index + 9) + "'>" + events[index] + "</textarea></div>" +
        "<div class='col-2 save-delete' id='save-delete" + (index + 9) + "'><i class='fas fa-save' title='Save Event'></i> <i class='fas fa-trash' title='Remove Event'></i></div></div></div>");
});

// this function goes through each hour row and checks if that hour is in the past, the future or if it is the current hour, and assigns a class accordingly, giving it a css styling of red for past, grey for present and green for future //
var auditTime = function () {
    currentTime = moment().format("hh:mm:ss");

    if (moment().isBetween(morning9, morning10)) {
        $("#row9").addClass("present");
    }
    else if (moment().isAfter(morning10)) {
        $("#row9").addClass("past");
    }
    else {
        $("#row9").addClass("future");
    }

    if (moment().isBetween(morning10, morning11)) {
        $("#row10").addClass("present");
    }
    else if (moment().isAfter(morning11)) {
        $("#row10").addClass("past");
    }
    else {
        $("#row10").addClass("future");
    }

    if (moment().isBetween(morning11, midday12)) {
        $("#row11").addClass("present");
    }
    else if (moment().isAfter(midday12)) {
        $("#row11").addClass("past");
    }
    else {
        $("#row11").addClass("future");
    }

    if (moment().isBetween(midday12, afternoon13)) {
        $("#row12").addClass("present");
    }
    else if (moment().isAfter(afternoon13)) {
        $("#row12").addClass("past");
    }
    else {
        $("#row12").addClass("future");
    }

    if (moment().isBetween(afternoon13, afternoon14)) {
        $("#row13").addClass("present");
    }
    else if (moment().isAfter(afternoon14)) {
        $("#row13").addClass("past");
    }
    else {
        $("#row13").addClass("future");
    }

    if (moment().isBetween(afternoon14, afternoon15)) {
        $("#row14").addClass("present");
    }
    else if (moment().isAfter(afternoon15)) {
        $("#row14").addClass("past");
    }
    else {
        $("#row14").addClass("future");
    }

    if (moment().isBetween(afternoon15, afternoon16)) {
        $("#row15").addClass("present");
    }
    else if (moment().isAfter(afternoon16)) {
        $("#row15").addClass("past");
    }
    else {
        $("#row15").addClass("future");
    }

    if (moment().isBetween(afternoon16, afternoon17)) {
        $("#row16").addClass("present");
    }
    else if (moment().isAfter(afternoon17)) {
        $("#row16").addClass("past");
    }
    else {
        $("#row16").addClass("future");
    }

    if (moment().isBetween(afternoon17, afternoon18)) {
        $("#row17").addClass("present");
    }
    else if (moment().isAfter(afternoon18)) {
        $("#row17").addClass("past");
    }
    else {
        $("#row17").addClass("future");
    };
}

//  set of event listeners for each trash icon to clear local storage and therefore the rows text by clicking //
$("#save-delete9").on("click", "i.fa-trash", function () {
    localStorage.removeItem("morning9");
    $("#eventblock9").val("");
})
$("#save-delete10").on("click", "i.fa-trash", function () {
    localStorage.removeItem("morning10");
    $("#eventblock10").val("");
})
$("#save-delete11").on("click", "i.fa-trash", function () {
    localStorage.removeItem("morning11");
    $("#eventblock11").val("");
})
$("#save-delete12").on("click", "i.fa-trash", function () {
    localStorage.removeItem("midday12");
    $("#eventblock12").val("");
})
$("#save-delete13").on("click", "i.fa-trash", function () {
    localStorage.removeItem("afternoon13");
    $("#eventblock13").val("");
})
$("#save-delete14").on("click", "i.fa-trash", function () {
    localStorage.removeItem("afternoon14");
    $("#eventblock14").val("");
})
$("#save-delete15").on("click", "i.fa-trash", function () {
    localStorage.removeItem("afternoon15");
    $("#eventblock15").val("");
})
$("#save-delete16").on("click", "i.fa-trash", function () {
    localStorage.removeItem("afternoon16");
    $("#eventblock16").val("");
})
$("#save-delete17").on("click", "i.fa-trash", function () {
    localStorage.removeItem("afternoon17");
    $("#eventblock17").val("");
})

// adding event listeners for each save button, setting input text into local storage and holding it there until trash button is clicked // 
$("#save-delete9").on("click", "i.fa-save", function () {
    var event9 = $("#eventblock9").val().trim();
    localStorage.setItem('morning9', JSON.stringify(event9));
})
$("#save-delete10").on("click", "i.fa-save", function () {
    var event10 = $("#eventblock10").val().trim();
    localStorage.setItem('morning10', JSON.stringify(event10));
})
$("#save-delete11").on("click", "i.fa-save", function () {
    var event11 = $("#eventblock11").val().trim();
    localStorage.setItem('morning11', JSON.stringify(event11));
})
$("#save-delete12").on("click", "i.fa-save", function () {
    var event12 = $("#eventblock12").val().trim();
    localStorage.setItem('midday12', JSON.stringify(event12));
})
$("#save-delete13").on("click", "i.fa-save", function () {
    var event13 = $("#eventblock13").val().trim();
    localStorage.setItem('afternoon13', JSON.stringify(event13));
})
$("#save-delete14").on("click", "i.fa-save", function () {
    var event14 = $("#eventblock14").val().trim();
    localStorage.setItem('afternoon14', JSON.stringify(event14));
})
$("#save-delete15").on("click", "i.fa-save", function () {
    var event15 = $("#eventblock15").val().trim();
    localStorage.setItem('afternoon15', JSON.stringify(event15));
})
$("#save-delete16").on("click", "i.fa-save", function () {
    var event16 = $("#eventblock16").val().trim();
    localStorage.setItem('afternoon16', JSON.stringify(event16));
})
$("#save-delete17").on("click", "i.fa-save", function () {
    var event17 = $("#eventblock17").val().trim();
    localStorage.setItem('afternoon17', JSON.stringify(event17));
})

// running audit time functinos on every half hour to check if youve been sitting in the page for that amount of time and the colours need to be changed to match the time, this funciton will be run instead of having to refresh the page //
setInterval(function () {
    $(".event-group .events").each(function (index, el) {
        auditTime(el);
    });
}, (1000 * 60)); // 1000ms x 60 = 1 minute x 30 = 30 minutes

// calling audit time as soon as page is loaded //
auditTime();