import { useEffect, useState } from 'react'
import Header from './components/Header'
import Tabs from './components/Tabs'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Notes from './components/Notes';
import Groups from './components/Groups';
import Fab from './components/Fab';
import Missing from '../../06tut/src/components/Missing';
import AddNote from './components/AddNote';

function App() {
  const [tabs, setTabs] = useState('notes');
  const [notes,setNotes]=useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [noteSort,setNoteSort] = useState([]);
  const [newNote,setNewNote] = useState({
    id:undefined,
    title:'',
    body:'',
    dateCreate:'',
    dateUpdate:'',
    isFavorite: false 
  });
  const [NoteContainer,setNoteContainer] = useState(false);
  const navigate = useNavigate();
  

 // save note in localstorage
  useEffect(()=>{

    localStorage.setItem("notes",JSON.stringify(notes));

  },[notes]);

  // sort notes by last edit
   useEffect(()=>{
      const parseCustomeDate = (date1,date2)=>{
        const dateTime1 = new Date(date1);
        const dateTime2 = new Date(date2);

        return dateTime2 - dateTime1 ;
      }

      const handleSortNotes = ()=>{
        setNoteSort(notes.sort((a,b)=> parseCustomeDate(a.dateUpdate,b.dateUpdate)));
      } 
      
      handleSortNotes();

  },[notes]);

 
 

  // save Note 
  const handleSaveNote = ()=>{
    // chack save new note or edit mynote
    if(NoteContainer){
      if(newNote.body !==''){
         const  maxNote = notes.reduce((maxItem,currentItem)=> (currentItem.id > (maxItem?.id ?? -Infinity) ? currentItem : maxItem ) ,null);
         const id =maxNote !=null ? maxNote.id + 1 : 1;
         const noteObject = {id,title:newNote.title,body:newNote.body,dateCreate:newNote.dateCreate,dateUpdate:newNote.dateUpdate,isFavorite:newNote.isFavorite};
         setNotes([...notes,noteObject]);
         // change state newNote beceause not save new note another
         setNoteContainer(false);
       }
    }else{
       const id = newNote.id;
       const noteObject = {id,title:newNote.title,body:newNote.body,dateCreate:newNote.dateCreate,dateUpdate:newNote.dateUpdate,isFavorite:newNote.isFavorite};
       setNotes(notes.map(note=> note.id === id ? {...noteObject} : note ));
    }
   navigate('/');
   setTabs('notes');
  }

  // delete Note
  const handleDeleteNote = (id)=>{
    if(newNote.body !== ''){
      const noteFilter = notes.filter((note) => note.id != id);
      console.log(noteFilter);

      setNotes(noteFilter);
    }
   navigate('/');
   setTabs('notes');
  }
       
  // Favorite Note
  const handleFavoriteNote = (id)=>{
    const listNotes = notes.map(note => note.id == id ? 
       {...note,isFavorite:!note.isFavorite} : note );
    setNotes(listNotes);
  }
  

  return (
    <div className='App'>
      <Header />
      {!NoteContainer && (  
        <>
          <Tabs tabs={tabs} setTabs={setTabs} />
          <Routes>
            <Route path='/' element={<Notes notes={noteSort} />} />
            <Route path='/note/:id' 
                   element={<AddNote notes={notes} 
                                    isNewNote={NoteContainer}
                                    setNoteContainer={setNoteContainer} 
                                    newNote={newNote}
                                    setNewNote={setNewNote}
                                    handleSaveNote={handleSaveNote}
                                    handleDeleteNote={handleDeleteNote}
                                    handleFavoriteNote={handleFavoriteNote}
                              />} />
            <Route path='/groups' element={<Groups notes={notes} />} />
            <Route path='/*' element={<Missing />} />
          </Routes>
          <Fab NoteContainer={NoteContainer} setNoteContainer={setNoteContainer} />
        </>
      )}
      {NoteContainer && (
        <AddNote 
                 notes={notes}
                 isNewNote={NoteContainer} 
                 setNoteContainer={setNoteContainer}
                 newNote={newNote}
                 setNewNote={setNewNote}
                 handleSaveNote={handleSaveNote}
                 handleDeleteNote={handleDeleteNote}
                 handleFavoriteNote={handleFavoriteNote} />
      )}
    </div>
  )
}

export default App
