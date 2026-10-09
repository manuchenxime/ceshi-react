function Adm({cursos, setCursos, nome, descricao, carga, modalidade, quantVagas, data,  setNome, setDescricao, setCarga, setModalidade, setQuantVagas, setData}){

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
    return(
        <>
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
export default Adm