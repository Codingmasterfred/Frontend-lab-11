import React from 'react';
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Form } from 'react-bootstrap';
import axios from 'axios';


function BookForm(props) {

   

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



async function onSubmitFunction() {
    try {
        const response = await axios.post('https://backendbooks.onrender.com/books', {
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
};

return (

        props.showForm === true && (
            <div style={{ display: "flex", border: "1px solid black", justifyContent: "center", height: "400px", alignItem: "center", backgroundColor: "black", color: "white" }}>
                {/* Render your "New Book" form component here */}
                <Form style={{ width: "300px", borderRadius: "30%", padding: "30px", backgroundColor: "black" }}  onSubmit={handleSub}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control placeholder="Title" id="Title" name="Title" onChange={onchangefunctionTitle} required />

                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control placeholder="Description" id="Description"  name="Description" onChange={onchangefunctionDescription} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label id="Status"  name="Status" >Status</Form.Label>
                        <Form.Select onChange={onchangefunctionStatus} required>
                            <option>Published</option>
                            <option>Unpublished</option>
                        </Form.Select>
                        <button  type="submit">Submit</button>
                    </Form.Group>
                </Form>
            </div>

        )


    )
}
export default BookForm