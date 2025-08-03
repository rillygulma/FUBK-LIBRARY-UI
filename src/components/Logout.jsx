import React, { useContext } from 'react'
import { AuthContext } from '../authentication/AuthProvider'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
      try {
        logOut();
        
        alert("Sign-Out Successfully!!✅")
        navigate("/");
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
      }    
    }
  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
        <button className='bg-red-700 px-8 py-2 text-white rounded hover:bg-black' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout;