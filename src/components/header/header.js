import React from 'react'
import './styles.css'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/BestWhiteLogo.png'

function Header() {
    return (
            <header>
                    <Link id='logo-container' style={{textDecoration: 'none'}} to='/easterEgg'>
                        <img id='logo' src={Logo} />
                        <p>Marvel's Spider-Man</p>
                    </Link>
                <nav>
                    <ul>
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
            </header>
    )
}

export default Header;