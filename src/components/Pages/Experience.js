import LeftSideCard from "../UI/LeftSideCard";
import RightSideCard from "../UI/RightSideCard";
import { useState } from "react";
import "./Experience.css";
import React from "react";

function Experience() {
  const[enteredPosition, setEnteredPosition]=useState('');
  const[enteredEmployer, setEnteredEmployer]=useState('');
  const[enteredStartDate, setEnteredStartDate]=useState('');
  const[enteredEndDate, setEnteredEndDate]=useState('');
  const[enteredAbout, setEnteredAbout]=useState('');
  const positionHandler = (event) =>{
    setEnteredPosition (event.target.value);
  }
  const employerHandler = (event) =>{
    setEnteredEmployer (event.target.value);
  }
  const startDateHandler = (event) =>{
    setEnteredStartDate (event.target.value);
  }
  const endDateHandler = (event) =>{
    setEnteredEndDate (event.target.value);
  }
  const aboutHandler = (event) =>{
    setEnteredAbout (event.target.value);
  }
  return (
    <div>
      <LeftSideCard>
        <text className="info">გამოცდილება</text>
        <text className="page_num">2/3</text>
        <span className="line1"></span>
        <form>
        <div className="input1_div">
          <text className="label">თანამდებობა</text>
          <input onChange={positionHandler} type="text" className="input_big" placeholder="დეველოპერი, დიზაინერი, ა.შ."></input>
          <text className="note2">მინიმუმ 2 სიმბოლო</text>
        </div>
        <div className="input2_div">
          <text className="label">დამსაქმებელი</text>
          <input onChange={employerHandler} type="text" className="input_big" placeholder="დამსაქმებელი"></input>
          <text className="note2">მინიმუმ 2 სიმბოლო</text>
        </div>
        <div className="input3_div">
          <text className="label_small">დაწყების რიცხვი</text>
          <input onChange={startDateHandler} type="date" className="input_small" placeholder="ანზორ"></input>
        </div>
        <div className="input4_div">
          <text className="label_small">დამთავრების რიცხვი</text>
          <input onChange={endDateHandler} type="date" className="input_small" placeholder="მუმლაძე"></input>
        </div>
        <div className="input5_div">
          <text className="label">აღწერა</text>
          <textarea onChange={aboutHandler} className="input_about" placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"></textarea>
        </div>
        <span className="line2"></span>
        <button className="more_experience">მეტი გამოცდილების დამატება</button>
        <button className="next_button">შემდეგი</button>
        <button className="back_button">უკან</button>
        </form>
      </LeftSideCard>
      <RightSideCard>
      <span className="star"></span>
      <text className="f_name">ანზორ მუმლაძე</text>
      <text className="vector1">@</text>
      <text className="mail">imail@gmail.com</text>
      <span className="vector2"></span>
      <text className="phone">+995 599 55 55 55</text>
      <text className="about_me">ჩემს შესახებ</text>
      <text className="about_txt">ძალიან მიყვარს დიზაინის კეთება. 
      დილით ადრე რომ ავდგები გამამხნევებელი ვარჯიშების 
      მაგიერ დიზაინს ვაკეთებ. </text>
      </RightSideCard>
    </div>
  );
}

export default Experience;
