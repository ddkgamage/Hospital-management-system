import * as types from "./types";
import axios from "axios";

// CreateReport
export const CreateReport = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.CREATE_REPORT_REQUEST });
    const res = await axios.post(
      "https://zany-gray-clam-gear.cyclic.app/reports/create",
      data
    );
    console.log(res);
    return res.data;
    // dispatch({
    //   type: types.CREATE_REPORT_SUCCESS,
    //   payload: {
    //
    //   },
    // });
  } catch (error) {
    dispatch({
      type: types.CREATE_REPORT_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

// GET DOCTOR DETAILS
export const GetDoctorDetails = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_DOCTOR_REQUEST });
    const res = await axios.get(
      "https://zany-gray-clam-gear.cyclic.app/doctors"
    );
    console.log(res);
    // dispatch({
    //   type: types.GET_DOCTOR_SUCCESS,
    //   payload: {
    //
    //   },
    // });
  } catch (error) {
    dispatch({
      type: types.GET_DOCTOR_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

//ADD PATIENTS
export const AddPatients = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.ADD_PATIENT_REQUEST });
    const res = await axios.post(
      "https://zany-gray-clam-gear.cyclic.app/patients/register",
      data
    );
    return res.data;
    // dispatch({
    //   type: types.ADD_PATIENT_SUCCESS,
    //   payload: {
    //
    //   },
    // });
  } catch (error) {
    dispatch({
      type: types.ADD_PATIENT_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

//ADD BEDS
export const CreateBeds = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.ADD_BED_REQUEST });
    const res = await axios.post(
      "https://zany-gray-clam-gear.cyclic.app/beds/add",
      data
    );
    return res.data;
    // dispatch({
    //   type: types.ADD_BED_SUCCESS,
    //   payload: {
    //
    //   },
    // });
  } catch (error) {
    dispatch({
      type: types.ADD_BED_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

//create payment
export const CreatePayment = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.CREATE_PAYMENT_REQUEST });
    const res = await axios.post(
      "https://zany-gray-clam-gear.cyclic.app/payments/add",
      data
    );
    console.log(res.data);
    // dispatch({
    //   type: types.CREATE_PAYMENT_SUCCESS,
    //   payload: {
    //
    //   },
    // });
  } catch (error) {
    dispatch({
      type: types.CREATE_PAYMENT_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

//GET BEDS
export const GetBeds = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_BED_REQUEST });
    const res = await axios.get("https://zany-gray-clam-gear.cyclic.app/beds");
    console.log(res);
    dispatch({
      type: types.GET_BED_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_BED_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

//CREATE BOOKING
export const CreateBooking = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.CREATE_BOOKING_REQUEST });
    const res = await axios.post(
      `https://zany-gray-clam-gear.cyclic.app/appointments/create`,
      data
    );
    console.log(res);
    // dispatch({ type: types.CREATE_BOOKING_SUCCESS, payload: res.data.postData });
  } catch (error) {
    console.log(error);
  }
};

//GET BEDS
export const AddBed = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.ADD_BEDS_REQUEST });
    const res = await axios.post(
      "https://zany-gray-clam-gear.cyclic.app/beds/add",
      data
    );
    console.log(res);
    // dispatch({
    //   type: types.ADD_BEDS_SUCCESS,
    //   payload: {

    //   },
    // });
    return res.data;
  } catch (error) {
    dispatch({
      type: types.ADD_BEDS_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

// GET SINGLE BED
export const GetSingleBed = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_SINGLE_BEDS_REQUEST });
    const res = await axios.post(
      "https://zany-gray-clam-gear.cyclic.app/beds/single",
      data
    );
    // console.log(res);
    return res.data;
    // dispatch({
    //   type: types.GET_SINGLE_BEDS_SUCCESS,
    //   payload: {

    //   },
    // });
  } catch (error) {
    // dispatch({
    //   type: types.GET_SINGLE_BEDS_ERROR,
    //   payload: {
    //     message: error,
    //   },
    // });
    console.log(error);
  }
};

// EDIT SINGLE BED
export const EditSingleBed = (data, id) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_SINGLE_BEDS_REQUEST });
    const res = await axios.patch(
      `https://zany-gray-clam-gear.cyclic.app/beds/${id}`,
      data
    );
    // console.log(res);
    return res.data;
    // dispatch({
    //   type: types.GET_SINGLE_BEDS_SUCCESS,
    //   payload: {

    //   },
    // });
  } catch (error) {
    // dispatch({
    //   type: types.GET_SINGLE_BEDS_ERROR,
    //   payload: {
    //     message: error,
    //   },
    // });
    console.log(error);
  }
};

