import React from 'react';
import './BoardPiece.css';

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
				{this.props.rowItem}
			</div>
		);
	}
};

export default BoardPiece;
