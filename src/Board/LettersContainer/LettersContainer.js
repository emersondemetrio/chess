import React from 'react';
import './LettersContainer.css';

class LettersContainer extends React.Component {
	render() {
		return (
			<>
				<div className="guide item"></div>
				{this.props.letters.map((v, k) => <div className="guide item" key={k}>{v}</div>)}
				<div className="guide item"></div>
			</>
		);
	}
};

export default LettersContainer;
