
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
	try{
		let number = eval(text);
		titleBarText.innerHTML = number.toString(10);
		
		let newHistoryContainer = document.createElement("DIV");
		let newHistoryElement = document.createElement("P");
		
		newHistoryElement.innerHTML = text + ' = ' +  number.toString(10);
		newHistoryElement.className = "historyElement";
	
		newHistoryContainer.appendChild(newHistoryElement);
		historyText.appendChild(newHistoryContainer);
	}
	catch(err){
		titleBarText.innerHTML = "Error";
	}
	
	
	
	isNewLine = true;
};

var clearTitle = () => {
	titleBarText.innerHTML = "";
};

var removeOneChar = () =>{
	let string = titleBarText.innerHTML;
	string = string.slice(0,-1);
	titleBarText.innerHTML = string;
};

enterButton = buttons.filter(element => element.innerHTML == 'Enter');
clearButton = buttons.filter(element => element.innerHTML == 'Clear');
backButton = buttons.filter(element => element.innerHTML == 'Back');

buttons = buttons.filter(element => element.innerHTML != 'Enter' && element.innerHTML != 'Clear' && element.innerHTML != 'Back');

buttons.forEach(eventHandler);
enterButton[0].addEventListener('click',ConvertToNumber);
clearButton[0].addEventListener('click',clearTitle);
backButton[0].addEventListener('click',removeOneChar);


