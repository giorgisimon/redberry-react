import Form from "./Form";
import StartingPage from "./StartingPage";
import { useState } from "react";
import LeftSideCard from "../UI/LeftSideCard";
import "./Pages.css";

function Pages() {
  const [visible, notVisible] = useState(true);
  const [page, setPage] = useState(0);
  const DisplayPage = () => {
    if (page === 0) {
      return <StartingPage />;
    }
    if (page === 1) {
      return <Form />;
    }
  };
  const clickHandler = () => {
    setPage((currPage) => currPage + 1);
    notVisible((prev) => !prev);
  };

  return (
    <LeftSideCard>
      <body>{DisplayPage()}
      <div>{visible && (<button onClick={clickHandler} className="but_1">
          რეზიუმეს დამატება
        </button>)}</div>
      </body>
    </LeftSideCard>
  );
}

export default Pages;
