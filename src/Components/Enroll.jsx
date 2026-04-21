import React, { useState } from "react";

const Enroll = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    previousClass: "",
    board: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.studentName || !formData.phone) {
      alert("Please fill required fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/admission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const res = await response.json();
      alert(res.message);

      setFormData({
        studentName: "",
        parentName: "",
        phone: "",
        previousClass: "",
        board: "",
      });

    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Registration Form</h2>

      <input
        type="text"
        name="studentName"
        placeholder="Enter Student Name"
        value={formData.studentName}
        onChange={handleChange}
        required
      />

      <input
        name="parentName"
        placeholder="Parent Name"
        value={formData.parentName}
        onChange={handleChange}
        required
      />

      <input
        name="phone"
        placeholder="Contact Number"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <select
        name="previousClass"
        value={formData.previousClass}
        onChange={handleChange}
        required
      >
        <option value="">Previous Class</option>
        {/* <option>Class 1</option>
        <option>Class 2</option>
        <option>Class 3</option> */}
        <option>Class 4</option>
        <option>Class 5</option>
        <option>Class 6</option>
        <option>Class 7</option>
        <option>Class 8</option>
        <option>Class 9</option>
        <option>Class 10</option>
      </select>

      <select
        name="board"
        value={formData.board}
        onChange={handleChange}
        required
      >
        <option value="">Select Board</option>
        <option>CBSE</option>
        <option>State</option>
        <option>Semi-English</option>
        <option>Marathi</option>
      </select>

      <button type="submit">Submit Admission</button>
    </form>
  );
};

export default Enroll;