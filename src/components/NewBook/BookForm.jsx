import "./BookForm.css";
import { useState } from "react";

export default function BookForm() {
  // instead of writing multiple states i store every value i need for my inputs in an object and pass it to the state hook
  const [userInput, setUserInput] = useState({
    title: "",
    description: "",
    author: "",
    pages: "",
    price: "",
  });

  // here i copy the other value from the object so they dont get lost and i overwrite the value that im listening for
  // and i pass the setValue function a function so im sure im suing the latest state value and not an outdated one
  const getTitle = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };

  const getDescription = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, description: e.target.value };
    });
  };

  const getAuthor = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, author: e.target.value };
    });
  };

  const getPages = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, pages: e.target.value };
    });
  };

  const getPrice = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, price: e.target.value };
    });
  };

  // this gets the data writte in the input fields and submits when the submit button is hit
  const submitHandler = (e) => {
    // we prevent the form from directly submitting and reloading the page
    e.preventDefault();

    const bookData = {
      ...userInput,
    };

    console.log(bookData);
    setUserInput({
      title: "",
      description: "",
      author: "",
      pages: "",
      price: "",
    });
  };

  return (
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
          />
        </div>
      </div>
      <div className="newBook-action">
        <button type="submit">Add Book</button>
      </div>
    </form>
  );
}
