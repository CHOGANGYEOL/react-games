// 음원 출처 : https://www.musicca.com/lydfiler/piano/{28~64}.mp3
import Oct1A from './assets/notes/oct1/A.mp3';
import Oct1B from './assets/notes/oct1/B.mp3';
import Oct1C from './assets/notes/oct1/C.mp3';
import Oct1D from './assets/notes/oct1/D.mp3';
import Oct1E from './assets/notes/oct1/E.mp3';
import Oct1F from './assets/notes/oct1/F.mp3';
import Oct1G from './assets/notes/oct1/G.mp3';
import Oct2A from './assets/notes/oct2/A.mp3';
import Oct2B from './assets/notes/oct2/B.mp3';
import Oct2C from './assets/notes/oct2/C.mp3';
import Oct2D from './assets/notes/oct2/D.mp3';
import Oct2E from './assets/notes/oct2/E.mp3';
import Oct2F from './assets/notes/oct2/F.mp3';
import Oct2G from './assets/notes/oct2/G.mp3';
import Oct3A from './assets/notes/oct3/A.mp3';
import Oct3B from './assets/notes/oct3/B.mp3';
import Oct3C from './assets/notes/oct3/C.mp3';
import Oct3D from './assets/notes/oct3/D.mp3';
import Oct3E from './assets/notes/oct3/E.mp3';
import Oct3F from './assets/notes/oct3/F.mp3';
import Oct3G from './assets/notes/oct3/G.mp3';
import { BlackNote, Key, Note } from './type';

export const KEYS: Key[] = ['KeyS', 'KeyD', 'KeyF', 'Space', 'KeyJ', 'KeyK', 'KeyL'];
export const NOTES: Note[] = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
export const BLACK_NOTES: BlackNote[] = ['C#', 'D#', '', 'F#', 'G#', 'A#', ''];

export const KEY_TO_NOTE: Record<Key, Note> = {
	KeyS: 'C',
	KeyD: 'D',
	KeyF: 'E',
	Space: 'F',
	KeyJ: 'G',
	KeyK: 'A',
	KeyL: 'B',
} as const;

// export const NOTE_TO_AUDIO: Record<Note, string>[] = [
// 	{
// 		C: Oct1C,
// 		D: Oct1D,
// 		E: Oct1E,
// 		F: Oct1F,
// 		G: Oct1G,
// 		A: Oct1A,
// 		B: Oct1B,
// 	},
// 	{
// 		C: Oct2C,
// 		D: Oct2D,
// 		E: Oct2E,
// 		F: Oct2F,
// 		G: Oct2G,
// 		A: Oct2A,
// 		B: Oct2B,
// 	},
// 	{
// 		C: Oct3C,
// 		D: Oct3D,
// 		E: Oct3E,
// 		F: Oct3F,
// 		G: Oct3G,
// 		A: Oct3A,
// 		B: Oct3B,
// 	},
// ];
export const NOTE_TO_AUDIO: Record<Note, HTMLAudioElement>[] = [
	{
		C: new Audio(Oct1C),
		D: new Audio(Oct1D),
		E: new Audio(Oct1E),
		F: new Audio(Oct1F),
		G: new Audio(Oct1G),
		A: new Audio(Oct1A),
		B: new Audio(Oct1B),
	},
	{
		C: new Audio(Oct2C),
		D: new Audio(Oct2D),
		E: new Audio(Oct2E),
		F: new Audio(Oct2F),
		G: new Audio(Oct2G),
		A: new Audio(Oct2A),
		B: new Audio(Oct2B),
	},
	{
		C: new Audio(Oct3C),
		D: new Audio(Oct3D),
		E: new Audio(Oct3E),
		F: new Audio(Oct3F),
		G: new Audio(Oct3G),
		A: new Audio(Oct3A),
		B: new Audio(Oct3B),
	},
];

export const CANVAS_SIZE = {
	WIDTH: 280,
	HEIGHT: 480,
} as const;

export const NOTE_SIZE = {
	WIDTH: 40,
	HEIGHT: 100,
};
