import React from 'react';
import { useState } from "react";
import { Carousel } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import { useEffect } from "react"
import { Form } from 'react-bootstrap';
import BookForm from "./BookFormModal"
import Modalform from "./editModalForm"

function BestBooks() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     books: []
  //   }
  // }
  const [books, setBooks] = useState([])
  const [showForm, setShowForm] = useState(false); // State for revealing the "New Book" form
  const [title, titlechange] = useState("")
  const [description, descriptionchange] = useState("")
  const [status, statuschange] = useState("")
  const [click, clickfunction] = useState(false)
  const [currenteditbook,currenteditbookfunction] = useState(null)
  const [editbook,editingbook] = useState({
    title:"",
    description:"",
    status:""
  })
  const [modalshow,modalshowfunction] = useState(false)


  useEffect(() => {
    // Define an async function

    async function componentDidMount() {
      try {
        let BookData = await axios.get("https://backendbooks.onrender.com/books");
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
  };


  console.log("Title", title)
  console.log("description", description)
  console.log("status", status)

 
  
  async function Delete(id){
    let DeleteData = await axios.delete(`https://backendbooks.onrender.com/books/${id}`)
    setBooks(DeleteData)
    
  }
  function edit(id, title, description, status){

    modalshowfunction(true);
    currenteditbookfunction(id);
    titlechange(title);
    descriptionchange(description);
    statuschange(status);
  }
  async function savechanges(id, title, description, status) {
    try {
      let editBooks = await axios.put(`https://backendbooks.onrender.com//books/${id}`, {
        title: title,
        description: description,
        status: status,
        id:currenteditbook

      });
  
      if (editBooks.status === 200) {
        setBooks(editBooks);
      }
  
    } catch (error) {
      console.error(error);
    }
  }






/* TODO: Make a GET request to your API to fetch all the books from the database  */



/* TODO: render all the books in a Carousel */

return (
  <>
    <div>
      <button onClick={handleAddBookClick}>Add Book</button>
    </div>

    {books.length != 0 ? (
      <div style={{ display: "flex", alignItems: "center", height: "100vh", border: "1px solid black", height: "400px", marginBottom: "40px", justifyContent: showForm === false ? "center" : "space-between" }}>



        <div style={{ width: "900px" }} id="BestBooksDiv">
          {console.log("Books", books)}
          <Carousel fade style={{ width: "900px", height: "300px", border: "1px solid black", background: "black", color: "white", textAlign: "center" }}>
            {books.data.map(arr => {
              return (
                <Carousel.Item>

                  <h2>{arr.title}</h2>
                  <p>{arr.description}</p>
                  
                  <span>{arr.status}</span>
                  <button id="delete" onClick={()=>{Delete(arr._id)}}>Delete it</button>
                  <button style={{marginTop:"10px"}} onClick={()=>edit(arr._id,arr.title,arr.description,arr.status)}>edit book</button>
                </Carousel.Item>
              )
            })
            }
          </Carousel>
        </div>
        <BookForm currenteditbook={currenteditbook} showForm={showForm} titlechange={titlechange} descriptionchange={descriptionchange} statuschange={statuschange} clickfunction={clickfunction} click={click} title={title} description={description} status={status} setBooks={setBooks}/>
          {modalshow === true ?<Modalform currenteditbook={currenteditbook} savechanges={savechanges} modalshowfunction={modalshowfunction} showForm={showForm} titlechange={titlechange} descriptionchange={descriptionchange} statuschange={statuschange} clickfunction={clickfunction} click={click} title={title} description={description} status={status} setBooks={setBooks}/> : <></>}
      </div>

    )
      : (
        <div>
          <h3>No Books Found :(</h3>
          <p>Book Carousel coming soon</p>
        </div>
      )}
 
  </>
)
}

export default BestBooks
