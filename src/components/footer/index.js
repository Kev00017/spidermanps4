import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import FooterLogo from '../../assets/BestWhiteLogo.png'

function Footer() {

    return (
        <>
            <footer>
                <img id="footer-logo" src={FooterLogo}/>
                <span className="span-footer">Todos os direitos reservados <span className="copy">©</span></span>
                <span className="span-footer-dev">Desenvolvido por: Kevin De Souza</span>

                <nav className="footer-navigation">
                    <ul className="footer-list">
                        <Link style={{textDecoration: 'none' }} to='/'>
                            <li>Home</li>
                        </Link>
                        <Link style={{textDecoration: 'none' }} to='/fotos'>
                            <li>Fotos</li>
                        </Link>
                        <Link style={{textDecoration: 'none' }} to='/comentarios'>
                            <li>Comentarios</li>
                        </Link>
                        <Link style={{textDecoration: 'none' }} to='/contato'>
                            <li>Contato</li>
                        </Link>
                    </ul>
                </nav>
            </footer>
        </>
    )

}

export default Footer;