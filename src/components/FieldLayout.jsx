import styles from './FieldLayout.module.css';

export const FieldLayout = ({ field, click }) => {
	return (
		<ul className={styles['feld-list']}>
			{field.map((elem, index) => (
				<li
					className={styles['list-item']}
					key={index}
					onClick={click}
					data-id={index}
				>
					{elem}
				</li>
			))}
		</ul>
	);
};
