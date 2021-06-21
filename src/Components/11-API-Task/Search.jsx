import { useState } from "react"
import {Input, Form, FormGroup, Label,Button} from 'reactstrap';

const Search =()=>{

    const [searchVal , setSearchVal] = useState("");

    const handleSub=(e)=>{
        e.preventDefault();
        console.log(searchVal);
    }
    return(
        <>
        <Form action={handleSub}>
            <FormGroup>
                <Label for="carName">Enter the name of the garage </Label>
                <Input type="text" value={searchVal} placeholder="Find by Name"onChange={(e)=>setSearchVal(e.target.value)} name="carName" id="carName"  />
            </FormGroup>
            <Button color="warning" onClick={handleSub}>Find</Button>
        </Form>
        </>
    )
}
export default Search;