import React from 'react';
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Form } from 'react-bootstrap';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modalform(props) {


    
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
    
        props.savechanges(props.currenteditbook, props.title, props.description, props.status)



        // try {
        //     const response = await axios.post('/books', formData);
        //     const newBook = response.data;
        //     // Pass the new book up to the BestBooks component
        //     props.onAddBook(newBook);
        //     // Reset the form data
        //     setformData({
        //         title: '',
        //         description: '',
        //         status: 'Published'
        //     });
        // } catch (error) {
        //     console.error('Error saving book:', error);
        // }
    };
   


    function change(){
        props.modalshowfunction(false)
    }

   



    return (

<div
className="modal show"
style={{ display:  'block', position: 'initial', height:"100vh", width:"100vw"}}
>
<Modal.Dialog>
  <Modal.Header closeButton onClick={change}>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>

        <Form style={{ width: "300px", borderRadius: "10%", padding: "30px", backgroundColor: "black"}} >
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control placeholder="Title" id="Title" name="Title" value={props.title} onChange={onchangefunctionTitle} required />

            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control placeholder="Description" id="Description" name="Description" value={props.description} onChange={onchangefunctionDescription} required />
            </Form.Group>
            <Form.Group>
                <Form.Label id="Status" name="Status" >Status</Form.Label>
                <Form.Select onChange={onchangefunctionStatus} required value={props.status} >
                    <option>Published</option>
                    <option>Unpublished</option>
                </Form.Select>
            </Form.Group>
        </Form>
   
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary"  onClick={change}>Close</Button>
    <Button variant="primary" onClick={handleSub}>Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
</div>






    )

}
export default Modalform