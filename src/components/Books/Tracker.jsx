import "./Tracker.css";

export default function Tracker(props) {
  const pagesRead = props.bookTitles.reduce(
    (pages, currPages) =>
      parseInt(localStorage.getItem(props.bookTitles[pages])) +
      parseInt(localStorage.getItem(currPages))
  );

  console.log(pagesRead);
  return (
    <div className="tracker">
      <p>Total money spent: {props.totalSpend}$</p>
      <p>Total pages read: {pagesRead / 2}</p>
    </div>
  );
}
