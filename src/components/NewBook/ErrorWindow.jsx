import "./ErrorWindow.css";
import { ErrorContext } from "../../App";
import { useContext } from "react";

export default function ErrorWindow(props) {
  const { errorState, setErrorState } = useContext(ErrorContext);
  return (
    <div className="error-window">
      <div className="error-header"></div>
      <p className="error-text"> Please enter valid (non-empty) values!</p>
      <button className="confirm" onClick={() => setErrorState(false)}>
        Okay
      </button>
    </div>
  );
}
