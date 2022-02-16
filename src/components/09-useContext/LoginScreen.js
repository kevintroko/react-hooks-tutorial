import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);
  console.log(setUser);
  
  return (
  <div>
      <h1>Login Screen</h1>
      <hr/>
      <button className='btn btn-primary'
              onClick={() => setUser({
                id: 1,
                name: 'Kevin',
              })}>
        Login
      </button>
  </div>
  );
};
