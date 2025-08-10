import PropTypes from 'prop-types';
import { FieldLayout } from './FieldLayout';

export const FieldContainer = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	isDraw,
	setIsDraw,
}) => {
	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const click = (event) => {
		if (!field[Number(event.target.dataset['id'])] && !isGameEnded) {
			const newField = field.map((element, index) =>
				index === Number(event.target.dataset['id']) ? currentPlayer : element,
			);
			setField(newField);

			if (
				WIN_PATTERNS.some((pattern) =>
					pattern.every((num) => newField[num] === currentPlayer),
				)
			) {
				setIsGameEnded(true);
			} else if (!isGameEnded && newField.every((chekbox) => chekbox)) {
				setIsDraw(true);
			} else if (!isGameEnded && !isDraw) {
				setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
			}
		}
	};

	return <FieldLayout field={field} click={click} />;
};

FieldContainer.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
};
