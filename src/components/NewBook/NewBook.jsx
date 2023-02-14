import "./NewBook.css";
import BookForm from "./BookForm";

export default function NewBook(props) {
  const saveBookFunc = (enteredBookData) => {
    const bookData = {
      ...enteredBookData,
      id: Math.random().toString(),
    };
    props.onNewBook(bookData);
    console.log(bookData);
  };

  // the oneSaveBook points to a function that executes when the prop is called and given the needed params
  return (
    <div className="newBook">
      <BookForm onSaveBook={saveBookFunc} />
    </div>
  );
}
