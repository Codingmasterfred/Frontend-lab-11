import React from 'react';
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Form } from 'react-bootstrap';


function BookForm(props) {


    return(
   
    
        props.showForm === true && (
            <div style={{ display: "flex", border: "1px solid black", justifyContent: "center", height: "400px", alignItem: "center", backgroundColor: "black", color: "white" }}>
                {/* Render your "New Book" form component here */}
                <Form style={{ width: "300px", borderRadius: "30%", padding: "30px", backgroundColor: "black" }}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control placeholder="Title" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control placeholder="Description" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Status</Form.Label>
                        <Form.Select >
                            <option>Published</option>
                            <option>Unpublished</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </div>
        
        )
    
)
}
export default BookForm