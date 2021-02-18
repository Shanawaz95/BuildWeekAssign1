import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/less/font-awesome.less";
import Header from "./components/landing/Header";
import QuestionType from "./components/common/QuestionType";
import AddButton from "./components/common/AddButton";

function App() {
  return (
    <div>
      <Header></Header>
      <QuestionType></QuestionType>
    </div>
  );
}

export default App;
