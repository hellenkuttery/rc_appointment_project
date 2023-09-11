import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import { FcCancel } from "react-icons/fc";

const AppointmentsList = ({ app, setApp }) => {

const handleDelete=(id)=>{
setApp(app.filter((item)=>item.id !== id))
}


  return (
    <Container>
      {!app.length && <img src="./img/appointment.jpg" alt="" />}

      {app.map((ap) => {
        const { id, patient, consulted, doctor, day } = ap;
        return (
          <div>
            <Row className="d-flex">
              <Col >
                <h4>{patient}</h4>
                <h3>{doctor}</h3>
              </Col>
              <Col>
                <h2>{new Date(day).toLocaleDateString()}</h2>
                <h2>{new Date(day).toLocaleTimeString()}</h2>
              </Col>
              <Col>
              <FcCancel onClick={()=>handleDelete(id)}/>
              </Col>
            </Row>
          </div>
        );
      })}
    </Container>
  );
};

export default AppointmentsList;

