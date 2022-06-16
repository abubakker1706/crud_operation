import {useHistory,useParams} from 'react-router-dom'
import Button from '@mui/material/Button';
const UserInfo =({info})=>{
const history = useHistory()
const {id}=useParams();
const users = info[id]
return(
<div>
<h1>{users.name}</h1>
<h2>{users.company}</h2>
<h3>{users.role}</h3>
<h4>{users.phone}</h4>

<Button onClick={()=>history.goBack()}>Back</Button>



</div>
)
}
export default UserInfo