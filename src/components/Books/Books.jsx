import Book from "./Book";
import "./Books.css";
import Card from "../Card";

export default function Books(props) {
  return (
    <Card>
      <Book
        title={props.data[0].title}
        author={props.data[0].author}
        start={props.data[0].startDate}
      />
      <Book
        title={props.data[1].title}
        author={props.data[1].author}
        start={props.data[1].startDate}
      />
      <Book
        title={props.data[2].title}
        author={props.data[2].author}
        start={props.data[2].startDate}
      />
    </Card>
  );
}
