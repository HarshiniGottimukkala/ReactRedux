import React, { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setMainUser, setUsers, setActive} from "../Redux/Slices/States/userSlice"

const User = () => {

  /* const data = useSelector((state)=>{
    state.user.user
  }) */


  const dispatch = useDispatch();

  const isActive = useSelector((state)=>{
    state.user.isActive;
  })

  console.log(isActive)

   const [ user, setUser ] = useState({
    name: "",
    email: "",
    password: ""
  });


  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser({
      ...user,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(user)
    dispatch(setMainUser(user));

    setUser({
      name: "",
      email: "",
      password: ""
    })
    dispatch(setUsers(user));
    dispatch(setActive());
       // console.log(user)
  }
  



  return (
    <div>
      {
        isActive ? <h1>True</h1> : <h1>False</h1> 
      }
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' name="name" value={user.name} onChange={handleChange} />
        <input type="text" placeholder='Email' name="email" value={user.email} onChange={handleChange} />
        <input type="password" placeholder='Password' name="password" value={user.password} onChange={handleChange} />
        <button >Submit</button>
      </form>
    </div>
  )
}

export default User