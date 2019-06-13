import React from 'react';
import './Piece.css';

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
			<img
				alt={this.props.name}
				key={this.props.name}
				src={this.getImage()}
				className={this.getClassName()}>
				{this.props.rowItem}
			</img>
		);
	}
};

export default Piece;
