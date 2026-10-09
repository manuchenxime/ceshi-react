import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home/Home';
import FormUser from './FormUser/FormUser';
import MeusCursos from './MeusCursos/MeusCursos';
function App() {
 const [cursos, setCursos] = useState([])

  return (
  <>
   <Routes>
    
        <Route path="/" element={<Home cursos={cursos} setCursos={setCursos}/>} />
                <Route path="/formularioUsuario" element={<FormUser />} />
 <Route path="/meusCursos" element={<MeusCursos />} />
      </Routes>
  </>
  )
}

export default App
