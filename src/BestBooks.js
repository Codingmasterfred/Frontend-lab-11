import React from 'react';
import { useState } from "react";
import {Carousel} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import {useEffect} from "react"

function BestBooks() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     books: []
  //   }
  // }
  const [books, setBooks] = useState([])

  useEffect(() => {
    // Define an async function
    
    async function componentDidMount(){
    try{
     let BookData = await axios.get("https://localhost:3001/books");
     console.log(BookData.data)
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





  /* TODO: Make a GET request to your API to fetch all the books from the database  */



  /* TODO: render all the books in a Carousel */

  return (
    <>
    
      {books.length != 0 ? (
        <div style={{ display:"flex", justifyContent:"center",height:"100vh",alignItem:"center"}}>
          <div style={{ width:"900px"}} id="BestBooksDiv">
          
          <Carousel fade style={{width:"900px", height:"300px", border:"1px solid black", background:"black", color:"white",textAlign:"center"}}>
        {books.data.map(arr =>{
        <Carousel.Item>
            <h2>{arr.Title}</h2>
            <p>{arr.description}</p>
            <span>{arr.status}</span>
        </Carousel.Item>
          })
        }
  </Carousel>
      </div>
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
