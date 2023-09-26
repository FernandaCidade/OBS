import Logo from "../../img/Logo.png"
import LogoApresentacao from "../../img/LogoApresentacao.png"
import "./style.css";


export default function Home() {
    return(
        <>
        
        <section className="home">
            {/* <div><img src={LogoApresentacao} alt="" /></div> */}
            <section className="eventos">
                <h3>Proximos eventos</h3>

                <div className="tiposEventos">
                    <span>Titulo do Evento</span>
                    <p>Breve descricao do evento, pode ser um paragrafo pequeno</p>
                    <a href="#">Conectar</a>
                </div>

            </section>
        </section>

        
        </>

    ); 
} 