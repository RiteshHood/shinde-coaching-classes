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
                    <div className="stats-container">
                        <div className="stat-box">
                            <h2>500+</h2>
                            <p>Students</p>
                        </div>

                        <div className="stat-box">
                            <h2>10+</h2>
                            <p>Years Experience</p>
                        </div>

                        <div className="stat-box">
                            <h2>98%</h2>
                            <p>Results</p>
                        </div>

                        <div className="stat-box">
                            <h2>4</h2>
                            <p>Boards</p>
                        </div>
                    </div>

                    <div className="overView-Heading">
                        <h2>Why Students Love Learning With Us</h2>
                    </div>

                    <div className="features-grid">

                        <div className="feature-card large-card animation-for-cards">
                            <img src={personalDevlopment} alt="Personal Development" />
                            <div className="card-overlay">
                                <h3>Personal Development</h3>
                            </div>
                        </div>

                        <div className="feature-card animation-for-cards">
                            <img src={classTrip} alt="Class Trip" />
                            <div className="card-overlay">
                                <h3>Educational Trips</h3>
                            </div>
                        </div>

                        <div className="feature-card animation-for-cards">
                            <img src={notes} alt="Study Material" />
                            <div className="card-overlay">
                                <h3>Study Material</h3>
                            </div>
                        </div>

                        <div className="feature-card animation-for-cards">
                            <img src={rfid} alt="RFID Attendance" />
                            <div className="card-overlay">
                                <h3>RFID Attendance</h3>
                            </div>
                        </div>

                        <div className="feature-card animation-for-cards">
                            <img src={classroom} alt="Digital Classroom" />
                            <div className="card-overlay">
                                <h3>Digital Classroom</h3>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
            <Director />
        </>
    )
}
export default AboutUs