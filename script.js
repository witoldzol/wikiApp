$(document).ready(function(){

	$("#searchBtn").on("click", function(){
		var searchTerm = $("#searchLine").val();
		var wikiLink = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

		
		$.ajax({
		    url: wikiLink,
		    type: 'GET',
		    dataType: "json",
		    contentType: "application/json; charset=utf-8",
		    headers: { 'Api-User-Agent': 'Witold_wikiApp/1.0' },
		    async: false,
		    success: function(data, status, jqXHR) {
		       // do something with data
		       //$.getJSON("https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json", function(data){
		       		console.log(data);
		      // });
		    }
		});

	});

});