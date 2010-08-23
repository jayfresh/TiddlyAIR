$(document).ready(function() {
	ChatAlerter.removeCredentials();
	ChatAlerter.start();
});

//this works:
/*$(document).ready(function() {
	var data = '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/"><se:Header xmlns:sfns="urn:partner.soap.sforce.com"/><se:Body><login xmlns="urn:partner.soap.sforce.com" xmlns:ns1="sobject.partner.soap.sforce.com"><username>jl-chatloop@singletracksystems.com</username><password>temp123430ykkuCQ8lH21FoxGbMLwkca</password></login></se:Body></se:Envelope>';
	$.ajax({
		url: "https://chatloop.na7.visual.force.com/services/Soap/u/16.0",
		type: "POST",
		contentType: "text/xml; charset=UTF-8",
		data: data,
		beforeSend: function(xhr) {
			xhr.setRequestHeader("SOAPAction", '""');
		},
		error: function() {
			air.trace('error!');
		},
		complete: function(xhr) {
			$('#chats').text(xhr.responseText);
		}
	});
});*/

