import "./App.css";
import Books from "./components/Books";

function App() {
  const books = [
    {
      id: 1,
      title: "The Shining",
      author: "Stephen King",
      startDate: new Date().toLocaleString("en-GB").slice(0, 10),
    },
    {
      id: 2,
      title: "Lord of the Rings",
      author: "J.R.R. Tolkien",
      startDate: new Date().toLocaleString("en-GB").slice(0, 10),
    },
    {
      id: 3,
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      startDate: new Date().toLocaleString("en-GB").slice(0, 10),
    },
  ];

  return (
    <div className="main">
      <Books data={books} />
    </div>
  );
}

export default App;