import { useNotePlay } from '../../feature/NotePlay/hooks';

const NotePlay = () => {
	const { activeNote } = useNotePlay();
	return <>{activeNote}</>;
};

export default NotePlay;
