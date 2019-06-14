import React from 'react';
import './Piece.css';

import ReactSVG from 'react-svg'

class Piece extends React.Component {
	getClassName = () => {
		return [
			(this.props.reference.isPlayable ? 'playable' : ''),
			this.props.reference.indexClass,
		].join(' ');
	};

	getImage = () => {
		return `${this.props.reference.color}-${this.props.reference.name}.svg`;
	}

	getName = () => {
		return `${this.props.reference.xy} - ${this.props.reference.name}`;
	}

	render() {
		return (
			<ReactSVG
				src={this.getImage()}
				title={this.getName()}
				className={this.getClassName()} />
		);
	}
};

export default Piece;
