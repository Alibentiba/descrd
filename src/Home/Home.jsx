import React ,{useEffect,useState} from 'react'
import './Home.css'
import Sliderhome from '../Slider/Slider'
import Vieweres from '../Viewres/Vieweres'
import Movies from '../Movies/Movies'

import db from "../firebaseConfig";
import { collection,getDocs,getFirestore } from "firebase/firestore";
const Home = ()=>{
const db =getFirestore()
const colRef= collection(db,'movies')
getDocs(colRef).then((snap)=>{
  // console.log("tout les doc sont La ",snap.docs)
  let newdata=[]
  snap.docs.forEach((doc)=>{newdata.push({...doc.data(),id:doc.id})})

  console.log('ls donnes sont les suivent ',newdata)
})


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