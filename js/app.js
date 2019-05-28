// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

var textToSpeak = "*"; 
// Variables for saving random word/phrase from arrays
var ranSbj = ranVerb = ranAdj = ranObj = ranPlc = "*"; // For checking if a user clicked all the buttons

// Random word/phrase arrays
var sbjs = ["The turkey", "Mom", "Dad", "My dog", "My teacher", "The elephant", "The cat"];
var verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjs = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var objs = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var plcs = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Grab the location
var sbjBtn = document.querySelector("#sbjBtn");
var verbBtn = document.querySelector("#verbBtn");
var adjBtn = document.querySelector("#adjBtn");
var objBtn = document.querySelector("#objBtn");
var plcBtn = document.querySelector("#plcBtn");

var speakBtn = document.querySelector("#speakBtn");
var oneclkBtn = document.querySelector("#oneclkBtn"); //one click Btn

var resetBtn = document.querySelector("#resetBtn");

var story = document.querySelector(".storyContainer");

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

function randomValueFromArray(array){
	return array[Math.floor(Math.random()*array.length)];
}

function result(array, Booleans) { 
	// create phrase story
	var ranSlct = randomValueFromArray(array);

	// Speak a word/phrase only when a user clicks these button: Subject, Verb, Adjective, Object, Place
	// When the user clicks "Make a random story and speak", JS will only speak the sentence, not the word
	if (Booleans == true) {
		speakNow(ranSlct);
	}

	switch (array) {
		case sbjs:
			// Set random Subject Item to ranSbj variable
			ranSbj = ranSlct;
			let sNo;

			// For checking the order of the items of an array
			for (let i = 0; i < sbjs.length; i++) { 
				if (ranSbj == sbjs[i]) { 
					sNo = "#s" + i.toString();
					let slctItem = document.querySelector(sNo); // Grab the td id of a table
					slctItem.style = "background-color:yellow"; // Set the colour of selected item cell to yellow
				}
				else {
					sNo = "#s" + i.toString();
					let slctItem = document.querySelector(sNo);
					slctItem.style = "background-color:transparent"; // Set the colour of unchosen item cell to transparent
				}
			}
			break;
		case verbs:
			ranVerb = ranSlct;
			let vNo;
			for (let i = 0; i < verbs.length; i++) {
				if (ranVerb == verbs[i]) {
					vNo = "#v" + i.toString();
					let slctItem = document.querySelector(vNo);
					slctItem.style = "background-color:yellow";
				}
				else {
					vNo = "#v" + i.toString();
					let slctItem = document.querySelector(vNo);
					slctItem.style = "background-color:transparent";
				}
			}
			break;			
		case adjs:
			ranAdj = ranSlct;
			let aNo;
			for (let i = 0; i < adjs.length; i++) {
				if (ranAdj == adjs[i]) {
					aNo = "#a" + i.toString();
					let slctItem = document.querySelector(aNo);
					slctItem.style = "background-color:yellow";
				}
				else {
					aNo = "#a" + i.toString();
					let slctItem = document.querySelector(aNo);
					slctItem.style = "background-color:transparent";
				}
			}
			break;		
		case objs:
			ranObj = ranSlct;
			let oNo;
			for (let i = 0; i < objs.length; i++) {
				if (ranObj == objs[i]) {
					oNo = "#o" + i.toString();
					let slctItem = document.querySelector(oNo);
					slctItem.style = "background-color:yellow";
				}
				else {
					oNo = "#o" + i.toString();
					let slctItem = document.querySelector(oNo);
					slctItem.style = "background-color:transparent";
				}
			}
			break;	
		case plcs:
			ranPlc = ranSlct;
			let pNo;
			for (let i = 0; i < plcs.length; i++) {
				if (ranPlc == plcs[i]) {
					pNo = "#p" + i.toString();
					let slctItem = document.querySelector(pNo);
					slctItem.style = "background-color:yellow";
				}
				else {
					pNo = "#p" + i.toString();
					let slctItem = document.querySelector(pNo);
					slctItem.style = "background-color:transparent";
				}
			}
			break;										
	}

	// Make a sentence
	textToSpeak = ranSbj + " " + ranVerb + " " + ranAdj + " " + ranObj + " " + ranPlc;
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the Btn that speaks the text contained in the above var textToSpeak
/*
speakBtn.onclick = function() {
	speakNow(textToSpeak);
}*/

// I changed the code since using addEventListener is recommended rather than using onclick
speakBtn.addEventListener("click", function() {
	// If a user clicked all the buttons, so textToSpeak variable has no *
	if (textToSpeak.indexOf("*") == -1) {
		speakNow(textToSpeak);

		story.insertAdjacentHTML("afterbegin"
		, "<div class = \"card w-75\"> <div class = \"card-body\">" + textToSpeak + "</div></div>");
	}
	// Or alert
	else {
		alert("Please choose all options");
	}
});

// Execute result function and assign random a word/phrase to each variable
sbjBtn.addEventListener("click", function(){
	result(sbjs, true);
});
verbBtn.addEventListener("click", function(){
	result(verbs, true);
});
adjBtn.addEventListener("click", function(){
	result(adjs, true);
});
objBtn.addEventListener("click", function(){
	result(objs, true);
});
plcBtn.addEventListener("click", function(){
	result(plcs, true);
});

// Make a random story and speak
oneclkBtn.addEventListener("click", function() {
	// Assign a random word/phrase but not to speak ('false' parameter)
	result(sbjs, false);
	result(verbs, false);
	result(adjs, false);
	result(objs, false);
	result(plcs, false);

	// Speak and display a sentence
	speakNow(textToSpeak);

	story.insertAdjacentHTML("afterbegin"
	, "<div class = \"card w-75\"> <div class = \"card-body\">" + textToSpeak + "</div></div>");


})

// Reset all variables
resetBtn.addEventListener("click",function() {	
	ranSbj = ranVerb = ranAdj = ranObj = ranPlc = "*";	
	textToSpeak = ranSbj + " " + ranVerb + " " + ranAdj + " " + ranObj + " " + ranPlc;
	story.textContent = "";

	// Make the colour of all cells to transparent 
	let nNo;
	for (let i = 0; i < sbjs.length; i++) {
			nNo = "#s" + i.toString();
			let slctItem = document.querySelector(nNo);
			slctItem.style = "background-color:transparent";
		}
	for (let i = 0; i < verbs.length; i++) {
		nNo = "#v" + i.toString();
		let slctItem = document.querySelector(nNo);
		slctItem.style = "background-color:transparent";
	}	
	for (let i = 0; i < adjs.length; i++) {
		nNo = "#a" + i.toString();
		let slctItem = document.querySelector(nNo);
		slctItem.style = "background-color:transparent";
	}
	for (let i = 0; i < objs.length; i++) {
		nNo = "#o" + i.toString();
		let slctItem = document.querySelector(nNo);
		slctItem.style = "background-color:transparent";
	}
	for (let i = 0; i < plcs.length; i++) {
		nNo = "#p" + i.toString();
		let slctItem = document.querySelector(nNo);
		slctItem.style = "background-color:transparent";
	}					
})