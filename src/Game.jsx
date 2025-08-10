import { useState } from 'react';
import './Game.css';
import { GameLayout } from './components/GameLayout';

function Game() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	return (
		<GameLayout
			field={field}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			setField={setField}
			setIsGameEnded={setIsGameEnded}
			setIsDraw={setIsDraw}
		/>
	);
}

export default Game;
