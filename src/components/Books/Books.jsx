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
      <Book
        title={props.data[0].title}
        author={props.data[0].author}
        start={props.data[0].startDate}
        description={props.data[0].description}
        pages={props.data[0].pages}
        filterValue={filteredValue}
        getCount={(isShown) => handleBookCount(isShown)}
      />
      <Book
        title={props.data[1].title}
        author={props.data[1].author}
        start={props.data[1].startDate}
        description={props.data[1].description}
        pages={props.data[1].pages}
        filterValue={filteredValue}
        getCount={(isShown) => handleBookCount(isShown)}
      />
      <Book
        title={props.data[2].title}
        author={props.data[2].author}
        start={props.data[2].startDate}
        description={props.data[2].description}
        pages={props.data[2].pages}
        filterValue={filteredValue}
        getCount={(isShown) => handleBookCount(isShown)}
      />
    </Card>
  );
}
