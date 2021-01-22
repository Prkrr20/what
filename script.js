

money = 0;

function update() {
	document.getElementByID("money").innerHTML = money;
}


function increment() {
	money+=1;
	document.getElementByID("money").innerHTML = money;
	//update();
}