/* eslint-disable */
import "./Book.css";
import { useState, useEffect } from "react";

function Book(props) {
  const [book, setBook] = useState(false);
  const [isShown, setIsShown] = useState(true);
  const [currPage, setCurrPage] = useState(
    props.title === localStorage.getItem(`${props.title}`)
      ? "1"
      : localStorage.getItem(`${props.title}`)
  );
  const [prompt, setPrompt] = useState(false);

  const filteredValue = props.filterValue;

  // listen for changes to the filtered value or the title itself and update rerender the component with the desired functuion
  useEffect(() => {
    console.log(filteredValue);
    setIsShown(props.title.toLowerCase().includes(filteredValue.toLowerCase()));
  }, [filteredValue, props.title]);

  useEffect(() => {
    if (isShown) {
      props.getCount(true);
    } else {
      props.getCount(false);
    }
  }, [isShown]);

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
      e.currentTarget.textContent <= props.pages
    ) {
      setCurrPage(e.currentTarget.textContent);
      localStorage.setItem(`${props.title}`, e.currentTarget.textContent);
      setPrompt(false);
      console.log("It's a valid number");
    } else {
      setPrompt(true);
      console.log("Fuck you");
    }
  };

  return (
    <>
      {isShown && (
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
      )}
    </>
  );
}

export default Book;
