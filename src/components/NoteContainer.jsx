import { useEffect, useState } from "react";
import { format } from 'date-fns';

function NoteContainer({ myNote, isNewNote, newNote, setNewNote }) {

  const dateTime= format(new Date(),'Pp');//'hh:mm pp');

  // this is chack update in title or body in my note
  const [checkUpdate,setCheckUpadte] = useState('');

  useEffect(()=>{
    const checkAddNote = ()=>{
      if(isNewNote)
       setNewNote({id:undefined,title:'',body:'',dateCreate:dateTime,dateUpdate:dateTime,isFavorite:false});
      else{
        setNewNote({...myNote});
      }
       
    }
    checkAddNote();
  },[]);

  useEffect(()=>{
    const checkUpdateText = ()=>{
      if(checkUpdate !=='')
          setNewNote({...newNote,dateUpdate:dateTime});
    }

    checkUpdateText();
  },[checkUpdate])

  return (
  <div className="note-container">
   {myNote && (
    <>
      <p className="note-category">فئة غير محددة</p>
      <input className="note-title" 
            placeholder={"لا يوجد عنوان"}
            value={newNote.title}
            onChange={(e)=>{
                setNewNote({...newNote,title:e.target.value});
                setCheckUpadte(e.target.value);
              }}
            autoFocus  
      />

      <textarea 
              className="note-content" 
              placeholder="اكتب ملاحظتك..."
              value={newNote.body}
              onChange={(e)=>{
                setNewNote({...newNote,body:e.target.value});
                setCheckUpadte(e.target.value);
              }}
      >
      </textarea>

      <p className="note-footer" dir="ltr"> {newNote.dateUpdate}     تم آخر تعديل في :  </p>
    </> 
   )} 
   
   {!myNote && (
    <>
      <p className="note-category">فئة غير محددة</p>
      <input className="note-title" 
            placeholder={"لا يوجد عنوان"}
            autoFocus
      />

      <textarea className="note-content" placeholder="اكتب ملاحظتك...">

      </textarea>

      {/* <p className="note-footer">تم آخر تعديل في: {dateTime}</p> */}
      <div className="note-footer"> {dateTime}</div>
    </>
   )}
  </div>
  )
}

export default NoteContainer