import React from 'react'
import { useEffect,useRef,useState } from 'react'
import axios from './api/axios';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER  = '/register';

const Register = () => {

const userRef  = useRef(); 
const errorRef = useRef(); 

const [user,setUser] = useState('');
const [userValidation,setUserValidation] = useState(false);
const [userFocus,setUserFocus] = useState(false);

const [pwd,setPwd] = useState('');
const [pwdValidation,setPwdValidation] = useState(false);
const [pwdFocus,setPwdFocus] = useState(false);

const [matchPwd,setMatchPwd] = useState('');
const [matchPwdValidation,setMatchPwdValidation] = useState(false);
const [matchPwdFocus,setMatchPwdFocus] = useState(false);


const [errMsg,setErrMsg] = useState('');
const [success,setSuccess] = useState(false);

//-------------------------------- Ref's focus  ------------------------------------- 

useEffect(()=>{
userRef.current.focus();
},[]);

//-------------------------------- User test  ------------------------------------- 

useEffect(()=>{
const result = USER_REGEX.test(user);
console.log(result);
console.log(user);
setUserValidation(result);
},[user]);
  
//-------------------------------- pwd and matchPwd test --------------------------------- 
useEffect(()=>{
  const response = PWD_REGEX.test(pwd);
  console.log(response);
  console.log(pwd);
  setPwdValidation(response);
  const matchTest = pwd === matchPwd;
  console.log(matchPwd);
  setMatchPwdValidation(matchTest);
},[pwd,matchPwd]);

//-------------------------------- pwd and matchPwd test --------------------------------- 

useEffect(()=>{
setErrMsg('');
},[user,pwd,matchPwd]);

const handelSubmit = async (e)=>{
e.preventDefault();

const v1 = USER_REGEX.test(user);
const v2 = PWD_REGEX.test(pwd);
if(!v1 || !v2){
setErrMsg("there's be error here");
return;
}
try {
const respacct = await axios.post(REGISTER,

JSON.stringify({ user,pwd}),
{
headers: { 
 'Content-Type' : 'application'
  },
  withCredentials : true
}
);
console.log(respacct.data);
setSuccess(true);
}catch(err){

  if(!err?.respacct){
setErrMsg('No server response');
  }else if(err.respacct?.status === 409){
    setErrMsg('userName Taken');
  }else {
    setErrMsg('Registration Failed');
  }

}

// console.log(user,pwd);
// console.log("misson comblete");
// setSuccess(true);

}

  return (
    <>
    {success ? (
<section className='bg-white  rounded'>
<h1 className='text-black  font-bold'>Success</h1>
</section>
    ) : (
      <section>
    <p  className='mb-7' aria-live='assertive'>{errMsg}</p>

      <div className='bg-blue-400 px-5 py-4 rounded select-none'>
<h2 className='text-4xl mb-6'>Register</h2>
      <form className='flex flex-col gap-3 text-left' onSubmit={handelSubmit} >
<label className='text-xl' htmlFor='username'>Username:</label>
<input type='text' ref={userRef} className='w-80 px-4 py-2 rounded mb-3' placeholder='your name...' 
 onChange={(e)=> setUser(e.target.value)} 
 required  
 id='username'
 onFocus={()=> setUserFocus(true)}  
 onBlur={()=> setUserFocus(false)} 
 aria-invalid={userValidation ? "false" : "true"}
 />

<p  className={userFocus && user && !userValidation ? "block bg-red-700 text-white py-2 px-4" : "hidden"}>
Is the sime man,Nothing has changed.
</p>

<label className='text-xl'>Password:</label>
<input type='password'  className='w-80 px-4 py-2 rounded mb-3' placeholder='your password...'  
 onChange={(e)=> setPwd(e.target.value)} 
 required  
 onFocus={()=> setPwdFocus(true)} 
 onBlur={()=> setPwdFocus(false)} 
 aria-invalid={pwdValidation ? "false" : "true"} />

<p className={pwdFocus && pwd && !pwdValidation ? "block bg-red-700 text-white py-2 px-4" : "hidden"}>
  Is the sime man,Nothing has changed.
</p>

<label className='text-xl'>Confirm Password:</label>
<input type='password'  className='w-80 px-4 py-2 rounded mb-3' placeholder='your password again...' 
onChange={(e)=> setMatchPwd(e.target.value)} 
required  
onFocus={()=> setMatchPwdFocus(true)}  
onBlur={()=> setMatchPwdFocus(false)} 
aria-invalid={pwdValidation ? "false" : "true"}
 />

<p  className={matchPwdFocus && matchPwd && !matchPwdValidation ? "block bg-red-700 text-white py-2 px-4" : "hidden"}>
  Is the sime man,Nothing has changed.
</p>

<button disabled={!userValidation || !pwdValidation || !matchPwdValidation ? true : false} className='bg-blue-700 transition outline-none hover:bg-blue-400 text-xl py-3 px-6 rounded'>Sign Up</button>
      </form>
    </div>
    </section>
  )}
    </>
  )
}

export default Register
