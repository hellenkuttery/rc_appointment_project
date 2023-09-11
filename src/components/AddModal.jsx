import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AddModal({
  show,
  handleClose,
  doctorName,
  app,
  setApp,
}) {
  const [patient, setPatient] = useState();
  const [date, setDate] = useState("");
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
 
    setApp([...app,
      {
        id: new Date().getTime(),
        patient: patient,
        day: date,
        consulted: false,
        doctor: doctorName
      },
    ])   
    console.log(app);
    handleClose()
  }

 

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reservation for doctor {doctorName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                onChange={(e) => setPatient(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Date & Time</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="Password"
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>    
            <Button variant="success" type="submit">
            Save
          </Button>
          <Button variant="danger" onClick={handleClose}>
            CLose
          </Button>
          </Form>
        </Modal.Body>
     
      </Modal>
    </>
  );
}

export default AddModal;
