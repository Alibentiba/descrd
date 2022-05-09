import './App.css';
import Nvabar from './Navbar/Nvabar';
import Home from "./Home/Home.jsx"
import { Detail } from './Detail/Detail';
function App() {
  return (
    <div className="App">
     <Nvabar/>
     {/* <Home/> */}
<Detail/>
    </div>
  );
}

export default App;
