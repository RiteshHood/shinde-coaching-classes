import React, { useState } from "react";
const Enroll = () => {

  //usestate for errors.
  const [errors, setErrors] = useState({});

  //usestate for success message:
  const [successMsg, setSuccessMsg] = useState("");

  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    address: "",
    phone: "",
    previousClass: "",
    board: "",
  });

  // Updates form state dynamically and clears success message on input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSuccessMsg(""); // clear message when user edits
  };

  // validation function
  const validate = () => {

    //object to store the validation errors
    const newErrors = {};

    // name validation
    if (!formData.studentName.trim()) {
      newErrors.studentName = "Student name is required";
    }
    else if (formData.studentName.length < 3) {
      newErrors.studentName = "Name must be at least of 3 characters";
    }

    // parent name validation
    if (!formData.parentName.trim()) {
      newErrors.parentName = "Parent name is required";
    }

    //address validation
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    // phone number validation

    const pattern = /^[0-9]{10}$/

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!pattern.test(formData.phone)) {
      newErrors.phone = "Please enter the valid 10 digit phone number";
    }

    // class validation
    if (!formData.previousClass) {
      newErrors.previousClass = "Please select a class";
    }

    // Board validation
    if (!formData.board) {
      newErrors.board = "Please select the board";
    }

    return newErrors;
  }

  //handle the submit button
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    //  Simulate success
    setSuccessMsg("Student registered successfully!");

    const message = `New Student Registration

    Student Name: ${formData.studentName}
    Parent Name: ${formData.parentName}
    Phone: ${formData.phone}
    Class: ${formData.previousClass}
    Board: ${formData.board}
    Address: ${formData.address}`;

    const phoneNumber = "918459167593";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    // clear message after 3 sec
    setTimeout(() => {
      setSuccessMsg("");
    }, 3000);

    // reset form
    setFormData({
      studentName: "",
      parentName: "",
      address: "",
      phone: "",
      previousClass: "",
      board: "",
    });


  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Registration Form</h2>

      {successMsg && <p className="success">{successMsg}</p>}

      <input
        type="text"
        name="studentName"
        placeholder="Enter Student Name"
        value={formData.studentName}
        onChange={handleChange}
        required
      />
      {/* show the errors */}
      {errors.studentName && <p className="error">{errors.studentName}</p>}

      <input
        name="parentName"
        placeholder="Parent Name"
        value={formData.parentName}
        onChange={handleChange}
        required
      />
      {errors.parentName && <p className="error">{errors.parentName}</p>}

      <input
        name="phone"
        placeholder="Contact Number"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      {errors.phone && <p className="error">{errors.phone}</p>}

      <input name="address"
        placeholder="Enter permanent address"
        value={formData.address}
        onChange={handleChange}
        required
      />
      {errors.address && <p className="error">{errors.address}</p>}

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
      {errors.previousClass && <p className="error">{errors.previousClass}</p>}

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
      {errors.board && <p className="error">{errors.board}</p>}

      <button type="submit">Submit Admission</button>
    </form>
  );
};

export default Enroll;