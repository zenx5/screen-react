import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Load, Slider, Config } from './routes'


export default function App() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const url = window.location.href
  const userId = localStorage.getItem('userId')||0;

  useEffect( () => {
    if( isInRoute('config') ) return;
    navigate('/')
    getItems();
  }, [] );

  const getLocalImages = async _ => {
    const files = await axios.get('http://localhost:5000/getImagesCount');
    setTimeout( _ => getItems(), localStorage.getItem('intervalRefresh')||5000 );
    console.log(files)
    setItems( prevItems => files.data )
    navigate('/main')
  }

  const getItems = async () => {
    try{
      const { data } = await axios.get(`${process.env.REACT_APP_URL_API}/`+userId );
      console.log(data)
      setItems( prevItems => data )

      if( data.length === 0  ){
        navigate('/config')
      }
      else if( data.length > 0 ){
        navigate('/main')
        setTimeout( _ => getItems(), localStorage.getItem('intervalSlider')||10000 );
      }else{
        getItems()
      }
      await axios.get('http://localhost:5000/delete')
      data.forEach( (slider, index) => {
        axios.get('http://localhost:5000?filename='+slider.type+index+'&url='+slider.src )
      });

    }catch(error){
      console.log('error')
      await getLocalImages();
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