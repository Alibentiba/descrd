import './App.css';
import Nvabar from './Navbar/Nvabar';
import Home from "./Home/Home.jsx"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React ,{useEffect} from 'react'

import db from "./firebaseConfig";
import { addmovies,addrecommend,addtrending, addoriginal, addnews } from './Slice'
import { collection,getDocs,getFirestore } from "firebase/firestore";
import { useDispatch } from 'react-redux'
function App() {
  const dispatch =useDispatch()
  const db =getFirestore()
  const colRef= collection(db,'movies')
  
       useEffect(()=>{
        let recommend=[]
        let trending=[]
        let original=[]
        let news=[]
        getDocs(colRef).then((snap)=>{
          let newdata=[]
          snap.docs.forEach((doc)=>{newdata.push({...doc.data(),id:doc.id})})
          dispatch(addmovies(newdata))
          console.log('ls donnes sont les suivent 1 ',newdata)
  
        for (let i = 0; i < newdata.length; i++) {
          switch (newdata[i].type) {
            case "recommend":
              recommend=[...recommend,newdata[i]]
              break;
            case "trending":
              trending=[...trending,newdata[i]]
              break;
            case "original":
              original=[...original,newdata[i]]
              break;
              default:
                news = [...news,newdata[i]]
            
          }}
          dispatch(addrecommend(recommend))
          dispatch(addtrending(trending))
          dispatch(addoriginal(original))
          dispatch(addnews(news))
          console.log("la cat recommend",recommend);
          console.log("la cat trending",news);
        })},[])




  return (
    <div className="App">
     <Nvabar/>
     <Home/>
    {/* <Detail/> */}
    </div>
  );
}

export default App;
