import React, { useEffect, useState } from 'react'
import axios from './api/axios'

const userJWT = () => {
const [users,setUser] = useState('');

//------------------------------------ UseEffect -------------------------------------
useEffect(()=>{
let isMounted = true;
const controller = new AbortController();

const getUsers = async ()=>{

  try {
   
    isMounted && setUser(response.data);
  }catch(err){
    console.error(err);
  }
  getUsers();
  return ()=>{
    isMounted = false;
    controller.abort();
  }
}

},[]);




  return (
    <>
    <article>
      <h2>User List</h2>
{users?.lenght 
? 
(
<ul>
  {users.map((user,i)=>{
    <li key={i}>{user?.username}</li>
  })}
</ul>





):<p>No User To Display</p>







} 





    </article>
    </>
  )
}

export default userJWT
