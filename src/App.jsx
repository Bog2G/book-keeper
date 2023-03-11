import "./App.css";
import Books from "./components/Books/Books";
import NewBook from "./components/NewBook/NewBook";
import Navbar from "./components/Nav/Navbar";
import ErrorWindow from "./components/NewBook/ErrorWindow";
import { useState, createContext } from "react";

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

export const ErrorContext = createContext(null);

function App() {
  const [books, setBooks] = useState(DUMMY_BOOKS);
  const [errorState, setErrorState] = useState(false);

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
      <ErrorContext.Provider value={{ errorState, setErrorState }}>
        <div
          className="main"
          style={{ filter: errorState ? "blur(1.5rem)" : "" }}
        >
          <Navbar data={books} />
          <NewBook onNewBook={addBookHandler} />
          <Books data={books} count={books.length} />
          {errorState && <ErrorWindow />}
        </div>
      </ErrorContext.Provider>
    </>
  );
}

export default App;
