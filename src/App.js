import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/less/font-awesome.less";
import Header from "./components/landing/Header";
import QuestionType from "./components/common/QuestionType";
import CreateSurveyBtn from "./components/landing/CreateSurveyBtn";
import TakeSurveyBtn from "./components/landing/TakeSurveyBtn";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <Header></Header>
      <CreateSurveyBtn click={isClicked} set={setIsClicked}></CreateSurveyBtn>
      <TakeSurveyBtn click={isClicked}></TakeSurveyBtn>
    </div>
  );
}

export default App;
