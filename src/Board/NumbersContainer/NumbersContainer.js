import React from 'react';

import { Flex, Box } from 'reflexbox';

class NumbersContainer extends React.Component {

	getClassName = () => {
		return `guide number ${this.props.side}`;
	}

	render() {
		return (
			<Flex column>
				{this.props.numbers.map((v, k) => (
					<Box auto className={this.getClassName()} key={k}>{v}</Box>
				))}
			</Flex>
		);
	}
};

export default NumbersContainer;
