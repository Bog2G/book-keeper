import "./App.css";
import Books from "./components/Books/Books";
import NewBook from "./components/NewBook/NewBook";
function App() {
  const books = [
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

  const addBookHandler = (newBook) => {
    console.log("In App.js");
    console.log(newBook);
  };

  return (
    <div className="main">
      <NewBook onNewBook={addBookHandler} />
      <Books data={books} />
    </div>
  );
}

export default App;
