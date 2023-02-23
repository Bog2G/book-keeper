/* eslint-disable */
import "./Book.css";
import { useState, useEffect } from "react";

function Book(props) {
  const [book, setBook] = useState(false);
  const [currPage, setCurrPage] = useState(
    props.title in localStorage ? localStorage.getItem(`${props.title}`) : "1"
  );
  const [prompt, setPrompt] = useState(false);

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

  const handlePageChange = (e) => {
    if (
      !isNaN(e.currentTarget.textContent) &&
      parseInt(e.currentTarget.textContent) <= parseInt(props.pages)
    ) {
      setCurrPage(e.currentTarget.textContent);
      localStorage.setItem(`${props.title}`, e.currentTarget.textContent);
      setPrompt(false);
    } else {
      setPrompt(true);
    }
  };

  return (
    <>
      <div className={book ? "book-expanded" : "book"}>
        <div
          className={book ? "click-area-expanded" : "click-area"}
          onClick={expandBook}
        />
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
          <p>
            Page{" "}
            <span
              className="page-num"
              contentEditable="true"
              suppressContentEditableWarning="true"
              onInput={handlePageChange}
            >
              {currPage}
            </span>{" "}
            of {props.pages}{" "}
          </p>
          {prompt && (
            <p className="valid-number"> Please enter a valid number!</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Book;
