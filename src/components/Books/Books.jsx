import "./Books.css";
import Card from "../Card";
import BookFilter from "./BookFilter";
import { useState } from "react";
import BookList from "./BookList";

export default function Books(props) {
  // here used a state hook to keep track of the value in the filter bar and pass it down to the book component
  // also the parent component is controlling the data in the child component so that is called a controlled component
  const [filteredValue, setFilteredValue] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [prompt, setPrompt] = useState(false);

  // <Tracker totalSpend={TotalSpend} allPages={totalPages} />
  console.log(`Total read pages ${totalPages}`);

  const filteredBooks = props.data.filter((book) => {
    return book.title.toLowerCase().includes(filteredValue.toLowerCase());
  });

  return (
    <Card>
      {prompt && <p className="valid-number"> Please enter a valid number!</p>}
      <BookFilter setFilteredValue={setFilteredValue} />
      <BookList
        filteredBooks={filteredBooks}
        setPages={setTotalPages}
        setPrompt={setPrompt}
      />
    </Card>
  );
}
