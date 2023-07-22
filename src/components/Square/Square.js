import styles from './Square.module.css';
import PropTypes from 'prop-types';

export function Square({ value, onSquareClick }) {
	return (
		<button className={styles.square} onClick={onSquareClick}>
			{value}
		</button>
	);
}

Square.propTypes = {
	value: PropTypes.string,
	onSquareClick: PropTypes.func.isRequired,
};
