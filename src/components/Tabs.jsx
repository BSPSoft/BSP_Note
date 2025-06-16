import { Link } from 'react-router-dom';

function Tabs({ tabs,setTabs }) {
  return (
    <div className="tabs">
        <Link 
              className={tabs==='group'? 'tab active':'tab'} 
              onClick={()=> setTabs('group')}  
              to='/groups'
        >المجموعات</Link>
        <Link 
              className={tabs==='notes'?'tab active':'tab'} 
              onClick={()=> setTabs('notes')}
              to='/'
        >الكل</Link>
    </div>
  )
}

export default Tabs