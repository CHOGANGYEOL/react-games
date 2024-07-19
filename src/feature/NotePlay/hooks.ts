import { useCallback, useEffect, useState } from 'react';

import { KEY_TO_NOTE, NOTE_TO_AUDIO } from './const';
import { Note } from './type';

export const useNotePlay = () => {
	const [activeNote, setActiveNote] = useState<Note[]>([]);
	// 옥타브
	const [oct] = useState(1);

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			try {
				const note = KEY_TO_NOTE[e.code];
				// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
				if (note && !activeNote.includes(note)) {
					setActiveNote((prevActiveNotes) => [...prevActiveNotes, note]);
					const audioSrc = NOTE_TO_AUDIO[oct - 1][note];
					const audio = new Audio(audioSrc);
					audio.play();
				}
			} catch (err) {
				console.error(err);
			}
		},
		[activeNote, oct],
	);

	const onKeyUp = useCallback(
		(e: KeyboardEvent) => {
			const note = KEY_TO_NOTE[e.code];
			// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
			if (note && activeNote.includes(note)) {
				setActiveNote((prevActiveNotes) => prevActiveNotes.filter((n) => n !== note));
			}
		},
		[activeNote, oct],
	);

	useEffect(() => {
		document.addEventListener('keydown', onKeyDown);
		document.addEventListener('keyup', onKeyUp);
		return () => {
			document.removeEventListener('keydown', onKeyDown);
			document.removeEventListener('keyup', onKeyUp);
		};
	}, [onKeyDown, onKeyUp]);

	// useEffect(() => {
	// 	document.addEventListener('keydown', onKeyDown);
	// 	document.addEventListener('keyup', onKeyUp);
	// 	return () => {
	// 		document.removeEventListener('keydown', onKeyDown);
	// 		document.removeEventListener('keyup', onKeyUp);
	// 	};
	// }, []);

	// const onKeyDown = useCallback((e: KeyboardEvent) => {
	// 	try {
	// 		// const activeNote = activeNoteRef.current;
	// 		const note = KEY_TO_NOTE[e.key.toLowerCase()];
	// 		const isIncludes = activeNote.includes(note);
	// 		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	// 		if (!isIncludes && !!note) {
	// 			activeNote.push(note);
	// 			const audioSrc = NOTE_TO_AUDIO[note];
	// 			const audio = new Audio(audioSrc);
	// 			audio.play();
	// 		}
	// 	} catch (err) {
	// 		console.error(err);
	// 	}
	// }, []);

	// const onKeyUp = useCallback((e: KeyboardEvent) => {
	// 	const activeNote = activeNoteRef.current;
	// 	const note = KEY_TO_NOTE[e.key.toLowerCase()];
	// 	const isIncludes = activeNote.includes(note);
	// 	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	// 	if (isIncludes) activeNoteRef.current = activeNote.filter((n) => n !== note);
	// }, []);
	return { activeNote };
};
