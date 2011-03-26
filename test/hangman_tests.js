hangmanTest = TestCase("hangman");

hangmanTest.prototype.setUp = function(){
	/*:DOC += <div id="container"></div>*/
	this.hangman = new Hangman('testing', document.getElementById('container'));
};

hangmanTest.prototype.tearDown = function(){

};

hangmanTest.prototype.testHangmanIsNotUndefined = function() {
	assertNotEquals('undefined', Hangman)
};

hangmanTest.prototype.testArrayCreatedForSuppliedWord = function() {
	var wordArray = this.hangman.getWordArray();
	assertEquals(7, wordArray.length);
};

hangmanTest.prototype.testWeFindCorrectNumberOfCharactersInWord = function() {
	assertEquals(2, this.hangman.getLetterInWord('t'));
	assertEquals(1, this.hangman.getLetterInWord('g'));
	assertEquals(0, this.hangman.getLetterInWord('x'));
}

hangmanTest.prototype.testWeFindCorrectPositionOfEachCharacterInWord = function() {
	assertEquals([0, 3], this.hangman.getLetterPositionsInWord('t'));
	assertEquals([6], this.hangman.getLetterPositionsInWord('g'));
	assertEquals([], this.hangman.getLetterPositionsInWord('x'));
}

hangmanTest.prototype.testCurrentPlayingWordCreatedCorrectly = function() {
	assertEquals(['?', '?', '?', '?', '?', '?', '?'], this.hangman.getCurrentWord());
}
	
hangmanTest.prototype.testWePopulateWordWithCorrectlyGuessedLetters = function() {
	this.hangman.tryLetter('t'); 	// input letter
	assertEquals(['t', '?', '?', 't', '?', '?', '?'], this.hangman.getCurrentWord()); // get output word
}


hangmanTest.prototype.testIncorrectGuessIncrementsTryCount = function() {
	this.hangman.tryLetter('x');
	assertEquals(1, this.hangman.getTryCount());
	this.hangman.tryLetter('p');
	assertEquals(2, this.hangman.getTryCount());
}

hangmanTest.prototype.testGameOverWhenMaxTrysMade= function() {
	this.hangman.setMaxTries(3);
	this.hangman.tryLetter('x');
	this.hangman.tryLetter('y');
	assertEquals(2, this.hangman.getStatus());
	this.hangman.tryLetter('z');
	assertEquals('game over', this.hangman.getStatus());
}

hangmanTest.prototype.testCompletionChecker = function() {
	assertEquals('-1', this.hangman.getCurrentWord().indexOf('x'));
	assertEquals('0', this.hangman.getCurrentWord().indexOf('?'));
	this.hangman.tryLetter('t');
	assertEquals('0', this.hangman.getCurrentWord().indexOf('t'));
}

hangmanTest.prototype.testWinWhenAllLettersGuessed = function() {
	this.hangman.tryLetter('t');
	this.hangman.tryLetter('e');
	this.hangman.tryLetter('s');
	this.hangman.tryLetter('i');
	this.hangman.tryLetter('n');
	this.hangman.tryLetter('g');
	assertEquals('you win', this.hangman.getStatus());
}

// test tried letters added to status display



