import './UserList.css'
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';

const UserList=({user ,setUser})=>{
                       
const history =useHistory()


return(


<div className="user-list">
<table>
<thead>
<tr>      
          <th>Name</th>
          <th>Company</th>
          <th>Role</th>
          <th>Phone</th>
        </tr>
</thead>
<tbody>
        
        {user.map((val,index) => {
                         return (
                             <tr key={index}>
                            
                             <td>{val.name}</td>
                             <td>{val.company}</td>
                             <td>{val.role}</td>
                             <td>{val.phone}</td>
                             <td><Button onClick={()=>{
                                                  const remainingUser=user.filter((val,idx)=>{
                                                                           const removeIdx= index;
                                                                           return removeIdx !== idx
                                                                           })
                                                                           setUser(remainingUser)
                                                                           console.log(remainingUser)
                             }} variant="outlined" color='error'><DeleteIcon/></Button></td>
                             <td><Button onClick={()=>history.push('/user/edit/'+index)} variant="outlined" color='success'><EditIcon/></Button></td>
                             <td><Button onClick={()=>history.push('/user/'+index)} variant="outlined" ><InfoIcon/></Button></td>
                            
                           </tr>
                          
                          
                         
                         
                          
                           
                         )
                       })}


</tbody>
</table>
</div>
)
}
export default UserList;