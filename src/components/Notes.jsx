import Note from "./Note"

function Notes({ notes }) {
  return (
    <main className="notes-list">
        {notes.length ? 
         (notes.map(note=>(
            <Note key={note.id} note={note} />
          ))
        ) : (
            <p style={{marginTop:'2rem',textAlign:"center"}}>No Notes to display. </p>
        )}
    </main>
  )
}

export default Notes