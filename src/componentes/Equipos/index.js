import Colaborador from "../Colaborador";
import "./Equipos.css"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    const {colorPrimario, colorSecundario, titulo, id} = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    const estiloTitulo = {borderColor: colorPrimario}

    const obj = {backgroundColor: hexToRgba(colorPrimario, 0.6)}

   // console.log("Equipo: ", props)

   /* return <section className="equipo" style={{backgroundColor: colorSecundario}}>
        <h3 style={{estiloTitulo}}>{titulo}</h3>
        <div className="Colaboradores">
          {
            colaboradores.map((colaborador, index) => <Colaborador datos={colaborador} key={index}/>) 
          }
        </div>
      </section>*/


    return <> {colaboradores.length > 0 &&  
        <section className="equipo" style={obj}>
        <input
          className="input-color"
          type='color'
          value={colorPrimario}
          //cuando le asignamos valor al value debemos quitarle
          //responsabilidad al navegador usando onChange
          onChange={(evento)=>{
            actualizarColor(evento.target.value, id)
          }}
        />
        <h3 style={{estiloTitulo}}>{titulo}</h3>
        <div className="Colaboradores">
          {
            colaboradores.map((colaborador, index) => <Colaborador
                                                          datos={colaborador} 
                                                          key={index} 
                                                          colorPrimario={colorPrimario}
                                                          eliminarColaborador={eliminarColaborador}
                                                          like = {like}
                                                          /> ) 
          }
        </div>
      </section>}
      </>
}

export default Equipo