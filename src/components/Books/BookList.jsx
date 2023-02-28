import Book from "./Book";
import "./BookList.css";
import { useRef, useEffect } from "react";

export default function BookList(props) {
  const total = useRef(0);
  const totalPages = (pages) => {
    total.current += Number(pages);
  };

  const handlePrompt = (isPrompt) => {
    props.setPrompt(isPrompt);
  };

  useEffect(() => {
    props.setPages(total.current);
  }, [total.current]);

  if (props.filteredBooks.length === 0) {
    return <p className="not-found">Nothing Found. Try again.</p>;
  }
  return (
    <>
      {props.filteredBooks.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          start={book.startDate}
          description={book.description}
          pages={book.pages}
          getPages={totalPages}
          getPrompt={handlePrompt}
        />
      ))}
    </>
  );
}
