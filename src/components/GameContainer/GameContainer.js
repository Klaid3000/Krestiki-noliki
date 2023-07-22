import { useState } from 'react';
import { calculateWinner } from '../CalculateWinner/calculateWinner';
import GameBoard from '../GameBoard/GameBoard';

export default function GameContainer() {
	const [xIsNext, setXIsNext] = useState(true);
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [status, setStatus] = useState('Next player: X');

	function handleClick(i) {
		if (squares[i] || calculateWinner(squares)) {
			return;
		}

		const nextSquares = squares.slice();
		if (xIsNext) {
			nextSquares[i] = 'X';
		} else {
			nextSquares[i] = 'O';
		}
		setSquares(nextSquares);
		setXIsNext(!xIsNext);

		const winner = calculateWinner(nextSquares);
		if (winner) {
			setStatus(`Player ${winner} win!`);
		} else if (!nextSquares.includes(null)) {
			setStatus("It's a draw!");
		} else {
			setStatus(`Next player: ${xIsNext ? 'O' : 'X'}`);
		}
	}

	function newGameClick() {
		setSquares(Array(9).fill(null));
		setXIsNext(true);
		setStatus('Next player: X');
	}

	return (
		<div className="game-container">
			<div className="status">{status}</div>
			<GameBoard squares={squares} onSquareClick={handleClick} />
			<button className="new-game" onClick={newGameClick}>
				Start new game
			</button>
		</div>
	);
}
