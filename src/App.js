import { useState, useEffect } from 'react'
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Load, Slider, Config } from './routes'


export default function App() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const url = window.location.href

  useEffect( () => {
    
    if( items.length === 0 && url.indexOf('main')!==-1 ){
      navigate('/')
    }else{
      getItems()
      setInterval(getItems, 30000)
      setTimeout(()=>{
        navigate('/main')
      },2000)
    }
    
  }, [] );

  const getItems = () => {
    fetch('https://loto.kavavdigital.com/wp-json/wp/v2/media')
      .then( response => response.json() )
      .then( json => {
          console.log(json);
          // saveData(json);
          setItems(json);
      } )
  }

  return (
    <div className="App">
      <Routes>
          <Route path="/main" element={<Slider items={items} />} />
          <Route path="/" element={<Load />} />
          <Route path="/config" element={<Config />} />
      </Routes>
    </div>
  );
}