window.onload = function() {

	// DOM objects
	var boxes = document.getElementsByClassName('box');
	var resetBtn = document.getElementById('reset');
	var newGameBtn = document.getElementById('new-game-btn');
	var winMsg = document.getElementById('win-msg');
	var newGameMsg = document.getElementById('new-game-msg');

	// track play
	var turn = true;
	var playsX = [];
	var playsO = [];

	// store winning combinations
	var winningCombos = [
		[1,2,3],
		[1,4,7],
		[1,5,9],
		[4,5,6],
		[3,6,9],
		[3,5,7],
		[7,8,9],
		[2,5,8]
	];

	// TODO:
	// connect draw notification
	// animate winning boxes - function to change class, pass in winning combo [arr]
	// to apply on win to boxes that match the winning combination
	// refactor checkWin - create the winning combo [arr] of winning [arr]
	// alternate onclick syntax like resetBtn.on('click', clearGame) ?

	// Write checkDraw last
	// this doesn't work yet
	var checkDraw = function(playX, playO) {
		if (playX.length + playY.length >= 9 && !checkWin) {
			console.log("Draw!");
			showMessage("Draw!");
			return true;
		} 
	};

	var displayWinningBoxes = function(plays) {
		for (var i = 0; i < plays.length; i++) {
			document.querySelector('.box[data-position="' + plays[i] + '"]').className += ' winning-play';
		}
	};

	var clearGame = function() {
		for (var i = 0; i < boxes.length; i++) {
			boxes[i].innerHTML = '';
			boxes[i].className = 'box';
		}
		playsX = [];
		playsO = [];
	};

	// Show the proper win message
	var showMessage = function(msg) {
		if (msg !== '') {
			winMsg.innerHTML = msg;
			winMsg.className = 'msg';
			window.setTimeout(hide, 2000, winMsg);
			window.setTimeout(function() { winMsg.innerHTML = ''; }, 2000);
		}
	};

	var hide = function(el) {
		el.className += ' hidden';
	};


	// Check current plays for a winning combination
	// parseInt on values before comparing to improve performance
	// consider keeping winning plays in an array of arrays - will that reduce the if/else?
	// each of these if conditionals is essentially the same except comparing against a differnt winning combo
	// keep winning combos in an array and loop through comparisons, passing in each winning combo?
	var checkWin = function(play) {

		if (play === playsX) {
			player = "X";
		} else {
			player = "O";
		}

		if ((play.indexOf('1') !== -1) && (play.indexOf('2') !== -1) && (play.indexOf('3') !== -1)) {
			playing = false;
			console.log(player + ' wins!');
			displayWinningBoxes(winningCombos[0]);
			showMessage(player + " wins!");
			return true;
		} else if (play.indexOf('1') !== -1 && play.indexOf('4') !== -1 && play.indexOf('7') !== -1) {
			playing = false;
			console.log(player + ' wins!');
			showMessage(player + " wins!");
			displayWinningBoxes(winningCombos[1]);
			return true;
		} else if (play.indexOf('1') !== -1 && play.indexOf('5') !== -1 && play.indexOf('9') !== -1) {
			playing = false;
			console.log(player + ' wins!');
			showMessage(player + " wins!");
			displayWinningBoxes(winningCombos[2]);
			return true;
		} else if (play.indexOf('4') !== -1 && play.indexOf('5') !== -1 && play.indexOf('6') !== -1) {
			playing = false;
			console.log(player + ' wins!');
			showMessage(player + " wins!");
			displayWinningBoxes(winningCombos[3]);
			return true;
		} else if (play.indexOf('3') !== -1 && play.indexOf('6') !== -1 && play.indexOf('9') !== -1) {
			playing = false;
			console.log(player + ' wins!');
			showMessage(player + " wins!");
			displayWinningBoxes(winningCombos[4]);
			return true;
		} else if (play.indexOf('3') !== -1 && play.indexOf('5') !== -1 && play.indexOf('7') !== -1) {
			playing = false;
			console.log(player + ' wins!');
			showMessage(player + " wins!");
			displayWinningBoxes(winningCombos[5]);
			return true;
		} else if (play.indexOf('7') !== -1 && play.indexOf('8') !== -1 && play.indexOf('9') !== -1) {
			playing = false;
			console.log(player + ' wins!');
			showMessage(player + " wins!");
			displayWinningBoxes(winningCombos[6]);
			return true;
		} else if (play.indexOf('2') !== -1 && play.indexOf('5') !== -1 && play.indexOf('8') !== -1) {
			playing = false;
			console.log(player + ' wins!');
			showMessage(player + " wins!");
			displayWinningBoxes(winningCombos[7]);
			return true;
		} else {
			checkDraw(playX, playO);
			return false;
		}
	};

	for (var i = 0; i < boxes.length; i++) {
		boxes[i].onclick = function(e) {

			if (turn && this.innerHTML === '') {
				this.innerHTML = 'X';
				this.className += " x";
				turn = false;
				playsX.push(this.getAttribute('data-position'));
				checkWin(playsX);
			} else if (!turn && this.innerHTML === '') {
				this.innerHTML = 'O';
				this.className += " o";
				turn = true;
				playsO.push(this.getAttribute('data-position'));
				checkWin(playsO);
			}
			console.log("X plays: ", playsX);
			console.log("O plays: ", playsO);
		};
	}

	// Game reset; used addEventListener to limit to one line
	resetBtn.addEventListener('click', clearGame);

	// New Game
	// same as reset, but show the new game message
	newGameBtn.onclick = function() {
		clearGame();
		newGameMsg.className = 'msg';
		window.setTimeout(hide, 2000, newGameMsg);
	};

 };





















