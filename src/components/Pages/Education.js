import LeftSideCard from "../UI/LeftSideCard";
import "./Education.css";
/*import FormResponse from "./Resume/FormResponse";*/
import Resume from "./Resume/Resume";

function Education({
  enteredUni,
  setEnteredUni,
  enteredDegree,
  setEnteredDegree,
  enteredGraduation,
  setEnteredGraduation,
  enteredUniAbout,
  setEnteredUniAbout,}){

    const uniHandler = (event) => {
      setEnteredUni(event.target.value);
    };
    const degreeHandler = (event) => {
      setEnteredDegree(event.target.value);
    };
    const graduationHandler = (event) => {
      setEnteredGraduation(event.target.value);
    };
    const uniAboutHandler = (event) => {
      setEnteredUniAbout(event.target.value);
    };




    return(<div>
      <LeftSideCard>
        <div className="info">განათლება</div>
        <div className="page_num">3/3</div>
        <span className="line1"></span>
        <form>
        <div className="input_1div">
          <div className="label">სასწავლებელი</div>
          <input onChange={uniHandler} value={enteredUni} type="div" className="input_big" placeholder="დეველოპერი, დიზაინერი, ა.შ."></input>
          <div className="note2">მინიმუმ 2 სიმბოლო</div>
        </div>
        <div className="input_2div">
          <div className="label_small">ხარისხი</div>
          <input onChange={degreeHandler} value={enteredDegree} type="dropdown" className="input_small" placeholder="აირჩიეთ ხარისხი"></input>
        </div>
        <div className="input_3div">
          <div className="label_small">დამთავრების რიცხვი</div>
          <input onChange={graduationHandler} value={enteredGraduation} type="date" className="input_small" placeholder="მუმლაძე"></input>
        </div>
        <div className="input_4div">
          <div className="label">აღწერა</div>
          <textarea onChange={uniAboutHandler} value={enteredUniAbout} className="input_about" placeholder="განათლების აღწერა"></textarea>
        </div>
        <span className="line_edu"></span>
        <button className="more_education">სხვა სასწავლებლის დამატება</button>
        </form>
        </LeftSideCard>
        <Resume 
        enteredUni={enteredUni}
        enteredDegree={enteredDegree}
        enteredGraduation={enteredGraduation}
        enteredUniAbout={enteredUniAbout}
        />
        </div>)
}

export default Education;