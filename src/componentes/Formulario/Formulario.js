import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import BotonFormulario from "../BotonFormulario"
import { useState } from "react";

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColab, crearEquipo } = props

    const manejarEnvio = (e) => {
        //console.log("Manejar el envio: ")
        e.preventDefault()
        const data = {
            nombre,
            puesto,
            foto,
            equipo,
        }
        //console.log(data)
        registrarColab(data)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario: color })
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar nombre"
                valor = {nombre}
                actualizarValor = {actualizarNombre}
                />
            <Campo 
                titulo="Puesto"
                placeholder="Ingresar puesto"
                valor = {puesto}
                actualizarValor = {actualizarPuesto}
                />
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar URL de la foto"
                valor = {foto}
                actualizarValor = {actualizarFoto}
                />
            <ListaOpciones 
                valor = {equipo}
                actualizarValor = {actualizarEquipo}
                equipos={props.equipos}
                required
                />
            <BotonFormulario>
                Crear
            </BotonFormulario>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresar titulo"
                valor = {titulo}
                actualizarValor = {actualizarTitulo}
                />
            <Campo
                titulo="Color"
                placeholder="Ingresar el color en Hex"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
                <BotonFormulario>
                    Registrar Equipo
                </BotonFormulario>
        </form>
    </section>
}

export default Formulario