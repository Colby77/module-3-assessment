console.log("hello world");

let duckPic = document.querySelector('img')

function handleSubmit(evt) {
	evt.preventDefault();
	alert('From successfully submitted!');
}

function duckMessage(){
	alert('I like your shirt')
}


let form = document.querySelector('form#contact');

duckPic.addEventListener('mouseover', duckMessage)
form.addEventListener('submit', handleSubmit);