// DISCHARGE PATIENT
export const dischargePatient = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.DISCHARGE_PATIENT_REQUEST });
    const res = await axios.put(
      `https://zany-gray-clam-gear.cyclic.app/beds/discharge`,
      data
    );
    console.log(res);
    // return res.data;
    dispatch({
      type: types.DISCHARGE_PATIENT_SUCCESS,
      payload: {
        bed: res.data.bed,
      },
    });
  } catch (error) {
    // dispatch({
    // type: types.DISCHARGE_PATIENT_ERROR,
    //   payload: {
    //     message: error,
    //   },
    // });
    console.log(error);
  }
};

// GET ALL PATIENT
export const GetPatients = () => async (dispatch) => {
  try {
    const dummyData={
      patients:[
    {"_id":"63d249af2f920f8efcd7acf1","userType":"patient","patientID":1674725081216,"patientName":"Piyush","mobile":1134242324,"email":"joyy@gmail.com","password":"111111", "nic":"1999020648v","age":19,"gender":"Male","bloodGroup":"A-","DOB":"2023-01-21","address":"hahjzv","disease":"Campylobacter Infection","details":"sfddadas","admitted":true,"date":"2023-01-02T00:00:00.000Z","docID":"63ce6b5b399dc267cb06b99a","nurseID":"63d22a01c316873d804474fb","__v":0},
    {"_id":"63d24e1e662ce179dcb7dd5d","userType":"patient","patientID":1674726765451,"patientName":"Rajendra","mobile":8970508762,"email":"itsrajendrapatel@gmail.com","password":"thor", "nic":"1999020648v","age":22,"gender":"Male","bloodGroup":"AB+","DOB":"2023-01-20","address":"Asgard","disease":"Hepatitis A","details":"I am Thor","admitted":true,"date":"2023-01-13T00:00:00.000Z","docID":"63d228df1742e138a3727857","nurseID":"63d22a01c316873d804474fb","__v":0},
    {"_id":"63d24fce9afab2759dd759bf","userType":"patient","patientID":1674727255134,"patientName":"Nimal","mobile":3455676894,"email":"nimal@gmail.com","password":"iron man", "nic":"1999020648v","age":50,"gender":"Female","bloodGroup":"AB+","DOB":"2023-01-22","address":"Earth","disease":"Influenza (Flu)","details":"He is Iron man","admitted":true,"date":"2023-01-15T00:00:00.000Z","docID":"63d228df1742e138a3727857","nurseID":"63d22a01c316873d804474fb","__v":0},
    {"_id":"63d250539afab2759dd759ca","userType":"patient","patientID":1674727428106,"patientName":"Sherif","mobile":534534543535,"email":"afasdfasdf@sdfsdfsf","password":"fsfasfdsfas", "nic":"1999020648v","age":39,"gender":"Female","bloodGroup":"B+","DOB":"2023-02-04","address":"sdfasdfasdfs","disease":"Novel Coronavirus (COVID-19)","details":"ssadfasdf","admitted":true,"date":"2023-01-12T00:00:00.000Z","docID":"63d228df1742e138a3727857","nurseID":"63d22a01c316873d804474fb","__v":0},
    {"_id":"63d28f132c926e8f7bef1784","userType":"patient","patientID":1674743564771,"patientName":"Joyson","mobile":55353,"email":"joy@gmail.com","password":"password", "nic":"1999020648v","age":41,"gender":"female","bloodGroup":"B-","address":"ggbvbv","disease":"Measles","admitted":true,"date":"2023-01-06T00:00:00.000Z","__v":0},
    {"_id":"63d29205adcf0e2a17d95ea1","userType":"patient","patientID":1674744319624,"patientName":"Agrawal","mobile":111,"email":"agrawaljoy1@gmail.com","password":"password", "nic":"1999020648v","age":11,"gender":"","bloodGroup":"O+","address":"111","disease":"Meningococcal Disease","admitted":true,"date":"2023-01-22T00:00:00.000Z","__v":0},
    {"_id":"63d293433b843e24cb598393","userType":"patient","patientID":1674744642011,"patientName":"Shean","mobile":64544,"email":"joy23@gmail.com","password":"password", "nic":"1999020648v","age":67,"gender":"female","address":"it7t","disease":"Dengue Fever","admitted":true,"date":"2023-01-21T00:00:00.000Z","__v":0},
    {"_id":"63d34ad03057f9d84c1439f9","userType":"patient","patientID":1674791382949,"patientName":"Micson","mobile":54422,"email":"joyassay@gmail.com","password":"kcxcxcxc", "nic":"1999020648v","age":55,"department":"Ophthalmologist","gender":"Female","bloodGroup":"AB+","DOB":"2023-01-29","address":"hvhj","disease":"Malaria","details":"kh","admitted":true,"date":"2023-02-01T00:00:00.000Z","docID":"63d228df1742e138a3727857","nurseID":"63d22a01c316873d804474fb","__v":0},
    {"_id":"63d40360222a867edfd911d6","userType":"patient","patientID":1674838217180,"patientName":"Werwerw","mobile":434534535,"email":"adfsdfsdf@sffs","password":"password", "nic":"1999020648v","age":42,"department":"Cardiology","gender":"Male","address":"sadfasdfsfds","disease":"Diarrhea","admitted":true,"date":"2023-01-21T00:00:00.000Z","__v":0},
    {"_id":"63d90218dbc7c0c5d229866a","userType":"patient","patientID":1675166149084,"patientName":"Rajendra","mobile":1234567890,"email":"rajen@gmail.com","password":"1234", "nic":"1999020648v","age":23,"department":"Cardiology","gender":"Male","bloodGroup":"B+","DOB":"2023-01-31","address":"fsdffsfd","disease":"fiver","details":"fsdfsf","admitted":true,"date":"2023-01-31T00:00:00.000Z","docID":"63d2270dfe66e89c9be342f9","nurseID":"63d22a01c316873d804474fb","__v":0},
    {"_id":"63d9edf73fbdb41e84e0abbe","userType":"patient","patientID":1675226536996,"patientName":"Piyush","mobile":3123123,"email":"patel22@gmail.com","password":"111111", "nic":"1999020648v","age":22,"department":"Ophthalmologist","gender":"Male","bloodGroup":"B+","DOB":"2023-02-11","address":"ghcgcn","disease":"Viral infections","details":"sfddadas","admitted":true,"date":"2023-02-23T00:00:00.000Z","docID":"63d228df1742e138a3727857","nurseID":"63d22a01c316873d804474fb","__v":0},
    {"_id":"63d9f55a33fd8446bc4af41a","userType":"patient","patientID":1675228471474,"patientName":"Indrachapa","mobile":21243124321,"email":"joyy13423@gmail.com","password":"ZVXXZXVZX", "nic":"1999020648v","age":21,"department":"Neurology","gender":"Male","bloodGroup":"AB+","DOB":"2023-02-16","address":"ghcgcn","disease":"Fungal infections","details":"2sdas","admitted":true,"date":"2023-02-09T00:00:00.000Z","docID":"63d228df1742e138a3727857","nurseID":"63d22a01c316873d804474fb","__v":0},
    {"_id":"63da116f85ff232d988dc787","userType":"patient","patientID":1675235655704,"patientName":"Sunimal","mobile":12244432,"email":"agrawaljo33y1@gmail.com","password":"ZVXXZXVZX", "nic":"1999020648v","age":22,"department":"Cardiology","gender":"Male","bloodGroup":"B-","DOB":"2023-02-12","address":"gsds","disease":"Parasitic infections","details":"Physics","admitted":true,"date":"2023-02-10T00:00:00.000Z","docID":"63d228df1742e138a3727857","nurseID":"63d22a01c316873d804474fb","__v":0},
    {"_id":"63da8566c39143ca7078b6cb","userType":"patient","patientID":1675265352432,"patientName":"Thilak","mobile":3124213421,"email":"saurabh.comediyan@gmail.com","password":"111111", "nic":"1999020648v","age":24,"department":"Cardiology","gender":"Female","bloodGroup":"A+","DOB":"2023-02-19","address":"312312","disease":"Transmissible spongiform encephalopathies ","details":"Physics","admitted":true,"date":"2023-02-18T00:00:00.000Z","docID":"63d2270dfe66e89c9be342f9","nurseID":"63d22a01c316873d804474fb","__v":0},
    {"_id":"63dd5d1d3ce3f71908fb5545","userType":"patient","patientID":1675451602641,"patientName":"Pralhad Bhandari","mobile":7666735811,"email":"bhandaripralhad6@gmail.com","password":"1234", "nic":"1999020648v","age":21,"department":"Neurology","gender":"Male","bloodGroup":"B+","DOB":"2023-02-01","address":"Flat no 03, Plot no. A55/1, sec 20  Nerul opp Ambika chs","disease":"HIV","details":"fffw","admitted":true,"date":"2023-02-04T00:00:00.000Z","docID":"63d228df1742e138a3727857","nurseID":"63d22a01c316873d804474fb","__v":0},
    {"_id":"63df5a76775f8d3417a66b3d","userType":"patient","patientID":1675582064000,"patientName":"eve","mobile":null,"email":"eve.holt@reqres.in","password":"password", "nic":"1999020648v","age":11,"gender":"other","address":"fghgb","disease":"Muscle aches and headache","admitted":true,"date":"2023-02-24T00:00:00.000Z","__v":0},
    {"_id":"63e125489fa71c41f22cf73e","userType":"patient","patientID":1675699471163,"patientName":"Supun","mobile":453465345,"email":"joy32143@gmail.com","password":"piyush", "nic":"1999020648v","age":34,"department":"Cardiology","gender":"Male","bloodGroup":"AB+","DOB":"2023-02-19","address":"1234","disease":"Cough","details":"Physics","admitted":true,"date":"2023-03-02T00:00:00.000Z","docID":"63d228df1742e138a3727857","nurseID":"63d22a01c316873d804474fb","__v":0},
    {"_id":"63e5c60cdfcf054d5a28c7a0","userType":"patient","patientID":1676002821033,"patientName":"Kamal","mobile":1,"email":"ka@gmail.com","password":"password", "nic":"1999020648v","age":32,"gender":"male","bloodGroup":"A-","address":"Najajba","disease":"Fatigue","admitted":true,"date":"2023-02-10T00:00:00.000Z","__v":0},
    {"_id":"63e9f59893ca84b6588153c7","userType":"patient","patientID":1676277140848,"patientName":"Rahul","mobile":6204591218,"email":"rahul1@gmail.com","password":"password", "nic":"1999020648v","age":20,"gender":"","address":"cvb","disease":"Parasites","admitted":true,"date":"2023-02-14T00:00:00.000Z","__v":0},
    {"_id":"63e9f6b52d13ee1dd692b4db","userType":"patient","patientID":1676277423026,"patientName":"Nihal","mobile":null,"email":"Nnihal@gmail.com","password":"password", "nic":"1999020648v","age":42,"gender":"male","bloodGroup":"A+","address":"","disease":"fever","admitted":true,"date":null,"__v":0},
    {"_id":"63e5c60cdfcf054d5a28c7a0","userType":"patient","patientID":1676002821033,"patientName":"Kumara","mobile":1,"email":"ka@gmail.com","password":"password", "nic":"1999020648v","age":40,"gender":"male","bloodGroup":"B+","address":"Najajba","disease":"Gastritis","admitted":true,"date":"2023-02-10T00:00:00.000Z","__v":0},
    {"_id":"63e9f53493ca84b6588153c2","userType":"patient","patientID":1676277035812,"patientName":"Rahul","mobile":6204591217,"email":"rahul@gmail.com","password":"password", "nic":"1999020648v","age":20,"gender":"male","bloodGroup":"A-","address":"Abc","disease":"diarrhea","admitted":true,"date":"2023-02-14T00:00:00.000Z","__v":0},
    
  
      ]
    }
    dispatch({ type: types.GET_PATIENT_REQUEST });
    // console.log(res.data);
    dispatch({
      type: types.GET_PATIENT_SUCCESS,
      payload: dummyData,
    });
  } catch (error) {
    console.log(error);
  }
};

