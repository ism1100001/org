//import { useState } from 'react'
import './MiOrg.css'

const MiOrg = (props) => {

   // console.log("-->  ", typeof props, " - ", Object.keys(props))

    /* 
      Estados - Hooks
        useState()
    */

   // const [variable, funcionActualizar] = useState(valorInicial)
   /* const [mostrar, actualizarMostrar] = useState(true)

    const mensajeClick = () => {
        console.log("Mostrar/Ocultar", !mostrar);
        actualiz*arMostrar("Hola")
    }*/

    return <section className='miorg-section'>
        <h2>Mi Organización</h2>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg