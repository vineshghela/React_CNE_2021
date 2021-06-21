import { Table,Alert, Button,Row, Col, Input  } from 'reactstrap';
import Car from './Car';
import AddItem from './AddItem';
import axios from 'axios'
import { useState } from 'react';
import EditGarage from './EditGarage';

const GarageItem =({name,cars,garageId})=>{
const [garageID, setGarageID] = useState(garageId);
const [editGarageName, setEditGarageName] = useState(false);
  
    const del=(id)=>{       
        axios
            .delete(`http://localhost:9092/garage/delete/${id}`)
            .then((response)=>{
                console.log(response);
                
            })
            .catch((error)=>{
               console.error(error);
            })
        }

        const editName = ()=>{setEditGarageName(!editGarageName)}
           

        
    const isEmpty=()=> {
        return Object.keys(cars).length === 0;
    }

if(isEmpty()){
    return(
        <>
        <Alert color="danger">
                <Row>
                    <Col id="garageCol" md="10">
                        <EditGarage garageId={garageID} name={name} edit={editGarageName} editName={editName}  />
                    </Col>
                    <Col md="1">
                        <Button color="danger" onClick={()=>del(garageId)}>Delete</Button>
                    </Col>
                    <Col md="1">
                        <Button onClick={()=>editName(garageId)} >Edit</Button>
                    </Col>
                </Row>
           <h3>There are currently no cars in the garage!!</h3>
        <AddItem buttonLabel="+" name={name} id={garageId}/>
        </Alert>
        </>
    )
}else{
    return(
        <>
            <Alert color="success">
                <Row>
                    <Col id="garageCol" md="10">
                        <EditGarage garageId={garageID} name={name} edit={editGarageName} editName={editName} />
                    </Col>
                    <Col md="1">
                        <Button color="danger" onClick={()=>del(garageId)}>Delete</Button>
                    </Col>
                    <Col md="1">
                        <Button onClick={()=>editName(garageId)} >Edit</Button>
                    </Col>
                </Row>
               <Table>
                   <thead>
                       <th>ID</th>
                       <th>Name</th>
                       <th>Make</th>
                       <th>Model</th>
                       <th>Doors</th>
                       <th>Colour</th>
                   </thead>
                    <tbody>
                    {cars.map((i,index) => (
                           <Car key={index}  
                            id={i.id}
                            name={i.name}
                            make={i.make}
                            model={i.model}
                            doors={i.doors}
                            colour={i.colour}
                            garageId={garageId}
                           
                            />
                        ))}
                    </tbody>
                </Table>
                <AddItem buttonLabel="+" name={name} id={garageId}/>
            </Alert>
        </>
    )
}
}

export default GarageItem;