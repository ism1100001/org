import "./ListaOpciones.css"

const ListaOpciones = (props) => {
   
    const manejarCambio = (e) => {
      // console.log("cambio: ", e)
        props.actualizarValor(e.target.value)
    }    
    // Metodo map -> arreglo.map ((equipo, index)) => { return <op..></..> }
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select required={props.required} value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="">Seleccionar equipo</option>
            {
              props.equipos.map((equipo, index) => <option key={index}> {equipo} </option>
            )}
        </select>
    </div>
}

export default ListaOpciones