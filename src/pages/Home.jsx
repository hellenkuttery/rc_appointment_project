import Doctors from "./../components/Doctors";
import Appointments from "./../components/Appointments";
import {doctorData} from "../helper/data"
import { useState } from "react";

const Home = () => {
    const [doctors,setDoctors]=useState(doctorData)
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors  doctors={doctors}/>
      <Appointments></Appointments>
    </main>
  );
};

export default Home;
