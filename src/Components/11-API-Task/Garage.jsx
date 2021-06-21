import axios from 'axios';
import { useEffect, useState } from 'react';
import {  Spinner } from 'reactstrap';
import AddGarage from './AddGarage';
import GarageItem from './GarageItem';
import Search from './Search';

const Garage =()=>{
    const [info, setInfo] = useState([]);
    // setting out error obj
    const [error,setError]= useState(null);
    // loading...
    const [isLoaded, setIsLoaded] = useState(false);


    
    useEffect(() => {
       
        axios
            .get(`http://localhost:9092/garage/read`)
            .then((response)=>{
                // console.log(response.data);
                // console.log(response.data.data);
                setIsLoaded(true);
               setInfo(response.data);
            //    console.log("info",info);
            })
            .catch((error)=>{
                setIsLoaded(true);
              setError(error);
            })
    },[info])
   

    if(error){
        return <h1>OH Noo something went wrong!!!! {error.message}</h1>
    }else if (!isLoaded){
        return(
            <>
                <p>Please wait.... we are getting your request</p>
                <Spinner color="primary" />
                <Spinner color="danger" />
                <Spinner color="info" />
                <Spinner color="primary" />
            </>
        )
    }else{

    return(
     
            <>
                <AddGarage  buttonLabel="Add Garage" />
                <Search/>
                <br/>
                {
                    info.map(({id,...keys})=><GarageItem key={id} garageId={id} {...keys} />)   
                }
            </>
    )
            }
    

}

export default Garage;