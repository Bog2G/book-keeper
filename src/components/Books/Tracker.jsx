import "./Tracker.css";

export default function Tracker(props) {
  return (
    <div className="tracker">
      <p>Total money spent: {props.totalSpend}$</p>
      <p>Total pages read: {props.allPages / 2}</p>
    </div>
  );
}
