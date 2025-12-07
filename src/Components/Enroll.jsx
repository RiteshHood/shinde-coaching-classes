import React from 'react'
import { useState } from 'react';

const Enroll = () => {

        const [formData, setFormData] = useState({
            studentName: "",
            parentName: "",
            phone: "",
            previousClass: "",
            board: "",
            photo: null,
        });

        const handleChange = (e) => {
            if (e.target.name === "photo") {
                setFormData({ ...formData, photo: e.target.files[0] });
            } else {
                setFormData({ ...formData, [e.target.name]: e.target.value });
            }
        };

        const handleSubmit = async (e) => {
            e.preventDefault();

            const data = new FormData();
            Object.keys(formData).forEach((key) => data.append(key, formData[key]));

            const response = await fetch("http://localhost:5000/admission", {
                method: "POST",
                body: data,
            });

            const res = await response.json();
            alert(res.message);
        };


        return (
            <>
                <form action="">
                    <h2>Student Registartion form</h2>
                    <input type="text" name='stdName' placeholder='Enter your Name' />
                    <input name="parentName" placeholder="Parent Name" onChange={handleChange} required />

                    <input name="phone" placeholder="Contact Number" type="tel" onChange={handleChange} required />

                    <select name="previousClass" onChange={handleChange} required>
                        <option value="">Previous Class</option>
                        <option>Class 1</option>
                        <option>Class 2</option>
                        <option>Class 3</option>
                        <option>Class 4</option>
                        <option>Class 5</option>
                        <option>Class 6</option>
                        <option>Class 7</option>
                        <option>Class 8</option>
                        <option>Class 9</option>
                        <option>Class 10</option>
                    </select>

                    <select name="board" onChange={handleChange} required>
                        <option value="">Select Board</option>
                        <option>CBSE</option>
                        <option>State</option>
                        <option>Semi-English</option>
                        <option>Marathi</option>
                    </select>

                    <label>Upload Child Photo:</label>
                    <input type="file" name="photo" accept="image/*" onChange={handleChange} required />

                    <button type="submit">Submit Admission</button>
                </form>
            </>
        );
    }

    export default Enroll
