/* eslint-disable */
import "./Book.css";
import { useState, useEffect } from "react";

function Book(props) {
  const [book, setBook] = useState(false);
  const [currPage, setCurrPage] = useState(
    props.title in localStorage ? localStorage.getItem(`${props.title}`) : "1"
  );
  const [isFinished, setIsFinished] = useState(false);
  const [finishedText, setFinishedText] = useState({
    textContent: "Still Reading",
    finishDate: "Ongoing",
  });
  const [deleted, setDeleted] = useState("");

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
      parseInt(e.currentTarget.textContent) <= parseInt(props.pages) &&
      parseInt(e.currentTarget.textContent) >= 0
    ) {
      setCurrPage(e.currentTarget.textContent);
      localStorage.setItem(`${props.title}`, e.currentTarget.textContent);
      props.getPrompt(false);
    } else {
      props.getPrompt(true);
    }
  };

  useEffect(() => {
    props.getDeletedBook(deleted);
  }, [deleted]);

  useEffect(() => {
    if (isFinished) {
      setFinishedText({
        textContent: "Still Reading",
        finishDate: new Date().toLocaleString("en-GB").slice(0, 10),
      });
    } else {
      setFinishedText({
        textContent: "Still Reading",
        finishDate: "Ongoing",
      });
    }
  }, [isFinished]);

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
          <p>Start Date: {props.start}</p>
          <p>End Date: {finishedText.finishDate}</p>
        </div>
        <div className={book ? "book-data-3-expanded" : "book-data-3"}>
          {book ? props.description : truncator(props.description)}
        </div>
        <div className={book ? "book-data-4-expanded" : "book-data-4"}>
          <div className="delete" onClick={() => setDeleted(props.title)}>
            x
          </div>
          <p className="status">
            Status:{" "}
            <span
              onClick={() => setIsFinished(!isFinished)}
              style={{
                textDecoration: isFinished ? "line-through" : "none",
              }}
            >
              {" "}
              {finishedText.textContent}{" "}
            </span>
          </p>
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
        </div>
      </div>
    </>
  );
}

export default Book;
