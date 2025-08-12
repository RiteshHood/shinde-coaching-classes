import React from "react";
import directorImg from "../assets/professor.png"
import "../stylesheets/Director.css"

function Director() {
    return (
        <section className="director-section">
            <div className="director-container">
                <div className="director-image-wrapper animate-for-professor-img">
                    <img src={directorImg} alt="Prof. Shahaji Shinde" className="director-image" />
                </div>
                <div className="director-text">
                    <h2 className="section-title">Meet Our Director</h2>
                    <h3 className="director-name">Prof. Shahaji Shinde</h3>
                    <p className="director-bio">
                        Prof. Shahaji Shinde, M.Sc. B.Ed., is the founder and visionary behind Shinde Coaching Classes.
                        With a strong academic background and a passion for teaching, he has become one of the most respected
                        educators in the region.
                    </p>
                    <p className="director-bio">
                        Known for his excellence in <strong>Mathematics, Science</strong>, and <strong>English</strong>,
                        Prof. Shinde brings years of experience in guiding students across all boards. His unique teaching
                        methods make learning easy, enjoyable, and effective for every student.
                    </p>
                    <blockquote className="director-quote">
                        “Teaching is not just a profession, it’s a responsibility to shape the future.”
                    </blockquote>
                </div>
            </div>
        </section>
    );
}
export default Director;