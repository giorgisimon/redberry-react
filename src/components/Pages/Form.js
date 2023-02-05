import {useState} from "react";
import StartingPage from "./StartingPage"
import BasicInfo from "./BasicInfo"
import Experience from "./Experience"
import Last from "./Last"
import "./Form.css"

function Form() {
  const[page, setPage] = useState(0)
  const [visible1, notVisible1] = useState(false);
    const DisplayPage = () =>{
    if(page===0){
      return <BasicInfo />
    }
    if(page===1){
      return <Experience />
      
    }
    if(page===2){
      return <Last />
    }
  }
  const backHandler = () =>{
    setPage((currPage)=>currPage-1);
    if(count<3){notVisible1((prev) => !prev)};
  }
  let count=0;
  const nextHandler = () => {
    count++;
    setPage((currPage)=>currPage+1);
    if(count<3){notVisible1((prev) => !prev)};
  };
  
  return (
    <div className="form">
      <div className="form_container">
      <header>
      </header>
      <body>{DisplayPage()}</body>
      <footer>
      {visible1 && (<button className="back_button"
        onClick={backHandler}>უკან</button>)}
        <button className="next_button"
        disabled={page===2}
        onClick={nextHandler}>შემდეგი</button>
      </footer>
      </div>
    </div>
  );
}
export default Form;
