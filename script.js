function myFunction(element){
	var stringc = "#";
	var makingColorCode = "0123456789ABCDEF";
	for(let i = 0; i < 6; i++){
		stringc += makingColorCode[Math.floor(Math.random()*makingColorCode.length)];
	}
	element.style.color = stringc;
}

function hover(el){
	el.style.color = "white";
	el.style.backgroundColor = "navy";
	el.style.position = "absolute";
	const movey = document.getElementById('toMove');
	pos += vel;
	if(count == w){
		vel *= -1;
		count = 1;
	}
	movey.style.left = pos+'px';
	count++;
	
	
}

let box = document.querySelector('.mother');
let w= box.offsetWidth;

let vel = 4;
let pos = 0;
let count = 0;
