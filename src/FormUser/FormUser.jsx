import { useState } from "react"

function FormUser(){
 const [nomeCom, setNomeCom] = useState("")
 const [cpf, setCpf] = useState("")
 const [email, setEmail] = useState("")
 const [dataNasc, setDataNasc] = useState("")


    function cadastrar(e){
e.preventDefault()
if(nomeCom.length < 1){
    alert("preencha um nome")
    return
}
if(!email.includes("@") || !email.includes(".")){
    alert("insira um email valido")
    return
}
if(cpf.length !== 11){
    alert("insira um cpf valido")
        return
    }
    if(dataNasc.length < 0){
        alert("insira uma data de nascimento")
        return
    }

    alert("inscrito com sucesso!")
    }

    return(
        <>
        <form onSubmit={cadastrar}>
            <input
             type="text"
             value={nomeCom}
             onChange={(e)=>setNomeCom(e.target.value)}
             placeholder="Digite seu nome completo"
             />
                         <input
             type="text"
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
             placeholder="Digite seu Email"
             />
                         <input
             type="number"
             value={cpf}
             onChange={(e)=>setCpf(e.target.value)}
             placeholder="Digite seu CPF" 
             />
                         <input
             type="text"
             value={dataNasc}
             onChange={(e)=>setDataNasc(e.target.value)}
             placeholder="Digite sua data de nascimento"
             />
             <button type="submit">Inscrever-se</button>
        </form>
        </>
    )
}
export default FormUser