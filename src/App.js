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

		const rook = {
			name: 'rook',
			color: 'black',
			xy: []
		};

		const bishop = {
			color: 'black',
			name: 'bishop',
			xy: []
		};

		const horse = {
			name: 'horse',
			color: 'black',
			xy: []
		};

		const queen = {
			name: 'queen',
			color: 'black',
			xy: []
		};

		const king = {
			name: 'king',
			color: 'black',
			xy: []
		};

		const pawns = Array.from(Array(8), _ => ({
			name: 'pawn',
			color: 'black',
			xy: []
		}));

		const firstState = [
			[rook, bishop, horse, king, queen, horse, bishop, rook],
			pawns,
			[null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null],
			pawns.map(p => ({ ...p, color: 'white' })),
			[
				{ ...rook, color: 'white' },
				{ ...horse, color: 'white' },
				{ ...bishop, color: 'white' },
				{ ...king, color: 'white' },
				{ ...queen, color: 'white' },
				{ ...bishop, color: 'white' },
				{ ...horse, color: 'white' },
				{ ...rook, color: 'white' }
			],
		];

		this.firstState = firstState;
	}

	getBoard = () =>
		this.table.map((row, rowIndex) => (
			row.map((item, lineIndex) => {
				const piece = this.firstState[rowIndex][lineIndex];
				piece !== null && (piece.xy = [rowIndex, lineIndex]);

				return <BoardPiece
					key={item.xy}
					name={item.xy}
					piece={piece}
					isPlayable={lineIndex % 2 === 0}
					rowItem={`${rowIndex}, ${lineIndex}`}
					indexClass={(lineIndex + rowIndex) % 2 === 0 ? 'even' : 'odd'}></BoardPiece>
			})
		));

	render() {
		return (
			<div className="App">
				<h3>Chess!</h3>
				<pre><code id="k"></code></pre>
				<section className="board container stretch">
					{this.getBoard()}
				</section>
			</div>
		);
	}
}

export default App;
