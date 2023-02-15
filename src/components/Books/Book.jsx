/* eslint-disable */
import "./Book.css";
import { useState, useEffect } from "react";

function Book(props) {
  const [book, setBook] = useState(false);
  const [isShown, setIsShown] = useState(true);

  const filteredValue = props.filterValue;

  useEffect(() => {
    console.log(filteredValue);
    setIsShown(props.title.toLowerCase().includes(filteredValue.toLowerCase()));
  }, [filteredValue, props.title]);

  // truncate the title and the description so they dont overflow
  const truncator = (str) => {
    if (str === props.description) {
      return (str = str.substring(0, 50) + "...");
    } else if (str.length > 15) {
      return (str = str.substring(0, 15) + "...");
    } else {
      return str;
    }
  };

  const expandBook = () => {
    setBook(!book);
  };

  return (
    <>
      {isShown && (
        <div
          onClick={expandBook}
          className={book ? "book-expanded" : "book"}
          id="main-book"
        >
          <div className={book ? "book-data-1-expanded" : "book-data-1"}>
            <h4>{book ? props.title : truncator(props.title)}</h4>
            <p> by {props.author} </p>
          </div>
          <div className={book ? "book-data-2-expanded" : "book-data-2"}>
            <p>Start date: {props.start}</p>
            <p>Finish Date: Ongoing</p>
          </div>
          <div className={book ? "book-data-3-expanded" : "book-data-3"}>
            {book ? props.description : truncator(props.description)}
          </div>
          <div className={book ? "book-data-4-expanded" : "book-data-4"}>
            <p>Page 254 of {props.pages} </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Book;
