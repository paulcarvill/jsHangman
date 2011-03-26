var Hangman = function(word, element) {
	
	this.element = element;
	this.wordArray = word.split('');
	this.currentWord = [];
	var i = this.wordArray.length;
	while (i) {
		this.currentWord.push('?');
		i--;
	}
	this.tryCount = 0;
	this.maxTries = 3;
	
	this.init();
};

Hangman.prototype.init = function() {
	// create form
	this.gameForm = document.createElement('form');
	var input = document.createElement('input');
	input.name = 'letter';
	var submit = document.createElement('input');
	submit.type = 'submit';
	var label = document.createElement('label');
	label.text = "letter:";
	label.appendChild(input);
	this.gameForm.appendChild(label);
	this.gameForm.appendChild(submit);
	
	var that = this;
	this.gameForm.onsubmit = function(e) {
		e.preventDefault();
		that.tryLetter(this.letter.value);
		this.letter.value = '';
	}
	
	// create display
	this.display = document.createElement('p');
	this.display.style.fontSize = '3em';
	this.display.innerHTML = this.currentWord.join('');

	// create status
	this.status = document.createElement('p');
	
	this.element.appendChild(this.gameForm);
	this.element.appendChild(this.display);
	this.element.appendChild(this.status);
}

Hangman.prototype.setMaxTries = function(tries) {

	this.maxTries = tries;
	
}

Hangman.prototype.setStatus = function(status) {
	
	this.tryCount = status;
	
}

Hangman.prototype.getStatus = function() {
	
	return this.tryCount;
	
}

Hangman.prototype.getWordArray = function() {
	
	return this.wordArray;
	
}

Hangman.prototype.getCurrentWord = function() {
	
	return this.currentWord;
	
}

Hangman.prototype.getLetterInWord = function(letter) {
	
	var lettersInWord = 0;
	for(var i = 0; i < this.wordArray.length; i++) {
		if (this.wordArray[i] === letter) {
			lettersInWord++;
		}
	}
	return lettersInWord
	
}

Hangman.prototype.getLetterPositionsInWord = function(letter) {
	
	var letterPositions = [];
	for(var i = 0; i < this.wordArray.length; i++) {
		if (this.wordArray[i] === letter) {
			letterPositions.push(i);
		}
	}
	return letterPositions
}

Hangman.prototype.tryLetter = function(letter) {
	var incrementTry = 1;
	for(var i = 0; i < this.wordArray.length; i++) {
		if (this.wordArray[i] === letter) {
			this.currentWord[i] = letter;
			incrementTry = 0;
		}
	}
	if (incrementTry) {
		this.tryCount++;
		if (this.tryCount === this.maxTries) {
			this.setStatus('game over');
			this.gameForm.letter.disabled = true;
			
		}
	}
	
	if (this.currentWord.indexOf('?') === -1) {
		this.setStatus('you win');
	}
	
	this.display.innerHTML = this.currentWord.join('');
	this.status.innerHTML = this.tryCount;
}

Hangman.prototype.getTryCount = function() {
	
	return this.tryCount;
}

















