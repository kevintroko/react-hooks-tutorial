import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomeScreen = () => {
  const {user, setUser} = useContext(UserContext);
  console.log(user);
  const handleClick = () => {
    setUser({});
  }
  
  return (
  <div>
      <h1>Home Screen</h1>
      <hr/>
      
      <pre>
        { JSON.stringify(user, null, 3)}
      </pre>
      
      <button className='btn btn-warning'
              onClick={handleClick}>
        Logout
      </button>
  </div>
  );
};
