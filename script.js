$(document).ready(function(){


	//opens random page
	$("#random").on("click", function(){
		var randomWiki = "https://en.wikipedia.org/wiki/Special:Random";
		window.open(randomWiki, '_blank');
	});	 

	//we need to get data to autocomplete, so when we start typing, this script will getJson file so that can autocomplete from it.
	$("#searchLine").on("keyup", function(){
		//our input in search bar
		var searchTerm = $("#searchLine").val();
		//link to wiki api
		var wikiLink = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
		$.getJSON(wikiLink, function(data){
			$("#searchLine").autocomplete({
				source: data[1]
			});
		});
	});	

	$("#searchBtn").on("click", function(){

		//our input in search bar
		var searchTerm = $("#searchLine").val();
		//link to wiki api
		if(searchTerm == ''){
			
		}else
		var wikiLink = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
		//clears all elements from #results elements so if we make a new search, old results will get deleted
		$("#results").empty();
		$.ajax({
		    url: wikiLink,
		    type: 'GET',
		    	cache: false,
		    dataType: "json",
		    headers: { 'Api-User-Agent': 'Witold_wikiApp/1.0' },
		    async: false,
		    contentType: "application/json",
		    	success: function(data) {
		    		console.log(data);
		    		//we loop through results, get headers and descriptions and create p elements to store them in
		    		if (data[1].length == 0){
		    			$("#results").html('No results found, try different query');
		    		}else
			    		for (i=0; i<data[1].length; i++){

				    		$("#results").append($("<a target='blank' href="+data[3][i]+ "> <p id=\"pageLink\"><strong>"+data[1][i]+"</strong><br>"+data[2][i]+"</p></a>"));
			    			
			    		}
		    	
 		    	},
 		    	error: function(errorMsg){
 		    	alert('Search box is empty, please put something in.');
 		    	}
		});
	});

});