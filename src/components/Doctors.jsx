import { React, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddModal from "./AddModal";

const Doctors = ({ doctors,app,setApp}) => {
  const [show, setShow] = useState(false);
  const [doctorName,setdoctorName]=useState()
console.log(app);
  // const handleClose = () => setShow(false);

   return (
    <Container className="p-2">
      <h3 className="display-6">Our Doctors</h3>
      <Row>
        {doctors.map(({id,img,dep,name}) => (
          <Col key={id} md={3} sm={4} xs={12} lg={2}>
            <img
              src={img}
              alt=""
              width="100%"
              className="img-thumbnail"
              onClick={() => {
                // setDrName(name)
                setShow(true)
                setdoctorName(name)
              }}
            />
            <h5>{name}</h5>

            <h6>{dep}</h6>
          </Col>
        ))}
      </Row>
      <AddModal show={show}  handleClose={() => setShow(false)} 
      doctorName={doctorName}  app={app}
      setApp={setApp}/>
    </Container>
  );
};

export default Doctors;
