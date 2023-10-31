import React from 'react';
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Carousel, Form } from 'react-bootstrap';
import axios from 'axios';
import {useAuth0} from "@auth0/auth0-react"


function BookForm(props) {

    const { getAccessTokenSilently } = useAuth0()

    function onchangefunctionTitle(event) {
        props.titlechange(event.target.value)
    };
  

    function onchangefunctionDescription(event) {
        props.descriptionchange(event.target.value)
    };
  

    function onchangefunctionStatus(event) {
        props.statuschange(event.target.value)
    };
   
    

    const handleSub = (event) => {
        event.preventDefault()
        console.log("Submitted")
        onSubmitFunction()
    };



async function onSubmitFunction() {
    window.location.reload()
    try {

        const response = await axios.post('https://backend-lab-11.onrender.com/books', {

          title: props.title,
          description: props.description,
          status: props.status,
         
          
        });
        props.setBooks(response)
  

      console.log('Response:', response.data);
      // Handle the response data as needed
      
      // Reset the form fields
   
    } catch (error) {
        console.error('Error saving book:', error);
        // Handle the error
    }
    props.setShowForm(false)
};
console.log(props.showForm)
return (

        props.showForm === true && (
            <div style={{zIndex:"4", display: "flex", border: "1px solid black", justifyContent: "center", height: "101%",alignItems:"center" ,width:"100%",backgroundColor: "black", color: "white",position:"absolute",top:"0" }}>
                {/* Render your "New Book" form component here */}
                <div style={{height:"100%", backgroundColor: "black",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%"}}>
                <Form id="Form"  style={{padding:"80px",minWidth:"300px", height:"90%",width:"90%", backgroundColor: "black",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }}  onSubmit={handleSub}>
                    <Form.Group style={{width:"90%"}} className="mb-3 FormInput">
                        <Form.Label style={{width:"100%"}}>Title</Form.Label>
                        <Form.Control style={{width:"100%"}} placeholder="Title" id="Title" name="Title" onChange={onchangefunctionTitle} required />

                    </Form.Group>
                    <Form.Group style={{width:"90%",height:"50%"}} className="mb-3 FormInput">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" style={{height:"100%"}} placeholder="Description" id="Description"  name="Description" onChange={onchangefunctionDescription} required />
                    </Form.Group>
                   
                        <button className="Buttons"  type="submit" style={{marginTop:"40px"}}>Submit</button>
                </Form>
                </div>
            </div>

        )


    )
}
export default BookForm