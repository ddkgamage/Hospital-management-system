import React, { useState } from "react";
// import "./CSS/Add_Doctor.css";
import prescription from "../../../../../img/prescription.png";
import { message, Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { NurseRegister, SendPassword } from "../../../../../Redux/auth/action";
import Sidebar from "../../GlobalFiles/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
const notify = (text) => toast(text);

const Prescription = () => {
  const { data } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const InitData = {
    nurseName: "",
    age: "",
    mobile: "",
    email: "",
    gender: "",
    DOB: "",
    address: "",
    education: "",
    department: "",
    nurseID: Date.now(),
    password: "",
    details: "",
    bloodGroup: "",
  };
  const [NurseValue, setNurseValue] = useState(InitData);

  const HandleDoctorChange = (e) => {
    setNurseValue({ ...NurseValue, [e.target.name]: e.target.value });
  };

  const HandleDoctorSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(NurseRegister(NurseValue)).then((res) => {
      if (res.message === "Nures already exists") {
        setLoading(false);
        return notify("Nurse Already Exist");
      }
      if (res.message === "error") {
        setLoading(false);
        return notify("Something went wrong, Please try Again");
      }
      notify("Nurse Added");

      let data = {
        email: res.data.email,
        password: res.data.password,
        userId: res.data.nurseID,
      };
      dispatch(SendPassword(data)).then((res) => notify("Account Detais Sent"));
      setLoading(false);
      setNurseValue(InitData);
    });
  };

  if (data?.isAuthticated === false) {
    return <Navigate to={"/"} />;
  }

  if (data?.user.userType !== "doctor") {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <>
      <ToastContainer />
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Main_Add_Doctor_div">
            <h1>Prescription</h1>
            <img src={prescription} alt="doctor" className="avatarimg" />
            <form onSubmit={HandleDoctorSubmit}>
              <div>

              <div>
                <label>Patient NIC</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="patient nic"
                    name="patient nic"
                    value={NurseValue.age}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>

                <label> Medicine</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="medicine"
                    name="medicine"
                    value={NurseValue.nurseName}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Dosage</label>
                <div className="inputdiv">
                  <select
                    name="dosage"
                    value={NurseValue.dosage}
                    onChange={HandleDoctorChange}
                    required
                  >
                    <option value="Choose dosage">Choose Dosage</option>
                    <option value="tablets">Tablets</option>
                    <option value="capsule">Capsule</option>
                    <option value="syrup">Syrup</option>
                  </select>
                </div>
              </div>

              <div>
                <label>Number of Days</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Emergency Number"
                    name="mobile"
                    value={NurseValue.mobile}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Route</label>
                <div className="inputdiv">
                  <select
                    name="route"
                    value={NurseValue.gender}
                    onChange={HandleDoctorChange}
                    required
                  >
                    <option value="Choose route">Choose Route</option>
                    <option value="ear">ear</option>
                    <option value="nose">nose</option>
                    <option value="eye">eye</option>
                  </select>
                </div>
              </div>
             
              <div>
                <label>Frequency</label>
                <div className="inputdiv">
                  <select
                    name="frequency"
                    value={NurseValue.bloodGroup}
                    onChange={HandleDoctorChange}
                    required
                  >
                    <option value="Choose frequency">Select</option>
                    <option value="1 times a day">1 times a day</option>
                    <option value="2 times a day">2 times a day</option>
                    <option value="3 times a day">3 times a day</option>

                  </select>
                </div>
              </div>
              <div>
                <label>Food Relation</label>
                <div className="inputdiv">
                  <select
                    name="route"
                    value={NurseValue.foodtype}
                    onChange={HandleDoctorChange}
                    required
                  >
                    <option value="Choose food">Choose food</option>
                    <option value="after food">After Food</option>
                    <option value="before food">Before Food</option>
                    <option value="with food">With Food</option>
                  </select>
                </div>
              </div>

              <div>
                <label>Instruction</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="instructions"
                    name="instructions"
                    value={NurseValue.password}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              {/* <div>
                <label>Other Info</label>
                <div className="inputdiv">
                  <textarea
                    type="text"
                    placeholder="Extra Info"
                    rows="4"
                    cols="50"
                    name="details"
                    value={NurseValue.details}
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

export default Prescription;
