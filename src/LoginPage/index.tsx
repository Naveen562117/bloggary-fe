
import React, { useEffect, useState } from 'react';
import { useAuth } from '../Store/authStore';
export const LoginPage = () => {

  const [isLoading, setisLoading] = useState(false);
  const { auth, login } = useAuth()
  
  useEffect(() => {

  }, []);

  return (
    <div className="App">
      <div className="login-container">

        <p>Please Login!</p>
        <input
          type="text"
          placeholder="Enter username"
          value={""}
          autoFocus
          onChange={e => {

          }
          }
        />
        <input
          type="password"
          placeholder="Enter password"
          value={""}
          onChange={e => {

          }
          }
        />
        <button className="submit" onClick={
          () => {
            login("sdfasdf")
          }
        } disabled={isLoading}>
          {isLoading ? 'Logging In.....' : 'Log In'}
        </button>


      </div>
    </div>
  );
}