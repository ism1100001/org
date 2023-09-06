import "./boton.css"

const BotonFormulario = (props) => {
    return <button className="boton-formulario">
        {props.children}
    </button>
}

export default BotonFormulario