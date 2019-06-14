import React from 'react';
import './BoardPiece.css';
import Piece from '../../piece/Piece';

class BoardPiece extends React.Component {
	getClassName = () => {
		return [
			(this.props.isPlayable ? 'playable' : ''),
			this.props.indexClass,
			'boardpiece',
			'item'
		].join(' ');
	}

	onClick = (piece) => {
		// console.log('piece', piece);
	}

	render() {
		return (
			<div
				key={this.props.name}
				className={this.getClassName()}>
				{this.props.piece !== null ? (
					<Piece
						pieceClick={this.onClick}
						reference={this.props.piece}></Piece>
				) : null}
			</div>
		);
	}
};

export default BoardPiece;
