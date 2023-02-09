import { useState } from "react";
import BasicInfo from "./Pages/BasicInfo";
import Experience from "./Pages/Experience";
import Education from "./Pages/Education";
import "./Form.css";
import LeftSideCard from "./UI/LeftSideCard";
//import { useSessionStorageString } from "react-use-window-sessionstorage";

function Form() {
  const [enteredPosition, setEnteredPosition] = useState("");
  const [enteredEmployer, setEnteredEmployer] = useState("");
  const [enteredStartDate, setEnteredStartDate] = useState("");
  const [enteredEndDate, setEnteredEndDate] = useState("");
  const [enteredExpAbout, setEnteredExpAbout] = useState("");

  const [enteredName, setEnteredName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredAbout, setEnteredAbout] = useState("");
  const [enteredMail, setEnteredMail] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");

  const [enteredUni, setEnteredUni] = useState("");
  const [enteredDegree, setEnteredDegree] = useState("");
  const [enteredGraduation, setEnteredGraduation] = useState("");
  const [enteredUniAbout, setEnteredUniAbout] = useState("");

  const [page, setPage] = useState(0);

  const DisplayPage = () => {
    if (page === 0) {
      return (
        <div>
          <BasicInfo 
          enteredName={enteredName}
          setEnteredName={setEnteredName}
          enteredLastName={enteredLastName}
          setEnteredLastName={setEnteredLastName}
          enteredAbout={enteredAbout}
          setEnteredAbout={setEnteredAbout}
          enteredMail={enteredMail}
          setEnteredMail={setEnteredMail}
          enteredNumber={enteredNumber}
          setEnteredNumber={setEnteredNumber}
          />
        </div>
      );
    }
    if (page === 1) {
      return (
        <div>
          <Experience
            enteredPosition={enteredPosition}
            setEnteredPosition={setEnteredPosition}
            enteredEmployer={enteredEmployer}
            setEnteredEmployer={setEnteredEmployer}
            enteredStartDate={enteredStartDate}
            setEnteredStartDate={setEnteredStartDate}
            enteredEndDate={enteredEndDate}
            setEnteredEndDate={setEnteredEndDate}
            enteredExpAbout={enteredExpAbout}
            setEnteredExpAbout={setEnteredExpAbout}
          />
        </div>
      );
    }
    if (page === 2) {
      return (
        <div>
          <Education 
          enteredUni={enteredUni}
          setEnteredUni={setEnteredUni}
         enteredDegree={enteredDegree}
          setEnteredDegree={setEnteredDegree}
         enteredGraduation={enteredGraduation}
          setEnteredGraduation={setEnteredGraduation}
         enteredUniAbout={enteredUniAbout}
          setEnteredUniAbout={setEnteredUniAbout}
          />
        </div>
      );
    }
  };
  const backHandler = () => {
    setPage((currPage) => currPage - 1);
  };

  const nextHandler = () => {
    setPage((currPage) => currPage + 1);
  };

  const classHandler = () => {
    if (page === 0) {
      return "not_visible";
    }
    if (page === 1 || page === 2) {
      return "back_button";
    }
  };

  return (
    <LeftSideCard>
      {DisplayPage()}
      <footer>
        <button className={classHandler()} onClick={backHandler}>
          უკან
        </button>
        <button
          className="next_button"
          disabled={page === 2}
          onClick={nextHandler}
        >
          შემდეგი
        </button>
      </footer>
    </LeftSideCard>
  );
}
export default Form;
