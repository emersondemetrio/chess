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

		const blackRook1 = {
			color: 'black',
			name: 'rook',
			xy: []
		};

		const blackRook2 = { ...blackRook1 };
		const whiteRook1 = { ...blackRook1, color: 'white' };
		const whiteRook2 = { ...whiteRook1 };

		const blackBishop1 = { name: 'bishop', color: 'black', xy: [] };
		const blackBishop2 = { ...blackBishop1 };

		const whiteBishop1 = { ...blackBishop1, color: 'white', xy: [] };
		const whiteBishop2 = { ...whiteBishop1, xy: [] };

		const blackPawns = Array.from(Array(8), () => ({
			name: 'pawn',
			color: 'black',
			xy: []
		}));

		const whitePawns = Array.from(Array(8), () => ({
			name: 'pawn',
			color: 'white',
			xy: []
		}));

		const firstState = [
			[blackRook1, blackBishop1, null, null, null, null, blackBishop2, blackRook2],
			blackPawns,
			[null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null],
			whitePawns,
			[whiteRook1, whiteBishop1, null, null, null, null, whiteBishop2, whiteRook2],
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
				<section className="board container stretch">
					{this.getBoard()}
				</section>
			</div>
		);
	}
}

export default App;
