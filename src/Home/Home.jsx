import { useState } from "react"
import Card from "../Card/Card"

function Home({cursos, setCursos}){
const [nome, setNome] = useState("")
const [descricao, setDescricao] = useState("")
const [carga, setCarga] = useState("")
const [pesquisa, setPesquisa]= useState("")
const [modalidade, setModalidade] = useState("")
const [quantVagas, setQuantVagas] = useState("")
const [data, setData] = useState("")

const resultadoPesquisa = cursos.filter((curso)=>
curso.nome.toLowerCase().includes(pesquisa.toLowerCase())
)

function adicionar(e){
e.preventDefault()

if(nome.length < 1){
    alert("Preencha um nome")
    return
}

if(descricao.length < 10){
    alert("Descreva um curso")
    return
}
if(carga.length < 1){
    alert("Adicione uma carga horaria")
    return
}
if(modalidade.length < 1){
    alert("Coloque uma modalidade")
    return
}
if(quantVagas.length < 1){
    alert("Adicione uma quantidade de vagas")
    return
}
if(data > 10102026){
    alert("Coloque uma data valida")
        return

}

const novoCurso = {
    id:Date.now(),
    nome:nome,
    descricao:descricao,
    carga:carga,
    modalidade:modalidade,
    quantVagas:quantVagas,
    data:data
}

const listaAtualizada = [...cursos, novoCurso]

setCursos(listaAtualizada)

alert("Curso criado com sucesso!")
}

function excluir(id){
    setCursos(cursos.filter((curso)=>
    curso.id !== id
    ))
}

    return(
        <>

        <input
         type="text"
         value={pesquisa}
         onChange={(e)=>setPesquisa(e.target.value)}
         placeholder="Pesquise um curso"
         />
{
    resultadoPesquisa.length > 0 ? (
        resultadoPesquisa.map((curso)=>
        <div key={curso.id}>
        <Card nome={curso.nome} descricao={curso.descricao} carga={curso.carga} />
        <button onClick={()=>excluir(curso.id)}>Excluir curso</button>
        <Link to="/contact">Contact</Link>
        </div>
        )
    ):(
        <h1>Não ha cursos com essa informação</h1>
    )

}
<form onSubmit={adicionar}>
    <h1>Cadastre um curso</h1>
<input
 type="text"
 value={nome}
 onChange={(e)=>setNome(e.target.value)}
 placeholder="Adicione um nome"
 />
 <input
 type="text"
 value={descricao}
 onChange={(e)=>setDescricao(e.target.value)}
 placeholder="Adicione uma Descrição"
 />
 <input
 type="number"
 value={carga}
 onChange={(e)=>setCarga(e.target.value)}
 placeholder="Adicione uma Carga Horaria"
 />
 <input
 type="text"
 value={modalidade}
 onChange={(e)=>setModalidade(e.target.value)}
 placeholder="Adicione uma Modalidade "
 />
 <input
 type="number"
 value={quantVagas}
 onChange={(e)=>setQuantVagas(e.target.value)}
 placeholder="Adicione uma Quantidade de Vagas "
 />
 <input
 type="date"
 value={data}
 onChange={(e)=>setData(e.target.value)}
 placeholder="Adicione uma Data de Inicio "
 />

<button type="submit">Cadastrar um curso</button>
</form>
        </>
    )
}
export default Home