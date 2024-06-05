import useRefreshToken from './hooks/useRefreshToken';
import {useAuth} from './hooks/useAuth';
import { useEffect,useState } from 'react';
import { Outlet } from 'react-router-dom';

const PersistLogin = () => {

const refrech = useRefreshToken();
const Auth = useAuth();
const [isLoading, setIsLoading] = useState(true);

useEffect(()=>{

const verifieRefrechToken = async ()=>{
    try {
        await refrech();
    } catch(err) {
console.error(err);
    } finally {
        setIsLoading(false);
    }
}
   !Auth?.accessToken ? verifieRefrechToken() : setIsLoading(false);;

},[]);





  return (
  <>
{isLoading ? <p>is Loading......... </p> : <h2>Hello world</h2>}
  </>
  )
}

export default PersistLogin
