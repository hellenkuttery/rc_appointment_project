import Doctors from "./../components/Doctors";
import { doctorData } from "../helper/data";
import { useState } from "react";
import appointmentData from "../helper/data";
import AppointmentsList from './../components/AppointmentsList';

const Home = () => {
  const [app, setApp] = useState(appointmentData)
  const [doctors, setDoctors] = useState(doctorData);
console.log(app);
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors
        doctors={doctors}
        app={app}
        setApp={setApp}
      />
      <AppointmentsList    app={app}
       
       />
    </main>
  );
};

export default Home;
