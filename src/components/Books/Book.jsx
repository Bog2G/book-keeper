import "./Book.css";
import { useState } from "react";

function Book(props) {
  const [book, setBook] = useState(false);

  const expandBook = () => {
    setBook(!book);
  };
  return (
    <div onClick={expandBook} className={book ? "book-expanded" : "book"}>
      <div className={book ? "book-data-1-expanded" : "book-data-1"}>
        <h4>{props.title}</h4>
        <p> by {props.author} </p>
      </div>
      <div className={book ? "book-data-2-expanded" : "book-data-2"}>
        <p>Start date: {props.start}</p>
        <p>Finish Date: 19.09.2000</p>
      </div>
      <div className={book ? "book-data-3-expanded" : "book-data-3"}>
        A family heads to an isolated hotel for the winter where a sinister
        presence . A family heads to familifwfegef
      </div>
      <div className={book ? "book-data-4-expanded" : "book-data-4"}>
        <p>Page 254 of 485 </p>
      </div>
    </div>
  );
}

export default Book;
