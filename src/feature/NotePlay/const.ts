import Oct1A from './assets/oct1/A.mp3';
import Oct1B from './assets/oct1/B.mp3';
import Oct1C from './assets/oct1/C.mp3';
import Oct1D from './assets/oct1/D.mp3';
import Oct1E from './assets/oct1/E.mp3';
import Oct1F from './assets/oct1/F.mp3';
import Oct1G from './assets/oct1/G.mp3';
import { Note } from './type';

export const KEY_TO_NOTE: Record<string, Note> = {
	KeyS: 'C',
	KeyD: 'D',
	KeyF: 'E',
	Space: 'F',
	KeyJ: 'G',
	KeyK: 'A',
	KeyL: 'B',
} as const;

export const NOTE_TO_AUDIO: Record<Note, string>[] = [
	{
		C: Oct1C,
		D: Oct1D,
		E: Oct1E,
		F: Oct1F,
		G: Oct1G,
		A: Oct1A,
		B: Oct1B,
	},
];
