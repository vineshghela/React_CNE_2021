import axios from 'axios';
import { useState } from 'react';
import {Button, Spinner} from 'reactstrap';
import ModalExample from './Modal';

const Car =({id,name,make,model,doors,colour,garageId})=>{
    const [deleteItem, setDeleteItem] = useState(true);

    const del=(id)=>{
        setDeleteItem(false)
       setTimeout(()=>{
        axios
            .delete(`http://localhost:9092/car/delete/${id}`)
            .then((response)=>{
                console.log(response);
               setDeleteItem(true);
                
            })
            .catch((error)=>{
               console.error(error);
               setDeleteItem(true);
            })
        },1000)            

        }


    if(deleteItem){
        return(
            <>
                <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{make}</td>
                    <td>{model}</td>
                    <td>{doors}</td>
                    <td>{colour}</td>
                    <td><Button id={id} color="danger" onClick={()=>del(id)}>Delete</Button></td>
                    <td><ModalExample
                         buttonLabel="Update"
                         id={id}
                         name={name}
                         make={make}
                         model={model}
                         doors={doors}
                         colour={colour}
                         garageId={garageId}
                        />
                    </td>
                </tr>
                
            </>
        )
    }else{
        return(
            <>
                <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{make}</td>
                    <td>{model}</td>
                    <td>{doors}</td>
                    <td>{colour}</td>
                    <Spinner color="danger" />
                    <td><Button color="warning">Update</Button></td>
                </tr>
                
            </>
        )
    
    }

    


}

export default Car;