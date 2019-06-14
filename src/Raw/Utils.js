
import uuid from 'uuid/v4';

import {
	rook,
	horse,
	bishop,
	queen,
	king,
	pawns
} from './Pieces';

export const getFirstState = () => [
	[rook, bishop, horse, king, queen, horse, bishop, rook],
	pawns,
	Array.from(Array(8), _ => null),
	Array.from(Array(8), _ => null),
	Array.from(Array(8), _ => null),
	Array.from(Array(8), _ => null),
	pawns.map(p => ({ ...p, color: 'white' })),
	[
		{ ...rook, color: 'white' },
		{ ...horse, color: 'white' },
		{ ...bishop, color: 'white' },
		{ ...king, color: 'white' },
		{ ...queen, color: 'white' },
		{ ...bishop, color: 'white' },
		{ ...horse, color: 'white' },
		{ ...rook, color: 'white' }
	],
].map(row => row.map(item => item !== null ? { ...item, id: uuid() } : null));
