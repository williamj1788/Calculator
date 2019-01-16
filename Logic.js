
var buttons = document.getElementsByTagName("BUTTON");
var titleBarText = document.querySelector(".title").querySelector('p');

buttons = Array.from(buttons);

var eventHandler = (element) =>{
	let addString = () => {
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
};

enterButton = buttons.filter(element => element.innerHTML == 'Enter');
buttons = buttons.filter(element => element.innerHTML != 'Enter');
buttons.forEach(eventHandler);
enterButton[0].addEventListener('click',ConvertToNumber);
console.log(eval('5+3*8'));

