import React from 'react'
import { useLocation } from 'react-router-dom';
const Profile = () => {
  const { state } = useLocation();
  return (
    <div>
      <h1>{state.values.firstname} {state.values.lastname} Profile</h1>  
      <br/>
      <h4>Frist Name : {state.values.firstname}</h4>
      <br/>
      <h4>Last Name : {state.values.lastname}</h4>
      <br/>
      <h4>Email : {state.values.email}</h4>
    </div>
  )
}

export default Profile;
