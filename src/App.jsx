import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Load, Slider, Config } from './routes'


export default function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/load" element={<Load />} />
          <Route path="/config" element={<Config />} />
      </Routes>
    </div>
  );
}