import NoteHeader from './NoteHeader'
import NoteContainer from './NoteContainer'
import { useParams } from 'react-router-dom'

function AddNote({ 
  notes, isNewNote, setNoteContainer, newNote, setNewNote, handleSaveNote, handleDeleteNote, handleFavoriteNote
 }) {

  const { id } = useParams();
  const numId = Number(id);
  const myNote = isNewNote ? [] : notes.find(note => (note.id) === numId ) ;
  
  return (
    <>
        <NoteHeader 
                   setNoteContainer={setNoteContainer}
                   handleSaveNote={handleSaveNote}
                   handleDeleteNote={handleDeleteNote}
                   handleFavoriteNote={handleFavoriteNote} 
                   myNote={myNote} />
        <NoteContainer myNote={myNote} isNewNote={isNewNote} newNote={newNote} setNewNote={setNewNote}/>
    </>
  )
}

export default AddNote