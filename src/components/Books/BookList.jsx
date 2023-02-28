import Book from "./Book";
import "./BookList.css";
import { useEffect } from "react";

export default function BookList(props) {
  let total = 0;
  const totalPages = (pages) => {
    total += Number(pages);
    props.setPages(total);
  };

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
        />
      ))}
    </>
  );
}
