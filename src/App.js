import {BrowserRouter,Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './components/Home'

import Demos from './components/Demos'
import Products from './components/Products'
import SalesTeam from './components/SalesTeam'
import Script from './components/Script'
import Login from "./components/Login"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route  path="/" element={<Products/>} />
      <Route  path="demo_script" element={<Script/>} />
      <Route  path="sales_team" element={<SalesTeam/>} />
      <Route  path="demos" element={<Demos/>} />
      <Route  path="settings" element={<Home/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App