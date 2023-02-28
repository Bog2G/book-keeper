import "./App.css";
import Books from "./components/Books/Books";
import NewBook from "./components/NewBook/NewBook";
import Navbar from "./components/Nav/Navbar";
import { useState } from "react";

// this is an hard coded array of book objects to initialize the state
const DUMMY_BOOKS = [
  {
    id: 1,
    title: "The Shining",
    author: "Stephen King",
    startDate: new Date().toLocaleString("en-GB").slice(0, 10),
    description:
      "A family heads to an isolated hotel for the winter where a sinister presence. A family heads to familifwfegef",
    pages: 485,
    price: 14.99,
  },
  {
    id: 2,
    title: "Lord of the Rings",
    author: "J.R.R. Tolkien",
    startDate: new Date().toLocaleString("en-GB").slice(0, 10),
    description:
      "A family heads to an isolated hotel for the winter where a sinister presence. A family heads to familifwfegef",
    pages: 485,
    price: 14.99,
  },
  {
    id: 3,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    startDate: new Date().toLocaleString("en-GB").slice(0, 10),
    description:
      "A family heads to an isolated hotel for the winter where a sinister presence. A family heads to familifwfegef",
    pages: 485,
    price: 14.99,
  },
];

function App() {
  const [books, setBooks] = useState(DUMMY_BOOKS);

  const addBookHandler = (newBook) => {
    // here i get the new book object and append it in the first position of the books array
    // i use the prevBooks instead of just spreading the books object so it always gives me the last state
    setBooks((prevBooks) => {
      console.log(newBook);
      return [...prevBooks, newBook];
    });
  };

  return (
    <>
      <Navbar data={books} />
      <div className="main">
        <NewBook onNewBook={addBookHandler} />
        <Books data={books} count={books.length} />
      </div>
    </>
  );
}

export default App;
