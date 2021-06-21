import {Input, Form, FormGroup, Label,Button} from 'reactstrap';
import axios from 'axios';
import { useState } from 'react';
const EditGarage =(props)=>{
    const {garageId,name,edit,editName} = props;

    const [garageName,setGarageName] = useState(name);


    const handleSub=(e)=>{
        e.preventDefault();
      
        const newGarage ={
            "name":garageName
        }
        axios
            .put(`http://localhost:9092/garage/update/${garageId}`,newGarage)
            .then((response)=>{
                console.log(response);
                editName();
                
            })
            .catch((error)=>{
               console.error(error);
            })
        }

if(!edit){

    return(
        <>
        <h2 id="garageName">{name}</h2>
        
        </>
    )
}else{
    return(
        <>
         <Form action={handleSub}>
                <FormGroup>
                    <Label for="carName">Enter the name of the garage </Label>
                    <Input type="text" value={garageName} onChange={(e)=>setGarageName(e.target.value)} name="carName" id="carName"  />
                </FormGroup>
                <Button color="warning" onClick={handleSub}>Update name</Button>
            </Form>
        </>
    )
}


}

export default EditGarage