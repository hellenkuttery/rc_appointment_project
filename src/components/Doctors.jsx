import { React, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddModal from "./AddModal";

const Doctors = ({ doctors }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  const handleClick = () => {
    setShow(true);
  };
  return (
    <Container className="p-2">
      <h3 className="display-6">Our Doctors</h3>
      <Row>
        {doctors.map((doctor) => (
          <Col md={3} sm={4} xs={12} lg={2}>
            <img
              src={doctor.img}
              alt=""
              width="100%"
              className="img-thumbnail"
              onClick={()=>setShow(true)}
            />
            <h5>{doctor.name}</h5>

            <h6>{doctor.dep}</h6>
          </Col>
        ))}
      </Row>
      <AddModal show={show} handleClose={()=>setShow(false)} />
    </Container>
  );
};

export default Doctors;
