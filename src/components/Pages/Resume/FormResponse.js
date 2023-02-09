import RightSideCard from "../../UI/RightSideCard";
import "./FormResponse.css";

function FormResponse({
  enteredPosition,
  enteredEmployer,
  enteredStartDate,
  enteredEndDate,
  enteredExpAbout,
  enteredName,
  enteredLastName,
  enteredAbout,
  enteredMail,
  enteredNumber,
  enteredUni,
  enteredDegree,
  enteredGraduation,
  enteredUniAbout
}) {
  return (
    <div>
      <RightSideCard>
        <span className="star"></span>
        <div className="f_name">{enteredName} {enteredLastName}</div>
        <div className="vector1">@</div>
        <div className="mail">{enteredMail}</div>
        <span className="vector2"></span>
        <div className="phone">{enteredNumber}</div>
        <div className="about_me">ჩემ შესახებ</div>
        <div className="about_txt">{enteredAbout}
        </div>
        <span className="r1_line"></span>
        <div className="r_experience">გამოცდილება</div>
        <div className="r_experience_header">
          {enteredPosition} {enteredEmployer}
        </div>
        <div className="r_experience_date">
          {enteredStartDate} {enteredEndDate}
        </div>
        <div className="r_experience_text">{enteredExpAbout}</div>
        <span className="r2_line"></span>
        <div className="r_education">განათლება</div>
        <div className="r_education_header">{enteredUni} {enteredDegree}</div>
        <div className="r_education_date">{enteredGraduation}</div>
        <div className="r_education_text">{enteredUniAbout}</div>
      </RightSideCard>
    </div>
  );
}

export default FormResponse;
