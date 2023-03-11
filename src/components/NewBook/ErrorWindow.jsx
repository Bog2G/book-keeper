import "./ErrorWindow.css";
import { ErrorContext } from "../../App";
import { useContext } from "react";

export default function ErrorWindow() {
  const { errorState, setErrorState } = useContext(ErrorContext);
  return (
    <div className="error-window">
      <p className="error-text"> Please enter valid (non-empty) value!</p>
      <button className="confirm" onClick={() => setErrorState(false)}>
        Okay
      </button>
    </div>
  );
}
