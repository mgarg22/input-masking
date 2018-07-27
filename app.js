var App  = function(){

    App.prototype.date = function(event){
        var value = event.target.value;
        var regex = new RegExp('^[0-9]+$');
        var key = event.key;
        if (regex.test(key)) { 
            if (value.match(/^\d{4}$/) !== null ) {
                event.target.value = value + '-';
            } 
            else if (value.match(/^\d{4}\-\d{2}$/) !== null) {
                event.target.value = value + '-';
            }
            else if (value.match(/^\d{4}\-\d{2}-\d{2}$/) !== null) {
                app.checkDate(event.target.value);
            }
        }   
        else if(!regex.test(key) && key != "Backspace"){     
            value = value.substring(0, value.length - 1);
            event.target.value = value;
        }
    };

    App.prototype.checkDate = function(value){
        var dateFormatArr = value.split("-");
        var year  = dateFormatArr[0];
        var month = dateFormatArr[1];
        var date  = dateFormatArr[2];
        var dateCheck = /^(0?[1-9]|[12][0-9]|3[01])$/;
        var monthCheck = /^(0[1-9]|1[0-2])$/;
        var yearCheck = /^\d{4}$/; 
        if (month.match(monthCheck) && date.match(dateCheck) && year.match(yearCheck)) {
            var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if (month == 1 || month > 2) {
                if (date > ListofDays[month - 1]) {
                    alert('Invalid date format!');
                    return false;
                }
            }
            if (month == 2) {
                var leapYear = false;
                if ((!(year % 4) && year % 100) || !(year % 400)) {
                    leapYear = true;
                }
                if ((leapYear == false) && (date >= 29)) {
                    alert('Invalid date format!');
                    return false;
                }
                if ((leapYear == true) && (date > 29)) {
                    alert('Invalid date format!');
                    return false;
                }
            }
        }
        else {
            alert("invalid date");
            event.target.value = "";
        }
    };

    App.prototype.postalCode = function(event){
        var value = event.target.value;
        var regex = new RegExp('^[0-9]+$');
        var key = event.key;
        if (regex.test(key)) { 
            if (value.match(/^\d{3}$/) !== null) {
                event.target.value = value + ' ';
            } 
        }
        else if(!regex.test(key) && key != "Backspace"){     
            value = value.substring(0, value.length - 1);
            event.target.value = value;
        }
    };

    App.prototype.creditCard = function(event){
        var value = event.target.value;
        var regex = new RegExp('^[0-9]+$');
        var key = event.key;
        if (regex.test(key)) { 
            if (value.match(/^\d{4}$/) !== null) {
                event.target.value = value + ' ';
            } 
            else if (value.match(/^\d{4}\ \d{4}$/) !== null) {
                event.target.value = value + ' ';
            }
            else if (value.match(/^\d{4}\ \d{4}\ \d{4}$/) !== null) {
                event.target.value = value + ' ';
            }
        }
        else if(!regex.test(key) && key != "Backspace"){     
            value = value.substring(0, value.length - 1);
            event.target.value = value;
        }
    };

    App.prototype.contactNumber = function(event){
        var value = event.target.value;
        var regex = new RegExp('^[0-9]+$');
        var key = event.key;
        if (regex.test(key)) { 
            if (value.match(/^\d{3}$/) !== null) {
                event.target.value = value + '-';
            } 
            else if (value.match(/^\d{3}\-\d{3}$/) !== null) {
                event.target.value = value + '-';
            }
        }
        else if(!regex.test(key) && key != "Backspace"){     
            value = value.substring(0, value.length - 1);
            event.target.value = value;
        }
    };
}
var app  = new App();
