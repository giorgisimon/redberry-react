import LeftSideCard from "../UI/LeftSideCard";
import "./Education.css";

function Education(){
    return(<div>
      <LeftSideCard>
        <text className="info">განათლება</text>
        <text className="page_num">3/3</text>
        <span className="line1"></span>
        <form>
        <div className="input_1div">
          <text className="label">სასწავლებელი</text>
          <input type="text" className="input_big" placeholder="დეველოპერი, დიზაინერი, ა.შ."></input>
          <text className="note2">მინიმუმ 2 სიმბოლო</text>
        </div>
        <div className="input_2div">
          <text className="label_small">ხარისხი</text>
          <input type="dropdown" className="input_small" placeholder="აირჩიეთ ხარისხი"></input>
        </div>
        <div className="input_3div">
          <text className="label_small">დამთავრების რიცხვი</text>
          <input type="date" className="input_small" placeholder="მუმლაძე"></input>
        </div>
        <div className="input_4div">
          <text className="label">აღწერა</text>
          <textarea className="input_about" placeholder="განათლების აღწერა"></textarea>
        </div>
        <span className="line_edu"></span>
        <button className="more_education">სხვა სასწავლებლის დამატება</button>
        </form>
        </LeftSideCard>
        </div>)
}

export default Education;