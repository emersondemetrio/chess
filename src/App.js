import React from 'react';
import './App.css';
import { ReflexProvider, Flex, } from 'reflexbox';

import {
	rawBoard,
	rawLetters,
	rawNumbers
} from './Raw/Board'
import { getFirstState } from './Raw/Utils';

import BoardPiece from './Board/BoardPiece/BoardPiece';
import LettersContainer from './Board/LettersContainer/LettersContainer';
import NumbersContainer from './Board/NumbersContainer/NumbersContainer';

const space = [0, 6, 12, 18, 24]
const breakpoints = [32, 48, 64]

class App extends React.Component {
	constructor(props) {
		super(props);

		this.firstState = getFirstState();

		this.state = {
			board: this.getBoard()
		};
	}

	getBoard = () => (
		<Flex column>
			{rawBoard.map((row, rowIndex) => (
				<Flex align='center' key={rowIndex}>
					{row.map((item, lineIndex) => {
						let piece = this.firstState[rowIndex][lineIndex];
						const posInfo = rawBoard[rowIndex][lineIndex];

						if (piece !== null) {
							piece = {
								...piece,
								...posInfo,
								rowItem: [rowIndex, lineIndex]
							}
						}

						return <BoardPiece
							key={item.xy}
							name={item.xy}
							piece={piece}
							isPlayable={false}
							indexClass={(lineIndex + rowIndex) % 2 === 0 ? 'even' : 'odd'}></BoardPiece>
					})}
				</Flex>
			))}
		</Flex>
	);

	render() {
		return (
			<ReflexProvider space={space} breakpoints={breakpoints}>
				<Flex column align="center">
					<h3>Chess!</h3>
					<LettersContainer letters={rawLetters} />

					<Flex className="main-container">
						<NumbersContainer numbers={rawNumbers} side="right" />
						{this.state.board}
						<NumbersContainer numbers={rawNumbers} side="left" />
					</Flex>

					<LettersContainer letters={rawLetters} />

					<pre><code id="k"></code></pre>
				</Flex>
			</ReflexProvider>
		);
	}
}

export default App;
