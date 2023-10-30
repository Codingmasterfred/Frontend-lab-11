import React,{useEffect} from 'react';
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

    useEffect(() => {
        const descriptionInput = document.getElementById("Description");

        function handleInputFocus() {
            // When the input field is focused, prevent scrolling
            document.body.style.overflow = 'hidden';
        }

        function handleInputBlur() {
            // When the input field is blurred (keyboard closed), allow scrolling
            document.body.style.overflow = 'hidden';
        }

        descriptionInput.addEventListener('focus', handleInputFocus);
        descriptionInput.addEventListener('blur', handleInputBlur);

        // Clean up the event listeners when the component unmounts
        return () => {
            descriptionInput.removeEventListener('focus', handleInputFocus);
            descriptionInput.removeEventListener('blur', handleInputBlur);
        };
    }, []);





    return (

        props.modalshow === true && (
            <div style={{ zIndex: "4", display: "flex", border: "1px solid black", justifyContent: "center", height: "101%", alignItems: "center", width: "100%", backgroundColor: "black", color: "white", position: "absolute", top: "0" }}>
                {/* Render your "New Book" form component here */}
                <div style={{ height: "100%", backgroundColor: "black", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%" }}>
                    <Form id="Form" style={{ padding: "80px", minWidth: "300px", height: "90%", width: "90%", backgroundColor: "black", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} onSubmit={handleSub}>
                        <Form.Group style={{ width: "90%" }} className="mb-3 FormInput">
                            <Form.Label style={{ width: "100%" }}>Title</Form.Label>
                            <Form.Control style={{ width: "100%" }} placeholder="Title" id="Title" name="Title" value={props.title} onChange={onchangefunctionTitle} required />

                        </Form.Group>
                        <Form.Group style={{ width: "90%", height: "50%" }} className="mb-3 FormInput">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                style={{ height: "100%" }}
                                placeholder="Description"
                                id="Description"
                                name="Description"
                                value={props.description}
                                onChange={onchangefunctionDescription}
                                required
                                className="scroll-prevent"
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