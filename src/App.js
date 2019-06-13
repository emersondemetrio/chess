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
		const br1 = {
			color: 'black',
			name: 'rook'
		};

		const br2 = { ...br1 };
		const wr1 = { ...br1, color: 'white' };
		const wr2 = { ...wr1 };

		const firstState = [
			[br1, null, null, null, null, null, null, br2],
			[null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null],
			[wr1, null, null, null, null, null, null, wr2],
		];

		this.firstState = firstState;
	}

	getBoard = () =>
		this.table.map((row, rowIndex) => (
			row.map((item, lineIndex) => (
				<BoardPiece
					key={item.xy}
					name={item.xy}
					piece={this.firstState[rowIndex][lineIndex]}
					isPlayable={lineIndex % 2 === 0}
					rowItem={`${rowIndex}, ${lineIndex}`}
					indexClass={(lineIndex + rowIndex) % 2 === 0 ? 'even' : 'odd'}></BoardPiece>
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
