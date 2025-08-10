import PropTypes from 'prop-types';
import { InformationContainer } from './InformationContainer';
import { FieldContainer } from './FieldContainer';
import styles from './GameLayout.module.css';

export const GameLayout = ({
	field,
	isDraw,
	setIsDraw,
	isGameEnded,
	currentPlayer,
	setCurrentPlayer,
	setField,
	setIsGameEnded,
}) => {
	return (
		<div className={styles.container}>
			<FieldContainer
				field={field}
				setField={setField}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
				isDraw={isDraw}
				setIsDraw={setIsDraw}
			/>
			<InformationContainer
				isDraw={isDraw}
				setIsDraw={setIsDraw}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				setField={setField}
			/>
		</div>
	);
};

GameLayout.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
};
