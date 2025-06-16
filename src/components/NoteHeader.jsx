import { useNavigate } from "react-router-dom";


function NoteHeader({ setNoteContainer, handleSaveNote, handleDeleteNote, handleFavoriteNote, myNote }) {
   
    const navigate = useNavigate();

  return (
    <div className="top-bar">
       <div className="actions">
        <i className="fa-solid fa-trash" onClick={()=> handleDeleteNote(myNote.id)}></i>
        <i className="fa-solid fa-floppy-disk" onClick={()=> handleSaveNote()}></i>
        {myNote && (
          <i className="fa-solid fa-star" 
             style={ myNote.isFavorite ? {color:"yellow"} : {color:"#e53935"} } 
             onClick={()=> { handleFavoriteNote(myNote.id) }}></i>
        )}
        
       </div>
       <div></div>
       <div className="actions">
        <i className="fa-solid fa-arrow-right" onClick={()=>{
            setNoteContainer(false);
            navigate('/');
        }}></i>
       </div>
  </div>
  )
}

export default NoteHeader