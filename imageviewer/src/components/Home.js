import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import moment from "moment";

const Home = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const getUserData = async () => {
        const res = await axios.get("/getdata", {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (res.data.status == 201) {
            console.log("data get");
            setData(res.data.data.rows);
            //console.log(res.data.data)
        } else {
            console.log("error");
        }
    }

    const dltUser = async (id) => {
        console.log(id)
        const res = await axios.delete(`/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (res.data.status == 201) {
            getUserData()
        } else {
            console.log("error")
        }
    }

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    }


    useEffect(() => {
        getUserData()
    }, [])
    console.log('data', data);
    console.log('data', data.length);

    //console.log('length',data.rows.length)

    return (
        <div className="container mt-2">
            <h1 className='text-center mt-2'>Product list With Postgress database</h1>
            <div className='text-end'>
                <Button variant="primary"><NavLink to="/register" className="text-decoration-none text-light"> Add Product</NavLink></Button>
            </div>
            <div className="d-flex justify-content-end mt-3">
                <input type="text" placeholder="Search products" value={searchQuery} onChange={handleSearch} />
            </div>
            <div className='d-flex justify-content-between align-iteams-center mt-5'>
                {data.length > 0 ?
                    data.filter((product) => {
                        const lowerCaseQuery = searchQuery.toLowerCase();
                        return product.fname.toLowerCase().includes(lowerCaseQuery) ||
                            product.description.toLowerCase().includes(lowerCaseQuery) ||
                            product.price.toString().includes(lowerCaseQuery)
                    }).map((el) => {
                        return (
                            <>
                                <Card style={{ width: '20rem', height: "14rem" }} className="mb-3">
                                    <Card.Img variant="top" src={`/uploads/${el.photo}`} style={{ width: '100px', height: '100px', textAlign: "center", margin: "auto" }} className="mt-2" />
                                    <Card.Body className='text-center'>
                                        <Card.Title>Product Name : {el.fname}</Card.Title>
                                        <Card.Text>
                                            Description : {el.description}
                                        </Card.Text>
                                        <Card.Text>
                                            Price : {el.price}
                                        </Card.Text>
                                        <Button variant="danger" onClick={() => dltUser(el.id)} className='col-lg-6 text-center'>Delete</Button>
                                    </Card.Body>
                                </Card>
                            </>
                        )
                    }) : (<p>no content </p>)
                }
            </div>
        </div>
    )
}




export default Home