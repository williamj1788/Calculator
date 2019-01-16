
var buttons = document.getElementsByTagName("BUTTON");
var titleBarText = document.querySelector(".title").querySelector('p');
var historyText = document.querySelector(".history");
var isNewLine = false;

buttons = Array.from(buttons);


var eventHandler = (element) =>{
	let addString = () => {
		if(isNewLine){
			titleBarText.innerHTML = "";
			isNewLine = false;
		}
		let text = element.innerHTML;
		let originalText = titleBarText.innerHTML;
		let newText = originalText + text;
		titleBarText.innerHTML = newText;
	};
	element.addEventListener('click',addString);
};

var ConvertToNumber = () =>{
	let text = titleBarText.innerHTML;
	let number = eval(text);
	titleBarText.innerHTML = number.toString(10);
	
	let newHistoryElement = document.createElement("P");
	newHistoryElement.innerHTML = text + ' = ' +  number.toString(10);
	newHistoryElement.className = "historyElement";
	newHistoryElement.style.display = "block";
	historyText.appendChild(newHistoryElement);
	isNewLine = true;
	console.log(document.querySelector(".historyElement"));
};

enterButton = buttons.filter(element => element.innerHTML == 'Enter');
buttons = buttons.filter(element => element.innerHTML != 'Enter');
buttons.forEach(eventHandler);
enterButton[0].addEventListener('click',ConvertToNumber);
console.log(historyText);


