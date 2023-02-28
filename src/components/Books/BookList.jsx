import Book from "./Book";
import "./BookList.css";

export default function BookList(props) {
  const handlePrompt = (isPrompt) => {
    props.setPrompt(isPrompt);
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
          getPrompt={handlePrompt}
        />
      ))}
    </>
  );
}
