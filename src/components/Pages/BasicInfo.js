import "./BasicInfo.css";
import LeftSideCard from "../UI/LeftSideCard";
/*import FormResponse from "./Resume/FormResponse";*/
import Resume from "./Resume/Resume";

function BasicInfo({
  enteredName,
  setEnteredName,
  enteredLastName,
  setEnteredLastName,
  enteredAbout,
  setEnteredAbout,
  enteredMail,
  setEnteredMail,
  enteredNumber,
  setEnteredNumber}
) {
  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const lastNameHandler = (event) => {
    setEnteredLastName(event.target.value);
  };
  const aboutHandler = (event) => {
    setEnteredAbout(event.target.value);
  };
  const mailHandler = (event) => {
    setEnteredMail(event.target.value);
  };
  const numberHandler = (event) => {
    setEnteredNumber(event.target.value);
  };

  return (
    <div>
      <LeftSideCard>
        <div className="info">პირადი ინფო</div>
        <div className="page_num">1/3</div>
        <span className="line3"></span>
        <form>
          <div className="input_div1">
            <div className="name">სახელი</div>
            <input
              onChange={nameHandler} value={enteredName} type="div"
              className="input_first"
              placeholder="ანზორ"
            ></input>
            <div className="note">მინიმუმ 2 ქართული ასო</div>
          </div>
          <div className="input_div2">
            <div className="name">გვარი</div>
            <input
              onChange={lastNameHandler} value={enteredLastName} type="div"
              className="input_first"
              placeholder="მუმლაძე"
            ></input>
            <div className="note">მინიმუმ 2 ქართული ასო</div>
          </div>
          <div className="photo_text">პირადი ფოტოს ატვირთვა</div>
          <button className="photo_button">ატვირთვა</button>
          <div className="input_div3">
            <div className="label">ჩემ შესახებ (არასავალდებულო)</div>
            <textarea
               onChange={aboutHandler} value={enteredAbout} className="input_about"
              placeholder="ზოგადი ინფო ჩემს შესახებ"
            ></textarea>
          </div>
          <div className="input_div4">
            <div className="label">ელ.ფოსტა</div>
            <input
              onChange={mailHandler} value={enteredMail} type="div"
              className="input__"
              placeholder="anzor666@redberry.ge"
            ></input>
            <div className="note2">უნდა მთავრდებოდეს @redberry.ge-ით</div>
          </div>
          <div className="input_div5">
            <div className="label">მობილურის ნომერი</div>
            <input
              onChange={numberHandler} value={enteredNumber}  type="div"
              className="input__"
              placeholder="+995 551 12 34 56"
            ></input>
            <div className="note2">
              უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
            </div>
          </div>
        </form>
      </LeftSideCard>
      <Resume enteredName={enteredName}
      enteredLastName={enteredLastName}
      enteredAbout={enteredAbout}
      enteredMail={enteredMail}
      enteredNumber={enteredNumber}
      />
    </div>
  );
}

export default BasicInfo;