// GET ALL DATA
export const GetAllData = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_ALLDATA_REQUEST });
    const res = await axios.get(
      `https://zany-gray-clam-gear.cyclic.app/hospitals`
    );
    console.log(res.data);
    dispatch({
      type: types.GET_ALLDATA_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// GET ALL APPOINTMENT DETAILS
export const GetAllAppointment = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_APPOINTMENT_DETAILS_REQUEST });
    const res = await axios.get(
      `https://zany-gray-clam-gear.cyclic.app/appointments`
    );
    // console.log(res.data);
    // return res.data;
    dispatch({
      type: types.GET_APPOINTMENT_DETAILS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// DELETE APPOINTMENTS
export const DeleteAppointment = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.DELETE_APPOINTMENT_REQUEST });
    const res = await axios.delete(
      `https://zany-gray-clam-gear.cyclic.app/appointments/${id}`
    );
    console.log(res.data);
    // return res.data;
    dispatch({
      type: types.DELETE_APPOINTMENT_SUCCESS,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

// GET ALL REPORTS
export const GetAllReports = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_REPORTS_REQUEST });
    const res = await axios.get(
      `https://zany-gray-clam-gear.cyclic.app/reports`
    );
    // console.log(res.data);
    return res.data;
    // dispatch({
    //   type: types.DELETE_APPOINTMENT_SUCCESS,
    //   payload: id,
    // });
  } catch (error) {
    console.log(error);
  }
};
