import { useCallback, useEffect, useState } from 'react';

import { BLACK_NOTES, KEY_TO_NOTE, NOTE_SIZE, NOTE_TO_AUDIO, NOTES } from '../const';
import { Key, Note } from '../type';

const useHandleNotes = (canvas: HTMLCanvasElement | null) => {
	const [activeNotes, setActiveNotes] = useState<Note[]>([]);
	// 옥타브
	const [oct] = useState(1);

	const addNote = useCallback(
		(note: Note) => {
			try {
				// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
				if (note && !activeNotes.includes(note)) {
					setActiveNotes((prev) => [...prev, note]);
					const audio = NOTE_TO_AUDIO[oct - 1][note];
					audio.pause();
					audio.currentTime = 0;
					audio.play();
				}
			} catch (err) {
				console.error(err);
			}
		},
		[activeNotes, oct],
	);

	const deleteNote = useCallback(
		(note: Note) => {
			// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
			if (note && activeNotes.includes(note)) {
				setActiveNotes((prev) => prev.filter((n) => n !== note));
			}
		},
		[activeNotes],
	);

	const handlePointerDown = useCallback(
		(clientX: number, clientY: number) => {
			if (!canvas) return;

			const rect = canvas.getBoundingClientRect();
			const x = clientX - rect.left;
			const y = clientY - rect.top;

			// 흰 건반 클릭 여부 확인
			for (let i = 0; i < NOTES.length; i++) {
				const keyX = i * NOTE_SIZE.WIDTH;
				const keyY = canvas.height - NOTE_SIZE.HEIGHT;
				if (x >= keyX && x <= keyX + NOTE_SIZE.WIDTH && y >= keyY && y <= keyY + NOTE_SIZE.HEIGHT) {
					addNote(NOTES[i]);
					return;
				}
			}
		},
		[addNote, canvas],
	);
	const handleMouseDown = useCallback(
		(e: MouseEvent) => {
			handlePointerDown(e.clientX, e.clientY);
		},
		[handlePointerDown],
	);

	const handleMouseMove = useCallback((e: MouseEvent) => {
		handlePointerMove(e.clientX, e.clientY);
	}, []);

	const handleMouseUp = useCallback(() => {
		handlePointerUp();
	}, []);

	const handleTouchStart = useCallback(
		(e: TouchEvent) => {
			const touch = e.touches[0];
			handlePointerDown(touch.clientX, touch.clientY);
		},
		[handlePointerDown],
	);

	const handleTouchMove = useCallback((e: TouchEvent) => {
		const touch = e.touches[0];
		handlePointerMove(touch.clientX, touch.clientY);
	}, []);

	const handleTouchEnd = useCallback(() => {
		handlePointerUp();
	}, []);

	const handlePointerMove = useCallback(
		(clientX: number, clientY: number) => {
			if (!canvas) return;

			const rect = canvas.getBoundingClientRect();
			const x = clientX - rect.left;
			const y = clientY - rect.top;

			// 모든 건반의 클릭 여부 확인
			let noteFound = false;

			for (let i = 0; i < BLACK_NOTES.length; i++) {
				if (BLACK_NOTES[i] === '') continue;
				const keyX = i * NOTE_SIZE.WIDTH + NOTE_SIZE.WIDTH - NOTE_SIZE.WIDTH / 2 + i * 1;
				const keyY = canvas.height - NOTE_SIZE.HEIGHT;
				if (x >= keyX && x <= keyX + NOTE_SIZE.WIDTH - 1 && y >= keyY && y <= keyY + NOTE_SIZE.HEIGHT / 2) {
					noteFound = true;
					break;
				}
			}

			if (!noteFound) {
				for (let i = 0; i < NOTES.length; i++) {
					const keyX = i * NOTE_SIZE.WIDTH;
					const keyY = canvas.height - NOTE_SIZE.HEIGHT;
					if (x >= keyX && x <= keyX + NOTE_SIZE.WIDTH && y >= keyY && y <= keyY + NOTE_SIZE.HEIGHT) {
						noteFound = true;
						break;
					}
				}
			}

			if (!noteFound) {
				setActiveNotes([]);
			}
		},
		[deleteNote, activeNotes],
	);

	const handlePointerUp = useCallback(() => {
		setActiveNotes([]);
	}, [deleteNote, activeNotes]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			addNote(KEY_TO_NOTE[e.code as Key]);
		};
		const handleKeyUp = (e: KeyboardEvent) => {
			deleteNote(KEY_TO_NOTE[e.code as Key]);
		};

		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('keyup', handleKeyUp);
		document.addEventListener('mousedown', handleMouseDown);
		document.addEventListener('mouseup', handleMouseUp);
		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('touchstart', handleTouchStart);
		document.addEventListener('touchend', handleTouchEnd);
		document.addEventListener('touchmove', handleTouchMove);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('keyup', handleKeyUp);
			document.removeEventListener('mousedown', handleMouseDown);
			document.removeEventListener('mouseup', handleMouseUp);
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('touchstart', handleTouchStart);
			document.removeEventListener('touchend', handleTouchEnd);
			document.removeEventListener('touchmove', handleTouchMove);
		};
	}, [addNote, deleteNote, handleTouchStart, handleMouseDown]);

	return { activeNotes, oct };
};

export default useHandleNotes;
