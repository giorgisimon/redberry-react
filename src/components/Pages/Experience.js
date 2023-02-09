import LeftSideCard from "../UI/LeftSideCard";
import "./Experience.css";
/*import FormResponse from "./Resume/FormResponse";*/
import Resume from "./Resume/Resume";

function Experience({
  setEnteredPosition,
  enteredPosition,
  enteredEmployer,
  setEnteredEmployer,
  enteredStartDate,
  setEnteredStartDate,
  enteredEndDate,
  setEnteredEndDate,
  enteredExpAbout,
  setEnteredExpAbout,
}) {
  const positionHandler = (event) => {
    setEnteredPosition(event.target.value);
  };

  const employerHandler = (event) =>{
    setEnteredEmployer (event.target.value);
  }
  const startDateHandler = (event) =>{
    setEnteredStartDate (event.target.value);
  }
  const endDateHandler = (event) =>{
    setEnteredEndDate (event.target.value);
  }
  const expAboutHandler = (event) =>{
    setEnteredExpAbout (event.target.value);
  }

  return (
    <div>
      <LeftSideCard>
        <div className="info">გამოცდილება</div>
        <div className="page_num">2/3</div>
        <span className="line1"></span>
        <form>
          <div className="input1_div">
            <div className="label">თანამდებობა</div>
            <input
              onChange={positionHandler}
              value={enteredPosition}
              type="div"
              className="input_big"
              placeholder="დეველოპერი, დიზაინერი, ა.შ."
            ></input>
            <div className="note2">მინიმუმ 2 სიმბოლო</div>
          </div>
          <div className="input2_div">
            <div className="label">დამსაქმებელი</div>
            <input
              onChange={employerHandler} value={enteredEmployer} type="div"
              className="input_big"
              placeholder="დამსაქმებელი"
            ></input>
            <div className="note2">მინიმუმ 2 სიმბოლო</div>
          </div>
          <div className="input3_div">
            <div className="label_small">დაწყების რიცხვი</div>
            <input
              onChange={startDateHandler} value={enteredStartDate} type="date"
              className="input_small"
              placeholder="ანზორ"
            ></input>
          </div>
          <div className="input4_div">
            <div className="label_small">დამთავრების რიცხვი</div>
            <input
              onChange={endDateHandler} value={enteredEndDate} type="date"
              className="input_small"
              placeholder="მუმლაძე"
            ></input>
          </div>
          <div className="input5_div">
            <div className="label">აღწერა</div>
            <textarea
              onChange={expAboutHandler} value={enteredExpAbout} className="input_about"
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            ></textarea>
          </div>
          <span className="line2"></span>
          <button className="more_experience">
            მეტი გამოცდილების დამატება
          </button>
        </form>
      </LeftSideCard>
      <Resume enteredPosition={enteredPosition}
      enteredEmployer={enteredEmployer}
      enteredStartDate={enteredStartDate}
      enteredEndDate={enteredEndDate}
      enteredExpAbout={enteredExpAbout} />
    </div>
  );
}

export default Experience;
