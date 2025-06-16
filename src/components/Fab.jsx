
function Fab({ NoteContainer, setNoteContainer }) {
  return (
    <button 
          className="fab"
          onClick={()=> setNoteContainer(!NoteContainer)}
    >
        +
    </button>
  )
}

export default Fab