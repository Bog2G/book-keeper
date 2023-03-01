import "./BookForm.css";
import { useState } from "react";

export default function BookForm(props) {
  // instead of writing multiple states i store every value i need for my inputs in an object and pass it to the state hook
  const [userInput, setUserInput] = useState({
    title: "",
    description: "",
    author: "",
    pages: "",
    price: "",
  });
  const [isValid, setIsValid] = useState({
    title: true,
    description: true,
    author: true,
    pages: true,
    price: true,
  });

  const resetValues = () => {
    setIsValid({
      title: true,
      description: true,
      author: true,
      pages: true,
      price: true,
    });
  };

  // here i copy the other value from the object so they dont get lost and i overwrite the value that im listening for
  // and i pass the setValue function a function so im sure im using the latest state value and not an outdated one
  const getTitle = (e) => {
    resetValues();
    setUserInput((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };

  const getDescription = (e) => {
    resetValues();
    setUserInput((prevState) => {
      return { ...prevState, description: e.target.value };
    });
  };

  const getAuthor = (e) => {
    resetValues();
    setUserInput((prevState) => {
      return { ...prevState, author: e.target.value };
    });
  };

  const getPages = (e) => {
    resetValues();
    if (Number(e.target.value) < 0) {
      setIsValid((prevState) => {
        return { ...prevState, pages: false };
      });
    }
    setUserInput((prevState) => {
      return { ...prevState, pages: e.target.value };
    });
  };

  const getPrice = (e) => {
    resetValues();
    if (Number(e.target.value) < 0) {
      setIsValid((prevState) => {
        return { ...prevState, price: false };
      });
    }
    setUserInput((prevState) => {
      return { ...prevState, price: e.target.value };
    });
  };

  // this gets the data writte in the input fields and submits when the submit button is hit
  const submitHandler = (e) => {
    // we prevent the form from directly submitting and reloading the page
    e.preventDefault();

    // copy the data into a temp object
    let newIsValid = { ...isValid };

    // check if any fields are empty
    for (let key in userInput) {
      if (userInput[key] === "") {
        newIsValid[key] = false;
      }
    }

    setIsValid(newIsValid);

    for (let key in isValid) {
      if (!newIsValid[key]) {
        return;
      }
    }

    const bookData = {
      ...userInput,
    };

    // this will pass the book data up to the parent component because when i call the prop, it points to a function that does something with the data that i give the prop
    props.onSaveBook(bookData);
    setUserInput({
      title: "",
      description: "",
      author: "",
      pages: "",
      price: "",
    });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-book-inputs">
          <div className="new-book-input">
            <label for="title">Book Title</label>
            <br />
            <input
              type="text"
              value={userInput.title}
              name="title"
              id="title"
              onChange={getTitle}
              style={{ borderColor: isValid.title ? "white" : "red" }}
            />
          </div>
          <div className="new-book-input">
            <label for="description">Book Description</label>
            <br />
            <textarea
              rows="5"
              cols="20"
              name="description"
              value={userInput.description}
              id="description"
              onChange={getDescription}
              style={{ borderColor: isValid.description ? "white" : "red" }}
            />
          </div>
          <div className="new-book-input">
            <label for="author">Author</label>
            <br />
            <input
              type="text"
              value={userInput.author}
              name="author"
              id="author"
              onChange={getAuthor}
              style={{ borderColor: isValid.author ? "white" : "red" }}
            />
          </div>
          <div className="new-book-input">
            <label for="pages">Pages</label>
            <br />
            <input
              type="number"
              value={userInput.pages}
              name="pages"
              id="pages"
              min="1"
              onChange={getPages}
              style={{ borderColor: isValid.pages ? "white" : "red" }}
            />
          </div>
          <div className="new-book-input">
            <label for="price">Price</label>
            <br />
            <input
              type="number"
              value={userInput.price}
              name="price"
              id="price"
              min="0"
              step="0.01"
              onChange={getPrice}
              style={{ borderColor: isValid.price ? "white" : "red" }}
            />
          </div>
        </div>
        <div className="newBook-action">
          <button className="cancel-btn" onClick={() => props.active(false)}>
            Cancel
          </button>
          <button type="submit">Add Book</button>
        </div>
      </form>
    </>
  );
}
