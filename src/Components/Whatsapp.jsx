import React from "react";
import "../stylesheets/whatsappBtn.css"
function Whatsapp() {
    const handleWhatsapp = () => {
        let whatsappUrl = "https://wa.me/919021467222";
        setSuccessMsg("Registration Successful! Redirecting to WhatsApp...");

        setTimeout(() => {
            window.location.href = whatsappUrl;
        }, 500);
    }
    return (
        <>
            <div className="buttonsContainer">
                <button id="shareJokeBtn" onClick={handleWhatsapp}>
                    <i className="fab fa-whatsapp" style={{ color: "#25D366", fontSize: "14px", marginRight: "5px" }}></i>
                    Whatsapp
                </button>
            </div>

        </>
    )
}
export default Whatsapp;