import React from "react";
import "../stylesheets/features.css"
function Features() {
    return (
        <>
            <section className="why-choose-us-section">
                <h2 className="section-title">Why Choose Shinde Coaching Classes?</h2>
                <div className="features-grid">
                    <div className="feature-box animate-scale">Experienced Faculty</div>
                    <div className="feature-box animate-scale"> Concept-Based Learning</div>
                    <div className="feature-box animate-scale"> Digital Classrooms</div>
                    <div className="feature-box animate-scale"> Regular Tests & Progress</div>
                    <div className="feature-box animate-scale"> RFID Attendance System</div>
                    <div className="feature-box animate-scale"> Personalized Doubt Sessions</div>
                </div>
            </section>
            <section className="courses-section">
                <h2 className="section-title">Courses We Offer</h2>
                <p className="subtext">From Class 1 to 10 – All Boards Covered</p>
                <div className="courses-grid">
                    <div className="course-card animate-scale"> Class 1–5: All Subjects (Basics)</div>
                    <div className="course-card animate-scale"> Class 6–8: Maths, Science, English</div>
                    <div className="course-card animate-scale"> Class 9–10: Subject-wise Expert Coaching</div>
                    <div className="course-card animate-scale"> Boards: CBSE, State, Semi-English, Marathi</div>
                </div>
            </section>

        </>
    )
}
export default Features;