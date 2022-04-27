import './App.css';
import Chat from './Chat/Chat';
import Sidbar from './Sidbar/Sidbar';
import {useSelector} from 'react-redux'
import Login from "../src/Login/Login.jsx"

function App() {
  const user= useSelector(state=>state.userstore.user)
  return (
    <div className="App">
      {user? (<><Sidbar/> <Chat/></>)
           :(<Login/>)
      }
     
    </div>
  );
}

export default App;
