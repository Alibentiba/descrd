import React ,{useEffect,useState} from 'react'
import './Home.css'
import Sliderhome from '../Slider/Slider'
import Vieweres from '../Viewres/Vieweres'
import Movies from '../Movies/Movies'
import { collection, getDocs } from "firebase/firestore";
import db from "../firebaseConfig";
import axios from "axios";


const Home = () => {
const [movies,setMovies]=useState([])
useEffect(() => {
  async function fetchMovies() {
    const response = await axios.get("https://testdb-436c5-default-rtdb.firebaseio.com/");
    setMovies(response.data.movies);
  }
  fetchMovies();
}, []);

console.log(movies);

  return (
    <div className='Home'>
{/* <h1>Home componnt</h1> */}
  <Sliderhome/>
  <Vieweres/>
  <Movies/>
    </div>
  )
}

export default Home