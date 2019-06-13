import React from 'react';
import './App.css';

import BoardPiece from './board/BoardPiece';

class App extends React.Component {
	constructor(props) {
		super(props);

		const letters = 'abcdefgh'.split('');
		const numbers = '12345678'.split('').map(v => parseInt(v)).reverse();

		this.table = numbers
			.map(cNumber => letters
				.map(letter => ({
					x: cNumber,
					y: letter,
					xy: `[${cNumber}, ${letter}]`
				}))
			);
	}

	getBoard = () =>
		this.table.map((row, rowIndex) => (
			row.map((item, itemIndex) => (
				<BoardPiece
					key={item.xy}
					name={item.xy}
					isPlayable={itemIndex % 2 === 0}
					rowItem={`${rowIndex}, ${itemIndex}`}
					indexClass={(itemIndex + rowIndex) % 2 === 0 ? 'even' : 'odd'}></BoardPiece>
			))
		));

	render() {
		return (
			<div className="App">
				<h3>Chess!</h3>
				<section className="board container stretch">
					{this.getBoard()}
				</section>
			</div>
		);
	}
}

export default App;
