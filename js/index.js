const tflLines = [
	["Central", "#dc241f"], 
	["District", "#007229"], 
	["DLR", "#00afad"], 
	["Overground", "#e86a10"],
	["Waterloo & City", "#76d0bd"],
	["Bakerloo", "#894e24"],
	["Circle", "#ffce00"],
	["Hammersmith & City", "#d799af"], 
	["Jubilee", "#6a7278"],
	["Metropolitan", "#751056"],
	["Northern", "#000"],
	["Piccadily", "#0019a8"],
	["Victoria", "#00a0e2"]
];

let inputOne = document.getElementById("exampleInputEmail1");
let inputTwo = document.getElementById("exampleInputPassword1");
let result = document.getElementById("result");

let randomNumber = function () {
	return Math.floor((Math.random() * 13) + 1);
};

let metroLine = function(event) {
	event.preventDefault();
	if (inputOne.value === "" || inputTwo.value === "") {
		alert("Current location or destination is missing.");
	} else {
		let selectedLine = tflLines[randomNumber()];
		result.innerHTML = selectedLine[0];
		result.setAttribute("style", "border-color:" + selectedLine[1])
	};
};

document.getElementById("search").addEventListener("click", metroLine);

