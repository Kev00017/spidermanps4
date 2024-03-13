import React from "react";
import './styles.css'

function ImgCards() {
    return(
        <>
        <div className="characters-imgCards-container">
            <div className="imgCards-content">
                <diV className="imgCard img-1" >Spider-Man</diV>
                <diV className="imgCard img-2" >Peter Parker</diV>
                <diV className="imgCard img-3" >Mary Jane</diV>
                <diV className="imgCard img-4" >May Parker</diV>
                <diV className="imgCard img-5" >Wilson Fisk</diV>
                <diV className="imgCard img-6" >Norman Osborn</diV>
                <diV className="imgCard img-7" >Otto Octavius</diV>
                <diV className="imgCard img-8" >Mister Negative</diV>
                <diV className="imgCard img-9" >Miles Morales</diV>
                <diV className="imgCard img-10" >Black Cat</diV>
            </div>
        </div>
            <div className="characters-imgCards-container">
                <div className="placesImgCards-content">
                    <diV className="imgCard img-11" >Peter's House</diV>
                    <diV className="imgCard img-12" >New York City</diV>
                    <diV className="imgCard img-13" >Feast</diV>
                    <diV className="imgCard img-14" >Avengers Tower</diV>
                    <diV className="imgCard img-15" >Sanctum Sanctorum</diV>
                </div>
            </div>
            <div className="button-container">
               <button className="button">Adquira Marvel's Spider-Man</button>
            </div>
        </>    
    )

}

export default ImgCards;