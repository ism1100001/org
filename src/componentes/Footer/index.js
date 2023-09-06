import "./footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.linkedin.com/in/ivan-salazar-mendoza/'>
                <img src="/img/linkedin.png" alt='Facebook' />
            </a>
            <a href='https://github.com/ism1100001'>
                <img src="/img/github.png" alt='twitter' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/pagina.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/logo.png' alt='org' />
        <strong>Desarrollado por Iván Salazar</strong>
    </footer>
}

export default Footer