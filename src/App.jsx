import { useState } from 'react';
import styles from './app.module.css';

const NUMS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [activeField, setActiveField] = useState(1);
	const [result, setResult] = useState(false);
	const setOperand = (event) => {
		setResult(false);
		if (activeField === 1) {
			operand1 === '0'
				? setOperand1(event.target.textContent)
				: setOperand1(operand1 + event.target.textContent);
		} else if (activeField === 2) {
			operand2 === '0'
				? setOperand2(event.target.textContent)
				: setOperand2(operand2 + event.target.textContent);
		}
	};

	return (
		<>
			<div className={styles.container}>
				<ul className={styles.numbers}>
					{NUMS.map((element) => {
						return (
							<li key={element}>
								<button
									className={styles['num-button']}
									onClick={setOperand}
								>
									{element}
								</button>
							</li>
						);
					})}
				</ul>
				<ul className={styles.operands}>
					<li>
						<button
							className={styles['operand-button']}
							onClick={() => {
								setOperator('+');
								setActiveField(2);
								setResult(false);
							}}
						>
							+
						</button>
					</li>
					<li>
						<button
							className={styles['operand-button']}
							onClick={() => {
								setOperator('-');
								setActiveField(2);
								setResult(false);
							}}
						>
							-
						</button>
					</li>
					<li>
						<button
							className={styles['operand-button']}
							onClick={() => {
								operator === '+'
									? setOperand1(+operand1 + +operand2)
									: setOperand1(+operand1 - +operand2);
								setActiveField(1);
								setOperand2('');
								setOperator('');
								setResult(true);
							}}
						>
							=
						</button>
					</li>
					<li>
						<button
							className={styles['operand-button']}
							onClick={() => {
								setOperand1('');
								setOperand2('');
								setOperator('');
								setActiveField(1);
								setResult(false);
							}}
						>
							C
						</button>
					</li>
				</ul>
				<p
					className={`${styles.print} ${result ? styles.resultcolor : ''}`}
				>{`${operand1} ${operator} ${operand2}`}</p>
			</div>
		</>
	);
}

export default App;
