import React, { useRef, useState, useEffect } from 'react'

const LogIn = () => {

const userRef = useRef();
const errorRef = useRef();

const [user,setUser] = useState('');
const [pwd,setPwd] = useState('');

const [errMsg,setErrMsg] = useState('');
const [success,setSuccess] = useState(false);


//-------------------------------- Ref's focus  ------------------------------------- 

useEffect(()=>{
  userRef.current.focus();
},[]);


//-------------------------------- pwd and matchPwd test --------------------------------- 

useEffect(()=>{
  setErrMsg('');
},[user,pwd]);



  return (
    <section>
    <p ref={errorRef} className={errMsg ? 'block mb-7' : 'hidden mb-7' } aria-live='assertive'>{errMsg}</p>

      <div className='bg-blue-400 px-5 py-4 rounded select-none'>
<h2 className='text-4xl mb-6'>Log In</h2>
      <form className='flex flex-col gap-3 text-left' >
<label className='text-xl' htmlFor='username'>Username:</label>
<input type='text' ref={userRef} className='w-80 px-4 py-2 rounded mb-3' placeholder='your name...' 
 onChange={(e)=> setUser(e.target.value)} 
 required  
 id='username'
 aria-invalid=''
 />

{/* 
<p  className={''}>
Is the sime man,Nothing has changed.
</p> */}


<label className='text-xl'>Password:</label>
<input type='password'  className='w-80 px-4 py-2 rounded mb-3' placeholder='your password...'  
 onChange={(e)=> setPwd(e.target.value)} 
 required  
 aria-invalid='' />


{/* <p className=''>
  Is the sime man,Nothing has changed.
</p> */}


<button  className='bg-blue-700 transition outline-none hover:bg-blue-400 text-xl py-3 px-6 rounded'>Sign Up</button>
      </form>
    </div>
    </section>
  )
}

export default LogIn
