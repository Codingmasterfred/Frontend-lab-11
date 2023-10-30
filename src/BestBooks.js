import React from 'react';
import "./App.css"
import { useState } from "react";
import { Carousel } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import { useEffect } from "react"
import { Form } from 'react-bootstrap';
import BookForm from "./BookFormModal"
import Modalform from "./editModalForm"
import { useAuth0 } from "@auth0/auth0-react"

function BestBooks(props) {


  const [books, setBooks] = useState([])
  const [showForm, setShowForm] = useState(false); // State for revealing the "New Book" form
  const [title, titlechange] = useState("")
  const [description, descriptionchange] = useState("")
  const [status, statuschange] = useState("")
  const [click, clickfunction] = useState(false)
  const [currenteditbook, currenteditbookfunction] = useState(null)
  const [editbook, editingbook] = useState({
    title: "",
    description: "",
    status: ""
  })
  const [modalshow, modalshowfunction] = useState(false)
  const [CurrentItemDisplaying, setCurrentItemDisplaying] = useState({})


  useEffect(() => {
    // Define an async function

    async function componentDidMount() {
      try {

        let BookData = await axios.get("https://backend-lab-11.onrender.com/books");

        console.log("BookData", BookData.data)
        setBooks(BookData)

      }
      catch (error) {
        console.error(error)
      }
    }
    // Call the async function
    componentDidMount();
  }, []); // Empty dependency array to run the effect only once
  // ...
  const handleAddBookClick = () => {
    setShowForm(true); // Update state to reveal the "New Book" form
    console.log("hi")
  };


  console.log("Title", title)
  console.log("description", description)
  console.log("status", status)



  async function Delete(id) {

    while (id === undefined) {
      id = books.data[1]._id
    }
    console.log(id, "final")
    let DeleteData = await axios.delete(`https://backend-lab-11.onrender.com/books/${id}`)

    setBooks(DeleteData)

  }
  function edit(id, title, description, status) {
    modalshowfunction(true);
    while (id === undefined) {
      id = books.data[1]._id
      title =  books.data[1].title
      description = books.data[1].description
      status = books.data[1].status
    }
    currenteditbookfunction(id);
    titlechange(title);
    descriptionchange(description);
    statuschange(status);
  }
  async function savechanges(id, title, description, status) {
    try {

      let editBooks = await axios.put(`https://backend-lab-11.onrender.com/books/${id}`, {

        title: title,
        description: description,
        status: status,
        id: currenteditbook


      });

      if (editBooks.status === 200) {
        setBooks(editBooks);
      }

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    // Call SelectWorks for the first item when the component mounts
    if (books && books.data && books.data.length > 0) {
      SelectWorks(0);
    }
  }, []);

  const preventScroll = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (showForm || modalshow) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      document.body.addEventListener('touchmove', preventScroll, { passive: false });
    } else {
      document.body.removeEventListener('touchmove', preventScroll, { passive: false });
    }
  }, [showForm, modalshow]);

  useEffect(() => {
    // Handle changes in viewport height, e.g., due to keyboard visibility
    const handleResize = () => {
      if (window.innerHeight < window.outerHeight) {
        // Keyboard is visible
        document.body.style.overflow = 'auto'; // Enable scrolling
      } else {
        // Keyboard is hidden
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Handle initial state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function SelectWorks(index) {
    const selectedBook = books.data[index];
    console.log("Selection works:", selectedBook);
    setCurrentItemDisplaying(selectedBook)
  }






  /* TODO: Make a GET request to your API to fetch all the books from the database  */



  /* TODO: render all the books in a Carousel */

  return (
<div id="primaryBestbookDiv" style={{ overflow: showForm === true ? "hidden" : "auto" }}>

      {books.length != 0 ? (
        <div id="BooksShownParent" style={{ justifyContent: showForm === false ? "center" : "space-between" }}>
            {console.log("Books", books)}
      <div id="AddStoryDiv" >
        <button id="AddStoryButton" onClick={handleAddBookClick} className="Buttons">Add Book</button>
      </div>
            <div id="carouselContainer" >
              <Carousel id="carousel" onSelect={SelectWorks} interval={null} >
                {books.data.map(arr => {
                  return (
                    <Carousel.Item id="CarouselItem" style={{color:"white"}} >

                      <h2 className="carouselItemChild" >{arr.title}</h2>
                      <p id="PInCarousel" className="carouselItemChild" > {arr.description}</p>
                      <div id="DivForInsideButton" className="carouselItemChild displayInside" >
                        <button id="insideDeleteButton" className="Buttons InsideButtons displayInside"  onClick={() => { Delete(arr._id) }}>Delete Story</button>
                        <button id="insideUpdateButton" className="Buttons InsideButtons displayInside" onClick={() => edit(arr._id, arr.title, arr.description, arr.status)}>Edit Story</button>
                      </div>
                    </Carousel.Item>
                  )
                })
                }
              </Carousel>
            </div>
            <div id="outsideContainer" className="displayOutside">
              <button  id="OutsideDeleteButton" className="Buttons OutsideButtons displayOutside" onClick={() => { Delete(CurrentItemDisplaying._id) }}>Delete Story</button>
              <button id="OutsideUpdateButton" className="Buttons OutsideButtons displayOutside" style={{ marginTop: "10px", marginBottom: "10", margin: "auto", textAlign: "center", padding: "15px" }} onClick={() => edit(CurrentItemDisplaying._id, CurrentItemDisplaying.title, CurrentItemDisplaying.description, CurrentItemDisplaying.status)}>Edit Story</button>
          </div >
          <BookForm setShowForm={setShowForm} getAccessTokenSilently={props.getAccessTokenSilently} currenteditbook={currenteditbook} showForm={showForm} titlechange={titlechange} descriptionchange={descriptionchange} statuschange={statuschange} clickfunction={clickfunction} click={click} title={title} description={description} status={status} setBooks={setBooks} />
           <Modalform modalshowfunction={modalshowfunction} modalshow={modalshow} currenteditbook={currenteditbook} savechanges={savechanges} modalshowfunction={modalshowfunction} showForm={showForm} titlechange={titlechange} descriptionchange={descriptionchange} statuschange={statuschange} clickfunction={clickfunction} click={click} title={title} description={description} status={status} setBooks={setBooks} />
        </div>

      )
        : (
          <div>
            <h3>No Books Found :(</h3>
            <p>Book Carousel coming soon</p>
          </div>
        )}

    </div>
  )
}

export default BestBooks
