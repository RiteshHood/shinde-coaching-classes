import React from "react";
import "../stylesheets/whatsappBtn.css"
function Whatsapp() {
    const handleWhatsapp=()=>{
        let whatsappUrl = "https://wa.me/919021467222";
        window.open(whatsappUrl , "_blank");
    }
    return (
        <>
            <div className="buttonsContainer">
                <button id="shareJokeBtn" onClick={handleWhatsapp}>
                    <i className="fab fa-whatsapp" style={{ color: "#25D366", fontSize: "14px", marginRight: "5px" }}></i>
                    Chat on Whatsapp 
                </button>
            </div>

        </>
    )
}
export default Whatsapp;