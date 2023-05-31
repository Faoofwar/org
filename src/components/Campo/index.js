import { useState } from "react"
import "./Campo.css"

const Campo = (props) => {

    const placeholderModificador = `${props.placeholder}...`
    //Destructuracion
    const {type = "texto"} = props


    
    const manejarCambio = (e) => {
       
        props.actualizarValor(e.target.value)
    }

    return <div  className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input placeholder={placeholderModificador} required={props.required} 
        value={props.valor} 
        onChange={manejarCambio}
        type = {type}/>
    </div>

}

export default Campo