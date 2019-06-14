import React from 'react';

class NumbersContainer extends React.Component {
	render() {
		return (
			<>
				<div>x</div>
				{this.props.numbers.map((v, k) => <div className="guide item" key={k}>{v}</div>)}
				<div>x</div>
			</>
		);
	}
};

export default NumbersContainer;
