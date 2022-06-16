
import './App.css';
import React,{useState} from 'react';
import UserList from './components/UserList'
import UserForm from './components/UserForm'
import{Switch,Route,useHistory} from 'react-router-dom'
import EditForm from './components/EditForm'
import UserInfo from './components/userInfo'
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DashboardIcon from '@mui/icons-material/Dashboard';


const Duplicate_User = [
  {
  "id":"100",
  "name":'Abu',
  "role":'Software Developer',
  'company':'Amazon',
  'phone':987654321,
},
{
  "id":"101",
  "name":'Siddiq',
  "role":'Ethical Hacker',
  'company':'Cisco',
  'phone':987654310,
},
{
  "id":"102",
  "name":'Deen',
  "role":'Game Developer',
  'company':'Cisco',
  'phone':987654310,
},


]


function App() {
const [user,setUser]=useState(Duplicate_User)
const history=useHistory()

const UserHandler=(currentUser)=>{
  setUser((prevUser)=>[currentUser,...prevUser])
}


  return (
    <div >
    <Button  onClick={()=>history.push('/')} ><DashboardIcon/>Dash Board</Button>
    <Button  onClick={()=>history.push('/adduser')} ><PersonAddIcon/> Add user</Button>
 
    <Switch>
    
    <Route exact path="/">
    
    <UserList user={user} userHandler={UserHandler} setUser={setUser} />
    
    </Route>
    <Route exact path='/adduser'>
    
    <UserForm userHandler={UserHandler} />
    </Route>
    <Route exact path ='/user/edit/:id'>
    <EditForm updateUser={user} setUpdateUser={setUser}/>
    
    </Route>
    <Route exact path='/user/:id'>
   
    <UserInfo info={user}/>
    </Route>
  
    
    </Switch>
    
      
      
    </div>
  );
}

export default App;
