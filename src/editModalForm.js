import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Form } from 'react-bootstrap';
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

        props.savechanges(props.currenteditbook, props.title, props.description, "Published")
        props.modalshowfunction(false)
    };



    function change() {
        props.modalshowfunction(false)
    }






    return (

        props.modalshow === true && (
            <div style={{ zIndex: "4", display: "flex", border: "1px solid black", justifyContent: "center", height: "101%", alignItems: "center", width: "100%", backgroundColor: "black", color: "white", position: "absolute", top: "0" }}>
                {/* Render your "New Book" form component here */}
                <div style={{ height: "100%", backgroundColor: "black", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%" }}>
                    <Form id="Form" style={{ padding: "80px", minWidth: "300px", height: "90%", width: "90%", backgroundColor: "black", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} onSubmit={handleSub}>
                        <div onClick={props.Reload} style={{ display: "flex", justifyContent: "flex-end",width:"90%",minWidth:"200px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path style={{ color: "white", border: "10px solid yellow" }} d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path style={{ color: "white", border: "10px solid yellow" }} d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>
                        <Form.Group style={{ width: "90%" }} className="mb-3 FormInput">
                            <Form.Label style={{ width: "100%" }}>Title</Form.Label>
                            <Form.Control style={{ width: "100%" }} placeholder="Title" id="Title" name="Title" value={props.title} onChange={onchangefunctionTitle} required />

                        </Form.Group>
                        <Form.Group style={{ width: "90%", height: "50%" }} className="mb-3 FormInput">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                style={{ height: "100%", overflowY: "scroll" }}
                                placeholder="Description"
                                id="Description"
                                name="Description"
                                value={props.description}
                                onChange={onchangefunctionDescription}
                                required

                            />
                        </Form.Group>

                        <button className="Buttons" type="submit" style={{ marginTop: "40px" }} onClick={handleSub}>Submit</button>
                    </Form>
                </div>
            </div>
        )
    )
}
export default Modalform