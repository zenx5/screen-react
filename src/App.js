import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Load, Slider, Config } from './routes'


export default function App() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const url = window.location.href

  useEffect( () => {
    if( url.indexOf('config')!==-1 ) return;
    if( items.length === 0 && url.indexOf('main')!==-1 ){
      navigate('/')
      getItems()
    }
    else if( items.length > 0 ){
      navigate('/main')
    }else{
      getItems()
    }
    
  }, [items] );

  const getItems = async () => {
    try{
      const { data } = await axios
        .post(`${process.env.REACT_APP_URL_API}`, {
          client:process.env.REACT_APP_CLIENT_ID
        })
      setItems( prevItems => data )
      data.forEach( slider => {
      
      });

    }catch(error){
      console.log('error')
    }    
  }

  return (
    <div className="App">
      <Routes>
          <Route path="/main" element={<Slider items={items} />} />
          <Route path="/" element={<Load />} />
          <Route path="/config" element={<Config update />} />
      </Routes>
    </div>
  );
}