// Variable that selects the input box that we see on the screen that the user interacts with
const input = document.querySelector('#fruit');
// This selects the ul thats inside of the .suggestions div. 
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// The function search accepts the argument of a string or str. The purpose of this is to go through the str and check the char of the str and return an array of fruits that consist of the same char of the str. 
function search(str) {
	let results = [];

	// Places every character of the string at a lowercase so it can be matched to the lowercase fruit in the fruits array
	let strLowercase = str.toLowerCase();
	// This is what refreshes the suggestions section everytime that something is input. For example if the user types an A then the suggestions displayed are all fruits with an A in them. 
	// But when another character such as a p is inserted then the displayed results is refreshed to blank then the function looks for words that have an ap in them. 
	suggestions.innerHTML = ""

		// when this function is called it loops through the fruits array by every fruit
		for(let fruit of fruits){
		// This variable makes sure that the char of the str still checks against the fruits array no matter the casing.  
		let fruitLowercase = fruit.toLowerCase();

		// If the individual fruit inside of the fruits array contains the str inputs by the user then the fruit is going to be pushed to the results array. 
		if(fruitLowercase.includes(strLowercase)){
			results.push(fruit)
		}
	}

	

	return results;
}



// The showSuggestions function takes in two parameters. One parameter being results. This does not mean the results array but rather a string that is given the argument name as results. And it accepts a inputVal
function showSuggestions(results, inputVal) {

	// For the result of the results variable. This once again is just a loop that will loop through whatever string that is input 
	for(let result of results){
		// Create a li for every result. This meaning every result that is input there is a li created for it. 
		let li = document.createElement("li")
		// adds a click event to the li so that when it is clicked it can be put in the fruits input box
		li.addEventListener("click", useSuggestion)

		// This adds the text from result to the newly created li
		li.innerText = result
		// This appends the new li to the ul in the suggestion div
		suggestions.appendChild(li)
	}
}

// This is the function used in the event listner for input. The event listner for the input variable is a keyup event meaning everytime a key is fully pressed this function is called.
// This function also needs to call the showSuggestions function because thats how the results populate. 
function searchHandler(e) {

	// There needs 
	let inputVal = e.target.value; 
	
	// If there are more than 1 inputs inside of the fruit input box
	if(inputVal.length > 0){

		// adding the showSuggestions function places the suggestions under the input box  
		showSuggestions(search(inputVal), inputVal)
	}
	else{
		// There are no results to append to the suggestion ul
		suggestions.innerHTML="";
	}


}


// This is for the suggestions that are clicked that are inside of the suggestions ul 
function useSuggestion(e) {
	
	// this is the variable for when the fruit is clicked / selected inside of the suggestion ul
	let selectedFruit = e.target.innerHTML

	// This changes the input inside of the fruit input box to the selecedFruit 
	input.value = selectedFruit

	// This clears the suggestions from the ul because you have now swlected the fruit of your choosing. 
	suggestions.innerHTML =""
}

// searchHandler is the function for the event listner for the input box with the fruit id. Thats why when the fruit text box is selected and a key event happens the results list is displayed
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);