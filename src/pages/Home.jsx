import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import axios from 'axios';
import Habitations from '../components/Habitations';


const Home = () => {
  const [data,setData] = useState([])
  useEffect(() => {
    axios.get("logement.json")
    .then((res)=> setData(res.data))
    .catch((error)=> console.log(error))
  },[])
  return (
    <div>
      <Banner url='https://i.ibb.co/sy1mD3d/banner-acceuil.png' displayText />
      <Habitations element={data}/>
    </div>
    
  
  );

  }
export default Home;
