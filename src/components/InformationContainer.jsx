import PropTypes from 'prop-types';
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
	};

	return <InformationLayout text={text} click={startAgain} />;
};

InformationContainer.propTypes = {
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	setField: PropTypes.func,
};
