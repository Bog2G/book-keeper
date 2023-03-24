import "./Navbar.css";
import Tracker from "../Books/Tracker.jsx";

export default function Navbar(props) {
  // get the total price of all the books
  const totalSpend = props.data.reduce(
    (price, totalPrice) => price + Number(totalPrice.price),
    0
  );

  const bookTitles = props.data.map((book) => book.title);

  console.log(bookTitles);
  return (
    <div className="navbar">
      <Tracker totalSpend={totalSpend} bookTitles={bookTitles} />
    </div>
  );
}
