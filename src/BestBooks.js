import React from 'react';
import { useState } from "react";
import {Carousel} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import {useEffect} from "react"
import { Form } from 'react-bootstrap';
import BookForm from "./BookFormModal"

function BestBooks() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     books: []
  //   }
  // }
  const [books, setBooks] = useState([])
  const [showForm, setShowForm] = useState(false); // State for revealing the "New Book" form


  useEffect(() => {
    // Define an async function
    
    async function componentDidMount(){
    try{
     let BookData = await axios.get("http://localhost:3001/books");
     console.log("BookData",BookData.data)
     setBooks(BookData)
  
    }
    catch(error){
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





  /* TODO: Make a GET request to your API to fetch all the books from the database  */



  /* TODO: render all the books in a Carousel */

  return (
    <>
        <div>
        <button onClick={handleAddBookClick}>Add Book</button>
      </div>

      {books.length != 0 ? (
     <div style={{ display: "flex", alignItems: "center", height: "100vh", border: "1px solid black", height: "400px", marginBottom: "40px", justifyContent: showForm === false ? "center" : "space-between" }}>



          <div style={{ width:"900px"}} id="BestBooksDiv">
          {console.log("Books",books)}
          <Carousel fade style={{width:"900px", height:"300px", border:"1px solid black", background:"black", color:"white",textAlign:"center"}}>
        {books.data.map(arr =>{
          return(
            <Carousel.Item>
         
            <h2>{arr.title}</h2>
            <p>{arr.description}</p>
            <span>{arr.status}</span>
            
        </Carousel.Item>
          )
        })
      }
  </Carousel>
      </div>
      <BookForm showForm={showForm}/>
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

export default BestBooks;
