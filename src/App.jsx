import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
 const [alunos, setAlunos] = useState([])

  return (
  <>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  </>
  )
}

export default App
