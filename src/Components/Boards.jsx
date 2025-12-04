import React from "react";
import "../stylesheets/boardsSection.css"
import "../stylesheets/animation.css"

function Boards() {
    return (
        <>
            <section className="Boards-Container">
                <div className="Boards-Container-title">
                    <h2>We Teach Across...</h2>
                </div>
                <div className="Boards">
                    <div className="boxes Cbse  animate-scale">CBSE</div>
                    <div className="boxes State  animate-scale">STATE</div>
                    <div className="boxes semi  animate-scale">SEMI</div>
                    <div className="boxes Marathi  animate-scale">मराठी</div>

                </div>
            </section>
        </>
    )
}

export default Boards;