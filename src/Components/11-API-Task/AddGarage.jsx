import { Form, FormGroup, Label, Input,Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import { useState } from 'react';

const AddGarage=(props)=>{
    const {buttonLabel,className} = props

    const [modal, setModal] = useState(false);
    const [garageName,setGarageName] = useState("");

    const toggle = () => {setModal(!modal);}
    const handleClose = () => setModal(false);

    const handleSub=(e)=>{
      handleClose();
      e.preventDefault();
      const addItem = {  
      "name": garageName,
    }
    axios
    .post(`http://localhost:9092/garage/create`,addItem)
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
       console.error(error)
    })

      }

    
  
    return (
      <div>
        <Button color="dark" onClick={toggle}>{buttonLabel}</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Add new car to garage</ModalHeader>
          <ModalBody>
              <p>Please update the relevant fields</p>
            <Form action={handleSub}>
                <FormGroup>
                    <Label for="carName">Enter the name of the garage </Label>
                    <Input type="text" value={garageName} onChange={(e)=>setGarageName(e.target.value)} name="carName" id="carName"  />
                </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={handleSub}>Add new Garage</Button>{' '}
            <Button color="danger" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );

}

export default AddGarage;