import "./Books.css";
import Card from "../Card";
import BookFilter from "./BookFilter";
import { useState } from "react";
import BookList from "./BookList";

export default function Books(props) {
  // here used a state hook to keep track of the value in the filter bar and pass it down to the book component
  // also the parent component is controlling the data in the child component so that is called a controlled component
  const [filteredValue, setFilteredValue] = useState("");
  const [prompt, setPrompt] = useState(false);
  const [deletedTitle, setDeletedTitle] = useState([]);

  const deletedBookHandler = (title) => {
    setDeletedTitle((prevState) => [...prevState, title]);
  };

  const filteredBooks = props.data.filter((book) => {
    return (
      book.title.toLowerCase().includes(filteredValue.toLowerCase()) &&
      !deletedTitle.includes(book.title)
    );
  });

  return (
    <Card>
      {prompt && <p className="valid-number"> Please enter a valid number!</p>}
      <BookFilter setFilteredValue={setFilteredValue} />
      <BookList
        filteredBooks={filteredBooks}
        setPrompt={setPrompt}
        getDeletedTitle={deletedBookHandler}
      />
    </Card>
  );
}
