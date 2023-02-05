import "./BasicInfo.css";
import LeftSideCard from "../UI/LeftSideCard";
import RightSideCard from "../UI/RightSideCard";
function BasicInfo() {
  return (
    <div>
      <LeftSideCard>
        <text className="info">პირადი ინფო</text>
        <text className="page_num">1/3</text>
        <span className="line3"></span>
        <form>
        <div className="input_div1">
          <text className="name">სახელი</text>
          <input type="text" className="input_first" placeholder="ანზორ"></input>
          <text className="note">მინიმუმ 2 ქართული ასო</text>
        </div>
        <div className="input_div2">
          <text className="name">გვარი</text>
          <input type="text" className="input_first" placeholder="მუმლაძე"></input>
          <text className="note">მინიმუმ 2 ქართული ასო</text>
        </div>
        <text className="photo_text">პირადი ფოტოს ატვირთვა</text>
        <button className="photo_button">ატვირთვა</button>
        <div className="input_div3">
          <text className="label">ჩემ შესახებ (არასავალდებულო)</text>
          <textarea className="input_about" placeholder="ზოგადი ინფო ჩემს შესახებ"></textarea>
        </div>
        <div className="input_div4">
          <text className="label">ელ.ფოსტა</text>
          <input type="text" className="input__" placeholder="anzor666@redberry.ge"></input>
          <text className="note2">უნდა მთავრდებოდეს @redberry.ge-ით</text>
        </div>
        <div className="input_div5">
          <text className="label">მობილურის ნომერი</text>
          <input type="text" className="input__" placeholder="+995 551 12 34 56"></input>
          <text className="note2">უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</text>
        </div>
        <button className="next_button">შემდეგი</button>
        </form>
      </LeftSideCard>
      <RightSideCard>
      <span className="star"></span>
      </RightSideCard>
    </div>
  );
}

export default BasicInfo;
