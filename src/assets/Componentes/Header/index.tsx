import "./style.css"
import Logo from "../../img/Logo.png"

 function Header() { 
return(
<>
<nav>
<div className="logo"><img src={Logo} alt="" />
        <div className="botoes">
            <a className="botao btn_home" href="#">Home</a>
            <a className="botao btn_eventos" href="#">Eventos</a>
            <a className="botao btn_contatos" href="#">Contatos</a>
            <a className="botao btn_login" href="#">Logar</a>
        </div>
        </div>
        
    </nav>
        </>
)
}export default Header