import { useState } from 'react';
import { Form, FormGroup, Label, Input,Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'

const ModalExample = (props) => {
    const {buttonLabel,className,id,name,make,model,doors,colour,garageId} = props;
  
    const [modal, setModal] = useState(false);

    const [carId, setCarId] = useState(id);
    const [carName, setCarName] = useState(name);
    const [carMake, setCarMake] = useState(make);
    const [carModel, setCarModel] = useState(model);
    const [carDoors, setCarDoors] = useState(doors);
    const [carColour, setCarColour] = useState(colour);
  
    const toggle = () => setModal(!modal);

    const handleSub=(e)=>{
      e.preventDefault();
      const addItem = {  
      "id":carId,
      "name": carName,
      "colour": carColour,
      "make": carMake,
      "model":carDoors ,
      "doors": carDoors,
      "garage":{
          "id":garageId
      }
    }
    axios
    .put(`http://localhost:9092/car/update/${carId}`,addItem)
    .then((response)=>{
        console.log(response);
        // console.log(response.data.data);
       
    //    console.log("info",info);
    })
    .catch((error)=>{
       console.error(error)
    })
  }
  
    return (
      <div>
        <Button color="warning" onClick={toggle}>{buttonLabel}</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Update Row</ModalHeader>
          <ModalBody>
              <p>Please update the relevant fields</p>
            <Form onSubmit={handleSub}>
                <FormGroup>
                    <Label for="id">Garage id</Label>
                    <Input type="id" value={carId}name="id" readOnly />
                    <Label for="id">id</Label>
                    <Input type="id" value={carId}name="id" readOnly />
                    <Label for="carName">Name</Label>
                    <Input type="text" value={carName} onChange={(e)=>setCarName(e.target.value)} name="carName" id="carName"  />
                    <Label for="carMake">Make</Label>
                    <Input type="text" value={carMake} onChange={(e)=>setCarMake(e.target.value)}name="carMake" id="carMake"  />
                    <Label for="carModel">Model</Label>
                    <Input type="text" value={carModel} onChange={(e)=>setCarModel(e.target.value)} name="carModel" id="carModel"/>
                    <Label for="carDoors">Doors</Label>
                    <Input type="number" min={3} max={5}value={carDoors} onChange={(e)=>setCarDoors(e.target.value)} name="carDoors" id="carDoors"/>
                    <small>Enter a number between 3 and 5</small>
                    <br/>
                    <Label for="exampleEmail">Colour</Label>
                    <Input type="email" value={carColour}  onChange={(e)=>setCarColour(e.target.value)}name="email" id="exampleEmail" />
                </FormGroup>

            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="warning" onClick={handleSub}>Update</Button>{' '}
            <Button color="danger" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }


  export default ModalExample