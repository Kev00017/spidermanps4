import React from "react";
import Header from "../../components/header/header";
import './styles.css';
import { Form } from "react-router-dom";
import Footer from "../../components/footer";

function Contato(){
    

    return (
        <>
            <Header />
            <div id="contact-banner"></div>

            <div className="contact-container">
                <div className="contact-content">
                    <div className="userInfo-cotent">
                        <input className="contact-name" placeholder="Nome"></input>
                        <input className="contact-email" placeholder="Email" type="email"></input>
                    </div>
                        <div className="userText-content">
                        <textarea className="contact-coment" placeholder="Como podemos ajudar?"></textarea>
                        </div>
                    <button className="contact-button">Enviar</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contato;