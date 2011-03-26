#Hangman
Hangman is a word game where you must guess letters which make up a word. You have a set number of guesses you are able to make before your man gets hanged. It comes with its own JavaScript test suite.

##Usage:
There is a single constructor function called Hangman. It takes two arguments:

_required_: a word, which is the word to be guessed in the game

_optional_: a container element to put the game into

Include either src/hangman or dist/hangman-min.js on your web page:

    <script src="hangman-min.js"></script>

then create an instance of the clock like this:

    var div = document.getElementById('myGame');
    var game = new Hangman('myWord, div);


##Build/Minification:
Tools are included to create the minified version of the script. On *nix run the build.sh bash script in the root directory, which invokes the supplied YUI-Compressor and puts a copy of the minified script in both the dist and web directories. to run it use:

    ./build.sh

If you have any problems you may need to use:

    sudo ./build.sh

##Demo:
There is a complete working demo in the web directory. Just open the index.html file in a web browser.

##Tests
There is a test suite in the test directory. The lib directory contains the JsTestDriver test runner you will need to run the tests. To run the tests:

1. open a terminal window
2. cd into the root directory of the Hangman repo
3. java -jar lib/JsTestDriver-1.2.2.jar --port 9876
4. open a browser at 127.0.0.1:9876
5. click the 'capture this browser' link
6. open a new terminal window
7. java -jar lib/JsTestDriver-1.2.2.jar --reset --config conf/jsTestDriver.conf --tests all
8. tests will be run in the captured browser (you may capture more than one at a time if you want) and the results reported in the terminal window you ran them from