import React, { useState } from "react";
import "./App.css";

const NewEnrollmentForm = () => {
  const [completedForms, setCompletedForms] = useState([]);
  const [formData, setFormData] = useState({
    clinic: "",
    device: "",
    employmentType: "",
    lastName: "",
    firstName: "",
    middleName: "",
    dob: "",
    gender: "",
    hasPacemaker: "",
    hasICD: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    primaryPhone: "",
    secondaryPhone: "",
    emergencyContact: "",
    orderingProvider: "",
    readingProvider: "",
    referringProvider: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setCompletedForms([...completedForms, formData]);
    // Clear form data
    setFormData({
      clinic: "",
      device: "",
      employmentType: "",
      lastName: "",
      firstName: "",
      middleName: "",
      dob: "",
      gender: "",
      hasPacemaker: "",
      hasICD: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      primaryPhone: "",
      secondaryPhone: "",
      emergencyContact: "",
      orderingProvider: "",
      readingProvider: "",
      referringProvider: "",
    });
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className="border-form">
      <div className="enroll-form">
        <h2 className="heade">New Enrollment</h2>
        <p className="required">
          <span className="start">*</span>Required Fields
        </p>
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
        <div style={{ marginTop: "10px" }}>
          <label
            style={{ marginRight: "8px" }}
            htmlFor="clinic"
            className="head"
          >
            Select Clinic <span className="start">*</span>
          </label>
          <select
            style={{ marginBottom: "10px", fontFamily: "Poppins" }}
            className="select"
          >
            <option>Select Clinic*</option>
          </select>
        </div>
        <div>
          <label htmlFor="device" className="head">
            Select Device <span className="start">*</span>
          </label>
          <select className="select-2" style={{ fontFamily: "Poppins" }}>
            <option>First Select a Clinic</option>
          </select>
          {/* Add dropdown arrow icon here */}
        </div>
        <div className="form-row">
          <label htmlFor="employmentType" className="head">
            Employment Type <span className="start">*</span>
          </label>
          <select
            style={{ fontFamily: "Poppins", width: "180px" }}
            className="select-3"
          >
            <option>First Select a Clinic*</option>
          </select>
          <div className="plus-symbol">+</div>
          <div style={{ fontFamily: "Poppins" }} className="dual-modify">
            Dual Modify Criteria
          </div>
        </div>

        <h3 className="head">Enter Patient Info</h3>
        <div className="section">
          <div className="names">
            <div className="form-row">
              <label htmlFor="lastName" className="inputdata">
                Last Name <span className="start">*</span>
              </label>
              <input
                style={{ fontFamily: "Poppins" }}
                className="inputnames"
                placeholder="Last Name*"
                type="text"
                id="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <label htmlFor="firstName" className="inputdata">
                First Name <span className="start">*</span>
              </label>
              <input
                style={{ fontFamily: "Poppins" }}
                className="inputnames"
                placeholder="First Name*"
                type="text"
                id="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <label htmlFor="middleName" className="inputdata">
                Middle Name
              </label>
              <input
                style={{ fontFamily: "Poppins" }}
                className="inputnames"
                placeholder="Middle Name"
                type="text"
                id="middleName"
                value={formData.middleName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="dob">
              Date of Birth <span className="start">*</span>
            </label>
            <input
              className="inputdate"
              type="date"
              id="dob"
              required
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label style={{ fontWeight: 600 }}>
              Gender <span className="start">*</span>
            </label>
            <div className="inline-options">
              <input
                style={{ marginRight: "5px" }}
                type="radio"
                id="male"
                name="gender"
                value="male"
                required
                onChange={handleChange}
              />
              <label htmlFor="male">Male</label>

              <input
                style={{ marginRight: "5px" }}
                type="radio"
                id="female"
                name="gender"
                value="female"
                required
                onChange={handleChange}
              />
              <label htmlFor="female">Female</label>
            </div>
            <div className="form-row">
              <label
                style={{
                  marginLeft: "10px",
                  marginTop: "10px",
                  fontWeight: 600,
                }}
              >
                Has Pacemaker <span className="start">*</span>
              </label>

              <input
                style={{ marginRight: "5px" }}
                type="radio"
                id="icdNo"
                name="pacemaker"
                value="no"
                required
                onChange={handleChange}
              />
              <label
                style={{
                  marginRight: "6px",
                  marginLeft: "6px",
                  marginTop: "5px",
                }}
                htmlFor="icdNo"
              >
                N/A
              </label>

              <input
                style={{ marginRight: "5px", marginLeft: "5px" }}
                type="radio"
                id="pacemakerYes"
                name="pacemaker"
                value="yes"
                required
                onChange={handleChange}
              />
              <label
                style={{ marginRight: "7px", marginTop: "5px" }}
                htmlFor="pacemakerYes"
              >
                Yes
              </label>

              <input
                style={{ marginRight: "6px" }}
                type="radio"
                id="pacemakerNo"
                name="pacemaker"
                value="no"
                required
                onChange={handleChange}
              />
              <label
                style={{ marginRight: "12px", marginTop: "6px" }}
                htmlFor="pacemakerNo"
              >
                No
              </label>
            </div>
            <div className="form-row">
              <label style={{ marginTop: "6px", fontWeight: 600 }}>
                Has ICD <span className="start">*</span>
              </label>

              <input
                style={{ marginRight: "6px" }}
                type="radio"
                id="icdNo"
                name="icd"
                value="no"
                required
                onChange={handleChange}
              />
              <label
                style={{ marginRight: "6px", marginTop: "8px" }}
                htmlFor="icdNo"
              >
                N/A
              </label>

              <input
                style={{ marginRight: "6px" }}
                type="radio"
                id="icdYes"
                name="icd"
                value="yes"
                required
                onChange={handleChange}
              />
              <label
                style={{ marginTop: "5px", marginRight: "5px" }}
                htmlFor="icdYes"
              >
                Yes
              </label>

              <input
                style={{ marginRight: "6px" }}
                type="radio"
                id="icdNo"
                name="icd"
                value="no"
                required
                onChange={handleChange}
              />
              <label style={{ marginTop: "6px" }} htmlFor="icdNo">
                No
              </label>
            </div>
          </div>
          <div className="sec">
            <div className="form-row">
              <label htmlFor="address1" className="input-data">
                Address Line 1 <span className="start">*</span>
              </label>
              <input
                style={{ fontFamily: "Poppins", padding: "8px" }}
                placeholder="Address line 1*"
                className="inputadd1"
                type="text"
                id="address1"
                required
                value={formData.address1}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <label htmlFor="address2" className="input-data">
                Address Line 2
              </label>
              <input
                style={{ fontFamily: "Poppins", padding: "8px" }}
                placeholder="Address line 2*"
                className="inputadd2"
                type="text"
                id="address2"
                value={formData.address2}
                onChange={handleChange}
              />
            </div>
            <div className="form-row1">
              <div className="form-row">
                <label
                  style={{ marginLeft: "78px" }}
                  htmlFor="city"
                  className="input-data"
                >
                  City <span className="start">*</span>
                </label>
                <input
                  style={{
                    height: "32px",
                    padding: "8px",
                    width: "150px",
                    fontFamily: "Poppins",
                  }}
                  placeholder="City*"
                  type="text"
                  id="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label htmlFor="state" className="input-data">
                  State <span className="start">*</span>
                </label>
                <select
                  style={{
                    height: "34px",
                    padding: "8px",

                    fontFamily: "Poppins",
                  }}
                >
                  <option>Select State*</option>
                </select>
              </div>
              <div className="form-row">
                <label htmlFor="zip" className="input-data">
                  Zip <span className="start">*</span>
                </label>
                <input
                  placeholder="Zip*"
                  style={{
                    height: "32px",
                    padding: "8px",
                    width: "150px",
                    fontFamily: "Poppins",
                  }}
                  type="text"
                  id="zip"
                  required
                  value={formData.zip}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* <div className="form-row">
              <label htmlFor="country" className="input-data">
                Country <span className="start">*</span>
              </label>
              <input
                type="text"
                id="country"
                required
                value={formData.country}
                onChange={handleChange}
              />
            </div> */}
          </div>
          {/* Contact Information */}
          <div className="sec">
            <div className="contact">
              <div className="form-row">
                <label htmlFor="primaryPhone" className="input-data">
                  Primary Phone <span className="start">*</span>
                </label>
                <input
                  style={{
                    height: "34px",
                    padding: "8px",
                    fontFamily: "Poppins",
                  }}
                  placeholder="Primary Phone*"
                  type="tel"
                  id="primaryPhone"
                  required
                  value={formData.primaryPhone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label htmlFor="secondaryPhone" className="input-data">
                  Secondary Phone
                </label>
                <input
                  placeholder="Secondary Phone"
                  style={{
                    height: "34px",
                    padding: "8px",
                    fontFamily: "Poppins",
                  }}
                  type="tel"
                  id="secondaryPhone"
                  value={formData.secondaryPhone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="emergencyContact" className="input-data">
                Enter Emergency Contact info
              </label>
              <div className="plus-symbol">+</div>
            </div>
          </div>
        </div>

        <div>
          <label
            style={{ marginLeft: "85px", fontWeight: 600 }}
            htmlFor="orderingProvider"
            className="input-data"
          >
            Ordering Provider <span className="start">*</span>
          </label>
          <select
            style={{
              height: "30px",
              width: "250px",
              padding: "5px",
              marginBottom: "10px",
              fontFamily: "Poppins",
            }}
          >
            <option>First Select a Clinic</option>
          </select>
          {/* Add dropdown arrow icon here */}
        </div>
        <div>
          <label
            style={{ marginLeft: "85px", fontWeight: 600 }}
            htmlFor="readingProvider"
            className="input-data"
          >
            Reading Provider <span className="start">*</span>
          </label>
          <select
            style={{
              height: "30px",
              width: "250px",
              padding: "5px",
              marginBottom: "10px",
              marginLeft: "5px",
              fontFamily: "Poppins",
            }}
          >
            <option>First Select a Clinic</option>
          </select>
        </div>
        <div>
          <label
            style={{ marginLeft: "85px", fontWeight: 600 }}
            htmlFor="referringProvider"
            className="input-data"
          >
            Referring Provider <span className="start">*</span>
          </label>
          <input
            placeholder="Referring Provider Name"
            style={{
              height: "30px",
              width: "250px",
              padding: "8px",
              fontFamily: "Poppins",
            }}
            type="text"
            id="referringProvider"
            value={formData.referringProvider}
            onChange={handleChange}
          />
          {/* Add dropdown arrow icon here */}
        </div>
        <div className="enrollButtons">
          <button type="button" className="cancel">
            Cancel
          </button>
          <button type="submit" className="verify">
            Verify Enrollment
          </button>
        </div>
      </form>

      {/* Completed Forms Table */}
      <center>
        {completedForms.length > 0 && (
          <div>
            <h2 className="form-head-cmplt">Completed Forms</h2>
            <div className="completed-forms">
              <table>
                <thead>
                  <tr>
                    <th className="completed">Last Name</th>
                    <th className="completed">First Name</th>
                    <th className="completed">Device</th>
                    <th className="completed">Employment Type</th>
                    {/* Add more table headers for other fields if needed */}
                  </tr>
                </thead>

                <tbody>
                  {completedForms.map((form, index) => (
                    <tr key={index}>
                      <td className="completed">{form.lastName}</td>
                      <td className="completed">{form.firstName}</td>
                      <td className="completed">{form.device}</td>
                      <td className="completed">{form.employmentType}</td>
                      {/* Add more table cells for other fields if needed */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </center>
    </div>
  );
};

export default NewEnrollmentForm;
