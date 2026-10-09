import Card from "../Card/Card";

function MeusCursos(){
    return(
        <>
        <Card nome="fullstack" descricao="Curso de fullstack" carga="2334h" modalidade="TI" quantVagas="30" data="23/11/2026"/>
                <Card nome="UI" descricao="Curso de UI gratis" carga="23h" modalidade="TI" quantVagas="21" data="23/01/2027"/>
                        <Card nome="Padaria" descricao="Curso de padaria" carga="1000h" modalidade="Culinaria" quantVagas="90" data="11/02/2027"/>
        </>
    )
}
export default MeusCursos