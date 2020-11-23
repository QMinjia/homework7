function gettingJSON(){
    //Display the forecast
    // Your code here.

    //Set default location if one isn't provided
    let location = "48105,us";

    // Your code here.
	if (document.querySelector("#location").value) {
		location = document.querySelector("#location").value;
	}
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format = "imperial";

    // Your code here.
	if (document.querySelectorAll("input[name=temp]:checked").length!=0) {
		format = document.querySelectorAll("input[name=temp]:checked")[0].value;
	}
    console.log("Format is " + format);

    //set the query  
    let query = "https://api.openweathermap.org/data/2.5/weather?q=" + location + 
				"&units=" + format + 
				"&APPID=deaaeacad26b66f7fb35811414b9c06a";
    // Your code here.  
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.

	// loc = location;
	// temp = document.querySelector("#temp").value;
	// tempImg = document.querySelector("#tempImg").value;
	

    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
		console.log(JSON.stringify(json));
		loc = json["name"];
		console.log(loc);
		temp = json["main"]["temp"];
		console.log(temp);
		desp = json["weather"][0]["description"];
		console.log(desp);
		tempImg = json["weather"][0]["icon"];
		console.log(tempImg);
		$('#tempImg').attr('src', "http://openweathermap.org/img/w/" + tempImg + ".png");
		$('#tempImg').attr('alt', loc); 
		document.querySelector("#loc").innerHTML = loc;

		document.querySelector("#temp").innerHTML = temp + " with " + desp;
		
		document.querySelector('#forecast').style.display = "block";
    });
}
