import "./Book.css";
import { useState } from "react";

function Book(props) {
  const truncator = (str) => {
    if (str === props.description) {
      return (str = str.substring(0, 50) + "...");
    } else if (str.length > 15) {
      return (str = str.substring(0, 15) + "...");
    } else {
      return str;
    }
  };
  const [book, setBook] = useState(false);

  const expandBook = () => {
    setBook(!book);
  };
  return (
    <div onClick={expandBook} className={book ? "book-expanded" : "book"}>
      <div className={book ? "book-data-1-expanded" : "book-data-1"}>
        <h4>{book ? props.title : truncator(props.title)}</h4>
        <p> by {props.author} </p>
      </div>
      <div className={book ? "book-data-2-expanded" : "book-data-2"}>
        <p>Start date: {props.start}</p>
        <p>Finish Date: 19.09.2000</p>
      </div>
      <div className={book ? "book-data-3-expanded" : "book-data-3"}>
        {book ? props.description : truncator(props.description)}
      </div>
      <div className={book ? "book-data-4-expanded" : "book-data-4"}>
        <p>Page 254 of 485 </p>
      </div>
    </div>
  );
}

export default Book;
