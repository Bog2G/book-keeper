import "./Book.css";

function Book(props) {
  return (
    <div className="book">
      <div className="book-data-1">
        <h4>{props.title}</h4>
        <p> by {props.author} </p>
      </div>
      <div className="book-data-2">
        <p>Start date: {props.start}</p>
        <p>Finish Date: 19.09.2000</p>
      </div>
      <div className="book-data-3">
        A story about a main going insane from isolation
      </div>
      <div className="book-data-4">
        <p>Page .... of ....</p>
      </div>
    </div>
  );
}

export default Book;
