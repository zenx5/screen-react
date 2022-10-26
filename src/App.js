import { useState, useEffect } from 'react'
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
    }else{
      getItems()
      setInterval(getItems, localStorage.getItem('intervalRefresh')||5000 )
      
    }
    
  }, [] );

  const getItems = () => {
    try{
      console.log(process.env.REACT_APP_URL_API)
      if(items.length === 0){
        setTimeout(()=>{
          if(items.length>0){
            navigate('/main')
          }
        },2000)
      }
      fetch(process.env.REACT_APP_URL_API)
      .then( response => response.json() )
      .then( json => {
          console.log(json);
          setItems(json);
      } )
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