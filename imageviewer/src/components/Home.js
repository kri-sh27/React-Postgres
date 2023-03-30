import React from 'react'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect ,useState} from 'react'

const Home = () => {
    const [data, setData] = useState([]);

    const getUserData = async () => {
        const res = await axios.get("/getdata",{
            headers:{
                "Content-Type": "application/json"
            }
        });

        if (res.data.status == 201) {
            console.log("data get");
            setData(res.data.data)
        } else {
            console.log("error")
        }
        console.log(res)
    }
    useEffect(()=>{
        getUserData()
    },[])

    return (
        <>
            <div className='container mt-2'>
                <h1>this is list {data.fname}</h1>
                <div className='text-end'>
                    <Button variant="primary"><NavLink to='/register' className="text-decoration-none text-light">Add product</NavLink></Button>{''}
                </div>
            </div>
            <div className='d-flex justify-content-between align-items-center mt-5'>
                {
                    data.length > 0 ?data.map((el,i)=>{
                        return(
                           
                        <>
                      < h1> {el}</h1>
                        {el.fname}
                    {data.fname}
                 {/* <Card style={{ width: '15rem', height: '15rem' }} className="mb-3">
                            <Card.Img variant="top" src="logo192.png" style={{ width: '50px', textAlign: "center", margin: "auto" }} className="mt-2" />
                            <Card.Body className='text-center'>
                                <Card.Title>user name : {el.fname}</Card.Title>
                                {/* <Card.Title>date 42e3556</Card.Title> */}
        
                                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text> */}
                                {/* <Button variant="primary" className='col-lg-6 text-center'>Delete</Button>
                            </Card.Body> */}
                        {/* </Card> */} 
                        </>
                        )
                        }):""
                    }
            </div>
        </>
    )
}
export default Home