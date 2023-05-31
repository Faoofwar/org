import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"
import { useState } from "react"

const Formulario = (props) => {

    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo,actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState ("")

    const {registrarColaborador, crearEquipo} = props

// e = event
    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar envio")
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        registrarColaborador(datosAEnviar)
        
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo,colorPrimario : color})
    }

    return <section className = "formulario">

        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo titulo="Nombre" 
                placeholder="Ingrese Nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}/>
            <Campo titulo="Puesto" 
                placeholder="Ingrese Puesto" 
                required
                valor={puesto} 
                actualizarValor={actualizarPuesto}/>
            
            <Campo titulo="Foto" 
                placeholder="Ingrese enlace de foto" 
                required
                valor={foto} 
                actualizarValor={actualizarFoto}/>

            <ListaOpciones 
                valor={equipo}
                actualizarEquipo = {actualizarEquipo}
                equipos = {props.equipos}/>
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingrese titulo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}/>
            <Campo 
                titulo="Color" 
                placeholder="Ingrese el color en Hex" 
                required
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"/>
            <Boton>Registrar equipo</Boton>
        </form>
    </section>
}

export default Formulario