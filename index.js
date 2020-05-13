

document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

	const movesContainer = document.getElementById('moves-container');
	
	const validateMove = keyCode => {
		if (keyCode === "ArrowUp" || 
			keyCode === "ArrowDown" || 
			keyCode === "ArrowLeft" || 
			keyCode === "ArrowRight")
			{
				return true;
			} else {
				return false;
			};
	};

	const isDelete = keyCode => {
			if (keyCode === "Backspace" || keyCode === "Delete")
			{
				return true;
			} else {
				return false;
			}
	}

	document.addEventListener('keydown', event => {
		const keyCode = event.code;
		if (validateMove(keyCode))
			{
				logMove(keyCode);
			}
		else if (isDelete(keyCode))
			{
				deleteLast();
			}
		else {
			console.log('Use the arrow keys to log a move');
			console.log('Use backpace or delete to remove last move')
		}
	});

	const logMove = move => {
		const newMove = document.createElement('li');
		movesContainer.appendChild(newMove);
		newMove.className = 'move-list-item';
		newMove.innerHTML = getMoveDirection(move);
	};

	const getMoveDirection = keyCode => {
		switch(keyCode){
		case "ArrowUp":
				return 'up';
		case "ArrowDown":
				return 'down';
		case "ArrowLeft":
				return 'left';
		case "ArrowRight":
				return 'right';
		};
	};

	// Make the moves
	const moveButton = document.getElementById("move-button");

	const makeMoves = movesList => {
		let movesArray = Array.from(movesContainer.children);
		movesArray.forEach(moveRobot => {
			move(moveRobot.innerHTML);
			movesContainer.firstChild.remove();
		})
	};

	// Delete Move
	const deleteLast = () => {
		movesContainer.lastChild.remove();
	}

	moveButton.addEventListener('click', makeMoves);
})
