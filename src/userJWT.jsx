import React, { useEffect, useState } from 'react'
import axios from './api/axios'

const UserJWT = () => {

const [users,setUser] = useState('');

//------------------------------------ UseEffect -------------------------------------
useEffect(()=>{
let isMounted = true;
const controller = new AbortController();

const getUsers = async ()=>{

  try {
  const response = axios.get('https://jsonplaceholder.typicode.com/todos',{
    signal:controller.signal
  });
    isMounted && setUser(response.data);
  }catch(err){
    console.error(err);
  }
  // console.log(response.data);
  return ()=>{
    isMounted = false;
    controller.abort();
  }
}

getUsers();

},[]);

  return (
    <>
    <article>
      <h2 className='text-3xl mb-5'>User List:<br /></h2>
{users?.length?
(
<ul>
  {users.map((user,i)=>{
    <li key={i}>{user?.username}<br /></li>
  })}
</ul>

) : <p>No Users To Display</p>







} 





    </article>
    </>
  )
}

export default UserJWT
