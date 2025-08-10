import { InformationLayout } from './InformationLayout';

export const InformationContainer = ({
	isDraw,
	setIsDraw,
	isGameEnded,
	setIsGameEnded,
	currentPlayer,
	setCurrentPlayer,
	setField,
}) => {
	let text;

	if (isDraw) {
		text = 'Ничья';
	} else if (isGameEnded) {
		text = `Победа: ${currentPlayer}`;
	} else if (isGameEnded === false) {
		text = `Ходит: ${currentPlayer}`;
	}

	const startAgain = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
		console.log(currentPlayer, isGameEnded, isDraw);
	};

	return <InformationLayout text={text} click={startAgain} />;
};
