import { useState } from 'react';
import { Form, FormGroup, Label, Input,Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
const AddItem = (props) => {
    const {buttonLabel,className,id,name} = props;
    // console.log("This is the keyyyy", key);
  
    const [modal, setModal] = useState(false);
    //form states
    const [garageId, setGarageId] = useState(id);
    const [garageName, setGarageName] = useState(name);
    const [carName, setCarName] = useState("");
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");
    const [carDoors, setCarDoors] = useState(3);
    const [carColour, setCarColour] = useState("");
  
    const toggle = () => {setModal(!modal);}
    const handleClose = () => setModal(false);

    const handleSub=(e)=>{
      handleClose();
      e.preventDefault();
      const addItem = {  
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
    .post(`http://localhost:9092/car/create`,addItem)
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
        <Button color="info" onClick={toggle}>{buttonLabel}</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Add new car to garage</ModalHeader>
          <ModalBody>
              <p>Please update the relevant fields</p>
            <Form action={handleSub}>
                <FormGroup>
                    <Label for="carName">The garage you have selected </Label>
                    <Input type="text" value={garageName} readOnly onChange={(e)=>setCarName(e.target.value)} name="carName" id="carName"  />
                    <Label for="carName">Name</Label>
                    <Input type="text" value={carName} onChange={(e)=>setCarName(e.target.value)} name="carName" id="carName"  />
                    <Label for="carMake">Make</Label>
                    <Input type="text" value={carMake} onChange={(e)=>setCarMake(e.target.value)} name="carMake" id="carMake"  />
                    <Label for="carModel">Model</Label>
                    <Input type="text" value={carModel} onChange={(e)=>setCarModel(e.target.value)} name="carModel" id="carModel"/>
                    <Label for="carDoors">Doors</Label>
                    <Input type="number" min={3} max={5} value={carDoors} onChange={(e)=>setCarDoors(e.target.value)} name="carDoors" id="carDoors"/>
                    <small>Enter a number between 3 and 5</small>
                    <br/>
                    <Label for="carColour">Colour</Label>
                    <Input type="carColour" value={carColour} onChange={(e)=>setCarColour(e.target.value)} name="carColour" id="carColour" />
                </FormGroup>
                {/* <Button type="submit">Submit</Button> */}
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={handleSub}>Add new Car</Button>{' '}
            <Button color="danger" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

  export default AddItem;