import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/less/font-awesome.less";
import Header from "./components/landing/Header";
import LandingBtnHolder from "./components/holder/LandingBtnHolder";
import Result from "./components/result/Result";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [inpVal, setInpVal] = useState([
    { id: "", question: "", quesType: "", answers: [""] },
  ]);
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route path="/" exact>
          <LandingBtnHolder
            inpVal={inpVal}
            setInpVal={setInpVal}
          ></LandingBtnHolder>
        </Route>

        <Route path="/result" exact>
          <Result inpVal={inpVal}></Result>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
