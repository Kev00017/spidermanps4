import React from "react";
import Header from "../../components/header/header";
import './styles.css';
import Video from '../../assets/SpiderTrailer.mp4';
import Cards from "../../components/cards";
import Footer from "../../components/footer";

function Home(){

    return (
        <>
            <Header />
            <div id="banner"></div>
                <div id="trailer-container">
                    <div className="content">
                            <video controls className="trailer">
                                <source src={Video} />
                                Seu navegador não possui suporte para videos
                            </video>
                        <div id="sinopse">
                            <p className="description">
                            Protagonizado por um dos super-herois mais emblematicos do mundo, Marvel's Spider-Man para ps4 apresenta as habilidades acrobaticas,
                            a capacidade de improviso e o manejo das teias que tornaram este escalador de paredes famoso,
                            ao mesmo tempo que introduz elementos nunca antes vistos num jogo do Homem-Aranha. 
                            Desde as manobras de parkour para atravessar os cenarios  e ao novo sistema de combate e sequencias de acao bombasticas.
                            </p>
                            <button className="button">Adquira Marvel's Spider-Man</button>
                    </div>
                </div>
            </div>
            <Cards />
            <Footer />
        </>
    )
}

export default Home;