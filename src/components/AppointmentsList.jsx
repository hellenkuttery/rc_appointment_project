import React from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const AppointmentsList = ({app,setApp}) => {
  return (
   <Container>
    {
      !app.length && (
        <img src="./img/appointment.jpg" alt="" />
      )
    }

    {
      app.map((ap)=>{
        const {id,patient,consulted,doctor,day}=ap
        return(
          <div>
            <Row>
              <Col>
                  <h4>{patient}</h4>
                  <h3>{doctor}</h3>
                  
              </Col>
            </Row>
          </div>
        )
      })
    }
   </Container>
  )
}

export default AppointmentsList