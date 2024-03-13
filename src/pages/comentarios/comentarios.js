import React from "react";
import Header from "../../components/header/header";
import './styles.css';
import Footer from "../../components/footer";

function Comentarios(){

    return (
        <div>
            <Header />
            <div className="coments-container">
                <div className="coments-content">
                    <div className="userComent">
                        <div className="userInfo-coment">Nome do usuario</div>
                        <textarea className="comentInput" placeholder="Adicionar comentario..."></textarea>
                        <button className="coment-button">Enviar</button>
                    </div>
                    <div className="coments-done-content">
                        <div className="anotherUserComents">Aninha: <p className="coment">Achei massa</p> </div>
                        <div className="anotherUserComents">Jorginho: <p className="coment">Creio que sera um otimo jogo, talvez um dos melhores de todos os tempos</p> </div>
                        <div className="anotherUserComents">Pedrinho: <p className="coment">Melhor jogo de heroi que teremos</p> </div>
                        <div className="anotherUserComents">Paulinho: <p className="coment">GOAT desse ano, muito melhor que God Of War</p> </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Comentarios;