import { useState } from "react";
import "./App.css";

function App() {
  const [score, setscore] = useState("");
  const [comment, sercomment] = useState("");

  const handleevent = (e) => {
    console.log("form is submitted");
    if (Number(score) <= 5) {
      alert("expalin why");
    }
    if (comment.length <= 10) {
      alert("explain more details");
    }
    e.preventDefault();
  };

  return (
    <div classscore="App">
      <form onSubmit={handleevent}>
        <div>
          <label htmlFor="score">score : {score}</label>
          <input
            id="score"
            type="range"
            min="0"
            max="10"
            value={score}
            onChange={(e) => setscore(e.target.value)}
          ></input>
        </div>
        <label>comment</label>
        <input
          value={comment}
          onChange={(e) => sercomment(e.target.value)}
        ></input>
        <button> submit</button>
      </form>
    </div>
  );
}

export default App;
