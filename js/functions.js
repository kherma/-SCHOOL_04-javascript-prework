function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function printScore(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('resoult').appendChild(div);
}

function clearScore(){
	document.getElementById('resoult').innerHTML = '';
}