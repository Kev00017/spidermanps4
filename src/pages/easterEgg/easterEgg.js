import React from "react";
import './styles.css';
import Header from "../../components/header/header";
import Footer from "../../components/footer";

function EasterEgg() {


    return(

        <>
        <Header />
        <div className="easterEgg-content">
            <div className="easterEgg"></div>
            <div className="easterEgg2"></div>
        </div>
        <Footer />
        </>

    )


}

export default EasterEgg;