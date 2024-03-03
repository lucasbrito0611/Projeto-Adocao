import { Link } from 'react-router-dom'; 

import logo from '../../assets/logo.png';
import insta from '../../assets/insta.png';
import face from '../../assets/face.png';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
import magnus from '../../assets/magnus.png';
import premier from '../../assets/premier.png';
import petz from '../../assets/petz.png';
import lupa from '../../assets/lupa.png';

import './layout.css';

function Footer() { 
    return ( 
        <footer>
            <div className="div_logo">
                <figure className='logo'>
                    <img src={logo} alt="" />
                </figure>
            </div>
            <section className='container-footer'>
                <div className='mapa-site'>
                    <h2 className='h2-footer'>Mapa do site</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/quemsomos">Quem somos</Link></li>
                        <li><Link to="/adote">Adote</Link></li>
                        <li><Link to="/quemadotou">Quem adotou</Link></li>
                    </ul>
                </div>
                 
                <div className='contato'>
                    <h2 className='h2-footer'>Contato e suporte</h2>
                    <p className='p-footer'>Telefone: (84) 9999-9999</p>
                    <p className='p-footer'>E-mail: coracaoanimal @gmail.com.br</p>
                </div>
 
                <div className='redes-sociais'>
                    <h2 className='h2-footer'>Redes sociais</h2>
                    <div>
                        <figure><img src={insta}/></figure>
                        <figure><img src={face}/></figure>
                        <figure><img src={linkedin}/></figure>
                        <figure><img src={twitter}/></figure>
                    </div>
                </div>

                <div className='parceiros'>
                    <h2 className='h2-footer'>Parceiros</h2>
                    <div>
                        <figure>
                            <Link to="https://adimax.com.br/magnus/" target='_blank'><img src={magnus}/></Link>
                        </figure>
                        <figure>
                            <Link to="https://premierpet.com.br/" target='_blank'><img src={premier}/></Link>
                        </figure>
                        <figure>
                            <Link to="https://www.petz.com.br/" target='_blank'><img src={petz}/></Link>
                        </figure>
                    </div>
                </div>

                <div className='busca-container'>
                    <label htmlFor="busca">
                        <h2 className='h2-footer'>Busca</h2>
                    </label>
                    <div>
                        <input type="search" name="busca" id="busca"/> <br/>
                        <img src={lupa} alt="" />
                    </div>
                </div>

            </section>
        </footer>
    )
}

export default Footer;