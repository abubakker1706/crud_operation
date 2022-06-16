import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './UserForm.css'

import AddCircleIcon from '@mui/icons-material/AddCircle';


const UserForm=(props)=>{
const [name ,setName]=useState('')
const [company ,setCompany]=useState('')
const [role ,setRole]=useState('')
const [phone ,setPhone]=useState('')
const history = useHistory()
const formHandler=(event)=>{
                         event.preventDefault()
const addForm={
      name:name,
      company:company,
      role:role,
      phone:phone

}
props.userHandler(addForm)
history.push('/')
}

return(
            <form onSubmit={formHandler} className="form">
            <TextField type='text' label='Name' value={name} onChange={(user)=>setName(user.target.value)} />
            <TextField type='text' label='Company' value={company} onChange={(user)=>setCompany(user.target.value)} />
            <TextField type='text' label='Role' value={role} onChange={(user)=>setRole(user.target.value)} />
            <TextField label='Phone Number' type='number'  value={phone} onChange={(user)=>setPhone(user.target.value)}/>
            <Button type='submit'><AddCircleIcon/>Add User</Button>
            </form>             
)
}
export default UserForm