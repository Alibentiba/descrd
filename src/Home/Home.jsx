import React ,{useEffect,useState} from 'react'
import './Home.css'

import Sliderhome from '../Slider/Slider'
import Vieweres from '../Viewres/Vieweres'
import Movies from '../Movies/Movies'
import db from "../firebaseConfig";
import { addmovies,addrecommend,addtrending, addoriginal, addnews } from '../Slice'
import { collection,getDocs,getFirestore } from "firebase/firestore";
import { useDispatch } from 'react-redux'
const Home = ()=>{


  

  return (
    <div className='Home'>
  <Sliderhome/>
  <Vieweres/>
  <Movies/>
  </div>
  )
}

export default Home