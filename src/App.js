import React from 'react';
import './App.css';

import {
	rawBoard,
	rawLetters,
	rawNumbers
} from './Raw/Board'
import { getFirstState } from './Raw/Utils';

import BoardPiece from './Board/BoardPiece/BoardPiece';
import LettersContainer from './Board/LettersContainer/LettersContainer';
import NumbersContainer from './Board/NumbersContainer/NumbersContainer';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.table = rawBoard;
		const firstState = getFirstState();

		this.firstState = firstState;
		this.state = {
			board: this.getBoard()
		};
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
					isPlayable={false}
					rowItem={`${rowIndex}, ${lineIndex}`}
					indexClass={(lineIndex + rowIndex) % 2 === 0 ? 'even' : 'odd'}></BoardPiece>
			})
		));

	render() {
		return (
			<div className="App">
				<h3>Chess!</h3>
				<div>
					<section className="board container stretch">
						<LettersContainer letters={rawLetters} />
						{/* <NumbersContainer numbers={rawNumbers} /> */}
						{this.state.board}
						{/* <NumbersContainer numbers={rawNumbers} /> */}
						<LettersContainer letters={rawLetters} />
					</section>
				</div>

				<pre><code id="k"></code></pre>
			</div>
		);
	}
}

export default App;
