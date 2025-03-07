import { Modal, Button } from "react-bootstrap";

export default function PopUp(props){
  return(
      <Modal 
        {...props}
        centered > 
        <Modal.Header closeButton>
          <Modal.Title className='text-dark'> Ahoy you coffee cowboy!!! </Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-secondary'>  {props.msg}. Confirm to refresh the page.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.onHide}>
            Ok
          </Button>
          <Button variant="primary" onClick={props.onClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
  );
}
