import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home/Home';
import FormUser from './FormUser/FormUser';
import MeusCursos from './MeusCursos/MeusCursos';
import Detalhes from './Detalhes/Detalhes';
function App() {
 const [cursos, setCursos] = useState([])
const [nome, setNome] = useState("")
const [descricao, setDescricao] = useState("")
const [carga, setCarga] = useState("")
const [pesquisa, setPesquisa]= useState("")
const [modalidade, setModalidade] = useState("")
const [quantVagas, setQuantVagas] = useState("")
const [data, setData] = useState("")
  return (
  <>
   <Routes>
    
        <Route path="/" element={<Home cursos={cursos} setCursos={setCursos} nome={nome} setNome={setNome} descricao={descricao} setDescricao={setDescricao} carga={carga} pesquisa={pesquisa} modalidade={modalidade} quantVagas={quantVagas} data={data} setCarga={setCarga} setPesquisa={setPesquisa} setModalidade={setModalidade} setQuantVagas={setQuantVagas} setData={setData}/>}  />
                <Route path="/formularioUsuario" element={<FormUser />} />
 <Route path="/meusCursos" element={<MeusCursos />} />
               <Route path="/detalhesCurso" element={<Detalhes cursos={cursos} setCursos={setCursos} nome={nome} setNome={setNome} descricao={descricao} setDescricao={setDescricao} carga={carga} pesquisa={pesquisa} modalidade={modalidade} quantVagas={quantVagas} data={data} setCarga={setCarga} setPesquisa={setPesquisa} setModalidade={setModalidade} setQuantVagas={setQuantVagas} setData={setData} />}  />
      </Routes>

  </>
  )
}

export default App
