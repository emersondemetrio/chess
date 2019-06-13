import React from 'react';
import './Piece.css';

import ReactSVG from 'react-svg'

class Piece extends React.Component {
	getClassName = () => {
		return [
			(this.props.isPlayable ? 'playable' : ''),
			this.props.indexClass,
		].join(' ');
	};


	getImage = () => {
		return `${this.props.color}-${this.props.name}.svg`;
	}

	render() {
		return (
			<ReactSVG src={this.getImage()} />
		);
	}
};

export default Piece;
