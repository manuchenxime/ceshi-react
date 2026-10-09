function Card({nome, descricao, carga, modalidade, quantVagas, data}){
    return(
        <div>
            <h1>Nome:{nome}</h1>
            <h3>Desc:{descricao}</h3>
                <p>Carga:{carga}</p>
                <p>Modalidade:{modalidade}</p>
                <p>Quantidade de Vagas:{quantVagas}</p>
                <p>Data de inicio:{data}</p>
        </div>
    )
}
export default Card