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
    getItems();
  }, [] );

  const getItems = async () => {
    try{
      console.log(process.env.REACT_APP_CLIENT_ID)
      const { data } = await axios.get(`${process.env.REACT_APP_URL_API}/`+process.env.REACT_APP_CLIENT_ID );
      console.log(data)
      setItems( prevItems => data )

      if( isInRoute('config') ) return;
      if( data.length === 0  ){
        navigate('/')
        getItems();
      }
      else if( data.length > 0 ){
        navigate('/main')
        setTimeout( _ => getItems(), 10000 );
      }else{
        getItems()
      }
      data.forEach( (slider, index) => {
        axios.get('localhost:5000', {
          filename: slider.type+index,
          url: slider.src
        })
      });

    }catch(error){
      console.log('error')
    }    
  }

  const isInRoute = route => url.indexOf(route)!==-1;

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