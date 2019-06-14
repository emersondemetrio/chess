import React from 'react';
import './Piece.css';

import ReactSVG from 'react-svg'

class Piece extends React.Component {

	className = [
		(this.props.reference.isPlayable ? 'playable' : ''),
		this.props.reference.indexClass,
	].join(' ');

	getImage = () => {
		return `${this.props.reference.color}-${this.props.reference.name}.svg`;
	}

	getName = () => {
		return `${this.props.reference.xy} - ${this.props.reference.name}`;
	}

	innerClick = () => {
		this.props.pieceClick(this.props.reference)
		this.className = 'kkk';
		document.getElementById("k").innerHTML = JSON.stringify(this.props.reference, null, 2);
	}

	render() {
		return (
			<ReactSVG
				onMouseEnter={e => this.innerClick()}
				src={this.getImage()}
				title={this.getName()}
				className={this.className} />
		);
	}
};

export default Piece;
