	$.validator.addMethod("CheckDefault", function(value, element) {

    var SelectValue;

    if (value == "default" || value == "") {
        SelectValue = "";
    } else {
        SelectedValue = value;
    }
    return SelectValue !== "";
}, "Please select at least one option");


$.validator.addMethod("PastDate", function(value, element) {
	var curDate = new Date();
    var inputDate = new Date(value);
    if (inputDate < curDate)
		return true;
    else 
	return false;
}, "Invalid Date! The date must be before today.");


$.validator.addMethod("MobileNumber", function(value, element) {
	
  	var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
			return length >= 11
}, "Please enter a valid mobile number");

$.validator.addMethod("FutureDate", function(value, element) {
	var curDate = new Date();
    var inputDate = new Date(value);
    if (inputDate > curDate)
		return true;
    else 
	return false;
}, "Invalid Date! The date must be after today.");


//Required Fields Error Message
$.validator.messages.required = function (param, input) {
    return '<b>' + input.name + '</b> is missing';
}

//Select Box Error Messages
$.validator.messages.CheckDefault = function (param, input) {
    return '<b>' + input.name + '</b> is missing';
}

$('.validate').validate();

var container = $('div.containerErrors');
// validate the form when it is submitted
$("#MainForm").validate({
    errorContainer: container,
    errorLabelContainer: $("ol", container),
    wrapper: 'li'
});

jQuery.validator.addClassRules("DateAfterToday", {
  required: true,
  FutureDate: true
});

jQuery.validator.addClassRules({
  DateAfterToday: {
    required: true,
    FutureDate: true
  },
  DateBeforeToday: {
    required: true,
    PastDate: true
  },
  Mobile: {
    required: true,
    MobileNumber: true
  }
});



$(".cancel").click(function() {
    validator.resetForm();
});// JavaScript Document

