import PropTypes from 'prop-types';
import styles from './InformationLayout.module.css';

export const InformationLayout = ({ text, click }) => {
	return (
		<div className={styles['game-info']}>
			<p className={styles['game-status']}>{text}</p>
			<button className={styles['start-button']} onClick={click}>
				Начать заново
			</button>
		</div>
	);
};

InformationLayout.propTypes = {
	text: PropTypes.string,
	click: PropTypes.func,
};
