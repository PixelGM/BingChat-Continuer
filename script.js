function updateText() {
	var input = document.getElementById("input").value;
	var chunks = [];
	var currentChunk = "";
	var words = input.split(" ");
	for(var i = 0; i < words.length; i++) {
		if((currentChunk + words[i] + " ").length <= 1980) {
			currentChunk += words[i] + " ";
		} else {
			currentChunk += "WILL CONTINUE.";
			chunks.push(currentChunk.trim());
			currentChunk = "CONTINUE: " + words[i] + " ";
		}
	}
	if(currentChunk !== "") {
		chunks.push(currentChunk.trim());
	}
	var output = "";
	for(var i = 0; i < chunks.length; i++) {
		output += '<div class="text-container"><textarea class="text" readonly>' + chunks[i].replace(/</g, "&lt;").replace(/>/g, "&gt;") + '</textarea><button class="copy-button" onclick="copyText(event)">Copy</button></div>';
	}
	document.getElementById("output").innerHTML = output.trim();
}

function updateCounter() {
	var inputLength = document.getElementById("input").value.length;
	if(inputLength > 0) {
		var prompts = Math.ceil(inputLength / 2000);
		document.getElementById("counter").innerHTML = inputLength + "/2000 = " + prompts + " prompts";
	} else {
		document.getElementById("counter").innerHTML = "";
	}
}

function copyText(event) {
	var text = event.target.previousSibling.value;
	navigator.clipboard.writeText(text);
}
