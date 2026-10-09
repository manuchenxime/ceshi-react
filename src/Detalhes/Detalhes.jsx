import Card from "../Card/Card"
import { Link } from "react-router-dom"

function Detalhes({cursos, setCursos, nome, descricao, carga, modalidade, quantVagas, data}){

    return(
        <>
{cursos.map((curso)=>
<div key={curso.id}>
      <Card nome={curso.nome} descricao={curso.descricao} carga={curso.carga} modalidade={curso.modalidade} quantVagas={curso.quantVagas} data={curso.data}  />
      <Link to="/formularioUsuario">inscreva-se</Link>
</div>
)}
        </>
    )
}
export default Detalhes