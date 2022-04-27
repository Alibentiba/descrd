import './App.css';
import Chat from './Chat/Chat';
import Sidbar from './Sidbar/Sidbar';
import { useDispatch, useSelector } from 'react-redux'
import Login from "../src/Login/Login.jsx"
import React, { useEffect } from 'react';
import { auth } from "./firebaseConfig"
import { logout, login } from './Slice'

function App() {
  const user = useSelector(state => state.userstore.user)
  const dispatch = useDispatch();

  useEffect(() => {

    // auth.onAuthStateChanged((authuser) => {
    //   if (authuser) { dispatch(login({ uid: authuser.uid, photo: authuser.photo, email: authuser.email, displayName: authuser.displayName })) }
    //   else { dispatch(logout()) }
    // })
  }, [])




  return (
    <div className="App">
      {user ? (<><Sidbar /> <Chat /></>)
        : (<Login />)
      }
    </div>
  );
}

export default App;
