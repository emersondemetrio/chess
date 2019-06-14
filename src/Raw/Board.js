export const rawLetters = 'abcdefgh'.split('');
export const rawNumbers = '12345678'.split('').map(v => parseInt(v));

export const rawBoard = rawNumbers
	.reverse()
	.map(cNumber => rawLetters
		.map(letter => ({
			x: cNumber,
			y: letter,
			xy: `[${cNumber}, ${letter}]`
		}))
	);
