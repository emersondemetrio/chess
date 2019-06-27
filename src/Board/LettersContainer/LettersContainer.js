import React from 'react';
import './LettersContainer.css';

import { Flex, Box } from 'reflexbox';

class LettersContainer extends React.Component {
	render() {
		return (
			<Flex>
				<Box w={1 / 10} className="guide letter"></Box>
				{this.props.letters.map((v, k) => <Box w={1 / 10} className="guide letter" key={k}>{v}</Box>)}
				<Box w={1 / 10} className="guide letter"></Box>
			</Flex>
		);
	}
};

export default LettersContainer;
