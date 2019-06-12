import React from 'react';
import './App.css';

import Container from './container/Container';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.list = Array.from(Array(64), (_d, id) => ({
			id,
			name: `item-${id}`
		}));
	}

	render() {
		return (
			<div className="App">
				<h3>Chess!</h3>
				<section className="container stretch">
					{this.list.map(item =>(
						<Container
							key={item.id}
							name={1 + item.id}></Container>
					))}
				</section>
			</div>
		);
	}
}

export default App;
