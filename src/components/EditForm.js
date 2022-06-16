import React,{useState} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import './EditForm.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';

const EditForm =({updateUser,setUpdateUser})=>{
const {id}=useParams()
const users =updateUser[id]
const [name ,setName]=useState(users.name)
const [company ,setCompany]=useState(users.company)
const [role ,setRole]=useState(users.role)
const [phone ,setPhone]=useState(users.phone)
const history = useHistory()

const formHandler=(event)=>{
                         event.preventDefault()
const UpdateForm={
      name:name,
      company:company,
      role:role,
      phone:phone

}
const copingUser= [...updateUser]
copingUser[id]=UpdateForm
setUpdateUser(copingUser)

history.push('/')
}
return(
                         <form onSubmit={formHandler} className="form">
                         <TextField  type='text' label='name' value={name} onChange={(user)=>setName(user.target.value)} />
                         <TextField  type='text' label='Company' value={company} onChange={(user)=>setCompany(user.target.value)} />
                         <TextField  type='text' label='Role' value={role} onChange={(user)=>setRole(user.target.value)} />
                         <TextField  type='number' label='Phone Number' value={phone} onChange={(user)=>setPhone(user.target.value)}/>
                         <Button type='submit'><EditIcon/>Update User</Button>
                         </form>                     
)
}
export default EditForm