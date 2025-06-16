import { useState } from "react"
import Notes from "./Notes";

function Groups({ notes }) {

  const [toggleShowNotes,setToggleShowNotes] = useState(false);

  return (
    <main className="groups">
      <div className="group-item">
        <span>المفضلات</span>
        <i 
           className={toggleShowNotes ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up'}
           onClick={()=>{ setToggleShowNotes(!toggleShowNotes) }}
           ></i>
      </div>
      <hr />
      {toggleShowNotes && (
        <Notes notes={notes.filter(note => note.isFavorite === true)} />
      )}
    </main>
  )
}

export default Groups