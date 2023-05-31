import "./listaOpciones.css"

const ListaOpciones = (props) => {

    //Metodo map -> arreglo.map ((equipo, index) => { return <optio></option>})

    const manejarCambio = (e) => {

        props.actualizarEquipo(e.target.value)
    }

    return <div className ="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value= "" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

   /* OTRA FORMA DE HACER LA FUNCION SERIA:
    {equipos.map((equipo, index) => {
        return <option key={index}>{equipo}</option>
    })}
    */

export default ListaOpciones