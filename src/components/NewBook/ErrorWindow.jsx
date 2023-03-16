import ReactDOM from "react-dom";
import "./ErrorWindow.css";
import { ErrorContext } from "../../App";
import { useContext } from "react";

const ModalWind = (props) => {
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
};

export default function ErrorWindow(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalWind />,
        document.querySelector("#modal-root")
      )}
    </>
  );
}
