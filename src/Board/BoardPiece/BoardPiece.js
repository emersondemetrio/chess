import React from 'react';
import './BoardPiece.css';
import Piece from '../../Piece/Piece';

import { Box } from 'reflexbox';

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
		console.log('piece', piece);
	}

	render() {
		return (
			<Box
				w={1 / 10}
				align='center'
				key={this.props.name}
				className={this.getClassName()}>

				{this.props.piece !== null ? (
					<Piece
						pieceClick={this.onClick}
						reference={this.props.piece}></Piece>
				) : null}
			</Box>
		);
	}
};

export default BoardPiece;
