$(document).ready(function(){
	$("#basecamp-div").hover(function(){
		$(".permanent").toggleClass("hidden");
		$("#basecamp-temp").toggleClass("hidden");
	});	

	$("#highrise-div").hover(function(){
		$(".permanent").toggleClass("hidden");
		$("#highrise-temp").toggleClass("hidden");
	});	

	$("#campfire-div").hover(function(){
		$(".permanent").toggleClass("hidden");
		$("#campfire-temp").toggleClass("hidden");
	});	
});