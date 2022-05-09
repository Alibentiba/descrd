import React ,{useEffect,useState} from 'react'
import './Home.css'
// import Sliderhome from '../Slider/Sliderhome'
import Sliderhome from '../Slider/Slider'
import Vieweres from '../Viewres/Vieweres'
import Movies from '../Movies/Movies'
import db from "../firebaseConfig";
import { addmovies } from '../Slice'

import { collection,getDocs,getFirestore } from "firebase/firestore";
import { useDispatch,useSelector } from 'react-redux'
const Home = ()=>{
const dispatch =useDispatch()
const db =getFirestore()
const colRef= collection(db,'movies')
// useEffect(()=>{
//   const newdata=[]
//   getDocs(colRef).then((snap)=>{
//     snap.docs.forEach((doc)=>{newdata.push({...doc.data(),id:doc.id}
    
//     )})})
//     console.log('ls donnes sont les suivent ',newdata)
//      dispatch(addmovies(newdata))},[])




     useEffect(()=>{
      getDocs(colRef).then((snap)=>{
        let newdata=[]
        snap.docs.forEach((doc)=>{newdata.push({...doc.data(),id:doc.id})})
        dispatch(addmovies(newdata))
        console.log('ls donnes sont les suivent ',newdata)
       

      })
      
    },[])

    




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