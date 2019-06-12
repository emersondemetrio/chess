import React from 'react';
import './Container.css';

class Container extends React.Component {
	render() {
		return (
			<div
				key={"div" + this.props.position}
				className={'square item ' + (this.props.position % 2 !== 0 ? 'even' : '')}>
				{this.props.position}
			</div>
		);
	}
};

export default Container;
