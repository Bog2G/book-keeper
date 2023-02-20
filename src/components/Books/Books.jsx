import Book from "./Book";
import "./Books.css";
import Card from "../Card";
import BookFilter from "./BookFilter";
import { useState, useEffect } from "react";

export default function Books(props) {
  // here used a state hook to keep track of the value in the filter bar and pass it down to the book component
  // also the parent component is controlling the data in the child component so that is called a controlled component
  const [filteredValue, setFilteredValue] = useState("");
  const [shownNum, setShownNum] = useState(0);

  const handleBookCount = (isShown) => {
    if (isShown) {
      setShownNum((prevNum) => prevNum + 1);
    } else {
      setShownNum((prevNum) => prevNum - 1);
    }
  };

  useEffect(() => {
    if (shownNum === props.count) {
      console.log("Nopper");
    } else {
      console.log(shownNum);
    }
  }, [shownNum, props.count]);

  return (
    <Card>
      <BookFilter setFilteredValue={setFilteredValue} />
      {shownNum === props.count && (
        <p className="not-found">Nothing Found. Try again.</p>
      )}
      {props.data.map((book) => (
        <Book
          title={book.title}
          author={book.author}
          start={book.startDate}
          description={book.description}
          pages={book.pages}
          filterValue={filteredValue}
          getCount={(isShown) => handleBookCount(isShown)}
        />
      ))}
    </Card>
  );
}
