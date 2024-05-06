import { MyComponent } from './MyComponent';
import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {

	const [value, setValue] = useState('')
	const [list, setList] = useState([])
	const [error, setError] = useState('')
	const [isValueValid, setIsValueValid] = useState(false)


	function formatDate() {
		let date = new Date()
		let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
		let month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
		let year = date.getFullYear();
		let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
		let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
		let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
		return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
	}

	function onInputButtonClick() {
		let promptValue = prompt('Введите значение')
		if (promptValue?.length < 3) {
			setError('Введенное значение должно содержать минимум 3 символа')
			setIsValueValid(false)
		} else {
			setValue(promptValue)
			setError('')
			setIsValueValid(true)
		}
	}

	function onAddButtonClick(isValueValid) {
		if (isValueValid) {
			setValue('')
			setError('')
			setList([...list, {id: Date.now(), value: value, createdOn: formatDate()}])
		}
	}

	return (
		<div className={styles.app}>
			<h1 className={styles.pageHeading}>Ввод значения</h1>
			<p className={styles.noMarginText}>
			  Текущее значение <code>value</code>: "<output className={styles.currentValue}>{value}</output>"
			</p>
			{error !== '' && (
				<div className={styles.error}>{error}</div>
			)}
			<div className={styles.buttonsContainer}>
			<button className={styles.button} onClick={onInputButtonClick}>Ввести новое</button>
			<button className={styles.button} onClick={onAddButtonClick} disabled={!isValueValid}>Добавить в список</button>
			</div>
			<div className={styles.listContainer}>
			  <h2 className={styles.listHeading}>Список:</h2>
				{list.length === 0 && (<p className={styles.noMarginText}>Нет добавленных элементов</p>)}
				{list.length > 0 && (<ul className={styles.list}>
					{list.map(({ id, value, createdOn }) => (
						<li className={styles.listItem} key={id}>{value} - {createdOn}</li>
					))}
				</ul>)}
			</div>
		</div>
	);
};
