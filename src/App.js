import React from 'react';
import './App.css';

import Container from './container/Container';

class App extends React.Component {
	constructor(props) {
		super(props);

		const letters = 'abcdefgh'.split('');
		const numbers = '12345678'.split('').map(v => parseInt(v));

		this.table = numbers
			.map(number => letters
				.map(letter => ({
					x: number,
					y: letter,
					xy: `[${x}, ${y}]`
				})
				)
			);
	}

	render() {
		return (
			<div className="App">
				<h3>Chess!</h3>
				<section className="container stretch">
					{this.table.map(row => {
						row.map(item => {
							return <Container
								key={item.xy}
								name={item.xy}></Container>
						})
					})}
				</section>
			</div>
		);
	}
}

export default App;
