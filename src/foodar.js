classic.onclick= function(){
	var price= 3;

	if(document.getElementById("ten").checked){
		price = 3.3;
		document.getElementById("total").innerHTML= "Total: $" +price.toFixed(2);
	}else if(document.getElementById("fifteen").checked){
		price = 3.45;
		document.getElementById("total").innerHTML= "Total: $" +price.toFixed(2);
	}else if(document.getElementById("twenty").checked){
		price = 3.6;
		document.getElementById("total").innerHTML= "Total: $" +price.toFixed(2);
	}else{
		document.getElementById("total").innerHTML= "Total: $" +price.toFixed(2);
	}


	ten.onclick= function(){
		price = 3.3;
		document.getElementById("total").innerHTML= "Total: $" +price.toFixed(2);
	}

	fifteen.onclick= function(){
		price = 3.45;
		document.getElementById("total").innerHTML= "Total: $" +price.toFixed(2);
	}

	twenty.onclick= function(){
		price = 3.6;
		document.getElementById("total").innerHTML= "Total: $" +price.toFixed(2);
	}
}

premium.onclick= function(){
	var price= 5;
	
	if(document.getElementById("ten").checked){
		price = 5.5;
		document.getElementById("total").innerHTML= "Total: $" +price.toFixed(2);
	}else if(document.getElementById("fifteen").checked){
		price = 5.75;
		document.getElementById("total").innerHTML= "Total: $" +price.toFixed(2);
	}else if(document.getElementById("twenty").checked){
		price = 6;
		document.getElementById("total").innerHTML= "Total: $" +price.toFixed(2);
	}else{
		document.getElementById("total").innerHTML= "Total: $" +price.toFixed(2);
	}


	ten.onclick= function(){
		price = 5.5;
		document.getElementById("total").innerHTML= "Total: $" +price.toFixed(2);
	}

	fifteen.onclick= function(){
		price = 5.75;
		document.getElementById("total").innerHTML= "Total: $" +price.toFixed(2);
	}

	twenty.onclick= function(){
		price = 6;
		document.getElementById("total").innerHTML= "Total: $" +price.toFixed(2);
	}
}

royal.onclick= function(){
	var price= 10;

	if(document.getElementById("ten").checked){
		price = 11;
		document.getElementById("total").innerHTML= "Total: $" +price.toFixed(2);
	}else if(document.getElementById("fifteen").checked){
		price = 11.5;
		document.getElementById("total").innerHTML= "Total: $" +price.toFixed(2);
	}else if(document.getElementById("twenty").checked){
		price = 12;
		document.getElementById("total").innerHTML= "Total: $" +price.toFixed(2);
	}else{
		document.getElementById("total").innerHTML= "Total: $" +price.toFixed(2);
	}


	ten.onclick= function(){
		price = 11;
		document.getElementById("total").innerHTML= "Total: $" +price.toFixed(2);
	}

	fifteen.onclick= function(){
		price = 11.5;
		document.getElementById("total").innerHTML= "Total: $" +price.toFixed(2);
	}

	twenty.onclick= function(){
		price = 12;
		document.getElementById("total").innerHTML= "Total: $" +price.toFixed(2);
	}
}