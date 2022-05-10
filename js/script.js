jQuery(document).ready(function($) {
	$("form").submit(function(e) {
		$("#results").text(`Thank you ${$("#firstName").val()} ${$("#lastName").val()}, ${$("#occupation").val()}, born ${$("#birth").val()} for your generous donation!`);
		e.preventDefault();
	});
});