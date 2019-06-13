import React from 'react';
import './BoardPiece.css';
import Piece from '../piece/Piece';

class BoardPiece extends React.Component {
	getClassName = () => {
		return [
			(this.props.isPlayable ? 'playable' : ''),
			this.props.indexClass,
			'boardpiece',
			'item'
		].join(' ');
	}

	render() {
		return (
			<div
				key={this.props.name}
				className={this.getClassName()}>
				{this.props.piece !== null ? (
					<Piece
						color={this.props.piece.color}
						name={this.props.piece.name}></Piece>
				) : null}
			</div>
		);
	}
};

export default BoardPiece;
