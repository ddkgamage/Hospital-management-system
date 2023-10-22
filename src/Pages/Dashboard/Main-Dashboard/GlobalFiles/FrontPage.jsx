import { Table } from "antd";
import React from "react";
import { MdPersonAdd } from "react-icons/md";
import { FaUserNurse } from "react-icons/fa";
import { RiEmpathizeLine } from "react-icons/ri";
import { FaBed } from "react-icons/fa";
import { MdOutlineBedroomParent } from "react-icons/md";
// import { FaAmbulance } from "react-icons/fa";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllData, GetPatients } from "../../../../Redux/Datas/action";
import ref1 from './../../../../img/ref1.jpeg';
import ref2 from './../../../../img/ref2.jpeg';
import ref3 from './../../../../img/ref3.jpeg';
import ref4 from './../../../../img/ref4.jpeg';
import ref5 from './../../../../img/ref5.jpeg';

const FrontPage = () => {
  const columns = [
    { title: "Name", dataIndex: "patientName", key: "patientName" },
    { title: "NIC No.", dataIndex: "nic", key: "nic" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Disease", dataIndex: "disease", key: "disease" },
    { title: "Blood Group", dataIndex: "bloodGroup", key: "bloodGroup" },
    // { title: "Department", dataIndex: "department", key: "department" },
    { title: "Email", dataIndex: "email", key: "email" },
  ];

  const { patients } = useSelector((store) => store.data.patients);
  // const { bloodBank } = useSelector((store) => store.data.bloodBank);
  const {
    dashboard: { data },
  } = useSelector((store) => store.data);

  console.log(data);

  const {
    data: { user },
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPatients());
    dispatch(GetAllData());
  }, []);

  return (
    <div className="container">
      <Sidebar />
      <div className="AfterSideBar">
        <h1 style={{ color: "#192a56" }}>Dashboard</h1>
        <div className="maindiv">
          <div className="one commondiv">
            <div>
              <h1>{data?.doctor}</h1>
              <p>Doctor</p>
            </div>
            <MdPersonAdd className="overviewIcon" />
          </div>
          {/* <div className="two commondiv">
            {" "}
            <div>
              <h1>{data?.nurse}</h1>
              <p>Nurse</p>
            </div>
            <FaUserNurse className="overviewIcon" />
          </div> */}
          {/* <div className="three commondiv">
            <div>
              <h1>{data?.patient}</h1>
              <p>Patient</p>
            </div>
            <RiEmpathizeLine className="overviewIcon" />
          </div> */}
          {/* <div className="six commondiv">
            {" "}
            <div>
              <h1>{data?.admin}</h1>
              <p>Admin</p>
            </div>
            <RiAdminLine className="overviewIcon" />
          </div> */}
          <div className="four commondiv">
            {" "}
            <div>
              <h1>{data?.bed}</h1>
              <p>Beds</p>
            </div>
            <FaBed className="overviewIcon" />
          </div>
{/* 
          <div className="five commondiv">
            {" "}
            <div>
              <h1>{data?.ambulance}</h1>
              <p>Ambulance</p>
            </div>
            <FaAmbulance className="overviewIcon" />
          </div> */}
          <div className="six commondiv">
            {" "}
            <div>
              <h1>{data?.appointment}</h1>
              <p>Appointment</p>
            </div>
            <BsFillBookmarkCheckFill className="overviewIcon" />
          </div>
          <div className="six commondiv">
            {" "}
            <div>
              <h1>{data?.report}</h1>
              <p>Reports</p>
            </div>
            <MdPayment className="overviewIcon" />
          </div>
        </div>
        {/* ************************************* */}
        {/* <div className="patientDetails">
          <h1>Patient Details</h1>
          <div className="patientBox">
            <Table columns={columns} dataSource={patients} />
          </div>
        </div> */}
        <div className="patientDetails">
          <h1>Patient Details</h1>
          <div className="patientBox">
            <Table columns={columns} dataSource={patients} />
          </div>
        </div>
        {user?.userType === "admin" ? (
        <div className="patientDetails">
          <h1>General Information</h1>
          <div className="row d-flex">
            {/* <div className="patientBox"> */}
              <div className="col-12">
                <img src={ref1} style={{width:300, height:400, padding:20}}></img>
              
                <img src={ref2} style={{width:400, height:400, padding:20}}></img>
            
                <img src={ref3} style={{width:400, height:400, padding:20}}></img>

                <img src={ref4} style={{width:500, height:400, padding:20}}></img>

                <img src={ref5} style={{width:400, height:400, padding:20}}></img>
              </div>
            {/* </div> */}
          </div>
        </div>
         ) : null}
         <div className="patientDetails">
            <h1>Blood Bank</h1>
              <div className="patientBox" style={{width: 400}}>
                <table className="p-4" style={{marginLeft:100}}> 
                  <thead>
                    <tr className="p-4" >
                      <th className="m-4"> Blood Group</th>
                      <th className="m-4">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                        <tr>
                          <td>A +</td>
                          <td>5 liters</td>
                        </tr>
                        <tr>
                          <td>A -</td>
                          <td>10 liters</td>
                        </tr>
                        <tr>
                          <td>B +</td>
                          <td>8 liters</td>
                        </tr>
                        <tr>
                          <td>B -</td>
                          <td>20 liters</td>
                        </tr>
                        <tr>
                          <td>O +</td>
                          <td>15 liters</td>
                        </tr>
                        <tr>
                          <td>O -</td>
                          <td>9 liters</td>
                        </tr>
                        <tr>
                          <td>AB +</td>
                          <td>25 liters</td>
                        </tr>
                        <tr>
                          <td>AB -</td>
                          <td>16 liters</td>
                        </tr>
                    
                  </tbody>
                </table>
              </div>
          </div>
      </div>
    </div>
  );
};

export default FrontPage;
