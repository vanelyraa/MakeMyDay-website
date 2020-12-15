/*js_external.js
 *@Patryck Brenner
 * 14th Dec 2020
 */

//set a variable for trip_price
var trip_price = new Array();
trip_price [""] = 0;
trip_price ["adventure"] = 35.00;
trip_price ["history"] = 45.00;
trip_price ["got"] = 50.00;


function getTripPrice() {
	
	var new_price = 0	
	var theForm = document.forms["contact_us"];
	var selectedTrip = theForm.elements["trip"];
	
	new_price = trip_price[selectedTrip.value];
		
	 return new_price;
}

function getNumPeople() {
	
	var numberPeople = 0;
	var theForm = document.forms["contact_us"];
	var amount_people = theForm.elements["numPeople"];
	
	numberPeople = amount_people.value;
	
	return numberPeople;
}

function calculateTotal(){
	
	var totalPrice = getTripPrice() * getNumPeople();
	

	var divobj = document.getElementById("totalPrice");
    divobj.style.display="block";
    divobj.innerHTML = "Total Price is  " + totalPrice + " euros";
	
	
}

//function to hide the total price
function hideTotal()
{
    var divobj = document.getElementById("totalPrice");
    divobj.style.display="none";
}


















