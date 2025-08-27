import React from "react"
import "../stylesheets/Animation.css"
import personalDevlopment from "../assets/personalDevlopment.jpg"
import classTrip from "../assets/classTrip2.jpg"
import notes from "../assets/Notes.png"
import rfid from "../assets/RFIDRefference.jpg"
import classroom from "../assets/digitalclassroom.png"
import Director from "./Director"


function AboutUs() {
    return (
        <>
        
            <section>
                <div className="AboutUs">
                    <h2>About Us</h2>
                    <p>At Shinde Coaching Classes, we offer quality education for all boards (CBSE, State, Semi-English, Marathi) from 1st to 10th, focusing on overall student development through modern teaching methods.</p>
                </div>
                <div className="overView-Heading">
                    <h2>Coaching Overview</h2>
                </div>
                <div className="features">
                    <div className="card animation-for-cards">
                        <img src={personalDevlopment} alt="" />
                        <h3>Personal Development</h3>
                    </div>
                    <div className="card animation-for-cards">
                        <img src={classTrip} alt="" />
                        <h3>Class Trip</h3>
                    </div>
                    <div className="card animation-for-cards">
                        <img src={notes} alt="" />
                        <h3>Study Material</h3>
                    </div>
                    <div className="card animation-for-cards">
                        <img src={rfid} alt="" />
                        <h3>RFID Attendance</h3>
                    </div>
                    <div className="card animation-for-cards">
                        <img src={classroom} alt="" />
                        <h3>Digital Classroom</h3>
                    </div>
                </div>
                
            </section>
            <Director/>
        </>
    )
}
export default AboutUs