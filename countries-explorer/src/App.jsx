import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CountryDetail from './pages/CountryDetail.jsx';
import Build from './pages/Build.jsx';
import MobileApp from './pages/build/MobileApp.jsx';
import WebApp from './pages/build/WebApp.jsx';
import About from './pages/About.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
        <NavLink to="/build" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Build</NavLink>
        <NavLink to="/About" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/country/:name" element={<CountryDetail/>}></Route>
        <Route path="/build" element={<Build/>}>
          <Route path="web" element={<WebApp/>}></Route>
          <Route path="mobile" element={<MobileApp/>}></Route>
        </Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </>
  )
}

export default App
