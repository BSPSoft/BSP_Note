import { Link } from 'react-router-dom';


function Note({ note }) {
  return (
    <div className="note-card">
      <Link to={`/note/${note.id}`} >
        <div className="note-title">{note.title}</div>
        <div className="note-desc">
          {(note.body).length >=40 ? (
              `${(note.body).slice(0,40)}...`
          ) : ( note.body )}
        </div>
      </Link>
      <div className="note-date">
          Edit of : {note.dateUpdate} ·
         create of: {note.dateCreate}
      </div>
    </div>
  )
}

export default Note