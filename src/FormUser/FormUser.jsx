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
}
export default FormUser