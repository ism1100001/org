//import { useState } from "react"
import "./Campo.css"

const CampoTexto = (props) => {

    //const [valor, setValor] = useState("")

    const { type = "text" } = props

    const changeValor = (e) => {
      //  console.log("--- Evento: ", e)
        props.actualizarValor(e.target.value)
    }

    //console.log("Props: ", props)

   // const placeholderModificado = `${props.placeholder}...`

    return <div
        className={`campo campo-${type}`}>
        <label> {props.titulo} </label>
        <input
            placeholder= {props.placeholder}
            required={props.required}
            value={props.valor}
            onChange={changeValor}
            type={type}
        />
    </div>
}

export default CampoTexto