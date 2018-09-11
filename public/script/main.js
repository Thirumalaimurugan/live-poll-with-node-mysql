var socket = io("/user");
var favouriteSeason = '';

var checkOptionSelected = function(name) {
    var radio_check_val = "";
    for (i = 0; i < document.getElementsByName(name).length; i++) {
        if (document.getElementsByName(name)[i].checked) {
            return true;
        }
    }
    return false;
}

var getOptionValue = function(name) {
    var radio_check_val = "";
    for (i = 0; i < document.getElementsByName(name).length; i++) {
        if (document.getElementsByName(name)[i].checked) {
            radio_check_val = document.getElementsByName(name)[i];
            break;
        }
    }

    return radio_check_val.value;
}

var success = function(data) {
    var button = document.getElementById('submit');
    button.innerText = 'Your Poll is sucessfully submited';
    button.disabled = true;
}

var fail = function(data) {
    alert('Error in submitting Poll error code:' + data.statusText + "(" + data.status + ")");
}

var pollData = function(evt, questionID, answerName) {
    evt.preventDefault();
    if (checkOptionSelected(answerName)) {
        favouriteSeason = getOptionValue(answerName);
        var data = {
            "questionID": questionID,
            "answerID": favouriteSeason
        }
        postAjax('http://localhost:3000/sumbitPolling', data, success, fail);
    } else {
        alert('Please select your option');
    }
}