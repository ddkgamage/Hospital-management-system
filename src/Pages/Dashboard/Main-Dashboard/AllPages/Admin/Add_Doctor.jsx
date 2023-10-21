import React, { useState } from "react";
import "./CSS/Add_Doctor.css";
import doctor from "../../../../../img/doctoravatar.png";
import { useDispatch, useSelector } from "react-redux";
import { DoctorRegister, SendPassword } from "../../../../../Redux/auth/action";
import Sidebar from "../../GlobalFiles/Sidebar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
const notify = (text) => toast(text);

const AddDoctor = () => {
  const { data } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const initData = {
    docName: "",
    age: "",
    mobile: "",
    email: "",
    bloodGroup: "",
    gender: "",
    DOB: "",
    address: "",
    education: "",
    department: "",
    docID: Date.now(),
    password: "",
    details: "",
  };
  const [DoctorValue, setDoctorValue] = useState(initData);

  const HandleDoctorChange = (e) => {
    setDoctorValue({ ...DoctorValue, [e.target.name]: e.target.value });
  };

  const HandleDoctorSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(DoctorRegister(DoctorValue)).then((res) => {
      if (res.message === "Doctor already exists") {
        setLoading(false);
        return notify("Doctor Already Exist");
      }
      if (res.message === "error") {
        setLoading(false);
        return notify("Something went wrong, Please try Again");
      }

      let data = {
        email: res.data.email,
        password: res.data.password,
        userId: res.data.docID,
      };
      console.log(data, "DOCTOR REGISTER SUCCESSFULLY");
      dispatch(SendPassword(data)).then((res) => notify("Account Detais Sent"));
      setLoading(false);
      setDoctorValue(initData);
    });
  };

  if (data?.isAuthticated === false) {
    return <Navigate to={"/"} />;
  }

  if (data?.user.userType !== "admin") {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <>
      <ToastContainer />
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Main_Add_Doctor_div">
            <h1>Channel Doctors</h1>
            <img src={doctor} alt="doctor" className="avatarimg" />
            <form onSubmit={HandleDoctorSubmit}>
            <div>
                <label>Name</label>
                <div className="inputdiv">
                  <select
                    name="name"
                    value={DoctorValue.name}
                    onChange={HandleDoctorChange}
                    required
                  >
                    <option value="Choose Name">Choose name</option>
                    <option value="Male">Dr.Kamal Gamage</option>
                    <option value="Female">Dr.Kushan Edirisinghe</option>
                    <option value="Others">Dr.Chandra Jayasooriya</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Specialization</label>
                <div className="inputdiv">
                  <select
                    name="specialization"
                    value={DoctorValue.specialization}
                    onChange={HandleDoctorChange}
                    required
                  >
                    <option value="Choose Specialization">Choose Specialization</option>
                    <option value="Male">Allergists/Immunologists</option>
                    <option value="Female">Anesthesiologists</option>
                    <option value="Others">Cardiologists</option>
                    <option value="Male">Colon and Rectal Surgeons</option>
                    <option value="Female">Critical Care Medicine Specialists</option>
                    <option value="Others">Dermatologists</option>
                    <option value="Male">Endocrinologists</option>
                    <option value="Female">Emergency Medicine Specialists</option>
                    <option value="Others">Gastroenterologists</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Patient NIC</label>
                <div className="inputdiv adressdiv">
                  <input
                    type="text"
                    placeholder="NIC"
                    name="address"
                    value={DoctorValue.address}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Patient Name</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Name"
                    name="education"
                    value={DoctorValue.education}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Age</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Age"
                    name="age"
                    value={DoctorValue.age}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Gender</label>
                <div className="inputdiv">
                  <select
                    name="gender"
                    value={DoctorValue.department}
                    onChange={HandleDoctorChange}
                    required
                  >
                    <option value="General">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    {/* <option value="ENT">ENT</option>
                    <option value="Ophthalmologist">Ophthalmologist</option>
                    <option value="Anesthesiologist">Anesthesiologist</option>
                    <option value="Dermatologist">Dermatologist</option>
                    <option value="Oncologist">Oncologist</option>
                    <option value="Psychiatrist">Psychiatrist</option> */}
                  </select>
                </div>
                </div>
              <div>
                <label>Contact Number</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Contact Number"
                    name="mobile"
                    value={DoctorValue.mobile}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Email</label>
                <div className="inputdiv">
                  <input
                    type="email"
                    placeholder="abc@abc.com"
                    name="email"
                    value={DoctorValue.email}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Address</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Address"
                    name="password"
                    value={DoctorValue.password}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              {/* <div>
                <label>Blood Group</label>
                <div className="inputdiv">
                  <select
                    name="bloodGroup"
                    value={DoctorValue.bloodGroup}
                    onChange={HandleDoctorChange}
                    required
                  >
                    <option value="Choose Blood Group">Select</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div> */}
              
              <div>
                <label>Date and Time</label>
                <div className="inputdiv">
                  <input
                    type="date"
                    placeholder="dd-mm-yy"
                    name="DOB"
                    value={DoctorValue.DOB}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
                            

              {/* <div>
                <label>Other Details</label>
                <div className="inputdiv">
                  <textarea
                    type="text"
                    placeholder="Extra Info"
                    rows="4"
                    cols="50"
                    name="details"
                    value={DoctorValue.details}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div> */}
              <button type="submit" className="formsubmitbutton">
                {loading ? "Loading..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDoctor;
