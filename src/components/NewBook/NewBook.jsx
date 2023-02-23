import "./NewBook.css";
import BookForm from "./BookForm";
import { useState } from "react";

export default function NewBook(props) {
  const [isActive, setIsActive] = useState(false);
  const saveBookFunc = (enteredBookData) => {
    const bookData = {
      ...enteredBookData,
      id: Math.random().toString(),
      startDate: new Date().toLocaleString("en-GB").slice(0, 10),
    };
    props.onNewBook(bookData);
    console.log(bookData);
  };

  // the oneSaveBook points to a function that executes when the prop is called and given the needed params
  return (
    <div className={isActive ? "newBook" : "newBook-hidden"}>
      {isActive ? (
        <BookForm onSaveBook={saveBookFunc} active={setIsActive} />
      ) : (
        <button className="new-book-button" onClick={() => setIsActive(true)}>
          Add book
        </button>
      )}
    </div>
  );
}
