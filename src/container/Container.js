import React from 'react';
import './Container.css';

class Container extends React.Component {
	render() {
		return (
			<button
				key={"button" + this.props.name}
				className="square item">
				{this.props.name}
			</button>
		);
	}
};

export default Container;
