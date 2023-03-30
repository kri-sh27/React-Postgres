import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import axios from "axios"
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const [fname,setFName]= useState("");
    const [file,setFile]= useState("");
    const [price,setPrice]=useState("");
    const [description,setDesp]= useState("");
    const history = useNavigate();
    const setdata= (e)=>{
        setFName(e.target.value);
    }
    const setimgfile =(e)=>{
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
    }
    const setprice = (e)=>{
        setPrice(e.target.value);
        console.log(e.target.value);
    }
    const setdesp = (e)=>{
        setDesp(e.target.value);
        console.log(e.target.value);
    }

    const addUserData = async(e)=>{
        e.preventDefault();

        var formData = new FormData();
        formData.append("photo",file)
        formData.append("fname",fname)
        formData.append("price",price)
        formData.append("description",description);

        const config = {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }

        const res = await axios.post("/register",formData,config);
            if(res.data.status==201){
                history("/")
            }
            else{
                console.log("error");
            }
        console.log(res);
    }

      return (
    // <div>Register</div>
    <div className='container mt-3'>
        <h1>Add product details</h1>
        <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" name='fname' onChange={setdata}  />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name='price' onChange={setprice} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" name='description' onChange={setdesp}  />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label> Select Your Product Image</Form.Label>
                        <Form.Control type="file" name='photo' onChange={setimgfile} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={addUserData} >
                        Submit
                    </Button>
                </Form>
    </div>
  )
}

export default Register;