import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/index.jsx';
import Loading from './components/loading/index.jsx';
import Config from './components/config/index.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="loading" element={<Loading/>} />
          <Route path="config" element={<Config/>} />
      </Routes>
    </div>
  );
}

export default App;
